/**
 * POST /api/cat-lead
 *
 * Receives the CAT (Career Aptitude Test) lead form from <CatLeadModal> and
 * pushes it to ExtraaEdge's SaveRequest API. Running this on the server keeps
 * the ExtraaEdge AuthToken out of the browser.
 *
 * Keys, AuthToken and Source are exactly as in the PHP script (action.php), and
 * values are converted to the PHP form's format by toCrmValues() below.
 */

import { NextResponse } from "next/server";
import {
  CITY_NAMES, INTERESTED_COLLEGES, OCCUPATION_IDS, PREFERRED_CITY_IDS, SCORE_CODES, STATES_AND_DISTRICTS,
} from "./crmLists";


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
  "college", "level", "program", "source", "campaign", "website",
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

// ── Form answer -> the value the working PHP form sent to ExtraaEdge ──────────
const GENDER_CODES: Record<string, string> = { male: "M", female: "F", other: "O" };
const CLASS_TO_BATCH: Record<string, string> = { "class 11": "11th", "class 12": "12th" };
/** Our state names -> the CRM's state names (CRM has no Ladakh / Andaman / merged DNH-DD) */
const STATE_ALIASES: Record<string, string> = {
  delhi: "Delhi (NCT)", chandigarh: "Chandigarh (UT)", puducherry: "Puducherry (UT)",
  lakshadweep: "Lakshadweep (UT)",
};
const key = (v: string) => v.trim().replace(/\s+/g, " ").toLowerCase();

function crmStream(v: string): string {
  const k = key(v);
  if (k.startsWith("science")) return "Science";
  if (k.startsWith("commerce")) return "Commerce";
  if (k.startsWith("arts")) return "Arts";
  return "";
}

/**
 * Converts the CAT form's answers into ExtraaEdge's own codes / IDs / names
 * (same as the PHP form). Anything that has no matching CRM value is sent
 * empty — like an unselected field in the PHP form — and kept in Remarks
 * so the counsellor still sees what the student entered.
 */
function toCrmValues(f: LeadForm) {
  const notes: string[] = [];
  const keep = (label: string, value: string) => {
    if (value.trim()) notes.push(`${label}: ${value.trim()}`);
  };

  const gender = GENDER_CODES[key(f.gender)] || "";
  if (!gender) keep("Gender", f.gender);

  const batch = CLASS_TO_BATCH[key(f.current_education_level)] || "";
  keep("Class", f.current_education_level); // always useful (CRM has only 11th / 12th)

  const stream = crmStream(f.Streams);
  keep("Stream", f.Streams); // keeps PCM / PCB / etc.

  const score = SCORE_CODES.find((c) => key(c) === key(f.score)) || "";
  if (!score) keep("Last exam score (%)", f.score);

  // A college from the CRM's list is sent with the CRM's exact spelling; any other
  // college the student typed is sent as typed (and also kept in Remarks as a backup).
  const typedCollege = f.interested_college_university.trim().replace(/\s+/g, " ");
  const listedCollege = INTERESTED_COLLEGES.find((c) => key(c) === key(typedCollege));
  const college = listedCollege || typedCollege;
  if (!listedCollege) keep("Interested college", typedCollege);

  // Preferred city: the CRM's city ID when the city is in its list, otherwise the
  // text exactly as the student typed it. Always also shown in Remarks.
  const typedPrefCity = f.preferred_city.trim().replace(/\s+/g, " ");
  const prefId = PREFERRED_CITY_IDS[key(typedPrefCity)];
  const preferredCity = prefId ? String(prefId) : typedPrefCity;
  keep("Preferred city", typedPrefCity);

  const occupation = OCCUPATION_IDS[key(f.father_occupation)] || "";
  if (!occupation) keep("Father's occupation", f.father_occupation);

  // The form's fee-budget / income ranges differ from the CRM's ranges, so they go to Remarks
  keep("Fee budget", f.fee_budget);
  keep("Father's annual income", f.father_income);

  const state =
    STATE_ALIASES[key(f.state)] ||
    Object.keys(STATES_AND_DISTRICTS).find((s) => key(s) === key(f.state)) ||
    "";
  if (!state) keep("State", f.state);

  const district = (STATES_AND_DISTRICTS[state] || []).find((d) => key(d) === key(f.district)) || "";
  if (!district) keep("District", f.district);

  const city = CITY_NAMES[key(f.city_name)] || "";
  if (!city) keep("City", f.city_name);

  const remarks = [f.remarks.trim(), ...notes].filter(Boolean).join(" | ");

  return { gender, batch, stream, score, college, preferredCity, occupation, state, district, city, remarks };
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

  // Same 27 keys, in the same order, as the PHP script (action.php),
  // with values in the same format the PHP form sent.
  const crm = toCrmValues(f);
  const payload = {
    AuthToken: AUTH_TOKEN,
    Source: SOURCE,
    FirstName: f.firstName.trim(),
    Email: f.email.trim(),
    MobileNumber: f.mobile,
    Field4: crm.score, // CAT result code (e.g. "AES") or empty
    Remarks: crm.remarks,
    AlternateMobileNumber: f.alternate_no,
    Gender: crm.gender, // M / F / O
    Field5: crm.stream, // Arts / Science / Commerce
    Field6: crm.college, // interested college (CRM name, or as typed by the student)
    BatchApplied: crm.batch, // 11th / 12th
    Field7: crm.preferredCity, // prefferedcityID, or the city as typed
    Field8: "", // fee budget id — form ranges don't match the CRM's (kept in Remarks)
    Field3: crm.occupation, // occupationId
    Field9: "", // income text — form ranges don't match the CRM's (kept in Remarks)
    Field1: f.cbc_membership,
    sourceTo: f.school_name.trim(),
    Address: f.address.trim(),
    States: crm.state,
    Districts: crm.district,
    City: crm.city,
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
