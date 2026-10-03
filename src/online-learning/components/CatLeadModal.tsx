"use client";

/**
 * CAT (Career Aptitude Test) lead form modal.
 *
 * Mounted once in <OnlineLearningShell>. Opens when:
 *   • code calls `openCatLeadModal()` (header CAT button, mobile drawer), or
 *   • any element with `data-open-cat` is clicked.
 *
 * Submits to /api/cat-lead, which forwards the lead to ExtraaEdge.
 * Styled after the Register / Sign-in popup (logo above the card, serif
 * heading, pill inputs, teal pill button). Header and footer stay fixed;
 * only the fields scroll.
 */

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CAT_SCHOOLS } from "@/online-learning/data/catSchools";

const OPEN_EVENT = "cw:open-cat-lead-modal";
const TRIGGER_SELECTOR = "[data-open-cat]";
const CAT_TEST_HREF = "/dashboard/candidate-dashboard/career-aptitude";

/** Open the modal from anywhere (safe to pass straight to onClick). */
export function openCatLeadModal(_event?: unknown) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

// ── Options ─────────────────────────────────────────────────────
const STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];
const EDUCATION_LEVELS = ["Class 10", "Class 11", "Class 12"];

/** Stream options depend on the class: Class 10 picks the stream they plan to take. */
const STREAMS_BY_CLASS: Record<string, string[]> = {
  "Class 10": [
    "Science (PCM)", "Science (PCB)", "Science (PCMB)", "Commerce",
    "Arts / Humanities", "Not decided yet",
  ],
  "Class 11": [
    "Science (PCM)", "Science (PCB)", "Science (PCMB)", "Commerce with Maths",
    "Commerce without Maths", "Arts / Humanities", "Vocational",
  ],
  "Class 12": [
    "Science (PCM)", "Science (PCB)", "Science (PCMB)", "Commerce with Maths",
    "Commerce without Maths", "Arts / Humanities", "Vocational",
  ],
};
/** School dropdown: names from Applycbc-Data.xlsx, plus an "Other" choice that shows a text box. */
const SCHOOL_OTHER = "Other (my school isn’t listed)";
const SCHOOL_OPTIONS = CAT_SCHOOLS.map((s) => s.name);
const SCHOOL_ID_BY_NAME = new Map(CAT_SCHOOLS.map((s) => [s.name, String(s.id)]));
const FEE_BUDGETS = ["Below 1 Lakh", "1 - 3 Lakh", "3 - 5 Lakh", "5 - 10 Lakh", "Above 10 Lakh"];
const INCOMES = ["Below 3 Lakh", "3 - 6 Lakh", "6 - 10 Lakh", "10 - 20 Lakh", "Above 20 Lakh"];
const GENDERS = ["Male", "Female", "Other"];

// ── Form model ──────────────────────────────────────────────────
// Fields not shown in the form (alternate_no, remarks, cbc_membership,
// college, level, program, source, campaign) are still sent to ExtraaEdge
// as empty values by /api/cat-lead, so the API payload keeps all its keys.
const EMPTY = {
  firstName: "", email: "", mobile: "", gender: "",
  current_education_level: "", Streams: "", score: "",
  // school_select = the dropdown choice; school_name = what is sent to ExtraaEdge
  school_select: "", school_name: "",
  interested_college_university: "", preferred_city: "", fee_budget: "",
  father_occupation: "", father_income: "",
  address: "", state: "", district: "", city_name: "",
};
type Values = typeof EMPTY;
type Key = keyof Values;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_RE = /^[6-9]\d{9}$/;

/** Keep the last 10 digits, so a pasted "+91 98765 43210" becomes "9876543210". */
const cleanMobile = (v: unknown) => String(v ?? "").replace(/\D/g, "").slice(-10);

