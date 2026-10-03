/**
 * POST /api/cat-lead
 *
 * Receives the CAT (Career Aptitude Test) lead form from <CatLeadModal> and
 * pushes it to ExtraaEdge's SaveRequest API. Running this on the server keeps
 * the ExtraaEdge AuthToken out of the browser.
 *
 * Field mapping, AuthToken and Source are as in the original PHP script, plus
 * Field2 = school Id (from the CAT form's school dropdown);
 * values are forwarded as received (no trimming or other changes).
 */

import { NextResponse } from "next/server";


const EXTRAAEDGE_URL = "https://thirdpartyapi.extraaedge.com/api/SaveRequest";
const AUTH_TOKEN = "applycbc_13-12-2024";
const SOURCE = "applycbc";

/**
 * ExtraaEdge values used when the form leaves these fields empty
 * (from the working PHP lead form: college-script.json, source.json, campaigns.json).
 */
const CAT_CRM_DEFAULTS = {
  college: "Yet to decide", // Course   - collegeId 9
  level: "22",              // Center   - levelId 22 "Yet to Decide"
  program: "104",           // Location - programId 104 "Yet to decide"
  source: "112",            // LeadSource   - 112 = "CAT"
  campaign: "2",            // leadCampaign - 2 = "Web Add Lead"
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_RE = /^[6-9]\d{9}$/;

/** Form keys accepted from the client (same names as the original PHP $_POST keys). */
const FORM_KEYS = [
  "firstName", "email", "mobile", "score", "remarks", "alternate_no", "gender",
  "Streams", "interested_college_university", "current_education_level",
  "preferred_city", "fee_budget", "father_occupation", "father_income",
  "cbc_membership", "school_name", "address", "state", "district", "city_name",
  "college", "level", "program", "source", "campaign", "website", "school_id",
] as const;

type FormKey = (typeof FORM_KEYS)[number];
type LeadForm = Record<FormKey, string>;

function clean(body: Record<string, unknown>): LeadForm {
  const out = {} as LeadForm;
  for (const key of FORM_KEYS) {
    const v = body[key];
    // Forward exactly what was submitted, like $_POST in the PHP script
    out[key] = typeof v === "string" || typeof v === "number" ? String(v) : "";
  }
  return out;
}

function validate(f: LeadForm) {
  const errors: Partial<Record<FormKey, string>> = {};
  if (f.firstName.trim().length < 2) errors.firstName = "Please enter your name";
  if (!EMAIL_RE.test(f.email)) errors.email = "Enter a valid email address";
  if (!MOBILE_RE.test(f.mobile)) errors.mobile = "Enter a valid 10-digit mobile number";
  if (f.alternate_no && !MOBILE_RE.test(f.alternate_no))
    errors.alternate_no = "Enter a valid 10-digit mobile number";
  if (!f.state) errors.state = "Please select your state";
  if (!f.city_name.trim()) errors.city_name = "Please enter your city";
  return errors;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: "Invalid request." }, { status: 400 });
  }

  const f = clean(body || {});

  // Apply CRM defaults for fields the form doesn't collect (source, campaign, etc.)
  // Without these, ExtraaEdge silently drops the lead.
  if (!f.source) f.source = CAT_CRM_DEFAULTS.source;
  if (!f.campaign) f.campaign = CAT_CRM_DEFAULTS.campaign;
  if (!f.college) f.college = CAT_CRM_DEFAULTS.college;
  if (!f.level) f.level = CAT_CRM_DEFAULTS.level;
  if (!f.program) f.program = CAT_CRM_DEFAULTS.program;

  // Honeypot: real visitors never fill the hidden "website" field
  if (f.website) return NextResponse.json({ success: true });

  const errors = validate(f);
  if (Object.keys(errors).length) {
    return NextResponse.json(
      { success: false, message: "Please correct the highlighted fields.", errors },
      { status: 422 }
    );
  }

  // Same field mapping as the original PHP script
  const payload = {
    AuthToken: AUTH_TOKEN,
    Source: SOURCE,
    FirstName: f.firstName,
    Email: f.email,
    MobileNumber: f.mobile,
    Field4: f.score,
    Remarks: f.remarks,
    AlternateMobileNumber: f.alternate_no,
    Gender: f.gender,
    Field5: f.Streams,
    Field6: f.interested_college_university,
    BatchApplied: f.current_education_level,
    Field7: f.preferred_city,
    Field8: f.fee_budget,
    Field3: f.father_occupation,
    Field9: f.father_income,
    Field1: f.cbc_membership,
    Field2: f.school_id, // school Id from Applycbc-Data.xlsx (empty when "Other")
    sourceTo: f.school_name,
    Address: f.address,
    States: f.state,
    Districts: f.district,
    City: f.city_name,
    Course: f.college,
    Center: f.level,
    Location: f.program,
    LeadSource: f.source,
    leadCampaign: f.campaign,
  };

  try {
    const res = await fetch(EXTRAAEDGE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(20000),
    });

    const text = await res.text();

    // Debug log: what was sent to ExtraaEdge and what it answered.
    // AuthToken is excluded for safety. ExtraaEdge may reply "Success" even
    // for invalid requests (it validates later), so cross-check with their logs.
    const { AuthToken: _hidden, ...logged } = payload;
    console.log("[cat-lead] sent to ExtraaEdge:", JSON.stringify(logged, null, 2));
    console.log("[cat-lead] ExtraaEdge reply:", res.status, text);
    let data: unknown = text;
    try {
      data = JSON.parse(text);
    } catch {
      /* ExtraaEdge returned plain text */
    }

    if (!res.ok) {
      console.error("ExtraaEdge error", res.status, text);
      return NextResponse.json(
        { success: false, message: "We couldn’t submit your details. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, httpCode: res.status, response: data });
  } catch (error) {
    console.error("ExtraaEdge request failed", error);
    return NextResponse.json(
      { success: false, message: "We couldn’t reach the server. Please try again." },
      { status: 502 }
    );
  }
}
