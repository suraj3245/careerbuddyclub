import React from "react";
import Image from "next/image";
import shape_2 from "@/assets/images/shape/shape_03.svg";

const CommonBreadcrumb = ({
  title,
  subtitle,
  backgroundImage,
  asLabel = false,
}: {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  /** Render the title as a styled label instead of an <h2> (e.g. generic "Insights" banners on guides). */
  asLabel?: boolean;
}) => {
  const TitleTag = asLabel ? "div" : "h2";
  const containerStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {};

  return (
    <div className="inner-banner-one position-relative" style={containerStyle}>
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-6 m-auto text-center">
              <div className="title-one">
                <TitleTag className={`${asLabel ? "h2 " : ""}text-black blog-V3-title text-balance`}>
                  {title}
                </TitleTag>
              </div>
              <p className="text-lg text-black mt-30 lg-mt-20">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      <Image src={shape_2} alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default CommonBreadcrumb;