function validate(v: Values): Partial<Record<Key, string>> {
  const e: Partial<Record<Key, string>> = {};
  if (v.firstName.trim().length < 2) e.firstName = "Please enter your name";
  if (!v.email.trim()) e.email = "Please enter your email";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "Enter a valid email address";
  if (!v.mobile) e.mobile = "Please enter your mobile number";
  else if (!MOBILE_RE.test(v.mobile)) e.mobile = "Enter a valid 10-digit mobile number";
  if (v.score && (isNaN(Number(v.score)) || Number(v.score) < 0 || Number(v.score) > 100))
    e.score = "Enter a percentage between 0 and 100";
  if (v.school_select === SCHOOL_OTHER && !v.school_name.trim()) e.school_name = "Please enter your school name";
  if (!v.state) e.state = "Please select your state";
  if (!v.city_name.trim()) e.city_name = "Please enter your city";
  return e;
}

/** Name / email / mobile saved by the login flow — only used when signed in. */
function readSignedInDetails(): Partial<Values> {
  try {
    if (!localStorage.getItem("token")) return {};
    let user: Record<string, any> = {};
    try {
      user = JSON.parse(localStorage.getItem("user") || "{}") || {};
    } catch {
      /* malformed JSON — ignore */
    }
    const nested = user.user || user.student || user.data || {};
    const mobile = cleanMobile(
      localStorage.getItem("mobile") || user.mobile || user.phone || nested.mobile || nested.phone
    );
    return {
      firstName: localStorage.getItem("username") || user.name || nested.name || "",
      email: localStorage.getItem("School_email") || user.email || nested.email || "",
      mobile: MOBILE_RE.test(mobile) ? mobile : "",
    };
  } catch {
    return {};
  }
}

