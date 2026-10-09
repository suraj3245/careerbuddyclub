import { notFound } from "next/navigation";

// Any URL that doesn't match a real route lands here.
// notFound() renders app/not-found.tsx with a real HTTP 404 (not 200).
export default function CatchAllNotFound() {
  notFound();
}
