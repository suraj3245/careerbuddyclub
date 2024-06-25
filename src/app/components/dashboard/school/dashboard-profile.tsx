import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import schoolLogo from "@/assets/images/logo/School-Logo.png"; // Replace with the path to your school logo image

const SchoolProfile = () => {
  const schoolInfo = {
    name: "The GURUKUL FOUNDATION SCHOOL",
    address: "(123 Main Street, Dehradun, Uttarakhand, India)",
    description: "It was always a dream of our beloved Rev. Late Sh. P. L. Kapoor ji to provide quality education which instilsin students values to be good human beings and to give the child a strong foundation early in life and a personality brimming with confidence and qualities of leadership; which makes him really Indian, truly modern and deeply human. In the endeavour to fulfilhis dream, The Gurukul is a step in that direction.",
    contact: {
      phone: "+91 12345 67890",
      email: "info@gurunanakcollege.com",
    },
  };

  return (
    
    <div className="container mt-5 ">
      <div className="d-flex align-items-center mb-4">
        <div>
          <Image src={schoolLogo} alt="School Logo" width={100} height={100} className="rounded-circle" />
        </div>
        <div className="ml-3 w-100">
          <h1 className="h2 text-center" style={{ color:"blue"}}>{schoolInfo.name}</h1>
          <div className="mb-3">
         <p className="h6 text-center">{schoolInfo.address}</p>
        </div>
        </div>
      </div>
      <div className="text-left">
        <div className="mb-3">
          <p className="mb-1">{schoolInfo.description}</p>
        </div>
        <div className="mb-3">
          <strong>Overview:</strong>
          <p className="mb-1">School of Guru Nanak curriculum is aligned with the K12 Program prescribed by the Department of Education. Learning needs such as functional literacy, life skills, self-development, and values are given priority to prepare students for higher education and the outside world..</p>
        </div>
        <div className="mb-3">
          <strong>PRE-SCHOOL</strong>
          <ul>
            <li>Interactive development programs
              <p>We take care of your child’s first interaction with the outer world without you. Your kids will surely love to play and learn with friendly teachers and their fellow kids. To keep them entertained, we have the most indulging learning and development programs. In this way, you child gets a comfortable place where we serve them with a nurturing environment.</p>
            </li>
            <li>We work on Kids First philosophy
              <p>With an innovative curriculum and active learning methods, we make sure to let your kids enjoy along with the studies. With our excellent arrangements for your kids, such as Storytelling and mindful learning, we make sure to establish a good base for your kid’s bright future.</p>
            </li>
            <li>Excellent Meal plans
              <p>Nutritious food is the first requirement for your kid’s well-being and overall mental and physical growth. So, we have healthy meal plans to let them have the food that can provide maximum benefits. By promoting a healthy diet, your kids will also learn table-manner and other crucial skills.</p>
            </li>
            <li>Ensure a bright future
              <p>With our effective and interactive teaching tactics, we encourage your kids to learn essential life lessons directly and indirectly. In this way, we actually prepare them to become good citizens and students first of all.</p>
            </li>
            </ul>
        </div>
        <div>
          <strong>Contact Information:</strong>
          <p className="mb-1"><strong>Phone:</strong> {schoolInfo.contact.phone}</p>
          <p className="mb-0"><strong>Email:</strong> <a href={`mailto:${schoolInfo.contact.email}`}>{schoolInfo.contact.email}</a></p>
        </div>
      </div>
    </div>
  );
};

export default SchoolProfile;
