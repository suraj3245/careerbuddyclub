"use client";

import React from 'react';
import Link from 'next/link';

const images = [
  {
    src: '/assets/images/blog/media6.jpg',
    title: 'Top Pharmacy Colleges in Dehradun (2025)',
    link: '/blog-v3',
  },
  {
    src: '/assets/images/blog/blog_img_34.jpg',
    title: 'Celebrating Ganesh Chaturthi (2024)',
    link: '/blog-v3',
  },
  {
    src: '/assets/images/blog/blog_img_36.jpg',
    title: 'Career Buddy Club CEO Honored',
    link: '/blog-v3',
  },
  {
    src: '/assets/images/blog/blog_img_37.jpg',
    title: 'UP NEET UG 2024 Counselling',
    link: '/blog-v3',
  },
];

const FancyBanner16 = () => {
  const sliderStyles: React.CSSProperties = {
    position: 'relative',
    maxWidth: '100%',
    margin: '4rem auto',
    padding: '0 20px',
    overflow: 'hidden',
  };

  const containerStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const cardStyles: React.CSSProperties = {
    flex: '1 1 20%',
    maxWidth: '400px',
    minWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
    backgroundColor: '#fff',
    border: 'none',
    height: '100%',
    
  };

  const imageStyles: React.CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const contentStyles: React.CSSProperties = {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  };

  const titleStyles: React.CSSProperties = {
    margin: '10px 0',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#14ADBD',
  };

  const linkStyles: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    background: '#14ADBD',
    padding: '10px 20px',
    borderRadius: '5px',
    display: 'inline-block',
  };

  return (
    <div style={sliderStyles}>
      <div className="blog-section-header my-4">
        <h2 className="blog-section-title">Career Buddy Club Insights</h2>
        <a href="/blog-v3" className="see-more-link">
          See more articles
        </a>
      </div>

      <div style={containerStyles}>
        {images.map((image, index) => (
          <div key={index} style={cardStyles}>
            <img src={image.src} alt={image.title} style={imageStyles} />
            <div style={contentStyles}>
              <h2 style={titleStyles}>{image.title}</h2>
              <Link href={image.link} style={linkStyles}>
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>

      
      <a href="/blog-v3" className="visually-hidden-text">See more articles</a>

     
      <style jsx>{`
        .blog-section-header {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .blog-section-title {
          display: flex;
          align-items: baseline;
          flex-grow: 1;
          gap: 0.5rem;
          margin: 0;
          font-size: 2rem;
          font-weight: 600;
        }

        .blog-section-title::after {
          content: "";
          display: block;
          flex-grow: 1;
          height: 2px;
          background-color: #ff5c35;
        }

        .see-more-link {
          text-decoration: underline;
          color: #14ADBD;
        }

        .visually-hidden-text {
          display: none;
          text-align: center;
          color: #14ADBD;
          font-weight: 500;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .blog-section-title {
            font-size: 1rem;
          }

          .see-more-link {
            display: none;
          }

          .visually-hidden-text {
            display: block;
            text-decoration: underline;
            color: #14ADBD;
          }
        }
      `}</style>
    </div>
  );
};

export default FancyBanner16;
