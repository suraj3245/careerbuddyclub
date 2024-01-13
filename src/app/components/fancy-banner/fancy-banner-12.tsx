import Link from "next/link";
import React from "react";
import CounterUp from "../common/counter-up";

// counter data
const counter_data: {
  count: number;
  text: string;
  title: string;
}[] = [
  { count: 786, text: "+", title: "Worldwide Client" },
  { count: 1000, text: "+", title: "Top Talents" },
  { count: 100, text: "+", title: "Institution" },
];

const FancyBannerTwelve = () => {
  return (
    <section className="fancy-banner-two mt-100 xl-mt-100 lg-mt-100 md-mt-100">
      <div className="container">
        <div className="bg-wrapper position-relative wow fadeInUp">
          <div className="row">
            <div className="col-xl-6 col-lg-7">
              <div className="text-wrapper">
                <div className="title-two">
                  <div className="sub-title">
                    <span style={{ color: "#EEE30D" }}>
                      Carrer Buddy Club
                    </span>
                  </div>
                </div>
                <p className="text-white mt-25 mb-55 lg-mb-40">
                  - Empowering 200,000 Class 12 and Grad students to make informed career choices.
                  <br /> - Forming impactful partnerships with 1200 schools.
                  <br /> - In 2023, counseling over 3,000 school and college students, aiding them in selecting the right career path and institution.
                  <br /> - Over 1,000 students have chosen our Job Guarantee Program. 
                  <br /> - Delivering personalized support to both students and institutions through cutting-edge technology solutions.
                </p>
                <div className="counter-wrapper pb-50 lg-pb-30">
                  <div className="row">
                    {counter_data.map((c, i) => (
                      <div key={i} className="col-sm-4 col-6">
                        <div className="counter-block mt-20 wow fadeInUp">
                          <div className="main-count text-white fw-500">
                            <span className="counter">
                              <CounterUp number={c.count} text={c.text} />
                            </span>
                          </div>
                          <p className="text-white m0">{c.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5">
              <div className="img-meta ms-xl-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FancyBannerTwelve;
