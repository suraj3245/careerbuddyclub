"use client";
import "./globals.scss";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import BackToTopCom from "./components/common/back-to-top-com";
import { Providers } from "@/redux/provider";
import HeaderFour from "@/layouts/headers/header-4";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Script from "next/script";
import { ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import HeaderTop from "@/layouts/headers/header-top";
const gordita = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gordita/gordita_medium-webfont.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gordita/gordita_medium-webfont.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gordita/gordita_regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gordita/gordita_regular-webfont.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--gorditas-font",
});
1;
const garamond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--eb_garamond-font",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<{ value: string | null }>({ value: null });
  const [key, setKey] = useState<number>(0);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    // Update isMobile based on window width
    setIsMobile(window.innerWidth <= 767);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize and set up resize event listener
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const tempToken = localStorage.getItem("token");
      setToken(tempToken);

      // Set the user state with the tempToken directly
      setUser({ value: tempToken });
      setKey(Math.random());
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("testStatus"); // Clear the stored test status
    localStorage.removeItem("catResults");
    localStorage.removeItem("username");
    localStorage.removeItem("location");
    localStorage.removeItem("schoolName");
    localStorage.removeItem("School_email");

    setUser({ value: null }); // Update the user state to reflect logout
    // Any additional logout logic goes here

    setKey(Math.random());
  };
  // const handleLogout1 = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userName");
  // }
  // Check if the current page is 'aptitudetest'
  const pathname = usePathname();
  const isRedirectPage = pathname.startsWith("/redirect");
  const isAptitudeTestPage = usePathname() === "/aptitudetest";
  const isCandidateDashboardPage = pathname.startsWith(
    "/dashboard/candidate-dashboard/"
  );
  const isapplynow = pathname.startsWith("/apply-now");
  const isSchoolDashboard = pathname.startsWith("/dashboard/");
  const dbsapplynow=pathname.startsWith("/dbs-apply-now");

  // const isCollegeDetailsPage = pathname.startsWith("/college-details");
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <meta
          name="google-site-verification"
          content="_xJeRaEYZ2j2SnSj8Pv7W4bpZJ9GvmGBC0w8rWqyG5g"
        />

        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w,d,s,l,i){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-W5778944');
    `,
          }}
        />
        <script src="https://cdn.botpress.cloud/webchat/v2/inject.js"></script>
        <script src="https://mediafiles.botpress.cloud/e34ea3b0-fab4-4ffb-b126-e7a6ec557ea3/webchat/v2/config.js"></script>
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${gordita.variable} ${garamond.variable}`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5778944"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <HeaderTop />
        {!isRedirectPage &&
          !isAptitudeTestPage &&
          !isCandidateDashboardPage &&
          !isapplynow &&
          !isSchoolDashboard && !dbsapplynow && (
            <HeaderFour user={user} onLogout={handleLogout} key={key} index={0} />
          )}

        <Providers>{children}</Providers>
        <ToastContainer />
        {/* <BackToTopCom /> */}
      </body>
    </html>
  );
}
