import React from "react";
import Image from "next/image";
import img1 from "@/assets/images/assets/img_49.jpeg";
import shape from "@/assets/images/shape/shape_25.svg";

const FeatureSixteen = () => {
  return (
    <>
      <section className="fancy-banner-nine mt-100 xl-mt-150 lg-mt-100">
        <div className="container">
          <div className="position-relative wow fadeInUp" style={{ background: "#fff" }}>
            <div className="row">
              {/* Text on the left side */}
              <div className="col-lg-6 order-lg-first">
                <div className="text-wrapper wow fadeInLeft">
                  <div className="title-one mb-45 lg-mb-30">
                    <h2 style={{ color: '#color-four', paddingLeft: 80 }}>4 Career Cohorts</h2>
                    <p className="text-black" style={{ paddingLeft: 80}}>
                      Not only Private Jobs. Get Trained for Everything!
                    </p>

                    <div className="img-box position-relative d-flex align-items-center justify-content-center wow fadeInLeft">
                      <Image src={img1} alt="screen" className="lazy-img" />
                      <Image src={img1} alt="screen" className="lazy-img shapes screen_01" />
                      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Content on the right side */}
              <div className="col-lg-6 order-lg-last ms-auto ">
                <div className="row">
                  {/* Row 1 */}
                  <div className="col-md-12 mb-2 mt-2">
                    <div className="p-2 text-center" style={{ background: '#eed30d' }}>
                      <h3 className="text-white">Corporate Jobs</h3>
                      <p>CBC India & Dubai - 100% Placement And/or Assured Interview in 50+ Companies.</p>
                    </div>
                  </div>
                  {/* Row 2 */}
                  <div className="col-md-12 mb-4">
                    <div className="p-2 text-center" style={{ background: '#14adbd' }}>
                      <h3 className="text-white">Government Jobs</h3>
                      <p>Government jobs - 10+ Partners & 50+ Mentors for Preparation of Government Examinations.</p>
                    </div>
                  </div>
                  {/* Row 3 */}
                  <div className="col-md-12 mb-4">
                    <div className="p-2 text-center" style={{ background: '#eed30d' }}>
                      <h3 className="text-white">Entrepreneurship</h3>
                      <p>Start Your Business from Scratch with the right mentorship.</p>
                    </div>
                  </div>
                  {/* Row 4 */}
                  <div className="col-md-12 mb-4">
                    <div className="p-2 text-center" style={{ background: '#14adbd' }}>
                      <h3 className="text-white">Research</h3>
                      <p>Build Your Research portfolio & publish papers, patents, etc</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureSixteen;
