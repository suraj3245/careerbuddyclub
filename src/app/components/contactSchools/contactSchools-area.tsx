import React from "react";
import Image from "next/image";
import icon_1 from "@/assets/images/icon/icon_57.svg";
import icon_2 from "@/assets/images/icon/icon_58.svg";
import icon_3 from "@/assets/images/icon/icon_59.svg";
import ContactForm from "../forms/contact-form";
import ContactSchoolForm from "../forms/contactSchools-form";

const ContactSchoolArea = () => {
  return (
    <section className="contact-us-section pt-100 lg-pt-80">
      <div className="container">
        <div className="border-bottom pb-150 lg-pb-80">
          <div className="title-one text-center mb-70 lg-mb-40">
            <h2>Get in touch</h2>
          </div>

          <div className="row">
            <div className="col-xl-9 m-auto">
              <div className="form-style-one mt-20 lg-mt-20 wow fadeInUp">
                <ContactSchoolForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSchoolArea;
