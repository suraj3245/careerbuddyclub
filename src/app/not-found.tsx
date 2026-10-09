import type { Metadata } from "next";
import ErrorPageArea from "./components/error/error-page-area";

export const metadata: Metadata = {
  title: "Page Not Found | Career Buddy Club",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div>
      <ErrorPageArea />
    </div>
  );
}
