"use client";

/**
 * "Talk to a Career Expert" callback modal.
 *
 * Mounted once in <OnlineLearningShell>. It opens when:
 *   • any link/button with href="#counselling" is clicked (header, mobile
 *     drawer, ROI pages …) — handled by a global click listener, or
 *   • code calls `openExpertModal()` from anywhere.
 *
 * Rendered through a portal into <body> (wrapped in `.cw-root` so the scoped
 * CareerWise styles apply) — this keeps it above the sticky header and any
 * transformed ancestors.
 */

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";

const OPEN_EVENT = "cw:open-expert-modal";
const TRIGGER_SELECTOR = 'a[href="#counselling"], [data-open-expert]';

/** Optional context, e.g. opened from a university page or a program card. */
export type ExpertModalContext = { university?: string; program?: string };

/** Open the modal from anywhere in the app (optionally with context). */
export function openExpertModal(context?: ExpertModalContext | unknown) {
  if (typeof window === "undefined") return;
  // Ignore click events passed straight through as onClick={openExpertModal}
  const detail =
    context && typeof context === "object" && !("nativeEvent" in (context as object))
      ? (context as ExpertModalContext)
      : {};
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail }));
}

type Timing = "asap" | "today" | "schedule";
type Slot = "morning" | "afternoon" | "evening";

const SLOTS: { id: Slot; label: string; range: string }[] = [
  { id: "morning", label: "Morning", range: "10 AM – 12 PM" },
  { id: "afternoon", label: "Afternoon", range: "12 – 4 PM" },
  { id: "evening", label: "Evening", range: "4 – 7 PM" },
];

/**
 * Sends the callback request.
 * Uses the existing public contact endpoint (same one as the Contact page).
 * If the backend team adds a dedicated callback endpoint, change it here only.
 */
async function submitCallbackRequest(payload: {
  name: string;
  email: string;
  phone: string;
  preferredTime: string;
  context: ExpertModalContext;
}) {
  await axios.post(
    `${API_BASE}/contactusformsubmit`,
    {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      subject: payload.context.university
        ? `Enquiry – ${payload.context.university}`
        : "Talk to an Expert – Callback request",
      message: `Callback requested.${
        payload.context.university ? ` University: ${payload.context.university}.` : ""
      }${payload.context.program ? ` Program: ${payload.context.program}.` : ""} Preferred time: ${
        payload.preferredTime
      }. Page: ${
        typeof window !== "undefined" ? window.location.pathname : ""
      }`,
    },
    { headers: { Accept: "*/*", "Content-Type": "application/json" }, timeout: 15000 }
  );
}

function nextDays(count: number) {
  const days: Date[] = [];
  const base = new Date();
  base.setHours(0, 0, 0, 0);
  for (let i = 0; i < count; i++) {
    const d = new Date(base);
    d.setDate(base.getDate() + i);
    days.push(d);
  }
  return days;
}

const fmtDay = (d: Date, i: number) =>
  i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-IN", { weekday: "short" });

const fmtFull = (d: Date) =>
  d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });

const API_BASE = "https://test.careerbuddyclub.com:8080/api/students";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Prefill = { name?: string; email?: string; mobile?: string };

const cleanMobile = (v?: unknown) =>
  typeof v === "string" || typeof v === "number" ? String(v).replace(/\D/g, "").slice(-10) : "";

/** Details saved in the browser by the login / register flow (LoginPopup). */
function readStoredDetails(): Prefill {
  try {
    let user: Record<string, any> = {};
    try {
      const raw = localStorage.getItem("user");
      if (raw) user = JSON.parse(raw) || {};
    } catch {
      /* malformed JSON — ignore */
    }
    const nested = user.user || user.student || user.data || {};
    return {
      name: localStorage.getItem("username") || user.name || nested.name || "",
      email: localStorage.getItem("School_email") || user.email || nested.email || "",
      mobile: cleanMobile(
        localStorage.getItem("mobile") || user.mobile || user.phone || nested.mobile || nested.phone
      ),
    };
  } catch {
    return {};
  }
}

