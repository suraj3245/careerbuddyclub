import React from "react";
import Image from "next/image";
import main_img from "@/assets/images/assets/img_46.png";
import shape_1 from "@/assets/images/shape/shape_01.svg";

const FeatureEighteen = () => {
  return (
    <div className="hero-banner-one position-relative pt-40 md-pt-80 xs-pt-40 pb-80 lg-pb-20">
      <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pr-4">
              <h1 className="wow fadeInUp " data-wow-delay="0.3s" style={{ color: "#14adbd", paddingLeft: "10px" }}>
               Our Mission <span style={{ color: "#eee30d", paddingLeft: "100px" }}> Vision &</span>
              </h1>
              <h1 className="wow fadeInUp " data-wow-delay="0.3s" style={{ color: "#254035", paddingLeft: "200px" }}>
                Core Values
              </h1>
            </div>
          </div>
          </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 pr-4">
              <div className="col">
                <div className="grid-container">
                  <div className="mission">
                    <h3 style={{ color: "#14adbd"}}>Mission</h3>
                    <p>
                      <strong>Nurturing Futures, Empowering Careers: </strong>Guiding students towards
                      successful career paths and facilitating their transformation
                      from aspirations to accomplishments.
                    </p>
                  </div>
                  <div className="vision">
                    <h3 style={{ color: "#eee30d"}}>Vision</h3>
                    <p>
                      <strong>Shaping Empowered Careers:</strong> To be the foremost catalyst in
                      bridging the gap between education and industry, fostering a
                      realm of limitless possibilities.
                    </p>
                  </div>
                  <div className="core-values">
                    <h3 style={{ color: "#254035"}}>Core Values</h3>
                    <ul>
                      <li>
                        <strong>Excellence:</strong> Striving for the highest
                        standards in everything we do, enabling students to achieve
                        excellence in their careers.
                      </li>
                      <li>
                        <strong>Empowerment:</strong> Empowering students with
                        knowledge, resources, and guidance to make informed career
                        decisions.
                      </li>
                      <li>
                        <strong>Collaboration:</strong> Fostering collaboration
                        between educational institutions and industries for mutual
                        growth and success.
                      </li>
                      <li>
                        <strong>Innovation:</strong> Continuously innovating our
                        approaches to ensure students are prepared for the evolving
                        professional landscape.
                      </li>
                      <li>
                        <strong>Integrity:</strong> Upholding honesty, ethics, and
                        transparency in all our interactions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 img-box">
              <div className="image-container">
                <Image src={shape_1} alt="shape" className="lazy-img shapes" />
                <Image
                  src={main_img}
                  alt="main-img"
                  className="lazy-img main-img w-100 h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default FeatureEighteen;
