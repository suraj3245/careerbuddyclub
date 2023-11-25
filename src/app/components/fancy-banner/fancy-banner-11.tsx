"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import icon_1 from "@/assets/images/icon/icon_37.svg";
import icon_2 from "@/assets/images/icon/icon_38.svg";
import icon_3 from "@/assets/images/icon/icon_39.svg";

// content data
const content_data: {
  title: string;
  subtitle: string;
  icon: StaticImageData;
}[] = [
  {
    title:
      "Hassle-free registration process with Powerful job placement services.",
    subtitle: "",
    icon: icon_1,
  },
  {
    title:
      "Dedicated section for listing internships and co-op programs along with Rich resources for supporting students in their career journey.",
    subtitle: "",
    icon: icon_2,
  },
  {
    title:
      "A platform to promote career-related events and webinars.The ability to create and manage student profiles.",
    subtitle: "",
    icon: icon_3,
  },
];

const FancyBannerEleven = ({ style_2 = false }: { style_2?: boolean }) => {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <>
      {!style_2 && (
        <section className="fancy-banner-eleven mt-25 lg-mt-25">
          <div className="container">
            <div className="bg-wrapper position-relative wow fadeInUp">
              <div className="row">
                <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
                  <div className="text-wrapper wow fadeInRight">
                    <div className="title-one mt-35 lg-mt-30 mb-30 lg-mb-20">
                      <h2 className="fw-600 text-white">Our key Feature </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {style_2 && (
        <section className="fancy-banner-eleven mt-150 lg-mt-100">
          <div className="bg-wrapper pt-85 lg-pt-50 pb-80 lg-pb-50 position-relative wow fadeInUp">
            <div className="container">
              <div className="row">
                <div className="col-xxl-5 col-xl-6 col-lg-6 ms-auto">
                  <div className="text-wrapper p0 mb-50 md-mb-20 wow fadeInRight">
                    <div className="title-one mt-25 mb-25 lg-mb-20">
                      <h2 className="text-white main-font">Our Key Feature </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* video modal start */}

      {/* video modal end */}
    </>
  );
};

export default FancyBannerEleven;