/** Fresh details from the student's profile (only when logged in). */
async function fetchProfileDetails(token: string): Promise<Prefill> {
  const res = await axios.post(
    `${API_BASE}/getstudentsprofile`,
    {},
    {
      headers: { Accept: "*/*", Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      timeout: 10000,
    }
  );
  const st = res.data?.student || res.data?.data || {};
  return {
    name: st.name || "",
    email: st.email || st.school_email || "",
    mobile: cleanMobile(st.mobile || st.phone || st.mobile_number),
  };
}

const formatMobile = (digits: string) =>
  digits.length > 5 ? `${digits.slice(0, 5)} ${digits.slice(5)}` : digits;

export default function ExpertCallbackModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // digits only
  const [prefilled, setPrefilled] = useState(false);
  const [context, setContext] = useState<ExpertModalContext>({});
  // Latest field values, readable from callbacks without re-creating them
  const valuesRef = useRef({ name: "", email: "", mobile: "" });
  valuesRef.current = { name, email, mobile };
  const prefilledRef = useRef(false);
  prefilledRef.current = prefilled;
  const [timing, setTiming] = useState<Timing>("asap");
  const [dayIndex, setDayIndex] = useState(1);
  const [slot, setSlot] = useState<Slot>("morning");

  const [touched, setTouched] = useState({ name: false, email: false, mobile: false });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);

  const titleId = useId();
  const descId = useId();

  const days = useMemo(() => nextDays(7), [open]); // refresh dates on each open
  const hour = new Date().getHours();
  const todayAvailable = hour < 18; // "later today" only makes sense before 6 PM

  // ── validation ────────────────────────────────────────────────
  const nameError = name.trim().length < 2 ? "Please enter your name" : "";
  const emailError =
    email.trim().length === 0
      ? "Please enter your email"
      : !EMAIL_RE.test(email.trim())
      ? "Enter a valid email address"
      : "";
  const mobileError =
    mobile.length === 0
      ? "Please enter your mobile number"
      : !/^[6-9]\d{9}$/.test(mobile)
      ? "Enter a valid 10-digit mobile number"
      : "";

  const preferredTimeLabel = useMemo(() => {
    if (timing === "asap") return "As soon as possible";
    if (timing === "today") return "Later today";
    const s = SLOTS.find((x) => x.id === slot)!;
    return `${fmtFull(days[dayIndex])} · ${s.label} (${s.range})`;
  }, [timing, slot, dayIndex, days]);

  // ── open / close ──────────────────────────────────────────────
  const openModal = useCallback((ctx: ExpertModalContext = {}) => {
    setContext({ university: ctx.university || "", program: ctx.program || "" });
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    // Pre-fill for registered / logged-in users. Only empty fields are
    // filled, so anything the visitor already typed is never overwritten.
    const apply = (d: Prefill) => {
      const cur = valuesRef.current;
      let used = false;
      if (d.name && !cur.name.trim()) {
        setName(d.name);
        cur.name = d.name;
        used = true;
      }
      if (d.email && !cur.email.trim()) {
        setEmail(d.email);
        cur.email = d.email;
        used = true;
      }
      if (d.mobile && /^[6-9]\d{9}$/.test(d.mobile) && !cur.mobile) {
        setMobile(d.mobile);
        cur.mobile = d.mobile;
        used = true;
      }
      if (used) setPrefilled(true);
    };

    // Details are ONLY pre-filled for signed-in users (a login token exists).
    let token = "";
    try {
      token = localStorage.getItem("token") || "";
    } catch {
      /* storage unavailable — treat as signed out */
    }

    if (token) {
      const stored = readStoredDetails();
      apply(stored);

      // Top up anything still missing from the student's profile.
      if (!stored.name || !stored.email || !stored.mobile) {
        fetchProfileDetails(token)
          .then((d) => {
            // Ignore the reply if they signed out while it was loading
            if (localStorage.getItem("token")) apply(d);
          })
          .catch(() => {
            /* profile unavailable — the visitor can still type their details */
          });
      }
    } else if (prefilledRef.current) {
      // Signed out since last time: clear the details that came from the account
      setName("");
      setEmail("");
      setMobile("");
      valuesRef.current = { name: "", email: "", mobile: "" };
      setPrefilled(false);
    }

    setStep("form");
    setSubmitError("");
    setTouched({ name: false, email: false, mobile: false });
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    window.setTimeout(() => lastFocusRef.current?.focus?.({ preventScroll: true }), 0);
  }, []);

  useEffect(() => setMounted(true), []);

  // Global triggers: custom event + any href="#counselling" link
  useEffect(() => {
    const onEvent = (e: Event) =>
      openModal(((e as CustomEvent<ExpertModalContext>).detail || {}) as ExpertModalContext);
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.(TRIGGER_SELECTOR);
      if (!target) return;
      e.preventDefault();
      openModal();
    };
    window.addEventListener(OPEN_EVENT, onEvent);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener(OPEN_EVENT, onEvent);
      document.removeEventListener("click", onClick);
    };
  }, [openModal]);

  // While open: lock scroll, Escape closes, keep Tab focus inside, focus first field
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const prevBody = body.style.overflow;
    const prevHtml = documentElement.style.overflow;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const t = window.setTimeout(() => nameRef.current?.focus(), 120);

    return () => {
      body.style.overflow = prevBody;
      documentElement.style.overflow = prevHtml;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, closeModal]);

  // If it's too late for "today", don't keep it selected
  useEffect(() => {
    if (!todayAvailable && timing === "today") setTiming("asap");
  }, [todayAvailable, timing]);

  // ── submit ────────────────────────────────────────────────────
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, mobile: true });
    if (nameError || emailError || mobileError) return;

    setSubmitting(true);
    setSubmitError("");
    try {
      await submitCallbackRequest({
        name: name.trim(),
        email: email.trim(),
        phone: mobile,
        preferredTime: preferredTimeLabel,
        context,
      });
      setStep("success");
    } catch {
      setSubmitError("We couldn’t send your request. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted || !open) return null;

  const firstName = name.trim().split(/\s+/)[0] || "there";

  return createPortal(
    <div className="cw-root">
      <div className="xpOverlay" onMouseDown={(e) => e.target === e.currentTarget && closeModal()}>
        <div
          ref={dialogRef}
          className={`xpDialog ${step === "success" ? "is-success" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
        >
          <div className="xpGlow" aria-hidden="true" />

          <button type="button" className="xpClose" onClick={closeModal} aria-label="Close">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>

          {step === "form" ? (
            <form className="xpBody" onSubmit={onSubmit} noValidate>
              {/* Heading */}
              <div className="xpHead">
                <span className="xpBadge" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <h2 id={titleId} className="xpTitle">Talk to a Career Expert</h2>
                <p id={descId} className="xpSub">
                  {context.university
                    ? "Get fees, eligibility & admission guidance from our counsellors."
                    : "Get personalised guidance for your course, college & career decisions."}
                </p>
                {(context.university || context.program) && (
                  <div className="xpContext">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2.5 9 2.5 12 0v-5" /></svg>
                    <span>
                      {context.program && <strong>{context.program}</strong>}
                      {context.program && context.university && " · "}
                      {context.university}
                    </span>
                  </div>
                )}
              </div>

              {prefilled && (
                <p className="xpPrefilled">
                  <Check /> We’ve filled in your details from your account
                </p>
              )}

              {/* Name */}
              <div className={`xpField ${touched.name && nameError ? "has-error" : ""}`}>
                <span className="xpFieldIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4.5 21a7.5 7.5 0 0 1 15 0" /></svg>
                </span>
                <input
                  ref={nameRef}
                  id="xp-name"
                  className="xpInput"
                  type="text"
                  autoComplete="name"
                  placeholder=" "
                  value={name}
                  maxLength={60}
                  onChange={(e) => setName(e.target.value)}
                  onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                  aria-invalid={touched.name && !!nameError}
                  aria-describedby="xp-name-err"
                />
                <label htmlFor="xp-name" className="xpLabel">Your Name</label>
              </div>
              <p id="xp-name-err" className="xpError" role="alert">
                {touched.name && nameError}
              </p>

              {/* Email */}
              <div className={`xpField ${touched.email && emailError ? "has-error" : ""}`}>
                <span className="xpFieldIcon" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 6.5 8.5 6.5 8.5-6.5" /></svg>
                </span>
                <input
                  id="xp-email"
                  className="xpInput"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  placeholder=" "
                  value={email}
                  maxLength={120}
                  onChange={(e) => setEmail(e.target.value.trimStart())}
                  onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                  aria-invalid={touched.email && !!emailError}
                  aria-describedby="xp-email-err"
                />
                <label htmlFor="xp-email" className="xpLabel">Email address</label>
                {!emailError && (
                  <span className="xpValid" aria-hidden="true"><Check /></span>
                )}
              </div>
              <p id="xp-email-err" className="xpError" role="alert">
                {touched.email && emailError}
              </p>

              {/* Mobile */}
              <div className={`xpField xpField--phone ${touched.mobile && mobileError ? "has-error" : ""}`}>
                <span className="xpPrefix" aria-hidden="true">
                  <span className="xpFlag">🇮🇳</span>+91
                </span>
                <input
                  id="xp-mobile"
                  className="xpInput"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  placeholder=" "
                  value={formatMobile(mobile)}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  onBlur={() => setTouched((t) => ({ ...t, mobile: true }))}
                  aria-invalid={touched.mobile && !!mobileError}
                  aria-describedby="xp-mobile-err"
                />
                <label htmlFor="xp-mobile" className="xpLabel">Mobile number</label>
                {mobile.length === 10 && !mobileError && (
                  <span className="xpValid" aria-hidden="true"><Check /></span>
                )}
              </div>
              <p id="xp-mobile-err" className="xpError" role="alert">
                {touched.mobile && mobileError}
              </p>

              {/* Timing */}
              <fieldset className="xpTiming">
                <legend className="xpLegend">When would you like us to call?</legend>
                <div className="xpOptions" role="radiogroup">
                  <TimingOption
                    id="asap" current={timing} onSelect={setTiming}
                    title="ASAP" hint="Next available"
                    icon={<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />}
                  />
                  <TimingOption
                    id="today" current={timing} onSelect={setTiming}
                    title="Today" hint={todayAvailable ? "Later today" : "Try tomorrow"}
                    disabled={!todayAvailable}
                    icon={<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />}
                  />
                  <TimingOption
                    id="schedule" current={timing} onSelect={setTiming}
                    title="Schedule" hint="Pick a slot"
                    icon={<><rect x="3" y="4.5" width="18" height="17" rx="2.5" /><path d="M16 2.5v4M8 2.5v4M3 10h18" /></>}
                  />
                </div>

                <div className={`xpSchedule ${timing === "schedule" ? "is-open" : ""}`} aria-hidden={timing !== "schedule"}>
                  <div className="xpScheduleInner">
                    <div className="xpDays" role="radiogroup" aria-label="Choose a day">
                      {days.map((d, i) => (
                        <button
                          key={d.toISOString()}
                          type="button"
                          role="radio"
                          aria-checked={dayIndex === i}
                          tabIndex={timing === "schedule" ? 0 : -1}
                          className={`xpDay ${dayIndex === i ? "is-active" : ""}`}
                          onClick={() => setDayIndex(i)}
                        >
                          <span className="xpDayName">{fmtDay(d, i)}</span>
                          <span className="xpDayNum">{d.getDate()}</span>
                          <span className="xpDayMonth">{d.toLocaleDateString("en-IN", { month: "short" })}</span>
                        </button>
                      ))}
                    </div>
                    <div className="xpSlots" role="radiogroup" aria-label="Choose a time">
                      {SLOTS.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          role="radio"
                          aria-checked={slot === s.id}
                          tabIndex={timing === "schedule" ? 0 : -1}
                          className={`xpSlot ${slot === s.id ? "is-active" : ""}`}
                          onClick={() => setSlot(s.id)}
                        >
                          <strong>{s.label}</strong>
                          <span>{s.range}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </fieldset>

              {submitError && <p className="xpSubmitError" role="alert">{submitError}</p>}

              <button type="submit" className="xpSubmit" disabled={submitting}>
                {submitting ? (
                  <>
                    <span className="xpSpinner" aria-hidden="true" /> Sending request…
                  </>
                ) : (
                  <>
                    Request a Callback
                    <svg className="xpArrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </>
                )}
              </button>

              <p className="xpSafe">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                Your information is safe &amp; confidential
              </p>
            </form>
          ) : (
            <div className="xpBody xpSuccess" aria-live="polite">
              <div className="xpBurst" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} style={{ ["--i" as string]: i } as React.CSSProperties} />
                ))}
              </div>
              <div className="xpCheck" aria-hidden="true">
                <svg viewBox="0 0 52 52">
                  <circle className="xpCheckCircle" cx="26" cy="26" r="24" />
                  <path className="xpCheckMark" d="M15 27l7 7 15-16" />
                </svg>
              </div>

              <p className="xpSuccessEyebrow">Request Received</p>
              <h2 id={titleId} className="xpTitle">Thanks, {firstName}!</h2>
              <p id={descId} className="xpSub">Our career counsellor will call you shortly.</p>

              <div className="xpSummary">
                <div className="xpSummaryRow">
                  <span className="xpSummaryIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                  </span>
                  <div>
                    <span className="xpSummaryLabel">Expected callback</span>
                    <strong className="xpSummaryValue">{preferredTimeLabel}</strong>
                  </div>
                </div>
                <div className="xpSummaryRow">
                  <span className="xpSummaryIcon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>
                  </span>
                  <div>
                    <span className="xpSummaryLabel">We’ll call you on</span>
                    <strong className="xpSummaryValue">+91 {formatMobile(mobile)}</strong>
                  </div>
                </div>
              </div>

              <button type="button" className="xpSubmit" onClick={closeModal} autoFocus>
                Continue Exploring
                <svg className="xpArrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function Check() {
  return (
    <svg className="xpTick" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function TimingOption({
  id, current, onSelect, title, hint, icon, disabled = false,
}: {
  id: Timing;
  current: Timing;
  onSelect: (t: Timing) => void;
  title: string;
  hint: string;
  icon: React.ReactNode;
  disabled?: boolean;
}) {
  const active = current === id;
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      disabled={disabled}
      className={`xpOption xpOption--${id} ${active ? "is-active" : ""}`}
      onClick={() => onSelect(id)}
    >
      <span className="xpOptionIcon" aria-hidden="true">
        <svg viewBox="0 0 24 24">{icon}</svg>
      </span>
      <span className="xpOptionTitle">{title}</span>
      <span className="xpOptionHint">{hint}</span>
    </button>
  );
}
