import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import company_1 from "@/assets/images/logo/holographic.png";
import company_2 from "@/assets/images/logo/handshake.png";
import company_3 from "@/assets/images/logo/investigation.png";
import company_4 from "@/assets/images/logo/enterprise.png";
import company_5 from "@/assets/images/logo/artist.png";
import company_6 from "@/assets/images/logo/social-media.png";

// company data
const company_data: {
  id: number;
  icon: StaticImageData;
  name: string;
  desc: string;
}[] = [
  {
    id: 1,
    icon: company_1,
    name: "Realistic",
    desc: "Jobs that require the use of hands, tools, machines, animals, plants etc. is what you can relate to as you like engaging yourself in work that produces substantial results.",
  },
  {
    id: 2,
    icon: company_2,
    name: "Conventional",
    desc: "Jobs that are are set up in structured environments and those that empower you to manage data, processes and information appeal to you the most.",
  },
  {
    id: 3,
    icon: company_3,
    name: "Investigative",
    desc: "Jobs that revolve around scientific, technological and academic pursuits are your true calling as you enjoy work that has intellectual challenges in store.",
  },
  {
    id: 4,
    icon: company_4,
    name: "Enterprising",
    desc: "Jobs that can influence and motivate others suit your personality the most and you like getting involved in work that gives you the power to lead and make decisions.",
  },
  {
    id: 5,
    icon: company_5,
    name: "Artistic",
    desc: "Jobs that involve creative expression of ideas and thoughts through mediums such as art, design, language etc. to produce something unique is what interests you",
  },
  {
    id: 6,
    icon: company_6,
    name: "Social",
    desc: "Jobs that promise cooperative and sensitive environments is what fascinates you and hence you like to teach, assist and support others through your work",
  },
];

const TopCareer = () => {
  return (
    <section className="top-company-section pt-50 lg-pt-50 pb-50 lg-pb-50 mt-50 xl-mt-50">
      <div className="container">
        <div className="row justify-content-between align-items-center pb-40 lg-pb-10">
          <div className="col-sm-7">
            <div className="title-one">
              <h2 className="main-font wow fadeInUp" data-wow-delay="0.3s">
                Personality Traits
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {company_data.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-6">
              <div className="card-style-nine text-center tran3s mt-25 wow fadeInUp">
                <Image
                  src={item.icon}
                  alt="logo"
                  className="lazy-img m-auto"
                  width={85}
                  height={85}
                />
                <div className="text-lg fw-500 text-dark mt-15 mb-30">
                  {item.name}
                </div>
                <p className="mb-20">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCareer;
