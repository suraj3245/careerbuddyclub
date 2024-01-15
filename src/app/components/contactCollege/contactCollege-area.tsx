"use client";
import React from "react";
import ContactCollegeForm from "../forms/contactCollege-form";

const ContactCollegeArea = () => {
  return (
    <section className="contact-us-section pt-50 lg-pt-50">
      <div className="container">
        <div className="border-bottom pb-150 lg-pb-80">
          <div className="title-one text-center mb-70 lg-mb-40">
            <h2>Get in touch</h2>
          </div>

          <div className="row">
            <div className="col-xl-9 m-auto">
              <div className="form-style-one mt-20 lg-mt-20 wow fadeInUp">
                <ContactCollegeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCollegeArea;
