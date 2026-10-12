import { Metadata } from "next";
import { fetchCollegesData } from "../api";
import { listingMetadata, resolveListing, type SearchParams } from "../listing";
import CollegeListingPage from "../listing-page";

interface PageProps {
  params?: { slug?: string | string[] };
  searchParams?: SearchParams;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const data = await fetchCollegesData();
  return listingMetadata(resolveListing(params?.slug, searchParams, data));
}

export default function CollegeFilterPage({ params, searchParams }: PageProps) {
  return <CollegeListingPage slug={params?.slug} searchParams={searchParams} />;
}
