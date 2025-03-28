"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
const CommonBreadcrumbjob = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const innerbannersmaller = {
    padding: "20px 0",
    paddingTop: "50px",
  };

  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];

  const brochures: any = {
    "UDMRI-Dehradun": "/assets/text/udmri_paramedical_brochure.pdf",
    "Pal-College": "/assets/text/Pal_College_Brochure.pdf",
    "VMM-College": "/assets/text/VMM_College_Brochure.pdf",
  };
  type WidgetConfig = {
    script: string;
    content: JSX.Element;
  };

  // Define the type for the widgets object
  type Widgets = {
    [key: string]: WidgetConfig;
  };

  const widgets: Widgets = {
    "guru-nanak-college-dehradun": {
      script: "/scripts/gurunanakscript.js",
      content: <div className="ee-formscript" id="ee-form-6"></div>,
    },
    "BFIT-Dehradun": {
      script: "/scripts/bfitscript.js",
      content: <div className="ee-formscript" id="ee-form-5"></div>,
    },
    
  };
  const [script, setScript] = useState("");
  const [widgetContent, setWidgetContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (widgets[id]) {
      setScript(widgets[id].script);
      setWidgetContent(widgets[id].content);
    } else {
      setScript("");
      setWidgetContent(null);
    }
  }, [id]);

  const downloadBrochure = () => {
    if (id && brochures[id]) {
      const link = document.createElement("a");
      link.href = brochures[id];
      link.download = `${id}_brochures.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <>
      <div
        className="inner-banner-college position-relative"
        style={innerbannersmaller}
      >
        <div className="container mt-4">
          <div className="position-relative">
            <div className="row d-flex justify-content-around align-items-center">
              <div className="col-xl-6 m-auto text-center">
                <div className="title-two">
                  <h2
                    className="text-black pt-40"
                    style={{ marginTop: "3rem" }}
                  >
                    {title}
                  </h2>
                </div>
                <p className="text-lg text-black mt-30 lg-mt-20">{subtitle}</p>
                <ul className="d-flex align-items-center justify-content-center style-none">
                  <li>
                    <a
                      className="fw-500 btn-five text-white"
                      onClick={downloadBrochure}
                    >
                      Download Brochure
                    </a>
                  </li>
                  <li className="d-flex d-md-block ms-4">
                    <a href="#" className="btn-five">
                      Apply Now
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xl-6">
                {script && <Script className="ee-form-6" src={script} strategy="afterInteractive" />}
                {widgetContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBreadcrumbjob;
