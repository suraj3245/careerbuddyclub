import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
// import schoolLogo from "@/assets/images/logo/School-Logo.png";
import kvimalogo from "@/assets/images/logo/kvimalogo.jpg";

// Define the type for a school
type SchoolInfo = {
  name: string;
  address: string;
  logo: StaticImageData;
  description: string;
  contact: {
    phone: string;
    email: string;
  };
  preSchool: string;
  visionandmission: string;
  AcademicExcellence: string;
  CoCurricularActivities: string;
  InfrastructureFacilities: string;
  ValuesandCulture: string;
};

const SchoolProfile = () => {
  const [schoolName, setSchoolName] = useState<string>("");
  const [schoolInf, setSchoolInf] = useState<SchoolInfo | null>(null);
  
  useEffect(() => {
    const localData = localStorage.getItem("schoolName") || '';
     console.log(localData,'data');

           // Find the school based on localData and set it
           const foundSchool = schoolInformation.find((school) => school.name === localData);
           setSchoolInf(foundSchool || null); // Ensure schoolInf is either a school or null
           console.log(foundSchool, 'inf'); // Log the found school information

  }, []);

  const schoolInformation: SchoolInfo[] = [
    {
      name: "K.V IMA Dehradun",
      address: "(Dehradun, Uttarakhand, India)",
      logo: kvimalogo,
      description: "Kendriya Vidyalaya Indian Military Academy (KV IMA) Dehradun is a prestigious institution dedicated to providing high-quality education to children of defense personnel and civilians alike. Established under the aegis of the Kendriya Vidyalaya Sangathan (KVS), the school aims to foster an environment conducive to educational growth, all while nurturing the distinctive values associated with defense services.",
      contact: {
        phone: "0135-2773470",
        email: "kvimaddn@gmail.com",
      },
      visionandmission: 'KV IMA Dehradun’s vision is to cultivate a holistic educational experience that not only focuses on academic excellence but also promotes the overall development of students. The mission of the school is aligned with the national educational framework, emphasizing the development of well-rounded individuals equipped with the skills necessary to thrive in a competitive world.',
      AcademicExcellence: 'At KV IMA Dehradun, we pride ourselves on delivering a rigorous academic curriculum that adheres to the guidelines set forth by the National Council of Educational Research and Training (NCERT). Our educators are highly qualified and dedicated to fostering an interactive learning environment. Utilizing innovative teaching methodologies, we strive to cater to the diverse learning needs of our students, enabling them to unlock their full potential. The school offers comprehensive education from the primary level up to the secondary level, encompassing a wide range of subjects. Our curriculum is designed not only to prepare students for board examinations but also to encourage critical thinking and creativity. Regular assessments and feedback mechanisms are in place to ensure that students stay engaged and motivated in their academic pursuits.',
      preSchool: "PRE-SCHOOL",
      CoCurricularActivities: 'We recognize that education extends beyond the confines of conventional classrooms. At KV IMA Dehradun, we offer an array of co-curricular activities that play a crucial role in the all-around development of students. Our programs include sports, music, dance, drama, and various clubs that foster skills such as leadership, teamwork, and communication. Participation in these activities not only helps students discover and hone their talents but also instills a sense of discipline and resilience. Our dedicated faculty members guide students in these endeavors, ensuring that every child has the opportunity to explore their interests and develop their abilities.',
      InfrastructureFacilities: 'KV IMA Dehradun boasts modern infrastructure that supports the varied needs of our student population. Classrooms are equipped with state-of-the-art teaching aids, including smart boards and audio-visual equipment. The school also has a well-stocked library that serves as a valuable resource for students and staff alike. Additionally, the campus houses a science laboratory, computer lab, and activity rooms designed for art and craft, music, and dance. Outdoor facilities include sports fields and courts, providing ample space for physical education and sports activities. Such resources not only enhance the learning experience but also contribute to a balanced education.',
      ValuesandCulture: 'At KV IMA Dehradun, we pride ourselves on our strong ethical foundation rooted in discipline, respect, and integrity. The culture within the school is reflective of the values instilled by the defense services, promoting camaraderie and a sense of belonging among students. We believe that instilling these values is paramount in shaping responsible citizens who are prepared to contribute positively to society.'
    },
    // {
    //   name: "GGIC DEHRADUN",
    //   address: "(Dasholi, Uttarakhand, India)",
    //   description: "It was always a dream of our beloved Rev. Late Sh. P. L. Kapoor ji to provide quality education which instills in students values to be good human beings and to give the child a strong foundation early in life and a personality brimming with confidence and qualities of leadership; which makes him really Indian, truly modern and deeply human. In the endeavour to fulfil his dream, The Gurukul is a step in that direction.",
    //   contact: {
    //     phone: "+911234567890",
    //     email: "info@gicbachherdasholi.com",
    //   },
    //   visionandmission: 'Vision and Mission',
    //   content: 'KV IMA Dehradun’s vision is to cultivate a holistic educational experience that not only focuses on academic excellence but also promotes the overall development of students. The mission of the school is aligned with the national educational framework, emphasizing the development of well-rounded individuals equipped with the skills necessary to thrive in a competitive world.',
    //   overview: "School of GIC DASHOLI curriculum is aligned with the K12 Program prescribed by the Department of Education. Learning needs such as functional literacy, life skills, self-development, and values are given priority to prepare students for higher education and the outside world",
    //   preSchool: "PRE-SCHOOL",
    // }
  ];
 

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center mb-4">
        <div>
        {schoolInf?.logo && (
    <Image src={schoolInf.logo} alt="School Logo" width={100} height={100} className="rounded-circle" />
  )}
        </div>
        <div className="ml-3 w-100">
          <h1 className="display-4 font-weight-bold mt-4 text-center"
          style={{ color: "#00796b" }}>{schoolInf?.name}</h1>
          <div className="mb-3">
            <p className="h6 text-center">{schoolInf?.address}</p>
          </div>
        </div>
      </div>
      <div className="text-left">
        <div className="mb-3">
          <p className="mb-1">{schoolInf?.description}</p>
        </div>
        <div className="mb-3">
          <h3>Vision and Mission:</h3>
          <p className="mb-1">{schoolInf?.visionandmission}</p>
        </div>
        <div className="mb-3">
          <h3>Academic Excellence:</h3>
          <p className="mb-1">{schoolInf?.AcademicExcellence}</p>
        </div>
        <div className="mb-3">
          <h3>Co-Curricular Activities:</h3>
          <p className="mb-1">{schoolInf?.CoCurricularActivities}</p>
        </div>
        <div className="mb-3">
          <h3>Infrastructure and Facilities:</h3>
          <p className="mb-1">{schoolInf?.InfrastructureFacilities}</p>
        </div>
        <div className="mb-3">
          <h3>Values and Culture:</h3>
          <p className="mb-1">{schoolInf?.ValuesandCulture}</p>
        </div>
        <div>
          <h3>Contact Information:</h3>
          <p className="mb-1"><strong>Phone:</strong> {schoolInf?.contact.phone}</p>
          <p className="mb-0"><strong>Email:</strong> 
           <a href={`mailto:${schoolInf?.contact.email}`}>{schoolInf?.contact.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;