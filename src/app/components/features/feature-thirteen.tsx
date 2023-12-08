import React from "react";
import shape from "@/assets/images/shape/shape_06.svg";
import photo1 from "@/assets/images/photo1.jpg"; // Example image import
import photo2 from "@/assets/images/photo2.jpg"; // Example image import
// Import more photos as needed

const FeatureThirteen = () => {
  return (
    <section className="text-feature-one position-relative pt-120 xl-pt-20 lg-pt-20 md-pt-20 pb-20 xl-pb-20">
      <div className="container">
        <div className="row">
          {/* Text Content */}
          <div className="col-lg-5 order-lg-first">
            <div className="ps-xxl-4 wow fadeInLeft">
              {/* ... Your existing text content ... */}
            </div>
          </div>

          {/* Image Group */}
          <div className="col-lg-7 order-lg-last">
            <div className="image-group wow fadeInRight">
              <img src={photo1} alt="Photo 1" className="mb-3" />
              <img src={photo2} alt="Photo 2" className="mb-3" />
              {/* Add more images as needed */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureThirteen;


