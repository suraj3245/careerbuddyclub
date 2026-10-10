import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin/session";
import CatResultsDashboard from "@/app/components/admin/cat-results/CatResultsDashboard";

export const dynamic = "force-dynamic";

export default function AdminCatResultsPage() {
  const session = verifySessionToken(cookies().get(ADMIN_COOKIE)?.value);
  if (!session) redirect("/admin/login");
  return <CatResultsDashboard adminEmail={session.email} />;
}
