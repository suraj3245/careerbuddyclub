import { Metadata } from "next";
import React from "react";
import { notFound } from "next/navigation";
import Wrapper from "@/layouts/wrapper";
import CollegeDetailsClient from "@/app/components/college-details/CollegeDetailsClientPage";
import FooterOne from "@/layouts/footers/footer-one";

/**
 * Server-side existence check so unknown colleges return HTTP 404.
 * Returns null if the API is unreachable — in that case we render the page as
 * before rather than 404-ing every college during an API outage.
 */
async function collegeExists(id: string): Promise<boolean | null> {
  try {
    const res = await fetch(
      "https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails",
      { method: "POST", next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    const colleges: any[] = data?.colleges ?? [];
    if (colleges.length === 0) return null;
    return colleges.some((c) => String(c.college_short_name) === String(id));
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  return {
    alternates: { canonical: `https://careerbuddyclub.com/college-details/${params.id}` },
  };
}

const CollegeDetailsPage = async ({ params }: { params: { id: string } }) => {
  if ((await collegeExists(params.id)) === false) notFound();
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CollegeDetailsClient id={params.id} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default CollegeDetailsPage;
