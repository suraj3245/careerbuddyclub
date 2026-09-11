import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OffCampusSection() {
  return (
    <section className="offCampus">
      <div className="offCampus__inner">
        <div className="offCampus__left">
         

          <h2 className="offCampus__title">
            Explore Off-Campus<br />Colleges &amp; Programs
          </h2>
          <div className="offCampus__underline" />

          <p className="offCampus__subtitle">
            Discover top off-campus colleges, online programs,<br />
            and flexible learning options that fit your goals.
          </p>

          <div className="offCampus__box">
            <div className="offCampus__boxIcon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div className="offCampus__boxText">
              <strong>For Off-Campus Colleges &amp; Programs</strong>
              <span>Visit our dedicated platform</span>
            </div>
          </div>

          <div className="offCampus__action">
            <Link href="/colleges" className="offCampus__button">
              Visit Off-Campus Site <ArrowRight size={18} />
            </Link>
            <div className="offCampus__arrowGfx">
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2,38 C20,38 30,10 50,20 C70,30 90,5 110,12" stroke="#079db4" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
                <path d="M106,4 L118,14 L104,18 Z" fill="#079db4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="offCampus__right">
          <div className="offCampus__graphic">
            <div className="offCampus__circle" />
            
            <div className="offCampus__dots" />
            <div className="offCampus__lines" />
            {/* Using a placeholder for laptop image if it doesn't exist. User can change the src */}
            <div className="offCampus__laptopPlaceholder">
              <img src="/assets/images/CBC-Website-Laptop.png"
               alt="Laptop" className="offCampus__laptopImg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
