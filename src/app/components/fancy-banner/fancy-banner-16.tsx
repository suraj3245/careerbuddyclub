"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

const images = [
  {
    src: "/assets/images/blog/media6.jpg",
    title: "Top Pharmacy Colleges in Dehradun (2025)",
    link: "/blog-v3",
  },
  {
    src: "/assets/images/blog/blog_img_34.jpg",
    title: "Celebrating Ganesh Chaturthi (2024)",
    link: "/blog-v3",
  },
  {
    src: "/assets/images/blog/blog_img_36.jpg",
    title: "Career Buddy Club CEO Honored",
    link: "/blog-v3",
  },
  {
    src: "/assets/images/blog/blog_img_37.jpg",
    title: "UP NEET UG 2024 Counselling",
    link: "/blog-v3",
  },
];

const FancyBanner16 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // INTERSECTION OBSERVER (Triggers animation when section enters viewport)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const sliderStyles: React.CSSProperties = {
    position: "relative",
    maxWidth: "100%",
    margin: "4rem auto",
    padding: "0 20px",
    overflow: "hidden",
  };

  const containerStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    gap: "25px",
    maxWidth: "1200px",
    margin: "0 auto",
  };

  const cardStyles: React.CSSProperties = {
    flex: "1 1 22%",
    maxWidth: "400px",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "14px",
    overflow: "hidden",
    backgroundColor: "#fff",
    border: "none",
    height: "100%",
    transition: "all 0.5s ease",
    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
    cursor: "pointer",

    // SCROLL ANIMATION
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(40px)",
  };

  const imageStyles: React.CSSProperties = {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    transition: "transform 0.55s ease",
  };

  const contentStyles: React.CSSProperties = {
    textAlign: "center",
    padding: "18px",
    backgroundColor: "#F7F9FA",
    flexGrow: 1,
  };

  const titleStyles: React.CSSProperties = {
    margin: "12px 0",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#14ADBD",
    transition: "color 0.3s ease",
  };

  const linkStyles: React.CSSProperties = {
    color: "white",
    textDecoration: "none",
    background: "#14ADBD",
    padding: "10px 22px",
    borderRadius: "6px",
    display: "inline-block",
    marginTop: "10px",
    transition: "all 0.3s ease",
    boxShadow: "0px 4px 12px rgba(20, 173, 189, 0.4)",
  };

  return (
    <div style={sliderStyles} ref={sectionRef} className="p-3">
      {/* SECTION HEADER */}
      <div
        className={`blog-section-header my-4 ${
          isVisible ? "fade-in-trigger" : ""
        }`}
      >
        <h2 className="blog-section-title">Career Buddy Club Insights</h2>
        <a href="/blog-v3" className="see-more-link">
          See more articles
        </a>
      </div>

      {/* CARDS */}
      <div style={containerStyles}>
        {images.map((image, index) => (
          <div className="card-item" key={index} style={cardStyles}>
            <div className="img-box">
              <img src={image.src} alt={image.title} style={imageStyles} />
            </div>

            <div style={contentStyles}>
              <h2 className="card-title" style={titleStyles}>
                {image.title}
              </h2>

              <Link href={image.link} style={linkStyles} className="view-btn">
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE SEE-MORE */}
      <a href="/blog-v3" className="visually-hidden-text">
        See more articles
      </a>

      {/* CUSTOM CSS */}
      <style jsx>{`
        /* Header */
        .blog-section-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 2.2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }

        /* Animate when visible */
        .fade-in-trigger {
          opacity: 1 !important;
          transform: translateY(0px) !important;
        }

        .blog-section-title {
          margin: 0;
          font-size: 2.2rem;
          font-weight: 700;
          color: #097681;
          position: relative;
          padding-bottom: 5px;
        }

        .blog-section-title::after {
          content: "";
          position: absolute;
          width: 90px;
          height: 3px;
          background-color: #14adbd;
          bottom: 0;
          left: 0;
          border-radius: 5px;
        }

        .see-more-link {
          text-decoration: none;
          color: #14adbd;
          font-weight: 600;
        }

        /* Hover Animations */
        .card-item:hover {
          transform: translateY(-10px);
          box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.18) !important;
        }

        .card-item:hover img {
          transform: scale(1.1);
        }

        .card-item:hover .card-title {
          color: #0d95a2;
        }

        .view-btn:hover {
          background: #0f8c9a;
          transform: translateY(-3px);
          box-shadow: 0px 6px 18px rgba(14, 149, 161, 0.55);
        }

        /* Mobile */
        .visually-hidden-text {
          display: none;
          text-align: center;
          color: #14adbd;
          font-weight: 500;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .blog-section-title {
            font-size: 1.4rem;
          }
          .see-more-link {
            display: none;
          }
          .visually-hidden-text {
            display: block;
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  );
};

export default FancyBanner16;
