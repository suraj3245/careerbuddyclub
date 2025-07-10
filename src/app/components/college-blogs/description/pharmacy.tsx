import React from "react";

const colleges = [
  {
    name: "Guru Nanak College (GNC), Dehradun",
    courses: "B.Pharm, D.Pharm",
    description: [
      "Focuses on practical skills",
      "Industry-oriented training in pharmacy"
    ],
    benefits: [
      "Affordable fee structure",
      "Placement assistance",
      "Hands-on lab work"
    ],
    eligibility: "10+2 with PCB/PCM, Minimum 50%",
    fees: "₹65,000 - ₹85,000/year",
    website: "https://careerbuddyclub.com/college-details/GNC?utm_source=CBC-Website&utm_medium=Online&utm_campaign=GNC"
  },
  {
    name: "Doon PG College of Agriculture and Allied Sciences",
    courses: "B.Pharm, M.Pharm",
    description: [
      "Modern infrastructure",
      "Strong industry-academic partnerships"
    ],
    benefits: [
      "Research opportunities",
      "NAAC accreditation",
      "Experienced faculty"
    ],
    eligibility: "10+2 Science, entrance test required",
    fees: "₹75,000 - ₹1,10,000/year",
    website: "https://careerbuddyclub.com/college-details/DCAAS"
  },
  {
    name: "JB Institute of Technology (JBIT), Dehradun",
    courses: "B.Pharm, Pharmacy Practice",
    description: [
      "Known for clinical exposure",
      "Experiential learning in pharmacy"
    ],
    benefits: [
      "Industry visits",
      "Clinical tie-ups",
      "Active placement cell"
    ],
    eligibility: "10+2 in Science with min 45-50%",
    fees: "₹70,000 - ₹90,000/year",
    website: "https://careerbuddyclub.com/college-details/JBIT?utm_source=CBC-Website&utm_medium=Online&utm_campaign=JBIT"
  },
  {
    name: "BFIT Group of Institutions, Dehradun",
    courses: "D.Pharm, B.Pharm",
    description: [
      "Affordable education",
      "Active campus life"
    ],
    benefits: [
      "Scholarships available",
      "Entrepreneurial ecosystem",
      "Top-notch faculty"
    ],
    eligibility: "10+2 (PCB/PCM), no entrance required",
    fees: "₹60,000 - ₹80,000/year",
    website: "https://careerbuddyclub.com/college-details/BFIT?utm_source=CBC-Website&utm_medium=Online&utm_campaign=BFIT"
  }
];

const PharmacyDescription = () => {
  return (
    <div className="text-base leading-relaxed text-gray-800">
      <p className="mb-4">
        Dehradun, often hailed as the educational hub of Uttarakhand, has emerged as a hotspot for pharmacy education. The city is home to several reputed institutions offering pharmacy courses, ranging from diploma to bachelor's level, with excellent infrastructure and industry connections. With the Indian pharmaceutical sector poised for robust growth, pursuing a career in pharmacy offers both stability and a multitude of career options.
      </p>
      <p className="mb-4">
        In this comprehensive 2025 guide by <strong>Career Buddy Club</strong> — your trusted education partner — we explore the top pharmacy colleges in Dehradun. This guide covers essential details such as courses offered, fees, eligibility criteria, campus highlights, and career scope to help students and parents make informed decisions.
      </p>

      <h3 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Top Pharmacy Colleges in Dehradun</h3>

      <div className="relative overflow-x-auto rounded-xl shadow-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200">
        {/* Gradient fade for scroll hint */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent z-10" />
        <table className="w-full min-w-[800px] table-auto text-sm md:text-base text-left">
          <thead className="sticky top-0 z-20 bg-gray-100 text-gray-700 shadow-sm">
            <tr>
              <th className="p-4 font-semibold">College</th>
              <th className="p-4 font-semibold">Courses</th>
              <th className="p-4 font-semibold">Short Description</th>
              <th className="p-4 font-semibold">Key Benefits</th>
              <th className="p-4 font-semibold">Eligibility</th>
              <th className="p-4 font-semibold">Fees</th>
              <th className="p-4 font-semibold">Website</th>
            </tr>
          </thead>
          <tbody>
            {colleges.map((college, idx) => (
              <tr
                key={college.name}
                className={`transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-blue-50`}
              >
                <td className="p-4 font-medium text-gray-900">{college.name}</td>
                <td className="p-4">{college.courses}</td>
                <td className="p-4">
                  <ul className="list-disc list-inside space-y-1">
                    {college.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-4">
                  <ul className="list-disc list-inside space-y-1">
                    {college.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </td>
                <td className="p-4">{college.eligibility}</td>
                <td className="p-4">{college.fees}</td>
                <td className="p-4">
                  <a
                    href={college.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-semibold"
                  >
                    Visit
                    
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
     
    </div>
  );
};

export default PharmacyDescription;