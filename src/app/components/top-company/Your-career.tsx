import React, { useEffect, useState } from "react";
import axios from "axios";

const YourCareer = () => {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    // Make a request to get the career choices from Thunder Client
    const temptoken = localStorage.getItem("token");
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/careerresultskills",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${temptoken}`,
      },
      data: { result_letters: "RCE" },
    };

    axios
      .request(options)
      .then((response) => {
        // Update the state with the received data
        console.log(response.data);
        setCompanyData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className="top-company-section pt-50 lg-pt-50 pb-50 lg-pb-50 mt-50 xl-mt-50">
      <div className="container">
        <div className="row justify-content-between align-items-center pb-40 lg-pb-10">
          <div className="col-sm-7">
            <div className="title-one">
              <h2 className="main-font wow fadeInUp" data-wow-delay="0.3s">
                Popular Career Choices According To Your Score
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {companyData.map((item, index) => (
            <div key={index} className="col-lg-6 col-md-5 col-sm-6">
              <div className="card-style-nine text-center tran3s mt-25 wow fadeInUp">
                <div className="text-lg fw-500 text-dark mt-10 mb-10">
                  {item}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourCareer;
