"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import Slider from "react-slick";
import user_1 from "@/assets/images/assets/img_14.jpg";
import user_2 from "@/assets/images/assets/img_15.jpg";
import user_3 from "@/assets/images/assets/img_57.jpeg";
import icon from "@/assets/images/icon/icon_41.svg";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const slider_data: {
  id: number;
  review_text: string;
  review_start: number[];
  desc: string;
  name: string;
  location: string;
  user: StaticImageData;
}[] = [
  {
    id: 1,
    review_text: "Impressive!",
    review_start: [1, 2, 3, 4, 5],
    desc: "The team at this job portal truly cares about their clients. From the initial consultation to the final job offer, they provided me with invaluable support and guidance.",
    name: "Akhil Bharghav",
    location: "Taj Agra",
    user: user_1,
  },
  {
    id: 2,
    review_text: "Great work!!",
    review_start: [1, 2, 3, 4, 5],
    desc: "I landed my dream job! The mentorship and upskilling programs were extremely helpful in preparing me for the interview and giving me the confidence to pursue my dream.",
    name: "Mohit",
    location: "Skywings Private Limited",
    user: user_2,
  },
  {
    id: 3,
    review_text: "Impressive!",
    review_start: [1, 2, 3, 4, 5],
    desc: "I would highly recommend this service to anyone looking to further their career.",
    name: "Ashwani Goswami",
    location: "KSPL",
    user: user_3,
  },
];

const cardRotations = ["-2deg", "1deg", "-1.5deg"];

const FeedbackSeven = () => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const sliderNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <section className="feedback-seven-ui">
      <div className="heading-wrapper">
        <h3 className="feedback-seven-title">
           What Our Students Think About Us ?<br/>
          </h3>
      </div>
      <div className="feedback-seven-sliderwrap">
        <Slider ref={sliderRef} {...slider_setting}>
          {slider_data.map((item, i) => (
            <div key={item.id} className="feedback-seven-slide">
              <div
                className="feedback-seven-card"
                style={{
                  transform: `rotate(${cardRotations[i % cardRotations.length]})`,
                }}
              >
                <div className="feedback-seven-card-content">
                  <Image src={icon} alt="quote icon" className="quote-icon" width={36} height={36} />
                  <p className="testimonial-text">&quot;{item.desc}&quot;</p>
                  <div className="feedback-seven-user">
                    <div>
                      <span className="user-name">{item.name}</span>
                      <span className="user-role">{item.location}</span>
                    </div>
                    <Image src={item.user} alt={item.name} className="user-avatar" width={48} height={48} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* <div className="feedback-seven-arrows">
          <button onClick={sliderPrev} className="arrow-btn prev">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button onClick={sliderNext} className="arrow-btn next">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div> */}
      </div>
      <style jsx>{`
        .feedback-seven-ui {
          background: #fff;
          padding: 60px 0 60px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: 'Inter', Arial, sans-serif;
        }
        .heading-wrapper {
          width: 100%;
          text-align: center;
          margin-bottom: 36px;
        }
        .feedback-seven-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #191b22;
          margin-bottom: 0;
          line-height: 1.13;
        }
        .highlight {
          color: #191b22;
        }
        .feedback-seven-sliderwrap {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        .feedback-seven-slide {
          display: flex !important;
          justify-content: center;
          align-items: stretch;
        }
        .feedback-seven-card {
          background: #f3f7fb;
          border-radius: 24px;
          box-shadow: 0 4px 24px 0 rgba(44,62,80,0.06);
          padding: 36px 36px 24px 36px;
          min-height: 340px;
          max-width: 360px;
          margin: 20px auto 32px auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: box-shadow 0.18s, transform 0.18s;
        }
        .feedback-seven-card:hover {
          box-shadow: 0 8px 36px 0 rgba(44,62,80,0.11);
          transform: scale(1.03) !important;
        }
        .feedback-seven-card-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .quote-icon {
          margin-bottom: 16px;
          opacity: 0.7;
        }
        .testimonial-text {
          font-size: 1.18rem;
          font-weight: 500;
          color: #222943;
          margin-bottom: 28px;
          line-height: 1.5;
        }
        .feedback-seven-user {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1.5px solid #d3e1ef;
          padding-top: 18px;
          margin-top: auto;
        }
        .user-name {
          font-weight: 700;
          color: #191b22;
          font-size: 1rem;
        }
        .user-role {
          display: block;
          color: #6c7a92;
          font-size: 0.92rem;
          margin-top: 2px;
          font-weight: 500;
        }
        .user-avatar {
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(44,62,80,0.10);
        }
        .feedback-seven-arrows {
          display: flex;
          justify-content: center;
          gap: 18px;
          margin-top: 8px;
        }
        .arrow-btn {
          background: #191b22;
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          cursor: pointer;
          transition: background 0.14s, box-shadow 0.14s;
          box-shadow: 0 2px 8px rgba(44,62,80,0.07);
        }
        .arrow-btn:hover {
          background: #4251ef;
          box-shadow: 0 4px 18px rgba(44,62,80,0.13);
        }
        @media (max-width: 1024px) {
          .feedback-seven-card {
            max-width: 90vw;
          }
        }
        @media (max-width: 768px) {
          .feedback-seven-title {
            font-size: 2.1rem;
          }
          .feedback-seven-card {
            max-width: 98vw;
            padding: 26px 14px 18px 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default FeedbackSeven;