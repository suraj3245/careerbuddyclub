"use client";
import "./globals.scss";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import BackToTopCom from "./components/common/back-to-top-com";
import { Providers } from "@/redux/provider";
import HeaderFour from "@/layouts/headers/header-4";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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
    setUser({ value: null }); // Update the user state to reflect logout
    // Any additional logout logic goes here
    setKey(Math.random());
  };
  // Check if the current page is 'aptitudetest'
  const pathname = usePathname();
  const isRedirectPage = pathname.startsWith("/redirect");
  const isAptitudeTestPage = usePathname() === "/aptitudetest";
  const isCandidateDashboardPage = pathname.startsWith(
    "/dashboard/candidate-dashboard/"
  );
  // const isCollegeDetailsPage = pathname.startsWith("/college-details");
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${gordita.variable} ${garamond.variable}`}
      >
        {!isRedirectPage &&
          !isAptitudeTestPage &&
          (!isMobile || !isCandidateDashboardPage) && (
            <HeaderFour user={user} onLogout={handleLogout} key={key} />
          )}

        <Providers>{children}</Providers>
        <BackToTopCom />
      </body>
    </html>
  );
}
