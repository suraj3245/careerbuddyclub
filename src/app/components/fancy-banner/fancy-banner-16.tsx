"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const blogs = [
  {
    src: "/assets/images/blog/blog_img_34.jpg",
    title: "Celebrating Ganesh Chaturthi",
    desc: "Experience the vibrant cultural celebrations and student activities.",
    link: "/blog-v3",
  },
  {
    src: "/assets/images/blog/blog_img_36.jpg",
    title: "CEO Honored For Excellence",
    desc: "Recognizing innovation and leadership in the education sector.",
    link: "/blog-v3",
  },
  {
    src: "/assets/images/blog/blog_img_35.jpg",
    title: "Adds-Up Day: A Success",
    desc: "Career Buddy Club successfully hosted its Adds-Up Day",
    link: "/blog-v3",
  },
    {
    src: "/assets/images/blog/blog_img_39.jpg",
    title: "World First Aid Day",
    desc: "Awareness and healthcare training programs for students.",
    link: "/blog-v3",
  }
];

const PremiumBlogSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const [current, setCurrent] = useState(0);

  // RESPONSIVE CARD WIDTH
  const getCardWidth = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 768 ? 260 : 320;
    }
    return 320;
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    if (!sliderRef.current) return;

    const next = (current + 1) % blogs.length;

    setCurrent(next);

    sliderRef.current.scrollTo({
      left: next * getCardWidth(),
      behavior: "smooth",
    });
  };

  const prevSlide = () => {
    if (!sliderRef.current) return;

    const prev = current === 0 ? blogs.length - 1 : current - 1;

    setCurrent(prev);

    sliderRef.current.scrollTo({
      left: prev * getCardWidth(),
      behavior: "smooth",
    });
  };

  return (
    <section className="premium-slider-section">
      {/* HEADER */}
      <div className="top-header">
        <div>
          <span className="mini-title">LATEST BLOGS</span>
          <h2>Career Buddy Club Insights</h2>
        </div>

        <Link href="/blog-v3" className="view-all-btn">
          View All
        </Link>
      </div>

      {/* SLIDER */}
      <div className="slider-wrapper">
        {/* LEFT BUTTON */}
        <button className="nav-btn left-btn" onClick={prevSlide}>
          ❮
        </button>

        {/* TRACK */}
        <div className="slider-track" ref={sliderRef}>
          {blogs.map((blog, index) => (
            <div className="premium-card" key={index}>
              {/* IMAGE */}
              <div className="image-box">
                <img src={blog.src} alt={blog.title} />

                <div className="gradient-overlay"></div>
              </div>

              {/* CONTENT */}
              <div className="card-content">
                <h3>{blog.title}</h3>

                <p>{blog.desc}</p>

                <Link href={blog.link} className="read-btn">
                  Read Article
                  <span>→</span>
                </Link>
              </div>

              {/* GLOW */}
              <div className="card-glow"></div>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button className="nav-btn right-btn" onClick={nextSlide}>
          ❯
        </button>
      </div>

      <style jsx>{`
        .premium-slider-section {
          width: 100%;
          padding: 60px 16px;
          overflow: hidden;
          background: linear-gradient(
            180deg,
            #f9fdff 0%,
            #ffffff 50%,
            #f4fbfc 100%
          );
        }

        /* HEADER */
        .top-header {
          max-width: 1300px;
          margin: auto;
          margin-bottom: 35px;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .mini-title {
          color: #14adbd;
          font-size: 12px;
          letter-spacing: 2px;
          font-weight: 700;
        }

        .top-header h2 {
          font-size: 2.2rem;
          font-weight: 800;
          margin-top: 8px;
          color: #081f32;
        }

        .view-all-btn {
          padding: 12px 24px;
          border-radius: 50px;
          background: linear-gradient(135deg, #14adbd, #0f8c9a);
          color: white;
          text-decoration: none;
          font-weight: 700;
          transition: 0.4s ease;
          box-shadow: 0 10px 25px rgba(20, 173, 189, 0.25);
          white-space: nowrap;
        }

        .view-all-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 35px rgba(20, 173, 189, 0.35);
        }

        /* SLIDER */
        .slider-wrapper {
          position: relative;
          max-width: 1320px;
          margin: auto;
        }

        .slider-track {
          display: flex;
          gap: 20px;
          overflow-x: hidden;
          scroll-behavior: smooth;
          padding: 10px 5px 20px;
        }

        /* CARD */
        .premium-card {
          min-width: 300px;
          max-width: 300px;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.95);
          position: relative;
          flex-shrink: 0;
          transition: all 0.45s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .premium-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.16);
        }

        /* IMAGE */
        .image-box {
          position: relative;
          height: 190px;
          overflow: hidden;
        }

        .image-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .premium-card:hover img {
          transform: scale(1.12);
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.55),
            transparent
          );
        }

        /* CONTENT */
        .card-content {
          padding: 20px;
        }

        .card-content h3 {
          font-size: 1.1rem;
          line-height: 1.5;
          margin-bottom: 12px;
          color: #081f32;
          font-weight: 700;
          transition: 0.3s ease;
        }

        .premium-card:hover h3 {
          color: #14adbd;
        }

        .card-content p {
          color: #64748b;
          font-size: 13px;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        /* BUTTON */
        .read-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #14adbd;
          font-weight: 700;
          font-size: 13px;
          transition: 0.3s ease;
        }

        .read-btn span {
          transition: 0.3s ease;
        }

        .read-btn:hover span {
          transform: translateX(6px);
        }

        .read-btn:hover {
          color: #0d95a2;
        }

        /* GLOW */
        .card-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(20, 173, 189, 0.08),
            transparent,
            rgba(20, 173, 189, 0.04)
          );
          opacity: 0;
          transition: 0.4s;
          pointer-events: none;
        }

        .premium-card:hover .card-glow {
          opacity: 1;
        }

        /* NAV BUTTONS */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
          cursor: pointer;
          z-index: 20;
          font-size: 20px;
          transition: 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .nav-btn:hover {
          background: #14adbd;
          color: white;
          transform: translateY(-50%) scale(1.08);
        }

        .left-btn {
          left: -8px;
        }

        .right-btn {
          right: -8px;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .premium-slider-section {
            padding: 40px 12px;
          }

          .top-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .top-header h2 {
            font-size: 1.7rem;
          }

          .premium-card {
            min-width: 240px;
            max-width: 240px;
          }

          .image-box {
            height: 150px;
          }

          .card-content {
            padding: 16px;
          }

          .card-content h3 {
            font-size: 0.95rem;
          }

          .card-content p {
            font-size: 12px;
          }

          .nav-btn {
            display: none;
          }

          .slider-track {
            overflow-x: auto;
            scrollbar-width: none;
          }

          .slider-track::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default PremiumBlogSlider;