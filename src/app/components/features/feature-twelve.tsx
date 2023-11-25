import React from "react";
import Image from "next/image";
import man_1 from "@/assets/images/assets/img_02.webp";
import girl from "@/assets/images/assets/img_03.webp";
import man_2 from "@/assets/images/assets/img_04.webp";
import screen_1 from "@/assets/images/assets/screen_01.webp";
import screen_2 from "@/assets/images/assets/screen_02.webp";
import screen_3 from "@/assets/images/assets/screen_03.webp";
import shape from "@/assets/images/shape/shape_06.svg";

// FeatureImgData
export function FeatureImgData() {
  return (
    <div className="img-data position-relative pe-xl-5 me-xl-5 md-mt-50">
      <div className="row">
        <div className="col-md-6 col-sm-8 col-10">
          <Image src={man_1} alt="man img" className="lazy-img img01" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 col-5">
          <Image src={girl} alt="girl img" className="lazy-img img02 mt-35" />
        </div>
        <div className="col-md-6 col-7">
          <Image src={man_2} alt="man-img-2" className="lazy-img img01 mt-35" />
        </div>
      </div>
      <Image
        src={screen_1}
        alt="screen_1-img"
        className="lazy-img shapes screen01 wow fadeInRight"
      />
      <Image
        src={screen_2}
        alt="screen_2-img"
        className="lazy-img shapes screen02 wow fadeInUp"
      />
      <Image
        src={screen_3}
        alt="screen_3-img"
        className="lazy-img shapes screen03 wow fadeInUp"
      />
      <Image src={shape} alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
}

const FeatureTweleve = () => {
  return (
    <section className="text-feature-one position-relative pt-20 xl-pt-20 lg-pt-20 md-pt-20 pb-20 xl-pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-lg-last">
            <div className="ps-xxl-4 wow fadeInRight">
              <div className="title-one">
                <h2>Our Track Record Speaks In Volumes.</h2>
              </div>
              <p className="mt-40 md-mt-20 mb-40 md-mb-20">
                A full hybrid workforce management Which helps you to get your
                dream job in your field of interest. Your Job is waiting for
                you?{" "}
              </p>
              <ul className="list-style-one style-none">
                <li>1000+ students placed in corporates </li>
                <li>100+ recruitment & partnership associations </li>
                <li>
                  3000+ Students choosing right careers from 300+ institutions
                </li>
                <li>93% employer satisfaction</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-md-11 m-auto order-lg-first">
            <FeatureImgData />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTweleve;