// ── Field building blocks (outside the modal so inputs keep focus while typing) ──
type FieldProps = {
  id: string; name: string; value: string; "aria-invalid": boolean; "aria-describedby"?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const FormCtx = createContext<{
  errors: Partial<Record<Key, string>>;
  fieldProps: (k: Key) => FieldProps;
}>({ errors: {}, fieldProps: () => ({} as FieldProps) });

function Field({ k, label, required, span, children }: {
  k: Key; label: string; required?: boolean; span?: "full" | "half"; children: React.ReactNode;
}) {
  const { errors } = useContext(FormCtx);
  return (
    <div className={`clField ${span ? `clField--${span}` : ""} ${errors[k] ? "has-error" : ""}`}>
      <label htmlFor={`cl-${k}`} className="clLabel">
        {label}
        {required && <span className="clReq" aria-hidden="true">*</span>}
      </label>
      {children}
      {errors[k] && <p id={`cl-${k}-err`} className="clError" role="alert">{errors[k]}</p>}
    </div>
  );
}

function TextInput({ k, ...rest }: { k: Key } & React.InputHTMLAttributes<HTMLInputElement>) {
  const { fieldProps } = useContext(FormCtx);
  return (
    <div className="clInputWrap">
      <input className="clInput" type="text" {...rest} {...fieldProps(k)} />
    </div>
  );
}

/**
 * Custom dropdown (replaces the native <select>, whose option list can't be styled).
 * Keyboard: ↑/↓ move, Enter/Space choose, Esc closes, Home/End, type a letter to jump.
 * `searchable` adds a filter box at the top (used for State).
 */
function Select({ k, options: baseOptions, placeholder = "Select", searchable = false, disabled = false, pinned }: {
  k: Key; options: string[]; placeholder?: string; searchable?: boolean; disabled?: boolean;
  /** Extra option always shown last, even when the search has no matches (e.g. "Other"). */
  pinned?: string;
}) {
  const options = pinned ? [...baseOptions, pinned] : baseOptions;
  const { fieldProps } = useContext(FormCtx);
  const props = fieldProps(k);
  const value = props.value;

  const [isOpen, setIsOpen] = useState(false);
  const [openUp, setOpenUp] = useState(false);
  const [active, setActive] = useState(-1);
  const [query, setQuery] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const typeahead = useRef({ text: "", time: 0 });
  const listId = `cl-${k}-list`;

  const shown = searchable && query
    ? [
        ...baseOptions.filter((o) => o.toLowerCase().includes(query.trim().toLowerCase())),
        ...(pinned ? [pinned] : []),
      ]
    : options;

  const choose = (v: string) => {
    props.onChange({ target: { value: v } } as React.ChangeEvent<HTMLInputElement>);
    setIsOpen(false);
    setQuery("");
    triggerRef.current?.focus({ preventScroll: true });
  };

  const openList = () => {
    // Open upwards when there isn't room below inside the scrolling area
    const trigger = triggerRef.current;
    const area = trigger?.closest(".clScroll") as HTMLElement | null;
    if (trigger && area) {
      const t = trigger.getBoundingClientRect();
      const a = area.getBoundingClientRect();
      const below = a.bottom - t.bottom;
      const above = t.top - a.top;
      // Only open upwards when the whole menu fits above; otherwise open down and
      // let the scroll area bring it into view.
      const needed = searchable ? 310 : 260;
      setOpenUp(below < needed && above >= needed);
    }
    setActive(Math.max(0, options.indexOf(value)));
    setQuery("");
    setIsOpen(true);
  };

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [isOpen]);

  // On open: focus search, bring the list into view
  useEffect(() => {
    if (!isOpen) return;
    if (searchable) searchRef.current?.focus({ preventScroll: true });
    // wait for the open animation (160ms) so the menu is measured at full size
    const t = window.setTimeout(
      () => rootRef.current?.querySelector(".clMenu")?.scrollIntoView({ block: "nearest", behavior: "smooth" }),
      180
    );
    return () => window.clearTimeout(t);
  }, [isOpen, searchable]);

  // Keep the highlighted option visible
  useEffect(() => {
    if (!isOpen || active < 0) return;
    // Scroll only inside the list (scrollIntoView would also move the form behind it)
    const list = listRef.current;
    const item = list?.querySelectorAll<HTMLElement>(".clOption")[active];
    if (!list || !item) return;
    const pinnedEl = list.querySelector<HTMLElement>(".clOption--pinned");
    const bottomGap = pinnedEl && pinnedEl !== item ? pinnedEl.offsetHeight : 0;
    if (item.offsetTop < list.scrollTop) list.scrollTop = item.offsetTop;
    else if (item.offsetTop + item.offsetHeight > list.scrollTop + list.clientHeight - bottomGap)
      list.scrollTop = item.offsetTop + item.offsetHeight - list.clientHeight + bottomGap;
  }, [active, isOpen]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    switch (e.key) {
      case "Escape":
        e.preventDefault(); // tells the modal not to close
        setIsOpen(false);
        triggerRef.current?.focus({ preventScroll: true });
        return;
      case "Tab":
        setIsOpen(false);
        return;
      case "ArrowDown":
        e.preventDefault();
        setActive((i) => Math.min(shown.length - 1, i + 1));
        return;
      case "ArrowUp":
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
        return;
      case "Home":
        if (!searchable) { e.preventDefault(); setActive(0); }
        return;
      case "End":
        if (!searchable) { e.preventDefault(); setActive(shown.length - 1); }
        return;
      case "Enter":
        e.preventDefault();
        if (shown[active] !== undefined) choose(shown[active]);
        return;
      case " ":
        if (!searchable) {
          e.preventDefault();
          if (shown[active] !== undefined) choose(shown[active]);
        }
        return;
    }
    // Type-ahead: jump to the first option starting with the typed letters
    if (!searchable && e.key.length === 1 && /\S/.test(e.key)) {
      const now = Date.now();
      const ta = typeahead.current;
      ta.text = now - ta.time > 700 ? e.key.toLowerCase() : ta.text + e.key.toLowerCase();
      ta.time = now;
      const i = shown.findIndex((o) => o.toLowerCase().startsWith(ta.text));
      if (i >= 0) setActive(i);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`clDropdown ${isOpen ? "is-open" : ""} ${openUp ? "is-up" : ""}`}
      onKeyDown={onKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        id={props.id}
        className={`clInputWrap clTrigger ${value ? "" : "is-empty"}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listId}
        aria-invalid={props["aria-invalid"]}
        aria-describedby={props["aria-describedby"]}
        disabled={disabled}
        onClick={() => (isOpen ? setIsOpen(false) : openList())}
      >
        <span className="clTriggerText">{value || placeholder}</span>
        <svg className="clChevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>

      {isOpen && (
        <div className="clMenu">
          {searchable && (
            <div className="clMenuSearch">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              <input
                ref={searchRef}
                type="text"
                placeholder="Search…"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setActive(0); }}
                aria-controls={listId}
                aria-label="Search options"
              />
            </div>
          )}
          <ul ref={listRef} id={listId} role="listbox" className="clMenuList" tabIndex={-1}>
            {shown.length === (pinned ? 1 : 0) && <li className="clMenuEmpty">No matches</li>}
            {shown.map((o, i) => (
              <li
                key={o}
                role="option"
                aria-selected={o === value}
                className={`clOption ${o === pinned ? "clOption--pinned" : ""} ${o === value ? "is-selected" : ""} ${i === active ? "is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onMouseDown={(e) => e.preventDefault()} // keep focus on the trigger
                onClick={() => choose(o)}
              >
                <span>{o}</span>
                {o === value && (
                  <svg className="clCheck" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Section({ n, title, cols = 2, children }: {
  n: number; title: string; cols?: 2 | 3; children: React.ReactNode;
}) {
  return (
    <section className="clSection">
      <h3 className="clSectionTitle">
        <span className="clStep" aria-hidden="true">{n}</span>
        {title}
      </h3>
      <div className={`clGrid ${cols === 3 ? "clGrid--3" : ""}`}>{children}</div>
    </section>
  );
}

export default function CatLeadModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "success">("form");
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const redirectTimer = useRef<number | undefined>(undefined);
  const titleId = useId();
  const descId = useId();

  // ── open / close ──────────────────────────────────────────────
  const openModal = useCallback(() => {
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    // Pre-fill only empty fields, and only for signed-in students
    const pre = readSignedInDetails();
    setValues((cur) => {
      const next = { ...cur };
      (Object.keys(pre) as Key[]).forEach((k) => {
        if (pre[k] && !cur[k]) next[k] = pre[k] as string;
      });
      return next;
    });
    setErrors({});
    setSubmitError("");
    setStep("form");
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    window.clearTimeout(redirectTimer.current); // closing cancels the pending redirect
    setOpen(false);
    window.setTimeout(() => lastFocusRef.current?.focus?.({ preventScroll: true }), 0);
  }, []);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onEvent = () => openModal();
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

  // While open: lock page scroll, Escape closes, keep Tab focus inside, focus first field
  useEffect(() => {
    if (!open) return;
    const { body, documentElement } = document;
    const prevBody = body.style.overflow;
    const prevHtml = documentElement.style.overflow;
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        // An open dropdown handles Escape itself
        if (e.defaultPrevented || (e.target as HTMLElement | null)?.closest?.(".clDropdown.is-open")) return;
        e.preventDefault();
        closeModal();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), select, [href]'
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
    const t = window.setTimeout(
      () => formRef.current?.querySelector<HTMLInputElement>("#cl-firstName")?.focus({ preventScroll: true }),
      120
    );
    return () => {
      body.style.overflow = prevBody;
      documentElement.style.overflow = prevHtml;
      document.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
    };
  }, [open, closeModal]);

  // ── field helpers ─────────────────────────────────────────────
  const fieldProps = (key: Key): FieldProps => ({
    id: `cl-${key}`,
    name: key,
    value: values[key],
    onChange: (e) => {
      const v = key === "mobile" ? cleanMobile(e.target.value) : e.target.value;
      setValues((cur) => {
        const next = { ...cur, [key]: v };
        // Changing the class clears a stream that isn't offered for the new class
        if (key === "current_education_level" && !(STREAMS_BY_CLASS[v] || []).includes(cur.Streams)) {
          next.Streams = "";
        }
        // School dropdown fills school_name; "Other" clears it for the student to type
        if (key === "school_select") next.school_name = v === SCHOOL_OTHER ? "" : v;
        return next;
      });
      if (errors[key]) setErrors((cur) => ({ ...cur, [key]: undefined }));
    },
    "aria-invalid": !!errors[key],
    "aria-describedby": errors[key] ? `cl-${key}-err` : undefined,
  });

  // ── submit ────────────────────────────────────────────────────
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    const firstBad = Object.keys(errs)[0];
    if (firstBad) {
      const el = formRef.current?.querySelector<HTMLElement>(`#cl-${firstBad}`);
      el?.focus({ preventScroll: true });
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const trimmed = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]));
      const res = await fetch("/api/cat-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...trimmed,
          // sent to ExtraaEdge as Field2; empty when the student typed their own school
          school_id: SCHOOL_ID_BY_NAME.get(values.school_select) || "",
          website: honeypotRef.current?.value || "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStep("success");
        // Take the student to the Career Aptitude Test page
        router.prefetch(CAT_TEST_HREF);
        redirectTimer.current = window.setTimeout(() => {
          setOpen(false);
          router.push(CAT_TEST_HREF);
        }, 1500);
        setValues(EMPTY);
      } else {
        if (data.errors) setErrors(data.errors);
        setSubmitError(data.message || "We couldn’t submit your details. Please try again.");
      }
    } catch {
      setSubmitError("We couldn’t submit your details. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted || !open) return null;

  return createPortal(
    <div className="cw-root">
      <div className="clOverlay" onMouseDown={(e) => e.target === e.currentTarget && closeModal()}>
        <div className="clBrand" aria-hidden="true">
          <img src="/assets/images/logo.png" alt="" />
        </div>

        <div
          ref={dialogRef}
          className={`clDialog ${step === "success" ? "is-success" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descId}
        >
          <button type="button" className="clClose" onClick={closeModal} aria-label="Close">
            <span /><span />
          </button>

          {step === "form" ? (
            <form ref={formRef} className="clForm" onSubmit={onSubmit} noValidate>
              {/* Fixed header */}
              <div className="clHead">
                <span className="clEyebrow">CAT · Career Aptitude Test</span>
                <h2 id={titleId} className="clTitle">Discover the career that fits you</h2>
                <p id={descId} className="clSub">
                  Tell us a little about yourself.
                </p>
              </div>

              {/* Scrollable fields */}
              <div className="clScroll">
                <FormCtx.Provider value={{ errors, fieldProps }}>
                  {/* Honeypot — hidden from people, bots fill it */}
                  <input ref={honeypotRef} type="text" name="website" className="clHp" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <Section n={1} title="Personal details">
                    <Field k="firstName" label="Full name" required>
                      <TextInput k="firstName" autoComplete="name" maxLength={60} placeholder="Your full name" />
                    </Field>
                    <Field k="email" label="Email address" required>
                      <TextInput k="email" type="email" inputMode="email" autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={120} placeholder="you@example.com" />
                    </Field>
                    <Field k="mobile" label="Mobile number" required>
                      <MobileInput />
                    </Field>
                    <Field k="gender" label="Gender">
                      <Select k="gender" options={GENDERS} />
                    </Field>
                  </Section>

                  <Section n={2} title="Academic details">
                    <Field k="current_education_level" label="Current class">
                      <Select k="current_education_level" options={EDUCATION_LEVELS} placeholder="Select class" />
                    </Field>
                    <Field
                      k="Streams"
                      label={values.current_education_level === "Class 10" ? "Stream you plan to take" : "Stream"}
                    >
                      <Select
                        k="Streams"
                        options={STREAMS_BY_CLASS[values.current_education_level] || []}
                        placeholder={values.current_education_level ? "Select stream" : "Select class first"}
                        disabled={!values.current_education_level}
                      />
                    </Field>
                    <Field k="score" label="Last exam score (%)">
                      <TextInput k="score" type="number" inputMode="decimal" min={0} max={100} step="0.01" placeholder="e.g. 85" />
                    </Field>
                    <Field k="school_select" label="School name">
                      <Select
                        k="school_select"
                        options={SCHOOL_OPTIONS}
                        pinned={SCHOOL_OTHER}
                        placeholder="Search your school"
                        searchable
                      />
                    </Field>
                    {values.school_select === SCHOOL_OTHER && (
                      <Field k="school_name" label="Enter your school name" required span="full">
                        <TextInput k="school_name" maxLength={120} placeholder="Type your school name" autoFocus />
                      </Field>
                    )}
                    <Field k="interested_college_university" label="Interested college / university">
                      <TextInput k="interested_college_university" maxLength={120} placeholder="Dream college" />
                    </Field>
                    <Field k="preferred_city" label="Preferred city for study">
                      <TextInput k="preferred_city" maxLength={60} placeholder="e.g. Delhi" />
                    </Field>
                    <Field k="fee_budget" label="Fee budget (per year)" span="full">
                      <Select k="fee_budget" options={FEE_BUDGETS} />
                    </Field>
                  </Section>

                  <Section n={3} title="Family details">
                    <Field k="father_occupation" label="Father’s occupation">
                      <TextInput k="father_occupation" maxLength={80} placeholder="e.g. Business" />
                    </Field>
                    <Field k="father_income" label="Father’s annual income">
                      <Select k="father_income" options={INCOMES} />
                    </Field>
                  </Section>

                  <Section n={4} title="Address" cols={3}>
                    <Field k="address" label="Address" span="full">
                      <TextInput k="address" autoComplete="street-address" maxLength={200} placeholder="House no., street, area" />
                    </Field>
                    <Field k="state" label="State" required>
                      <Select k="state" options={STATES} placeholder="Select state" searchable />
                    </Field>
                    <Field k="district" label="District">
                      <TextInput k="district" maxLength={60} placeholder="District" />
                    </Field>
                    <Field k="city_name" label="City" required>
                      <TextInput k="city_name" autoComplete="address-level2" maxLength={60} placeholder="City" />
                    </Field>
                  </Section>
                </FormCtx.Provider>
              </div>

              {/* Fixed footer */}
              <div className="clFoot">
                {submitError && <p className="clSubmitError" role="alert">{submitError}</p>}
                <button type="submit" className="clSubmit" disabled={submitting}>
                  {submitting ? <><span className="clLoader" aria-hidden="true" /> Submitting…</> : "Submit details"}
                </button>
                <p className="clSafe">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
                  Your information is safe &amp; confidential
                </p>
              </div>
            </form>
          ) : (
            <div className="clSuccess" aria-live="polite">
              <div className="clSuccessCircle" aria-hidden="true">✓</div>
              <h2 id={titleId} className="clTitle">Thank you!</h2>
              <p id={descId} className="clSub">
                Your details have been received. Taking you to the Career Aptitude Test…
              </p>
              <Link href={CAT_TEST_HREF} className="clSubmit" onClick={() => { window.clearTimeout(redirectTimer.current); setOpen(false); }}>
                <span className="clLoader" aria-hidden="true" /> Go to the CAT now
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

/** Mobile field with the same "+91 |" prefix as the Register popup. */
function MobileInput() {
  const { fieldProps } = useContext(FormCtx);
  return (
    <div className="clInputWrap clInputWrap--phone">
      <span className="clCode">+91</span>
      <span className="clDivider" aria-hidden="true" />
      <input
        className="clInput"
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        placeholder="10-digit mobile number"
        {...fieldProps("mobile")}
      />
    </div>
  );
}
