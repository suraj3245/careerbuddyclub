/**
 * Chrome + style scope for every CareerWise route.
 *
 * `.cw-root` is the isolation boundary described in
 * src/careerwise/styles/careerwise.scss — it must wrap all CareerWise markup,
 * including the header and footer, or the globally loaded Bootstrap /
 * careerbuddyclub stylesheets will restyle it.
 *
 * `.page` is CareerWise's own outer container (background gradient, min
 * height), kept exactly as it was in the standalone app's root layout.
 *
 * This is a server component: pages that use it can still export `metadata`.
 */

import React from "react";
import "./styles/careerwise.scss";
import { AuthProvider } from "@/careerwise/context/AuthContext";
import Header from "@/careerwise/layout/header/Header";
import Footer from "@/careerwise/layout/footer/Footer";

interface CareerWiseShellProps {
  children: React.ReactNode;
  /** Full-bleed routes (e.g. the advisor flow) render without header/footer. */
  chrome?: boolean;
}

export default function CareerWiseShell({
  children,
  chrome = true,
}: CareerWiseShellProps) {
  return (
    <div className="cw-root">
      <AuthProvider>
        <div className="page">
          {chrome && <Header />}
          {children}
          {chrome && <Footer />}
        </div>
      </AuthProvider>
    </div>
  );
}
