import Link from 'next/link';
import React from 'react';

export function WidgetOne({ cls,style_2 }: { cls: string;style_2?:boolean }) {
  return (
    <div className={`${cls} mb-20`}>
      <h5 className={`footer-title ${style_2?'text-white':''}`}>Services​</h5>
      <ul className="footer-nav-link style-none">
        <li><Link href="/">Browse Jobs</Link></li>
        <li><Link href="/">Companies</Link></li>
      </ul>
    </div>
  )
}

export function WidgetTwo({ cls,style_2 }: { cls: string;style_2?:boolean }) {
  return (
    <div className={`${cls} mb-20`}>
      <h5 className={`footer-title ${style_2?'text-white':''}`}>Company</h5>
      <ul className="footer-nav-link style-none">
        <li><Link href="/about-us">About us</Link></li>
        <li><Link href="/faq">FAQ’s</Link></li>
      </ul>
    </div>
  )
}

export function WidgetThree({ cls,style_2 }: { cls: string;style_2?:boolean }) {
  return (
    <div className={`${cls} mb-20`}>
      <h5 className={`footer-title ${style_2?'text-white':''}`}>Support</h5>
      <ul className="footer-nav-link style-none">
        <li><Link href='/contact'>Terms & conditions</Link></li>
        <li><Link href='/contact'>Contact</Link></li>

      </ul>
    </div>
  )
}
export function WidgetFour({ cls,style_2 }: { cls: string;style_2?:boolean }) {
  return (
    <div className={`${cls} mb-20`}>
      <h5 className={`footer-title ${style_2?'text-white':''}`}>Our Services</h5>
      <ul className="footer-nav-link style-none">
        <li><Link href='/schools'>For Schools</Link></li>
        <li><Link href='/campus'>For College</Link></li>
        <li><Link href='/corporate'>For Corporate</Link></li>


      </ul>
    </div>
  )
}

