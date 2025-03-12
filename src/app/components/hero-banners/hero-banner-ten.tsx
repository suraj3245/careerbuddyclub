"use client";
import React from "react";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";

const HeroBannerTen = () => {
  const { handleSubmit, setLocationVal, setCategoryVal, setSearchText } =
    useSearchFormSubmit();

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <style jsx>{`
        h1 {
          font-size: 4.5rem;
          font-weight: 700;
          color: white;
          text-shadow: 2px 2px 4px black;
          text-align: center;
          opacity: 0;
          animation: fadeInUp 0.6s ease-in-out forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="hero-banner-ten position-relative pt-170 lg-pt-150 pb-100 lg-pb-150 md-pb-100">
        <div className="container">
          <div className="position-relative sm-pb-20">
            <div className="row">
              <div className="col-xxl-7 col-lg-8 m-auto pt-200 text-center">
                <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                  "Empowering Minds, Igniting Change: Where Mentors Inspire and
                  Speakers Spark Transformation."
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBannerTen;
