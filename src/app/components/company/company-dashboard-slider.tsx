import React from "react";
import CompanyV1Filter from "./filter/company-v1-filter";
import ShortSelect from "../common/short-select";
import company_data from "@/data/company-data";
import CompanySlider from "./company-slider"; // Make sure the path to CompanySlider is correct

const CompanyDashboardAreaSlider = () => {
  return (
    <section className="company-profiles pt-50 lg-pt-50 pb-50 xl-pb-50 lg-pb-50">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <CompanySlider companies={company_data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyDashboardAreaSlider;
