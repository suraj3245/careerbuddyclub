import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin/session";
import AdminLoginForm from "@/app/components/admin/cat-results/AdminLoginForm";

export const dynamic = "force-dynamic";

export default function AdminLoginPage() {
  if (verifySessionToken(cookies().get(ADMIN_COOKIE)?.value)) redirect("/admin/cat-results");
  return <AdminLoginForm />;
}
