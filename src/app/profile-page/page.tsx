"use client";
import React, { useState } from "react";
import Image from "next/image";
import avatar from "@/assets/dashboard/images/avatar_02.jpg";

import NiceSelect from "@/ui/nice-select";
import DashboardHeader from "../components/dashboard/candidate/dashboard-header";
import GenderSelect from "../components/dashboard/candidate/gender-select";
import MaritialSelect from "../components/dashboard/candidate/maritial-status";
import FeeRangeSelect from "../components/dashboard/candidate/Fee-range";
import LevelSelect from "../components/dashboard/candidate/Level-select";
import SpecializationSelect from "../components/dashboard/candidate/Specialization";
import StreamSelect from "../components/dashboard/candidate/Stream-select";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardProfileArea = ({ setIsOpenSidebar }: IProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    socialCategory: "",
    gender: "",
    maritalStatus: "",
    bio: "",
    mobileNumber: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    schoolNameX: "",
    boardX: "",
    streamX: "",
    passingYearX: "",
    percentageCgpaX: "",
    schoolNameXII: "",
    boardXII: "",
    streamXII: "",
    passingYearXII: "",
    percentageCgpaXII: "",
    collegeName: "",
    universityName: "",
    degreeName: "",
    passingYearCollege: "",
    percentageCgpaCollege: "",
    stream: "",
    level: "",
    specialization: "",
    location: "",
    collegeType: "",
    feeRange: "",
    // ... other fields as needed ...
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form Data: ", formData);
    // Perform your submission logic here, e.g., send data to server
  };
  const handleSelectChange = (item: { name: any; value: any }) => {
    setFormData((prevState) => ({ ...prevState, [item.name]: item.value }));
  };
  const [collegeType, setCollegeType] = useState("");
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}

        {/* header end */}
        <form onSubmit={handleSubmit}>
          <h2 className="main-title">My Profile</h2>

          <div className="bg-white card-box border-20">
            <div className="user-avatar-setting d-flex align-items-center mb-30">
              <Image src={avatar} alt="avatar" className="lazy-img user-img" />
              <div className="upload-btn position-relative tran3s ms-4 me-3">
                Upload new photo
                <input
                  type="file"
                  id="uploadImg"
                  name="uploadImg"
                  placeholder=""
                />
              </div>
              <button className="delete-btn tran3s">Delete</button>
            </div>
            <div className="dash-input-wrapper mb-30">
              <label htmlFor="">Full Name*</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            {/* Date of Birth Field */}
            <div className="row">
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Date of Birth*</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dob"
                    placeholder="YYYY-MM-DD"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Social Category*</label>
                  <input
                    type="text"
                    name="socialCategory"
                    id="socialCategory"
                    placeholder="Enter your social category"
                    value={formData.socialCategory}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Gender*</label>
                  <GenderSelect />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Maritial Status*</label>
                  <MaritialSelect />
                </div>
              </div>
            </div>

            {/* Social Category Field */}
            <div className="dash-input-wrapper">
              <label htmlFor="">Bio*</label>
              <textarea
                className="size-lg"
                name="bio"
                placeholder="Write something interesting about you...."
                value={formData.bio}
                onChange={handleChange}
              ></textarea>
              <div className="alert-text">
                Brief description for your profile. URLs are hyperlinked.
              </div>
            </div>
          </div>

          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Contact details</h4>

            <div className="dash-input-wrapper mb-20">
              <label htmlFor="mobileNumber">Mobile Number*</label>
              <input
                type="tel"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="Enter your mobile number"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>

            {/* Email Field */}
            <div className="dash-input-wrapper mb-20">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Address & Location</h4>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Address*</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">State*</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="Enter your Address"
                    value={formData.state}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">City*</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter your Address"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Zip Code*</label>
                  <input
                    type="number"
                    name="zipCode"
                    placeholder="code"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Education Details*</h4>
            <h5 className="sub-title">Class X Details</h5>

            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">School Name*</label>
                  <input
                    type="text"
                    name="schoolNameX"
                    id="SchoolNameX"
                    placeholder="Enter School Name"
                    value={formData.schoolNameX}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Board*</label>
                  <input
                    type="text"
                    name="boardX"
                    id="boardX"
                    placeholder="Enter board name"
                    value={formData.boardX}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Stream*</label>
                  <input
                    type="text"
                    name="streamX"
                    id="StreamX"
                    placeholder="Enter Stream"
                    value={formData.streamX}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Passing Year*</label>
                  <input
                    type="number"
                    name="passingYearX"
                    id="passingYearX"
                    placeholder="YYYY"
                    value={formData.passingYearX}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="percentageCgpaX">Percentage/CGPA*</label>
                  <input
                    type="text"
                    name="percentageCgpaX"
                    id="percentageCgpaX"
                    placeholder="Enter value"
                    value={formData.percentageCgpaX}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <h5 className="sub-title">Class XII Details</h5>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">School Name*</label>
                  <input
                    type="text"
                    name="schoolNameXII"
                    id="SchoolNameXII"
                    placeholder="Enter School Name"
                    value={formData.schoolNameXII}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Board*</label>
                  <input
                    type="text"
                    name="boardXII"
                    id="boardXII"
                    placeholder="Enter board name"
                    value={formData.boardXII}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Stream*</label>
                  <input
                    type="text"
                    name="streamXII"
                    id="stream"
                    placeholder="Enter Stream"
                    value={formData.streamXII}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Passing Year*</label>
                  <input type="number" id="passingYearXII" placeholder="YYYY" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="percentageCgpaXII">Percentage/CGPA*</label>
                  <input
                    type="text"
                    name="percentageCgpaXII"
                    id="percentageCgpaXII"
                    placeholder="Enter value"
                    value={formData.percentageCgpaXII}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <h5 className="sub-title">Graduation Details</h5>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">College Name*</label>
                  <input
                    type="text"
                    name="collegeName"
                    id="CollegeName"
                    placeholder="Enter College Name"
                    value={formData.collegeName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">University Name*</label>
                  <input
                    type="text"
                    name="universityName"
                    id="UniversityName"
                    placeholder="Enter University name"
                    value={formData.universityName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Degree*</label>
                  <input
                    type="text"
                    name="degreeName"
                    id="DegreeName"
                    placeholder="Enter Degree"
                    value={formData.degreeName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Passing Year*</label>
                  <input
                    type="number"
                    name="passingYearCollege"
                    id="passingYearCollege"
                    placeholder="YYYY"
                    value={formData.passingYearCollege}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="percentageCgpaCollege">
                    Percentage/CGPA*
                  </label>
                  <input
                    type="text"
                    name="percentageCgpaCollege"
                    id="percentageCgpaCollege"
                    placeholder="Enter value"
                    value={formData.percentageCgpaCollege}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Preference*</h4>
            <div className="row">
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Stream*</label>
                  <StreamSelect />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">level*</label>
                  <LevelSelect />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Specialization*</label>
                  <SpecializationSelect />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">location*</label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    placeholder="location"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">College Type*</label>
                  <NiceSelect
                    options={[
                      { value: "", label: "Select College Type" },
                      { value: "Private", label: "Private" },
                      { value: "Central", label: "Central" },
                      { value: "State", label: "State" },
                      { value: "Semi-Government", label: "Semi-Government" },
                      { value: "Others", label: "Others" },
                    ]}
                    defaultCurrent={0}
                    name="collegeType"
                    onChange={handleSelectChange}
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Fee Range*</label>
                  <FeeRangeSelect />
                </div>
              </div>
            </div>
          </div>

          <div className="button-group d-inline-flex align-items-center mt-30">
            <button type="submit" className="dash-btn-two tran3s me-3">
              Save
            </button>
            <a href="#" className="dash-cancel-btn tran3s">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardProfileArea;
