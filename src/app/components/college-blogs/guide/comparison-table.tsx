import React from "react";
import Link from "next/link";
import type { ComparisonRow, ComparisonTableData } from "@/lib/guides/types";

type ColumnKey = Exclude<keyof ComparisonRow, "collegeHref">;

const COLUMNS: { key: ColumnKey; label: string }[] = [
  { key: "college", label: "College" },
  { key: "location", label: "Location" },
  { key: "courses", label: "Courses" },
  { key: "approval", label: "Approval / Affiliation" },
  { key: "fee", label: "Annual Fee" },
  { key: "seats", label: "Seats" },
  { key: "placements", label: "Placements" },
];

const isExternal = (href: string) => /^https?:\/\//i.test(href);

/**
 * Reusable comparison block. Rows are typed in the guide entry; columns that are
 * empty for every row are left out. Renders a real <table> with header cells
 * that scrolls horizontally on small screens.
 */
const ComparisonTable = ({
  data,
  id = "comparison",
  headingLevel = 2,
}: {
  data: ComparisonTableData;
  id?: string;
  headingLevel?: 2 | 3;
}) => {
  if (!data?.rows?.length) return null;
  const Heading = `h${headingLevel}` as "h2" | "h3";
  const columns = COLUMNS.filter(
    (col) => col.key === "college" || data.rows.some((row) => row[col.key]?.toString().trim())
  );

  return (
    <section id={id} className="mt-4 mb-5">
      {data.heading && (
        <Heading className={`mt-4 mb-4 ${headingLevel === 2 ? "fs-2" : "fs-3"}`}>{data.heading}</Heading>
      )}
      <div
        className="table-responsive"
        style={{ WebkitOverflowScrolling: "touch" }}
        tabIndex={0}
        aria-label={data.heading ? `${data.heading} (scrollable)` : "College comparison (scrollable)"}
      >
        <table className="table table-bordered table-striped align-middle mb-2" style={{ minWidth: 640 }}>
          <thead className="table-light">
            <tr>
              {columns.map((col) => (
                <th key={col.key} scope="col" style={{ whiteSpace: "nowrap" }}>
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, i) => (
              <tr key={i}>
                {columns.map((col) => {
                  if (col.key === "college") {
                    const name = row.collegeHref ? (
                      isExternal(row.collegeHref) ? (
                        <a href={row.collegeHref} target="_blank" rel="noopener" className="text-primary">
                          {row.college}
                        </a>
                      ) : (
                        <Link href={row.collegeHref} className="text-primary">
                          {row.college}
                        </Link>
                      )
                    ) : (
                      row.college
                    );
                    return (
                      <th key={col.key} scope="row" className="fw-semibold">
                        {name}
                      </th>
                    );
                  }
                  return <td key={col.key}>{row[col.key] || "—"}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {data.note && <p className="text-muted small">{data.note}</p>}
    </section>
  );
};

export default ComparisonTable;
