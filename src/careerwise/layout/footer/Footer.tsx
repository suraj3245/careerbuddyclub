'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainContent}>
          
          {/* Left Column - Branding and Contact */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Image className={styles.logoMark} src="/assets/images/logo-2.png" alt="Career Buddy Club logo" width={240} height={44} />
              {/* <span className={styles.logoSeparator} aria-hidden="true">|</span>
              <span className={styles.logoText}>Online<br />Learning</span> */}
            </div>
            
            <h2 className={styles.tagline}>
              Navigate online<br/>education with clarity
            </h2>

            <div className={styles.newsletter}>
              <span className={styles.newsletterLabel}>THE MONTHLY LETTER</span>
              <form className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="you@example.com" 
                  className={styles.emailInput}
                  required
                />
                <button type="submit" className={styles.submitButton} aria-label="Subscribe">
                  <ArrowRight size={18} />
                </button>
              </form>
              <p className={styles.newsletterDesc}>
                One short letter a month: new programmes, fee changes, deadlines worth knowing.
              </p>
            </div>

            <div className={styles.contactInfo}>
              {/* <a href="mailto:hello@careerwise.example" className={styles.contactLink}>hello@careerwise.example</a> */}
              <a href="tel:+917456000100" className={styles.contactLink}>+91 7456000100</a>
              <p className={styles.address}>
                NH-72, Jhajra <span className={styles.coordinates}>Uttarakhand</span>
              </p>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><span aria-hidden="true">in</span></a>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}><span aria-hidden="true">◎</span></a>
              <a href="#" aria-label="YouTube" className={styles.socialIcon}><span aria-hidden="true">▶</span></a>
              <a href="#" aria-label="X (Twitter)" className={styles.socialIcon}>
                <svg width="14" height="14" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className={styles.linksSection}>
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>UNIVERSITIES</h3>
              <ul className={styles.linkList}>
                <li><a href="#">Amity University Online</a></li>
                <li><a href="#">Manipal University Online</a></li>
                <li><a href="#">DY Patil University Online</a></li>
                <li><a href="#">LPU Online</a></li>
                <li><a href="#">Amrita University Online</a></li>
                <li><a href="#">BIMTECH Online</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>PROGRAMMES</h3>
              <ul className={styles.linkList}>
                <li><a href="#">Online MBA</a></li>
                <li><a href="#">Online MCA</a></li>
                <li><a href="#">Online BBA</a></li>
                <li><a href="#">Online BCA</a></li>
                <li><a href="#">Online M.Com</a></li>
                <li><a href="#">Online MA</a></li>
                <li><a href="#">PG Diploma</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>POPULAR DEGREES</h3>
              <ul className={styles.linkList}>
                <li><a href="#">Online MBA in Finance</a></li>
                <li><a href="#">Online MBA in Marketing</a></li>
                <li><a href="#">Online MBA in Business Analytics</a></li>
                <li><a href="#">Online MCA in Data Science</a></li>
                <li><a href="#">Online MCA in Cybersecurity</a></li>
                <li><a href="#">Online BBA in Digital Business</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>CAREER GUIDANCE</h3>
              <ul className={styles.linkList}>
                <li><a href="#">Talk to a mentor</a></li>
                <li><a href="#">Start from a job title</a></li>
                <li><a href="#">Career map</a></li>
                <li><a href="#">Compare universities</a></li>
                <li><a href="#">Build a shortlist</a></li>
               
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>RESOURCES</h3>
              <ul className={styles.linkList}>
                <li><a href="#">Insights</a></li>
                <li><a href="#">UGC entitlement, explained</a></li>
                <li><a href="#">Fee calculator</a></li>
                <li><a href="#">Student stories</a></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>COMPANY</h3>
              <ul className={styles.linkList}>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.divider}>
            <div className={styles.dividerLines}></div>
            <button className={styles.backToTop} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              Back to top <span>↑</span>
            </button>
          </div>
          
          <div className={styles.legalSection}>
            <span className={styles.copyright}>© 2026 Career Buddy Club | Online Learning </span>
            <div className={styles.legalLinks}>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Sitemap</a>
              <a href="#">Accessibility</a>
            </div>
          </div>

          <div className={styles.disclaimer}>
            <p>Every university, mentor, student, fee, rating and statistic shown on this page is fictional sample data written for the build — none of it describes a real institution or a verified claim.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
