import type { Metadata } from "next";

// Admin area: keep it out of search engines.
export const metadata: Metadata = {
  title: "Admin | Career Buddy Club",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
