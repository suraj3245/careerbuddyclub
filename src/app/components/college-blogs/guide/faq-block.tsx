import React from "react";
import type { FaqEntry } from "@/lib/guides/types";
import { faqSchema, jsonLd } from "@/lib/guides/seo";

interface FaqBlockProps {
  items: FaqEntry[];
  heading?: string;
  id?: string;
  /** Heading level for the block title (questions use the next level down). */
  headingLevel?: 2 | 3;
}

/**
 * FAQ block: prints the visible questions AND the FAQPage schema from the same
 * entries, so the two can never drift apart. Use at most once per page.
 */
const FaqBlock = ({
  items,
  heading = "Frequently Asked Questions (FAQs)",
  id = "faqs",
  headingLevel = 2,
}: FaqBlockProps) => {
  if (!items?.length) return null;
  const Title = `h${headingLevel}` as "h2" | "h3";
  const Question = `h${headingLevel + 1}` as "h3" | "h4";
  return (
    <section id={id} className="mt-4 mb-4">
      <Title className={`mb-3 mt-4 ${headingLevel === 2 ? "fs-2" : "fs-3"}`}>{heading}</Title>
      {items.map((item, i) => (
        <div key={i} className="mb-3">
          <Question className="fs-5 fw-semibold mb-2">{item.question}</Question>
          <p className="mb-2">{item.answer}</p>
          {item.points?.length ? (
            <ul className="mb-2">
              {item.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(items)) }}
      />
    </section>
  );
};

export default FaqBlock;
