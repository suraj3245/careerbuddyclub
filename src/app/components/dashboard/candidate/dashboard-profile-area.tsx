"use client";
import React from "react";
import Image from "next/image";
import avatar from "@/assets/dashboard/images/avatar_02.jpg";
import DashboardHeader from "./dashboard-header";
import CountrySelect from "./country-select";
import CitySelect from "./city-select";
import StateSelect from "./state-select";
import GenderSelect from "./gender-select";
import MaritialSelect from "./maritial-status";
import StreamSelect from "./Stream-select";
import LevelSelect from "./Level-select";
import SpecializationSelect from "./Specialization";
import CollegeTypeSelect from "./collegetype";
import FeeRangeSelect from "./Fee-range";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};
const DashboardProfileArea = ({ setIsOpenSidebar }: IProps) => {
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

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
            <input type="text" placeholder="Enter Full Name" />
          </div>
          {/* Date of Birth Field */}
          <div className="row">
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Date of Birth*</label>
                <input type="date" id="dob" placeholder="YYYY-MM-DD" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Social Category*</label>
                <input
                  type="text"
                  id="socialCategory"
                  placeholder="Enter your social category"
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
              placeholder="Write something interesting about you...."
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
              id="mobileNumber"
              placeholder="Enter your mobile number"
            />
          </div>

          {/* Email Field */}
          <div className="dash-input-wrapper mb-20">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
        </div>

        <div className="bg-white card-box border-20 mt-40">
          <h4 className="dash-title-three">Address & Location</h4>
          <div className="row">
            <div className="col-12">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Address*</label>
                <input type="text" placeholder="Enter your Address" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">State*</label>
                <StateSelect />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">City*</label>
                <CitySelect />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Zip Code*</label>
                <input type="number" placeholder="code" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">State*</label>
                <StateSelect />
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
                  id="SchoolNameX"
                  placeholder="Enter School Name"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Board*</label>
                <input type="text" id="boardX" placeholder="Enter board name" />
              </div>
            </div>

            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Passing Year*</label>
                <input type="number" id="passingYearX" placeholder="YYYY" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="percentageCgpaX">Percentage/CGPA*</label>
                <input
                  type="text"
                  id="percentageCgpaX"
                  placeholder="Enter value"
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
                  id="SchoolNameXII"
                  placeholder="Enter School Name"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Board*</label>
                <input
                  type="text"
                  id="boardXII"
                  placeholder="Enter board name"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Stream*</label>
                <input type="text" id="Stream" placeholder="Enter Stream" />
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
                  id="percentageCgpaXII"
                  placeholder="Enter value"
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
                  id="CollegeName"
                  placeholder="Enter College Name"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">University Name*</label>
                <input
                  type="text"
                  id="UniversityName"
                  placeholder="Enter University name"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Degree*</label>
                <input type="text" id="DegreeName" placeholder="Enter Degree" />
              </div>
            </div>

            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">Passing Year*</label>
                <input
                  type="number"
                  id="passingYearCollege"
                  placeholder="YYYY"
                />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="percentageCgpaCollege">Percentage/CGPA*</label>
                <input
                  type="text"
                  id="percentageCgpaCollege"
                  placeholder="Enter value"
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
                <input type="text" id="location" placeholder="location" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="dash-input-wrapper mb-25">
                <label htmlFor="">College Type*</label>
                <CollegeTypeSelect />
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
          <a href="#" className="dash-btn-two tran3s me-3">
            Save
          </a>
          <a href="#" className="dash-cancel-btn tran3s">
            Cancel
          </a>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileArea;
