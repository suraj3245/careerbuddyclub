import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  fetchUniversityBySlug,
  fetchAllOnlineUniversitySlugs,
} from "@/online-learning/data/api";
import UniversityProfilePage from "@/online-learning/components/university-profile/UniversityProfilePage";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const universities = await fetchAllOnlineUniversitySlugs();
  return universities.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const university = await fetchUniversityBySlug(params.slug);
  if (!university) {
    return { title: "University Not Found | Career Buddy Club" };
  }

  const feeText = university.feeRange
    ? `₹${new Intl.NumberFormat("en-IN").format(university.feeRange.min)} – ₹${new Intl.NumberFormat("en-IN").format(university.feeRange.max)}`
    : "";

  const description = `Explore ${university.totalPrograms} online programs at ${university.name}. ${feeText ? `Fees from ${feeText}.` : ""} Compare programs, check eligibility, and get free counselling.`;

  return {
    title: `${university.name} Online Programs | Career Buddy Club`,
    description,
    openGraph: {
      title: `${university.name} Online Programs`,
      description,
      type: "website",
      siteName: "Career Buddy Club",
    },
  };
}

export default async function OnlineUniversityPage({ params }: PageProps) {
  const university = await fetchUniversityBySlug(params.slug);

  if (!university) {
    notFound();
  }

  return <UniversityProfilePage university={university} />;
}
