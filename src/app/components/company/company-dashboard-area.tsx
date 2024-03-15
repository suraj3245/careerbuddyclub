"use client";
import React, { useState } from "react";
import CompanyV1Filter from "./filter/company-v1-filter";
import ShortSelect from "../common/short-select";
import company_data from "@/data/company-data";
import CompanyGridItem from "./company-grid-item";
import CompanyListItem from "./company-list-item";

const CompanyDashboardArea = ({ style_2 = false }: { style_2?: boolean }) => {
  const [jobType, setJobType] = useState<string>(style_2 ? "list" : "grid");

  return (
    <section className="company-profiles pt-50 lg-pt-50 pb-50 xl-pb-50 lg-pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="ms-xxl-5 ms-xl-3">
              <div
                className={`accordion-box grid-style ${
                  jobType === "grid" ? "show" : ""
                }`}
              >
                <div className="row">
                  {company_data.map((item) => (
                    <div
                      key={item.id}
                      className="col-xl-4 col-lg-6 col-md-4 col-sm-6 d-flex"
                    >
                      <CompanyGridItem item={item} />
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`accordion-box list-style ${
                  jobType === "list" ? "show" : ""
                }`}
              >
                {company_data.map((item) => (
                  <CompanyListItem key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDashboardArea;
