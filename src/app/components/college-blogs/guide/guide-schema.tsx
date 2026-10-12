import React from "react";
import type { Guide } from "@/lib/guides/types";
import { articleSchema, breadcrumbSchema, jsonLd } from "@/lib/guides/seo";

/** Article + BreadcrumbList structured data, generated from the guide entry. */
const GuideSchema = ({ guide }: { guide: Guide }) => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(articleSchema(guide)) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbSchema(guide)) }}
    />
  </>
);

export default GuideSchema;
