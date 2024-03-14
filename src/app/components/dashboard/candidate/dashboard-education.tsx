"use client";
import React, { useEffect, useState } from "react";
import DashboardHeader from "./dashboard-header";
import NiceSelect from "@/ui/nice-select-two";
import { OnChangeArgument } from "@/ui/nice-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardEducation = ({ setIsOpenSidebar }: IProps) => {
  const [formData, setFormData] = useState({
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
    // ... other fields as needed ...
  });
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const fetchUserData = async () => {
    const temptoken = localStorage.getItem("token");
    try {
      const response = await axios({
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/getstudentsprofile",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${temptoken}`,
        },
      });

      if (response.data) {
        // Assuming the data structure is similar to the one you provided
        const data = response.data;
        setFormData({
          schoolNameX: data.educationDetails.school_name_x || "",
          boardX: data.educationDetails.board_x || "",
          streamX: data.educationDetails.stream_x || "",
          passingYearX: data.educationDetails.passing_year_x || "",
          percentageCgpaX: data.educationDetails.percentage_x || "",
          schoolNameXII: data.educationDetails.school_name_xii || "",
          boardXII: data.educationDetails.board_xii || "",
          streamXII: data.educationDetails.stream_xii || "",
          passingYearXII: data.educationDetails.passing_year_xii || "",
          percentageCgpaXII: data.educationDetails.percentage_xii || "",
          collegeName: data.educationDetails.college_name || "",
          universityName: data.educationDetails.university_name || "",
          degreeName: data.educationDetails.degree || "",
          passingYearCollege: data.educationDetails.passing_year_college || "",
          percentageCgpaCollege: data.educationDetails.percentage_college || "",
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // Use useEffect to fetch data on component mount
  useEffect(() => {
    fetchUserData();
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 3 seconds
    }, 3000);

    // Cleanup timeout if component unmounts before timeout completes
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Logic to handle contact details submission

  const handleEducationDetailsSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const EducationDetails = {
      school_name_x: formData.schoolNameX,
      board_x: formData.boardX,
      stream_x: formData.streamX,
      passing_year_x: formData.passingYearX,
      percentage_x: formData.percentageCgpaX,
      school_name_xii: formData.schoolNameXII,
      board_xii: formData.boardXII,
      stream_xii: formData.streamXII,
      passing_year_xii: formData.passingYearXII,
      percentage_xii: formData.percentageCgpaXII,
      college_name: formData.collegeName,
      university_name: formData.universityName,
      degree: formData.degreeName,
      passing_year_college: formData.passingYearCollege,
      percentage_college: formData.percentageCgpaCollege,
    };

    const token = localStorage.getItem("token");
    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/updateEducationDetails",
      headers: {
        Accept: "*/*",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: EducationDetails, // Send only the required data
    };
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        toast.success("Education Details Successfully updated 🚀", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        // Handle any errors here, e.g., notify the user of the failure
        console.error(":", error);
        toast.error("Unsucessful submission😵‍💫", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });

    // Logic to handle contact details submission
  };

  const handleSelectChange = (item: OnChangeArgument) => {
    setFormData((prevState) => ({ ...prevState, [item.name]: item.value }));
  };
  if (showLoader || isLoading) {
    return (
      <div
        className="dashboard-body"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <iframe
          src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json"
          style={{ width: "300px", height: "300px" }} // Adjust size as needed
        ></iframe>
      </div>
    ); // Replace with your loader component or element
  }
  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        <h2 className="main-title">Education Details</h2>

        <form onSubmit={handleEducationDetailsSubmit}>
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Education Details*</h4>
            <h5 className="sub-title">Class X Details</h5>

            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
                  <label htmlFor="">Passing Year*</label>
                  <input
                    type="number"
                    id="passingYearXII"
                    value={formData.passingYearXII}
                    onChange={handleChange}
                    placeholder="YYYY"
                    name="passingYearXII"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
            <div className="button-group d-inline-flex align-items-center mt-30">
              <button type="submit" className="dash-btn-two tran3s me-3">
                Save
              </button>
            </div>
          </div>
        </form>

        <div className="button-group d-inline-flex align-items-center mt-30">
          <Link type="submit" className="dash-btn-two tran3s me-3" href="/">
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardEducation;
