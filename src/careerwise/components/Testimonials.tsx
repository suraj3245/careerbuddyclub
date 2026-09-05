"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/* ── Data ──────────────────────────────────────────────────────────────── */

interface Testimonial {
  id: number;
  name: string;
  program: string;
  image: string;
  /**
   * Placeholder clip — no real testimonial footage exists in this project
   * yet, so each entry points at a small public sample video. Swap the URL
   * for the real file (or an /assets path once uploaded) and everything
   * else — the card, the modal, the duration badge — keeps working as is.
   */
  video: string;
  duration: string; // mm:ss, shown as a badge on the thumbnail
  large?: boolean;
}

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Ananya Singh",
    program: "Online MBA",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: "1:42",
    large: true,
  },
  {
    id: 2,
    name: "Rohit Verma",
    program: "Online BCA",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    duration: "0:58",
  },
  {
    id: 3,
    name: "Meera Patel",
    program: "Online BBA",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: "1:15",
  },
];

/* ── Card ──────────────────────────────────────────────────────────────── */

interface TestimonialCardProps {
  testimonial: Testimonial;
  onPlay: (testimonial: Testimonial) => void;
}

function TestimonialCard({ testimonial, onPlay }: TestimonialCardProps) {
  const { name, program, image, duration, large } = testimonial;

  return (
    <article className={`videoCard ${large ? "cardLarge" : "cardSmall"}`}>
      <button
        type="button"
        className="thumbBtn"
        onClick={() => onPlay(testimonial)}
        aria-label={`Play testimonial video from ${name}, ${program}, ${duration} long`}
      >
        <span
          className="thumb"
          style={{ backgroundImage: `url("${image}")` }}
        >
          <span className="thumbOverlay" aria-hidden="true" />

          <span className="durationBadge" aria-hidden="true">
            {duration}
          </span>

          <span className="playBtn" aria-hidden="true">
            <svg className="playIcon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </span>

          <span className="meta" aria-hidden="true">
            <span className="personName">{name}</span>
            <span className="personProgram">
              <svg
                className="graduationIcon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
              {program}
            </span>
          </span>
        </span>
      </button>
    </article>
  );
}

/* ── Modal ─────────────────────────────────────────────────────────────── */

interface VideoModalProps {
  testimonial: Testimonial;
  onClose: () => void;
}

function VideoModal({ testimonial, onClose }: VideoModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div className="videoModalOverlay" onClick={onClose}>
      <div
        className="videoModalBox"
        role="dialog"
        aria-modal="true"
        aria-label={`${testimonial.name} testimonial video`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="videoModalClose"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close video"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        <video
          className="videoModalPlayer"
          src={testimonial.video}
          controls
          autoPlay
          playsInline
        />

        <div className="videoModalMeta">
          <strong>{testimonial.name}</strong>
          <span>{testimonial.program}</span>
        </div>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────────────── */

export default function Testimonials() {
  const [active, setActive] = useState<Testimonial | null>(null);

  const handlePlay = useCallback((testimonial: Testimonial) => {
    setActive(testimonial);
  }, []);

  const handleClose = useCallback(() => setActive(null), []);

  return (
    <section className="section">
      {/* Decorative background blobs */}
      <span className="blob blobLeft" aria-hidden="true" />
      <span className="blob blobRight" aria-hidden="true" />

      <div className="inner">
        <header className="header">
          {/* <div className="eyebrow">STUDENT TESTIMONIALS</div> */}
          <h2 className="title">Real Stories. Real Impact.</h2>
          <p className="subtitle">
            Hear from our students who turned their ambitions into achievements
            with the right guidance and support.
          </p>
        </header>

        {/* Three cards straight in the grid — no wrapper div, placement is
            handled entirely by CSS grid-column/grid-row on the cards. */}
        <div className="grid">
          <TestimonialCard testimonial={testimonialData[0]} onPlay={handlePlay} />
          <TestimonialCard testimonial={testimonialData[1]} onPlay={handlePlay} />
          <TestimonialCard testimonial={testimonialData[2]} onPlay={handlePlay} />
        </div>
      </div>

      {active && <VideoModal testimonial={active} onClose={handleClose} />}
    </section>
  );
}
