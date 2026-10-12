import React from "react";
import type { Guide } from "@/lib/guides/types";
import { formatGuideDate, resolveGuideSeo } from "@/lib/guides/seo";
import { SITE_NAME } from "@/config/site";

/**
 * Byline + the page's one <h1> + "Last updated" line for every guide.
 * The headline comes from the guide entry, so a guide can't ship without an H1.
 */
const GuideHeader = ({ guide }: { guide: Guide }) => {
  const { headline } = resolveGuideSeo(guide);
  const byline = [guide.category, formatGuideDate(guide.datePublished), `By ${SITE_NAME}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <header>
      <div className="mb-2 text-muted small mt-5">
        <p className="mb-0">{byline}</p>
      </div>
      <h1
        className="fw-semibold mb-2 mt-4"
        style={{ lineHeight: 1.35, fontSize: "2rem" }}
      >
        {headline}
      </h1>
      <p className="text-muted small mb-4">
        Last updated:{" "}
        <time dateTime={guide.dateModified}>{formatGuideDate(guide.dateModified)}</time>
      </p>
    </header>
  );
};

export default GuideHeader;
