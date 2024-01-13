import Link from "next/link";
import React from "react";
import CounterUp from "../common/counter-up";

// counter data
const counter_data: {
  count: number;
  text: string;
  title: string;
}[] = [
  { count: 1200, text: "+", title: "Schools" },
  { count: 50, text: "+", title: "Colleges/Universities" },
  { count: 100, text: "+", title: "Corporates" },
];

const FancyBannerTwo = () => {
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
                      One Solution For All
                    </span>
                  </div>
                  <h2 className="fw-600 text-white">
                  But why choose <br />
                    <span style={{ color: "#EEE30D" }}>Career</span>
                    Buddy
                    <span style={{ color: "#EEE30D" }}>Club?</span>
                  </h2>
                </div>
                <p className="text-white mt-25 mb-55 lg-mb-40">
                  - The trusted partner of more than <b>50+ colleges and
                  institutions.</b>
                  <br />
                  - Gain data-driven insights to refine career strategies and
                  track placement success effectively.
                  <br /> - Engage students with ease using our <b>in-house tools </b>
                  for event promotion and internship opportunities.
                  <br />- <b> Save time with simplified processes </b>for event
                  management, job postings, and student tracking.
                  <br /> - 10+ years of experience guiding students to success{" "}
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
                <Link href="/" className="explore-btn tran3s ">
                  Explore Career Buddy Club To Empower You and Your Students.
                </Link>
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

export default FancyBannerTwo;
