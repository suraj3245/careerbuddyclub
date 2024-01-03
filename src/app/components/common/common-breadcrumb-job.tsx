import React from "react";

const CommonBreadcrumbjob = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="inner-banner-one position-relative">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-6 m-auto text-center">
              <div className="title-two">
                <h2 className="text-black pt-40">{title}</h2>
              </div>
              <p className="text-lg text-black mt-30 lg-mt-20">{subtitle}</p>
            </div>
            <ul className="d-flex align-items-center justify-content-center style-none">
              <li>
                <a href="#" className="fw-500  btn-five text-dark">
                  Download Brochure
                </a>
              </li>
              <li className="d-flex d-md-block ms-4">
                <a href="#" className="btn-five">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBreadcrumbjob;
