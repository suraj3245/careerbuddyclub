import React from "react";
import CounterTwo from "../counter/counter-two";

const FeatureThirteen = () => {
  return (
    <section className="text-feature-four position-relative pt-120 xl-pt-20 lg-pt-20 md-pt-20 pb-20 xl-pb-20 bg-light">
      <div className="container">
        
        {/* New Buttons Section */}
        <div className="text-align">
          <h3 className="mb-4" style={{ color: "#eed30d" }}>Programs Offered</h3>
      
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-8 col-sm-10 d-flex flex-wrap justify-content-center">
                <button className="btn-five wow fadeInUp mx-2 mb-2">B.Tech</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">MBA</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">MCA</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">BBA</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">BCA</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">BSC</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">B.Pharma</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">D.Pharma </button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">B.Com</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">BBA LL.B</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">PGDM</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">B.Design</button>
                <button className="btn-five wow fadeInUp mx-2 mb-2">GNM</button>
              </div>
            </div>
        </div>

        <div className="border-bottom pb-5 lg-pb-3 mt-5 xl-mt-8 lg-mt-3">
          <div className="row">
            <h3 className="mt-40 md-mt-20 mb-40 md-mb-20" style={{ color: "#eed30d" }}>
              Career Landscape
            </h3>
            <CounterTwo />
          </div>
        </div>

        {/* New Text Section */}
        <div className="text-center mt-4">
          <h2 className="mt-40 md-mt-20 mb-40 md-mb-20" style={{ color: "#eed30d" }}>
            Confused? Explore Your Ideal Career Fit with Us!
          </h2>
          <p className="lead">
            Dive into a quick and insightful assessment that will shine a light on your unique
            personality, cognitive strengths, and professional aptitudes.
          </p>
          <p className="lead mb-5">
            Discover Your Ideal Career Path with Our Simple and Effective Career Aptitude Test –
            Find Your Best Fit Today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureThirteen;
