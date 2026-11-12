import React from "react";
import type { Guide } from "@/lib/guides/types";
import { formatGuideDate } from "@/lib/guides/seo";

const GuideUpdated = ({ guide }: { guide: Guide }) => (
  <p className="text-muted small mb-4">
    Last updated: <time dateTime={guide.dateModified}>{formatGuideDate(guide.dateModified)}</time>
  </p>
);

export default GuideUpdated;
