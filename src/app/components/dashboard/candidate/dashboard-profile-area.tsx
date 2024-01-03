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
    location: "",
    collegeType: "",
    courses: "",
    feeRange: "",
    collegePreference: "",
    // ... other fields as needed ...
  });
  const [streamOptions, setStreamOptions] = useState([]);
  const [levelOptions, setlevelOptions] = useState([]);
  const [specializationOptions, setSpecializationOptions] = useState([]);
  const [coursesOptions, setcoursesOptions] = useState([]);
  const [collegesOptions, setCollegesOptions] = useState([]);
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    const options = {
      method: "POST",
      url: "http://54.224.161.134:8080/api/students/getstudentsprofile",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: `Bearer ${token}`, // Replace with your actual token
        "Content-Type": "application/json",
      },
      data: {},
    };

    try {
      const response = await axios.request(options);
      const data = response.data;

      const updatedFormData = { ...formData };
      if (data.student) {
        updatedFormData.fullName = data.student.name || formData.fullName;
        updatedFormData.email = data.student.email || formData.email;
        updatedFormData.mobileNumber =
          data.student.mobile || formData.mobileNumber;
      }

      if (data.basicDetails) {
        updatedFormData.dateOfBirth =
          data.basicDetails.dob || formData.dateOfBirth;
        updatedFormData.socialCategory =
          data.basicDetails.social_category || formData.socialCategory;
        updatedFormData.gender = data.basicDetails.gender || formData.gender;
      }
      if (data.contactDetails) {
        updatedFormData.address =
          data.contactDetails.address || formData.address;
        updatedFormData.city = data.contactDetails.city || formData.city;
        updatedFormData.state = data.contactDetails.state || formData.state;
        updatedFormData.zipCode =
          data.contactDetails.zip_code || formData.zipCode;
      }
      if (data.preferences) {
        updatedFormData.stream = data.preferences.stream || formData.stream;
        updatedFormData.level = data.preferences.level || formData.level;
        updatedFormData.special =
          data.basicDetails.specialization || formData.special;
        updatedFormData.courses = data.preferences.courses || formData.courses;
        updatedFormData.feeRange =
          data.preferences.fee_range || formData.feeRange;
        updatedFormData.collegePreference =
          data.preferences.college_preference || formData.collegePreference;
      }

      // ... similarly for other nested data structures ...

      setFormData(updatedFormData);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect to fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePersonalDetailsSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const personalDetails = {
      name: formData.fullName,
      social_category: formData.socialCategory,
      dob: formData.dateOfBirth,
      gender: formData.gender.toLowerCase(), // assuming your form provides 'Male', 'Female',
    };

    const token = localStorage.getItem("token");
    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "http://54.224.161.134:8080/api/students/updatebasicdetails",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: personalDetails, // Send only the required data
    };
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success

        toast.success("Profile Data successfully updated 🚀", {
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
    // Logic to handle personal details submission
  };

  const handleContactDetailsSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const contactDetails = {
      email: formData.email,
      mobile: formData.mobileNumber,
    };

    const token = localStorage.getItem("token");
    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "http://54.224.161.134:8080/api/students/updatecontactdetails",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: contactDetails, // Send only the required data
    };
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        toast.success("Contact details successfully updated 🚀", {
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
  const handleAddressDetailsSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const AddressDetails = {
      address: formData.address,
      state: formData.state,
      city: formData.city,
      zip_code: formData.zipCode,
    };

    const token = localStorage.getItem("token");

    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "http://54.224.161.134:8080/api/students/updateAddressLocation",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: AddressDetails, // Send only the required data
    };
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success

        toast.success("Address successfully updated 🚀", {
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
  };

  const handlePreferenceDetailsSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const PreferenceDetails = {
      stream: formData.stream,
      level: formData.level,
      specialization: formData.special,
      location: formData.location,
      course: formData.courses,
      fee_range: formData.feeRange,
      college_preference: formData.collegePreference,
    };

    const token = localStorage.getItem("token");
    console.log(PreferenceDetails);
    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "http://54.224.161.134:8080/api/students/updatepreference",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: PreferenceDetails, // Send only the required data
    };
    axios
      .request(options)
      .then((response) => {
        // Handle the response here, e.g., notify the user of success
        toast.success("Update Preference Successfully updated 🚀", {
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
    console.log("Contact Details: ", formData);
    // Logic to handle contact details submission
  };
  const handleSelectChange = (item: OnChangeArgument) => {
    console.log("Select Changed", item);
    setFormData((prevState) => ({ ...prevState, [item.name]: item.value }));
    if (item.name === "stream" || item.name === "level") {
      fetchCourses();
    }
  };
  const [streamid, setstreamid] = useState([]);

  const fetchStreamOptions = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://54.224.161.134:8080/api/students/getallstreams",
        headers: {
          Accept: "*/*",
          "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        },
      });
      const streamData = response.data.map(
        (stream: { id: any; title: any }) => ({
          value: stream.id,
          label: stream.title,
        })
      );

      setStreamOptions(streamData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };

  useEffect(() => {
    fetchStreamOptions(); // Fetch stream options when the component mounts
  }, []);
  const fetchLevelOptions = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://54.224.161.134:8080/api/students/getalllevels",
        headers: {
          Accept: "*/*",
        },
      });
      const streamData = response.data.map(
        (level: { id: any; title: any }) => ({
          value: level.id,
          label: level.title,
        })
      );
      setlevelOptions(streamData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };
  const fetchCourses = async () => {
    if (!formData.level || !formData.stream) {
      return; // exit if either level or stream is not selected
    }

    try {
      const response = await axios({
        method: "POST",
        url: "http://54.224.161.134:8080/api/students/getcoursesbylevelandstream",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        data: {
          level_id: formData.level,
          stream_id: formData.stream,
        },
      });

      // Map the response to the format expected by NiceSelect
      const newCoursesOptions = response.data.map(
        (course: { id: any; name: any }) => ({
          value: course.id, // assuming you want to store the course id
          label: course.name, // the course name for display
        })
      );

      setcoursesOptions(newCoursesOptions);
    } catch (error) {
      console.error(error);
      // Handle the error appropriately
    }
  };
  const fetchSpecializations = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://54.224.161.134:8080/api/students/getspecializationsbycourse",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        data: { course_id: formData.courses },
      });
      const specializationData = response.data.map(
        (spec: { id: any; title: any }) => ({
          value: spec.id,
          label: spec.title,
        })
      );
      setSpecializationOptions(specializationData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };
  const fetchcolleges = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://54.224.161.134:8080/api/students/getcollegesbycoursefeeandlocation",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        data: {
          course_id: formData.courses,
          fee_range: formData.feeRange,
          city: formData.location,
        },
      });
      const collegeData = response.data.map(
        (college: { id: any; college_full_name: any }) => ({
          value: college.id,
          label: college.college_full_name,
        })
      );
      setCollegesOptions(collegeData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };
  useEffect(() => {
    fetchLevelOptions(); // Fetch stream options when the component mounts
  }, []);
  useEffect(() => {
    if (formData.stream && formData.level) {
      fetchCourses();
    }
  }, [formData.stream, formData.level]);
  useEffect(() => {
    if (formData.courses) {
      fetchSpecializations();
    }
  }, [formData.courses]);
  useEffect(() => {
    fetchcolleges();
  }, [formData.courses, formData.feeRange, formData.city]);

  return (
    <div className="dashboard-body">
      <div className="position-relative">
        {/* header start */}
        <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
        {/* header end */}

        <h2 className="main-title">College Application Form</h2>

        <>
          <div className="bg-white card-box border-20">
            <form onSubmit={handlePersonalDetailsSubmit}>
              <div className="dash-input-wrapper mb-30">
                <label htmlFor="fullName">Full Name*</label>
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
                  <div className="dash-input-wrapper mb-25">
                    <label htmlFor="Gender">Gender*</label>
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

              <div className="button-group d-inline-flex align-items-center mt-30">
                <button type="submit" className="dash-btn-two tran3s me-3">
                  Save
                </button>
              </div>
            </form>
          </div>
        </>

        <form onSubmit={handleContactDetailsSubmit}>
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
            <div className="button-group d-inline-flex align-items-center mt-30">
              <button type="submit" className="dash-btn-two tran3s me-3">
                Save
              </button>
            </div>
          </div>
        </form>

        <form onSubmit={handleAddressDetailsSubmit}>
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
            <div className="button-group d-inline-flex align-items-center mt-30">
              <button type="submit" className="dash-btn-two tran3s me-3">
                Save
              </button>
            </div>
          </div>
        </form>

        <form onSubmit={handlePreferenceDetailsSubmit}>
          <div className="bg-white card-box border-20 mt-40">
            <h4 className="dash-title-three">Preference*</h4>
            <div className="row">
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Stream*</label>
                  <NiceSelect
                    options={streamOptions}
                    value={formData.stream}
                    onChange={handleSelectChange}
                    name="stream"
                    placeholder="select stream"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">level*</label>
                  <NiceSelect
                    options={levelOptions}
                    value={formData.level}
                    onChange={handleSelectChange}
                    name="level"
                    placeholder="select level"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Courses*</label>
                  <NiceSelect
                    options={coursesOptions}
                    value={formData.courses}
                    onChange={handleSelectChange}
                    name="courses"
                    placeholder="select courses"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">Specialization*</label>
                  <NiceSelect
                    options={specializationOptions}
                    value={formData.special}
                    onChange={handleSelectChange}
                    name="special"
                    placeholder="select specialization"
                  />
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
                  <label htmlFor="">Fee Range*</label>
                  <NiceSelect
                    options={[
                      { value: "", label: "select Fee Range" },
                      { value: "100000-300000", label: "1-3Lakhs" },
                      { value: "300000-600000", label: "3-6Lakhs" },
                      { value: "600000-100000", label: "6-10Lakhs" },
                      { value: "Others", label: "Others" },
                    ]}
                    value={formData.feeRange}
                    onChange={handleSelectChange}
                    name="feeRange"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dash-input-wrapper mb-25">
                  <label htmlFor="">College*</label>
                  <NiceSelect
                    options={collegesOptions}
                    value={formData.collegePreference}
                    onChange={handleSelectChange}
                    name="CollegePreference"
                    placeholder="select college"
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
          <Link
            className="dash-btn-two tran3s me-3"
            href="/dashboard/candidate-dashboard/education"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardProfileArea;
