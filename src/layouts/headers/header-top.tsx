"use client";
import React from "react";
import img1 from "@/assets/images/logo/gtranslate.png";
import useSticky from "@/hooks/use-sticky";
import Image from "next/image";
import Script from "next/script";
const HeaderTop = () => {
  const { sticky } = useSticky();

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'hi,en,as,bn,gu,kn,ml,mr,or,pa,te,ta,ur',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              }, 'google_translate_element');
            }
          `,
        }}
      />
      <header
        className={`theme-main-menu menu-overlay  sticky-menu ${
          sticky ? "fixed" : "fixed"
        }`}
        style={{
          paddingBottom: "0px",
          zIndex: 1000,
          backgroundColor: "#eee30d",
        }}
      >
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0"></div>
              <div className="right-widget ms-auto ms-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li>
                    <Image
                      src={img1}
                      alt="Google Translate"
                      style={{
                        width: "30px",
                        height: "30px",
                        marginRight: "10px",
                        cursor: "pointer",
                      }}
                    ></Image>
                  </li>
                  <div>
                    <li id="google_translate_element"></li>
                    <style>
                      {`#google_translate_element {
                        padding: 0;
                        
                        right: 42px;
                        top: 12px;
                      }
                      .goog-te-banner-frame.skiptranslate,
                      .goog-te-gadget-simple img,
                      img.goog-te-gadget-icon,
                      .goog-te-menu-value span {
                        display: none !important;
                      }
                      .goog-te-menu-frame {
                        box-shadow: none !important;
                      }
                     
                      `}
                    </style>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* login modal start */}

      {/* login modal end */}
    </>
  );
};

export default HeaderTop;
