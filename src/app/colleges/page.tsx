// app/colleges/page.tsx
import { Metadata } from "next";
import { fetchCollegesData } from "./api";
import { listingMetadata, resolveListing, type SearchParams } from "./listing";
import CollegeListingPage from "./listing-page";

interface PageProps {
  searchParams?: SearchParams;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const data = await fetchCollegesData();
  return listingMetadata(resolveListing(undefined, searchParams, data));
}

export default function CollegePage({ searchParams }: PageProps) {
  return <CollegeListingPage searchParams={searchParams} />;
}
