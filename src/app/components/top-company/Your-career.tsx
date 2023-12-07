import React from "react";

// company data
const company_data: {
  id: number;
  name: string;
}[] = [
  {
    id: 1,
    name: "Retail Manager",
  },
  {
    id: 2,
    name: "Cost Accountant",
  },
  {
    id: 3,
    name: "Entrepreneur",
  },
  {
    id: 4,
    name: "Chartered Accountant",
  },
  {
    id: 5,
    name: "Product Manager",
  },
  {
    id: 6,
    name: "Business Head",
  },
];

const YourCareer = () => {
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
          {company_data.map((item) => (
            <div key={item.id} className="col-lg-3 col-md-5 col-sm-6">
              <div className="card-style-nine text-center tran3s mt-25 wow fadeInUp">
                <div className="text-lg fw-500 text-dark mt-10 mb-10">
                  {item.name}
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
