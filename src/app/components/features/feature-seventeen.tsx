import React from "react";
import Image from "next/image";
import logo1 from "@/assets/images/logo/s12.png";
import logo2 from "@/assets/images/logo/s13.png";
import logo3 from "@/assets/images/logo/s14.png";
import logo4 from "@/assets/images/logo/s15.png";
import logo5 from "@/assets/images/logo/s16.png";
import logo6 from "@/assets/images/logo/s17.png";
import logo7 from "@/assets/images/logo/s18.png";
import logo8 from "@/assets/images/logo/s19.png";
import logo9 from "@/assets/images/logo/s20.png";

const FeatureSeventeen = () => {
  return (
    <section className="text-feature-four position-relative mt-60 xl-mt-60 lg-mt-60">
      <div
        style={{
          padding: "20px",
          border: "1px solid #ddd",
          textAlign: "center",
          background: "#add8e6", // Black background for the entire container
        }}
      >
        <div className="title-one">
          {/* Top Heading */}
          <h2 style={{ color: "#000" }}>Our Key Offerings</h2>
          <p style={{color: "#000", paddingTop: "10px"}}> This is how CBC is different from others</p>
        </div>
        {/* Line Below Top Heading */}
        <hr style={{ width: "100%", border: "2px solid #fff", marginBottom: "20px" }} />

        {/* Logos Section */}
        <div className="row">
          {[
            { logo: logo1, text: "60+ hrs Specialized Training" },
            { logo: logo2, text: "200+ Skill Assessment Tests " },
            { logo: logo3, text: "4 Industry Integrated Certifications" },
            { logo: logo4, text: "10+ Real-Life Projects" },
            { logo: logo5, text: "50+ Job Interviews" },
            { logo: logo6, text: "60+ hrs Personalized Mentorship" },
            { logo: logo7, text: "Fresherfocused Job Portal " },
            { logo: logo8, text: "4-6 months On Job Training " },
            { logo: logo9, text: "300+ Industry Experts from Ivy League & Fortune 500" },
          ].map((item, index) => (
            <div
              key={index}
              className="col-md-4 mb-4"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px", // Added margin at the bottom of each column
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#eed30d",
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Image src={item.logo} alt={`Logo ${index + 1}`} className="lazy-img" />
              </div>
              <div
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  backgroundColor: "#", // Adjust as needed
                  borderRadius: "5px",
                }}
              >
                <p style={{ margin: 0 }}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSeventeen;
