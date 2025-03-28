"use client";
import React, { useEffect, useState, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

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

  const brochures: any = {
    "UDMRI": "/assets/text/udmri_paramedical_brochure.pdf",
    "Pal-College": "/assets/text/Pal_College_Brochure.pdf",
    "VMM-College": "/assets/text/VMM_College_Brochure.pdf",
    "JBIT": "/assets/text/jbit-brochure-2022.pdf",

  };

  type WidgetConfig = {
    script: string;
    content: JSX.Element;
  };

  type Widgets = {
    [key: string]: WidgetConfig;
  };

  const widgets: Widgets = {
    GNC: {
      script: "/scripts/gurunanakscript.js",
      content: <div className="ee-formscript" id="ee-form-6"></div>,
    },
    BFIT: {
      script: "/scripts/bfitscript.js",
      content: <div className="ee-formscript" id="ee-form-5"></div>,
    },
    UPES: {
      script: "/scripts/upesscript.js",
      content: <div className="ee-formscript" id="ee-form-12"></div>,
    },
     "Uttaranchal-University": {
      script: "/scripts/uttaranchaluniversityscript.js",
      content: <div className="ee-formscript" id="ee-form-10"></div>,
    },
    UDMRI: {
      script: "/scripts/udmriscript.js",
      content: <div className="ee-formscript" id="ee-form-7"></div>,
    },
    "Pal-College": {
      script: "/scripts/palscript.js",
      content: <div className="ee-formscript" id="ee-form-11"></div>,
    },
    "VMM-College": {
      script: "/scripts/vmmscript.js",
      content: <div className="ee-formscript" id="ee-form-8"></div>,
    },
    "DD-College": {
      script: "/scripts/ddscript.js",
      content: <div className="ee-formscript" id="ee-form-9"></div>,
    },
  };

  const [script, setScript] = useState<string>("");
  const [widgetContent, setWidgetContent] = useState<JSX.Element | null>(null);

  return (
    <Suspense fallback={<div>Loading...</div>}>
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

  useEffect(() => {
    if (widgets[id]) {
      const widget = widgets[id];

      if (!searchParams.has("utm_source")) {
        const utmParams = new URLSearchParams({
          utm_source: "CBC-Website",
          utm_medium: "Online",
          utm_campaign: id,
        });

        const newUrl = `${pathname}?${utmParams.toString()}`;
        router.replace(newUrl);
      }

      setScript(`${widget.script}`);
      setWidgetContent(widget.content);
    }
  }, [id, searchParams, pathname, router]);

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
    <>
      <div className="breadcrumb-container">
        <div className="content-wrapper">
          <div className="text-section">
            <h1 className="title">{title}</h1>
            <h3 className="subtitle">{subtitle}</h3>
            <button className="btn-download" onClick={downloadBrochure}>
              Download Brochure
            </button>
          </div>

          <div className="form-section">
            {script && <Script src={script} strategy="afterInteractive" />}
            {widgetContent}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonBreadcrumbjob;
