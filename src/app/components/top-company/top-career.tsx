import React, { useEffect } from "react";
import { CAT_CODE_DESCRIPTIONS } from "@/data/cat-codes";
interface TopCareerProps {
  topCategories: string[];
}
const company_data = CAT_CODE_DESCRIPTIONS;
const TopCareer: React.FC<TopCareerProps> = ({ topCategories }) => {
  const formattedTopCategories = topCategories
    .map((cat) => cat.charAt(0).toUpperCase())
    .join("");
  const newScoreArry = company_data.filter(
    (itm) => itm.name === formattedTopCategories
  );
  return (
    <section
      className="top-company-section rounded-5 mt-3"
      style={{ backgroundColor: "#13adbd" }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="title-one text-center">
            <h2
              className="main-font wow fadeInUp text-white text-uppercase mt-3"
              data-wow-delay="0.3s"
              style={{ fontSize: "20px",
                lineHeight: "1.4",
                 color: "#0AAA40",
                 fontWeight: 600,
                fontFamily: "'Georgia', serif",
                fontStyle: "italic", }}
            >
              Personality Traits According To Your Score
            </h2>
          </div>
        </div>
        <div
          className="container-fluid p-2 d-flex justify-content-around align-items-center flex-wrap"
          style={{ marginBottom: "60px" }}
        >
          {newScoreArry.length > 0 ? (
            newScoreArry.map((item) => (
              <div
                key={item.name}
                className="col-lg-12 col-md-12 col-sm-12 mb-4"
              >
                <div className="card-style-nine text-center tran2s wow fadeInUp rounded-5">
                  <h2
                    className="mt-2"
                    style={{
                      fontSize: "23px",
                      fontWeight: 'bold',
                      color: "green",
                      fontFamily: "'Georgia', serif",
                fontStyle: "italic",
                    }}
                  >
                    3 Point Code:{" "}
                    <span style={{ fontStyle: "italic" }}>
                      {formattedTopCategories}
                    </span>
                  </h2>
                  <p
                    className="fw-500"
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.7",
                      color: "#333",
                      fontFamily: "'Georgia', serif",
                      fontStyle: "italic",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p
              className="text-white"
              style={{ fontSize: "17px", fontWeight: "bold" }}
            >
              Interpretation not found for the code: {formattedTopCategories}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopCareer;
