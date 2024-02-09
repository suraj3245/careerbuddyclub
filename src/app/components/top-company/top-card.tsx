import React from "react";
import Image from "next/image";
import Link from "next/link";
import company_1 from "@/assets/images/logo/icons8-counsellor-64.png";
import company_2 from "@/assets/images/logo/icons8-test-64.png";

const company_data = [
  {
    id: 1,
    icon: company_1,
    name: "Talk to our Expert Counsellors",
    desc: "Our expert counsellors are ready to help you to complete your admission process. We will help you to achieve your dream career and job. Secure your career Now!",
    // This item will trigger the modal
    modal: true,
  },
  {
    id: 2,
    icon: company_2,
    name: "Career Aptitude Test",
    desc: "A scientific assessment method that can analyze your aptitude, capabilities, personality, and interests and suggest the best-fit career options for you.",
    link: "/dashboard/candidate-dashboard/career-aptitude",
  },
];

const TopCard = () => {
  const headingStyle = {
    fontSize: "24px",
  };

  const textStyle = {
    fontSize: "14px",
  };

  const textStyleh = {
    fontSize: "15px",
  };

  return (
    <section className="top-company-section">
      <div className="container">
        {/* ... rest of the component ... */}

        <div className="row">
          {company_data.map((item) => (
            <div key={item.id} className="col-lg-6 col-md-6 col-sm-6">
              {item.modal ? (
                // For triggering the modal
                <div
                  className="card-style-nine text-center tran3s mt-20 wow fadeInUp"
                  data-wow-delay="0.6s"
                  data-bs-toggle="modal"
                  data-bs-target="#ScheduleModal"
                >
                  <Image
                    src={item.icon}
                    alt="logo"
                    className="lazy-img m-auto"
                    width={60}
                    height={60}
                  />
                  <div
                    className="text-lg fw-500 text-dark mt-10 mb-10"
                    style={textStyleh}
                  >
                    {item.name}
                  </div>
                  <p className="" style={textStyle}>
                    {item.desc}
                  </p>
                </div>
              ) : (
                // For regular navigation
                item.link && (
                  <Link href={item.link}>
                    <div className="card-style-nine text-center tran3s mt-20 wow fadeInUp">
                      <Image
                        src={item.icon}
                        alt="logo"
                        className="lazy-img m-auto"
                        width={60}
                        height={60}
                      />
                      <div
                        className="text-lg fw-500 text-dark mt-10 mb-10"
                        style={textStyleh}
                      >
                        {item.name}
                      </div>
                      <p className="" style={textStyle}>
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCard;
