import React from "react";
import Image, { StaticImageData } from 'next/image';

const CommonBreadcrumbuniversity = ({
  title,
  subtitle,
  logoSrc,
}: {
  title: string;
  subtitle: string;
  logoSrc: string | StaticImageData;
}) => {
  const innerbannersmaller = {
    padding: "20px 0",
    paddingTop: "50px",
  };

  return (
    <div className="inner-banner-college position-relative mt-4" style={innerbannersmaller}>
      <div className="container">
        <div className="position-relative">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 text-center">
            <div className="d-flex align-items-center justify-content-center style-none "> {/* Adjust the margin-top as needed */}
            <Image src={logoSrc} alt="Logo" width={200} height={150} /> 
          </div>
              <div className="title-two">
                <h2 className="text-black pt-10">{title}</h2>
                <h2 className="text-lg text-black mt-30 pt-20 lg-mt-20">{subtitle}</h2>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonBreadcrumbuniversity;
