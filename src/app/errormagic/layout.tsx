import type { Metadata } from "next";
import type { ReactNode } from "react";

// Not for search engines (logged-in area / login flow).
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NoIndexLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
