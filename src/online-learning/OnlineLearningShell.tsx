/**
 * Chrome + style scope for every CareerWise route.
 *
 * `.cw-root` is the isolation boundary described in
 * src/careerwise/styles/online-learning.scss — it must wrap all CareerWise markup,
 * including the header and footer, or the globally loaded Bootstrap /
 * careerbuddyclub stylesheets will restyle it.
 *
 * `.page` is CareerWise's own outer container (background gradient, min
 * height), kept exactly as it was in the standalone app's root layout.
 *
 * This is a server component: pages that use it can still export `metadata`.
 */

import React from "react";
import "./styles/online-learning.scss";
import { AuthProvider } from "@/online-learning/context/AuthContext";
import Header from "@/online-learning/layout/header/Header";
import Footer from "@/online-learning/layout/footer/Footer";
import { fetchOnlineStreams } from "./data/api";

interface OnlineLearningShellProps {
  children: React.ReactNode;
  /** Full-bleed routes (e.g. the advisor flow) render without header/footer. */
  chrome?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
}

export default async function OnlineLearningShell({
  children,
  chrome = true,
  showHeader = true,
  showFooter = true,
}: OnlineLearningShellProps) {
  const isHeaderVisible = chrome && showHeader;
  const isFooterVisible = chrome && showFooter;
  
  const streams = isHeaderVisible ? await fetchOnlineStreams() : [];

  return (
    <div className="cw-root">
      <AuthProvider>
        <div className="page">
          {isHeaderVisible && <Header initialStreams={streams} />}
          {children}
          {isFooterVisible && <Footer />}
        </div>
      </AuthProvider>
    </div>
  );
}
