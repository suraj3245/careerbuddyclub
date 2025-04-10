"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { ReactTyped } from "react-typed";
import { Globe, Download, ChevronRight } from 'lucide-react';
import "animate.css";

const CommonBreadcrumbjob = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];

  const brochures: Record<string, string> = {
    UDMRI: "/assets/text/udmri_paramedical_brochure.pdf",
    "Pal-College": "/assets/text/Pal_College_Brochure.pdf",
    "VMM-College": "/assets/text/vmm_college_brochure.pdf",
    JBIT: "/assets/text/jbit-brochure-2022.pdf",
  };

  type WidgetConfig = {
    script: string;
    content: JSX.Element;
  };

  const widgets: Record<string, WidgetConfig> = {
    GNC: {
      script: "/scripts/gurunanakscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-6"></div>,
    },
    BFIT: {
      script: "/scripts/gurunanakscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-6"></div>,
    },
    UPES: {
      script: "/scripts/upesscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-12"></div>,
    },
    "Uttaranchal-University": {
      script: "/scripts/uttaranchaluniversityscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-10"></div>,
    },
    "UDMRI": {
      script: "/scripts/udmriscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-7"></div>,
    },
    "Pal-College": {
      script: "/scripts/palscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-11"></div>,
    },
    "VMM-College": {
      script: "/scripts/vmmscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-8"></div>,
    },
    "DD-College": {
      script: "/scripts/ddscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-14"></div>,
    },
    "JBIT": {
      script: "/scripts/jbitscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-13"></div>,
    },
    "DOON-GROUP-OF-COLLEGES": {
      script: "/scripts/doongroupscript.js",
      content: <div className="ee-formscript border rounded-4 p-2" id="ee-form-16"></div>,
    },
  };

  return (
    <Suspense fallback={<Loader />}>
      <Content
        id={id}
        pathname={pathname}
        router={router}
        widgets={widgets}
        brochures={brochures}
        title={title}
        subtitle={subtitle}
      />
    </Suspense>
  );
};

const Loader = () => (
  <div className="loader-overlay d-flex justify-content-center align-items-center min-vh-100 bg-transparent">
    <iframe
      src="https://lottie.host/embed/a6783898-e218-4f04-96b4-960e4cef1250/vmsVpLHgSJ.lottie"
      style={{ width: "600px", height: "300px", border: "none" }}
      loading="lazy"
      title="Loading Animation"
    ></iframe>
  </div>
);

const Content = ({
  id,
  pathname,
  router,
  widgets,
  brochures,
  title,
  subtitle,
}: any) => {
  const searchParams = useSearchParams();
  const [script, setScript] = useState<string>("");
  const [widgetContent, setWidgetContent] = useState<JSX.Element | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Prevent UTM from being updated multiple times
  const utmUpdated = useRef(false);

  useEffect(() => {
    const loadData = async () => {
      if (widgets[id]) {
        const widget = widgets[id];

        if (!searchParams.has("utm_source") && !utmUpdated.current) {
          utmUpdated.current = true;
          const utmParams = new URLSearchParams({
            utm_source: "CBC-Website",
            utm_medium: "Online",
            utm_campaign: id,
          });

          const newUrl = `${pathname}?${utmParams.toString()}`;
          router.replace(newUrl);
        }

        setScript(widget.script);
        setWidgetContent(widget.content);
      }
      setTimeout(() => setLoading(false), 1000);
    };

    loadData();
  }, [id, pathname, router, widgets, searchParams]);

  const downloadBrochure = () => {
    const brochureLink = brochures[id];

    if (brochureLink) {
      const link = document.createElement("a");
      link.href = brochureLink;
      link.download = `${id}_brochure.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div
      className="container-fluid min-vh-100 d-flex flex-column flex-lg-row justify-content-center align-items-center p-5 w-100 px-0"
      style={{ background: "#67d9e3" }}
    >
      {/* Title and Brochure Section */}
      <div
        className="col-12 col-lg-6 p-5 text-black d-flex flex-column justify-content-center align-items-start"
      >
        <h2
          className="wow fadeInUp"
          data-wow-delay="0.3s"
          style={{
            color: "#05A9C7",
            textShadow: "2px 2px 4px #125125",
            marginTop: "3rem",
          }}
        >
          {title}
        </h2>
        <br />
        <h4 className="">
          <ReactTyped
            strings={[subtitle]}
            typeSpeed={70}
            loop={true}
            backSpeed={20}
            cursorChar=""
            showCursor={true}
          />
        </h4>
        <br />
        <button className="btn-five wow fadeInUp  text-black d-flex items-center justify-center gap-2 text-white" onClick={downloadBrochure}><Download size={25} />
          Download Brochure <ChevronRight size={25} />
        </button>
      </div>

      {/* Widget Section with Loader */}
      <div
        className="col-lg-6 p-5 d-flex justify-content-center align-items-center bg-transparent"
        style={{ width: "30rem" }}
      >
        {loading ? (
          <Loader />
        ) : (
          <>
            {script && <Script src={script} strategy="afterInteractive" />}
            <div className="ee-formscript">{widgetContent}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommonBreadcrumbjob;
