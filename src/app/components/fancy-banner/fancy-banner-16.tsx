import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';
import Link from 'next/link';
import React from 'react';

const FancyBanner16= () => {
  return (
    <div
      className="carousel-container position-relative"
      style={{
        position: 'relative',
        maxWidth: '100%', // Adjust the width of the carousel
        margin: '4rem 0 0 auto',  // Center the carousel
        
      }}
    >
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="assets/images/blog/blog_img_34.jpg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ maxHeight: '450px' }}
            />
          </div>
          <div className="carousel-item">

            <img
              src="assets/images/blog/blog_img_36.jpg"
              className="d-block w-100"
              alt="Slide 2"
              style={{ maxHeight: '450px'}}
            />
          </div>
          <div className="carousel-item">
            <img
              src="assets/images/blog/blog_img_37.jpg"
              className="d-block w-100"
              alt="Slide 3"
              style={{ maxHeight: '450px'}}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* View More Link at the Bottom Right */}
      <div
        className="view-more-container position-absolute"
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
        }}
      >
    </div>
    <div className="container d-flex justify-content-end">
    <Link href="/blog-v3"
        style={{
            color: 'blue',
            textDecoration: 'none',
          }}>
        View More...
        </Link>
    </div>
    </div>
  );
};

export default FancyBanner16;
