"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "./dashboard-header";
import NiceSelect from "@/ui/nice-select-two";
import { OnChangeArgument } from "@/ui/nice-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};
type Location = string;

const DashboardProfileArea = ({ setIsOpenSidebar }: IProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    socialCategory: "",
    gender: "",
    mobileNumber: "",
    email: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    stream: "",
    level: "",
    special: "",
    location: "" as Location,
    collegeType: "",
    course: "",
    feeRange: "",
    collegePreference: "",
  });

  const [allColleges, setAllColleges] = useState<any[]>([]);
  const [streamOptions, setStreamOptions] = useState<{ value: string; label: string }[]>([]);
  const [levelOptions, setLevelOptions] = useState<{ value: string; label: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      const options = {
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/getstudentsprofile",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: {},
      };
      try {
        const response = await axios.request(options);
        const data = response.data;
        setFormData((prev) => ({
          ...prev,
          fullName: data.student?.name || prev.fullName,
          email: data.student?.email || prev.email,
          mobileNumber: data.student?.mobile || prev.mobileNumber,
          dateOfBirth: data.basicDetails?.dob || prev.dateOfBirth,
          socialCategory: data.basicDetails?.social_category || prev.socialCategory,
          gender: data.basicDetails?.gender || prev.gender,
          address: data.contactDetails?.address || prev.address,
          city: data.contactDetails?.city || prev.city,
          state: data.contactDetails?.state || prev.state,
          zipCode: data.contactDetails?.zip_code || prev.zipCode,
          stream: data.preferences?.stream || prev.stream,
          level: data.preferences?.level || prev.level,
          special: data.preferences?.specialization || prev.special,
          course: data.preferences?.course || prev.course,
          feeRange: data.preferences?.fee_range || prev.feeRange,
          location: data.preferences?.location || prev.location,
          collegePreference: data.preferences?.college || prev.collegePreference,
        }));
        setIsLoading(false);
      } catch {
        setIsLoading(false);
      }
    };

    fetchUserData();

    Promise.all([
      axios.post("https://test.careerbuddyclub.com:8080/api/students/getallcollegesdetails"),
      axios.post("https://test.careerbuddyclub.com:8080/api/students/getallstreams"),
      axios.post("https://test.careerbuddyclub.com:8080/api/students/getalllevels"),
    ])
      .then(([collegesRes, streamsRes, levelsRes]) => {
        setAllColleges(collegesRes?.data?.colleges || []);
        setStreamOptions((streamsRes.data || []).map((s: any) => ({ value: s.title, label: s.title })));
        setLevelOptions((levelsRes.data || []).map((l: any) => ({ value: l.title, label: l.title })));
      })
      .catch(() => {});
    const timer = setTimeout(() => setShowLoader(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSelectChange = (item: OnChangeArgument) => {
    setFormData((prevState) => ({ ...prevState, [item.name]: item.value }));
  };

  // Only keep unique city values for locations
  const locationSelectOptions = Array.from(new Set(allColleges.map(college => college.city).filter(Boolean))).map(city => ({ value: city, label: city }));
  const filteredColleges = allColleges.filter(college => college.city === formData.location);

  const handleSubmit = (url: string, data: any, successMsg: string) => {
    const token = localStorage.getItem("token");
    axios
      .post(url, data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => toast.success(successMsg, { position: "top-left", autoClose: 1000 }))
      .catch(() => toast.error("Unsuccessful submission", { position: "top-left", autoClose: 1000 }));
  };

  if (showLoader || isLoading) {
    return (
      <div className="dashboard-body" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <iframe src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json" style={{ width: "300px", height: "300px" }}></iframe>
      </div>
    );
  }

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />

        <h2 className="main-title">College Application Form</h2>
        <div className="bg-white card-box border-20">
          <form onSubmit={e => { e.preventDefault(); handleSubmit(
            "https://test.careerbuddyclub.com:8080/api/students/updatebasicdetails",
            {
              name: formData.fullName,
              social_category: formData.socialCategory,
              dob: formData.dateOfBirth,
              gender: formData.gender.toLowerCase(),
            },
            "Profile Data successfully updated 🚀"
          ); }}>
            <div className="dash-input-wrapper mb-10">
              <label htmlFor="fullName">Full Name*</label>
              <input type="text" name="fullName" placeholder="Enter Full Name" value={formData.fullName} onChange={handleChange} />
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label>Date of Birth*</label>
                  <input type="date" name="dateOfBirth" id="dob" value={formData.dateOfBirth} onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10 select-fix">
                  <label>Social Category*</label>
                  <NiceSelect
                    options={[
                      { value: "", label: "Select Category" },
                      { value: "General", label: "General" },
                      { value: "OBC", label: "OBC" },
                      { value: "SC/ST", label: "SC/ST" },
                      { value: "Other", label: "Other" },
                    ]}
                    value={formData.socialCategory}
                    onChange={handleSelectChange}
                    name="socialCategory"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10 select-fix">
                  <label>Gender*</label>
                  <NiceSelect
                    options={[
                      { value: "", label: "Select Gender" },
                      { value: "male", label: "Male" },
                      { value: "female", label: "Female" },
                      { value: "others", label: "Others" },
                    ]}
                    value={formData.gender}
                    onChange={handleSelectChange}
                    name="gender"
                  />
                </div>
              </div>
            </div>
            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s me-3">Save</button>
            </div>
          </form>
        </div>

        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(
              "https://test.careerbuddyclub.com:8080/api/students/updatecontactdetails",
              { email: formData.email, mobile: formData.mobileNumber },
              "Contact details successfully updated 🚀"
            );
          }}
        >
          <div className="bg-white card-box border-20 mt-20">
            <h4 className="dash-title-three">Contact details</h4>
            <div className="dash-input-wrapper mb-10">
              <label htmlFor="mobileNumber">Mobile Number*</label>
              <input type="tel" name="mobileNumber" id="mobileNumber" placeholder="Enter your mobile number" value={formData.mobileNumber} onChange={handleChange} />
            </div>
            <div className="dash-input-wrapper mb-10">
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s me-3">Save</button>
            </div>
          </div>
        </form>

        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(
              "https://test.careerbuddyclub.com:8080/api/students/updateAddressLocation",
              {
                address: formData.address,
                state: formData.state,
                city: formData.city,
                zip_code: formData.zipCode,
              },
              "Address successfully updated 🚀"
            );
          }}
        >
          <div className="bg-white card-box border-20 mt-20">
            <h4 className="dash-title-three">Address & Location</h4>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-10">
                  <label>Address*</label>
                  <input type="text" name="address" placeholder="Enter your Address" value={formData.address} onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label>State*</label>
                  <input type="text" name="state" placeholder="Enter your State" value={formData.state} onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label>City*</label>
                  <input type="text" name="city" placeholder="Enter your City" value={formData.city} onChange={handleChange} />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label>Zip Code*</label>
                  <input type="number" name="zipCode" placeholder="code" value={formData.zipCode} onChange={handleChange} />
                </div>
              </div>
            </div>
            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s me-3">Save</button>
            </div>
          </div>
        </form>

        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(
              "https://test.careerbuddyclub.com:8080/api/students/updatepreference",
              {
                stream: formData.stream,
                level: formData.level,
                specialization: formData.special,
                location: formData.location,
                course: formData.course,
                college: formData.collegePreference,
              },
              "Update Preference Successfully updated 🚀"
            );
          }}
        >
          <div className="bg-white card-box border-20 mt-20">
            <h4 className="dash-title-three">Preference*</h4>
            <div className="row g-3">
              {[
                { name: "stream", label: "Stream*", options: streamOptions },
                { name: "level", label: "Level*", options: levelOptions },
                { name: "location", label: "Location*", options: [{ value: "", label: "Select Location" }, ...locationSelectOptions] },
                { name: "collegePreference", label: "College*", options: [{ value: "", label: "Select College" }, ...filteredColleges.map(college => ({ value: college.college_full_name, label: college.college_full_name }))] },
              ].map(({ name, label, options }) => (
                <div className="col-lg-3" key={name}>
                  <div className="dash-input-wrapper mb-10 preference-input" style={{ position: "relative" }}>
                    <label>{label}</label>
                    <NiceSelect
                      options={options}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleSelectChange}
                      name={name}
                      placeholder={label}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="button-group d-inline-flex align-items-center" style={{ marginTop: "16px" }}>
              <button type="submit" className="dash-btn-two tran3s me-3">Save</button>
            </div>
          </div>
        </form>

        <div className="button-group d-inline-flex align-items-center mt-20">
          <Link className="dash-btn-two tran3s me-3" href="/dashboard/candidate-dashboard/education">Next</Link>
        </div>
      </div>
      <style jsx>{`
        .preference-input,
        .select-fix {
          min-width: 220px;
          max-width: 100%;
        }
        .preference-input :global(.nice-select),
        .select-fix :global(.nice-select) {
          min-height: 48px !important;
          font-size: 16px;
          width: 100%;
          box-sizing: border-box;
          padding-right: 40px !important;
        }
        .preference-input :global(.nice-select .current),
        .select-fix :global(.nice-select .current) {
          display: block;
          max-width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          padding-right: 15px;
        }
        .preference-input :global(.nice-select .option),
        .select-fix :global(.nice-select .option) {
          white-space: normal;
          font-size: 13px;
        }
        .preference-input :global(.nice-select:after),
        .select-fix :global(.nice-select:after) {
          right: 14px !important;
          top: 50% !important;
          transform: translateY(-50%);
        }
        .preference-input :global(.nice-select .list),
        .select-fix :global(.nice-select .list) {
          z-index: 9999 !important;
          max-height: 220px !important;
          overflow-y: auto !important;
          overflow-x: hidden;
        }
        @media (max-width:991px) {
          .preference-input,
          .select-fix {
            min-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardProfileArea;