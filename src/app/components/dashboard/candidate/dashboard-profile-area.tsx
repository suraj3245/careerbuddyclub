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
type Location = "Dehradun" | "Russia" | "Dubai";
// interface CollegeInfo {
//   name: string;
//   fees: string;
// }
const collegesData = [
  { name: "Guru Nanak", location: "Dehradun", feeRange: "Less than 3 Lakhs" },
  { name: "BFIT", location: "Dehradun", feeRange: "Less than 3 Lakhs" },
  {
    name: "Dev Bhoomi College",
    location: "Dehradun",
    feeRange: "Less than 6 Lakhs",
  },
  { name: "JBIT", location: "Dehradun", feeRange: "Less than 6 Lakhs" },
  {
    name: "Uttaranchal University",
    location: "Dehradun",
    feeRange: "Less than 10 Lakhs",
  },
  {
    name: "Doon Business",
    location: "Dehradun",
    feeRange: "Less than 15 Lakhs",
  },
  { name: "UPES", location: "Dehradun", feeRange: "Less than 20 Lakhs" },
  {
    name: "International University",
    location: "Russia",
    feeRange: "Less than 30 Lakhs",
  },
  { name: "OSMU", location: "Russia", feeRange: "Less than 30 Lakhs" },
  {
    name: "Mari State University",
    location: "Russia",
    feeRange: "Less than 30 Lakhs",
  },
  {
    name: "Prem State Medical University",
    location: "Russia",
    feeRange: "Less than 30 Lakhs",
  },

  // Add more colleges as needed
];

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
    // ... other fields as needed ...
  });
  const [streamOptions, setStreamOptions] = useState([]);
  const [levelOptions, setlevelOptions] = useState([]);
  const [specializationOptions, setSpecializationOptions] = useState([]);
  const [coursesOptions, setcoursesOptions] = useState([]);
  const [collegesOptions, setCollegesOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredFees, setFilteredFees] = useState<string[]>([]);
  const [showLoader, setShowLoader] = useState(true);

  const fetchUserData = async () => {
    const token = localStorage.getItem("token");

    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/getstudentsprofile",
      headers: {
        Accept: "*/*",
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
          data.preferences.specialization || formData.special;
        updatedFormData.course = data.preferences.course || formData.course;
        updatedFormData.feeRange =
          data.preferences.fee_range || formData.feeRange;
        updatedFormData.location =
          data.preferences.location || formData.location;
        updatedFormData.collegePreference =
          data.preferences.college || formData.collegePreference;
      }

      // ... similarly for other nested data structures ...

      setFormData(updatedFormData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  // useEffect to fetch user data on component mount
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
      url: "https://test.careerbuddyclub.com:8080/api/students/updatebasicdetails",
      headers: {
        Accept: "*/*",
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
      url: "https://test.careerbuddyclub.com:8080/api/students/updatecontactdetails",
      headers: {
        Accept: "*/*",
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
      url: "https://test.careerbuddyclub.com:8080/api/students/updateAddressLocation",
      headers: {
        Accept: "*/*",
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
      course: formData.course,
      fee_range: formData.feeRange,
      college: formData.collegePreference,
    };
    console.log(PreferenceDetails);
    const token = localStorage.getItem("token");

    // Set up the request options for axios
    const options = {
      method: "POST",
      url: "https://test.careerbuddyclub.com:8080/api/students/updatepreference",
      headers: {
        Accept: "*/*",
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
    // if (item.name === "stream" || item.name === "level") {
    //   fetchCourses();
    // }
  };
  const [streamid, setstreamid] = useState([]);

  const fetchStreamOptions = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/getallstreams",
        headers: {
          Accept: "*/*",
        },
      });
      const streamData = response.data.map(
        (stream: { id: any; title: any }) => ({
          value: stream.title,
          label: stream.title,
        })
      );

      setStreamOptions(streamData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };
  // const locationToColleges: Record<Location, string[]> = {
  //   Dehradun: [
  //     "Guru Nanak",
  //     "BFIT",
  //     "Doon Business",
  //     "JBIT",
  //     "Uttaranchal University",
  //     "Dev Bhoomi College",
  //     "UPES",
  //   ],
  //   Russia: ["University of Russia", "Moscow State University"],
  //   Dubai: [
  //     "American University in Dubai",
  //     "University of Wollongong in Dubai",
  //   ],
  //   // Add more locations and colleges as needed
  // };

  // // Function to get colleges based on selected location
  // const getCollegesByLocation = (location: Location) => {
  //   return locationToColleges[location] || [];
  // };

  // const collegeOptions = getCollegesByLocation(formData.location).map(
  //   (college: any) => ({
  //     value: college,
  //     label: college,
  //   })
  // );

  // Get the selected college object
  const filteredColleges = collegesData.filter(
    (college) =>
      college.location === formData.location &&
      college.feeRange === formData.feeRange
  );

  useEffect(() => {
    fetchStreamOptions(); // Fetch stream options when the component mounts
  }, []);
  const fetchLevelOptions = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://test.careerbuddyclub.com:8080/api/students/getalllevels",
        headers: {
          Accept: "*/*",
        },
      });
      const streamData = response.data.map(
        (level: { id: any; title: any }) => ({
          value: level.title,
          label: level.title,
        })
      );
      setlevelOptions(streamData);
    } catch (error) {
      console.error(error);
      // Handle error, e.g., set some state to show an error message
    }
  };
  // const fetchCourses = async () => {
  //   if (!formData.level || !formData.stream) {
  //     return; // exit if either level or stream is not selected
  //   }

  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "https://test.careerbuddyclub.com:8080/api/students/getcoursesbylevelandstream",
  //       headers: {
  //         Accept: "*/*",
  //         "Content-Type": "application/json",
  //       },
  //       data: {
  //         level_id: formData.level,
  //         stream_id: formData.stream,
  //       },
  //     });

  //     // Map the response to the format expected by NiceSelect
  //     const newCoursesOptions = response.data.map(
  //       (course: { id: any; name: any }) => ({
  //         value: course.name, // assuming you want to store the course id
  //         label: course.name, // the course name for display
  //       })
  //     );

  //     setcoursesOptions(newCoursesOptions);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle the error appropriately
  //   }
  // };
  // const fetchSpecializations = async () => {
  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "https://test.careerbuddyclub.com:8080/api/students/getspecializationsbycourse",
  //       headers: {
  //         Accept: "*/*",
  //         "Content-Type": "application/json",
  //       },
  //       data: { course_id: formData.courses },
  //     });
  //     const specializationData = response.data.map(
  //       (spec: { id: any; title: any }) => ({
  //         value: spec.title,
  //         label: spec.title,
  //       })
  //     );
  //     setSpecializationOptions(specializationData);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error, e.g., set some state to show an error message
  //   }
  // };
  // const fetchcolleges = async () => {
  //   try {
  //     const response = await axios({
  //       method: "POST",
  //       url: "https://test.careerbuddyclub.com:8080/api/students/getcollegesbycoursefeeandlocation",
  //       headers: {
  //         Accept: "*/*",
  //         "Content-Type": "application/json",
  //       },
  //       data: {
  //         course_id: formData.courses,
  //         fee_range: formData.feeRange,
  //         city: formData.location,
  //       },
  //     });
  //     const collegeData = response.data.map(
  //       (college: { id: any; college_full_name: any }) => ({
  //         value: college.college_full_name,
  //         label: college.college_full_name,
  //       })
  //     );
  //     setCollegesOptions(collegeData);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle error, e.g., set some state to show an error message
  //   }
  // };
  useEffect(() => {
    fetchLevelOptions(); // Fetch stream options when the component mounts
  }, []);
  // useEffect(() => {
  //   if (formData.stream && formData.level) {
  //     fetchCourses();
  //   }
  // }, [formData.stream, formData.level]);
  // useEffect(() => {
  //   if (formData.courses) {
  //     fetchSpecializations();
  //   }
  // }, [formData.courses]);
  // useEffect(() => {
  //   fetchcolleges();
  // }, [formData.courses, formData.feeRange, formData.city]);

  useEffect(() => {
    const selectedLocation = formData.location;
    const feesInSelectedLocation = collegesData
      .filter((college) => college.location === selectedLocation)
      .map((college) => college.feeRange);
    const uniqueFees = [...new Set(feesInSelectedLocation)];
    setFilteredFees(uniqueFees);
  }, [formData.location]);

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

        <h2 className="main-title">College Application Form </h2>

        <>
          <div className="bg-white card-box border-20">
            <form onSubmit={handlePersonalDetailsSubmit}>
              <div className="dash-input-wrapper mb-10">
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
                  <div className="dash-input-wrapper mb-10">
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
                  <div className="dash-input-wrapper mb-10">
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
                  <div className="dash-input-wrapper mb-10">
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

              <div className="button-group d-inline-flex align-items-center">
                <button type="submit" className="dash-btn-two tran3s me-3">
                  Save
                </button>
              </div>
            </form>
          </div>
        </>

        <form onSubmit={handleContactDetailsSubmit}>
          <div className="bg-white card-box border-20 mt-20">
            <h4 className="dash-title-three">Contact details</h4>

            <div className="dash-input-wrapper mb-10">
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
            <div className="dash-input-wrapper mb-10">
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
            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s me-3">
                Save
              </button>
            </div>
          </div>
        </form>

        <form onSubmit={handleAddressDetailsSubmit}>
          <div className="bg-white card-box border-20 mt-20">
            <h4 className="dash-title-three">Address & Location</h4>
            <div className="row">
              <div className="col-12">
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
                <div className="dash-input-wrapper mb-10">
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
            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s me-3">
                Save
              </button>
            </div>
          </div>
        </form>

        <form onSubmit={handlePreferenceDetailsSubmit}>
          <div className="bg-white card-box border-20 mt-20">
            <h4 className="dash-title-three">Preference*</h4>
            <div className="row">
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
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
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label htmlFor="">Level*</label>
                  <NiceSelect
                    options={levelOptions}
                    value={formData.level}
                    onChange={handleSelectChange}
                    name="level"
                    placeholder="select Level"
                  />
                </div>
              </div>

              {/* <div className="col-lg-3">
                  <div className="dash-input-wrapper mb-10">
                    <label htmlFor="">Specialization*</label>
                    <NiceSelect
                      options={[
                        { value: "", label: "select Specialization" },
                        {
                          value: "computer engineering",
                          label: "computer engineering",
                        },
                        {
                          value: "civil engineering",
                          label: "civil engineering",
                        },
                        {
                          value: "electrical engineering",
                          label: "electrical engineering",
                        },

                        { value: "Others", label: "Others" },
                      ]}
                      value={formData.special}
                      onChange={handleSelectChange}
                      name="special"
                      placeholder="Select Specialization"
                    />
                  </div>
                </div> */}
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label htmlFor="">Location*</label>

                  <NiceSelect
                    options={[
                      { value: "", label: "Select Location" },
                      { value: "Dehradun", label: "Dehradun" },
                      { value: "Russia", label: "Russia" },
                    ]}
                    value={formData.location}
                    onChange={handleSelectChange}
                    name="location"
                    placeholder="Select Location"
                  />
                </div>
              </div>

              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label htmlFor="">Fee Range*</label>
                  <NiceSelect
                    options={filteredFees.map((fee) => ({
                      value: fee,
                      label: fee,
                    }))}
                    value={formData.feeRange}
                    onChange={handleSelectChange}
                    name="feeRange"
                    placeholder="Select Fee Range"
                  />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="dash-input-wrapper mb-10">
                  <label htmlFor="">College*</label>
                  <NiceSelect
                    options={filteredColleges.map((college) => ({
                      value: college.name,
                      label: college.name,
                    }))}
                    value={formData.collegePreference}
                    onChange={handleSelectChange}
                    name="collegePreference"
                    placeholder="Select College"
                  />
                </div>
              </div>
            </div>
            <div className="button-group d-inline-flex align-items-center">
              <button type="submit" className="dash-btn-two tran3s me-3">
                Save
              </button>
            </div>
          </div>
        </form>

        <div className="button-group d-inline-flex align-items-center mt-20">
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
