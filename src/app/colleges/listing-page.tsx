import React from "react";
import { notFound, permanentRedirect } from "next/navigation";
import Wrapper from "@/layouts/wrapper";
import FilterPage from "../components/filters/filterpage";
import { fetchCollegesData } from "./api";
import { resolveListing, type SearchParams } from "./listing";

/** Shared server component for /colleges and /colleges/[...slug]. */
export default async function CollegeListingPage({
  slug,
  searchParams,
}: {
  slug?: string | string[];
  searchParams?: SearchParams;
}) {
  const data = await fetchCollegesData();
  const listing = resolveListing(slug, searchParams, data);

  if (listing.notFound) notFound();
  if (listing.redirectTo) {
    permanentRedirect(`${listing.redirectTo}${listing.extraQuery ? `?${listing.extraQuery}` : ""}`);
  }

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <FilterPage
          h1={listing.h1}
          streamId={listing.streamId}
          streamDescription={listing.streamDescription}
          city={listing.city}
          colleges={listing.colleges}
          total={listing.total}
          page={listing.page}
          pageCount={listing.pageCount}
          basePath={listing.basePath}
          extraQuery={listing.extraQuery}
          filters={listing.filters}
          filterOptions={listing.filterOptions}
          streams={listing.streams}
        />
      </div>
    </Wrapper>
  );
}
