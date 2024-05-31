import { IcareerType } from "@/types/career-details";
import Image, { StaticImageData } from "next/image";
import img1 from "@/assets/images/assets/img_105.jpg";
import img2 from "@/assets/images/assets/img_106.jpg";
import img3 from "@/assets/images/assets/img_107.webp";
import img4 from "@/assets/images/assets/img_108.jpg";
import img5 from "@/assets/images/assets/img_109.jpg";
import img6 from "@/assets/images/assets/img_110.jpeg";
import img7 from "@/assets/images/assets/img_111.jpg";
import img8 from "@/assets/images/assets/img_112.jpg";
import img9 from "@/assets/images/assets/img_113.jpg";
import img10 from "@/assets/images/assets/img_114.jpg";
import img11 from "@/assets/images/assets/img_115.png";

const career_details: IcareerType[] = [
  {
    id: 1,

    career: "GENETICISTS",
    location: "",
    careersection:
      "Geneticists are scientists who specialize in the study of genetics, which is the branch of biology that focuses on the inheritance, variation, and expression of genes in living organisms. They investigate how genes are passed from one generation to the next, how they function within cells, and how genetic variations contribute to traits and diseases. Overall, geneticists play a crucial role in advancing our understanding of genetics, improving human health, and addressing societal challenges related to genetics and genomics. Their work contributes to various fields, including medicine, agriculture, conservation, forensics, and biotechnology.",

    careersection1:
      "As a geneticist, you will conduct research and analysis to study the inheritance, variation, and expression of genes in living organisms. You will investigate how genetic information influences biological processes, traits, and diseases, with the goal of advancing scientific knowledge and addressing societal challenges related to genetics and genomics.",

    t1: "Molecular Biology Techniques",
    t2: "Genetic Analysis Software",
    t3: "Genome Editing Tools",
    t4: "Next-Generation Sequencing (NGS)",
    t5: "Data Visualization",

    X1: " BLAST, NCBI databases, Ensembl, and UCSC Genome Browser",
    X2: "DNA Sequencers - Example: Illumina Sequencer",
    X3: "Centrifuges - Example: Beckman Coulter Centrifuge",
    X4: "PCR Machines - Example: Thermal Cycler",
    X5: " CRISPR-Cas9, TALENs, and zinc finger nucleases",

    S1: "Genetic Analysis",
    S2: "Team Collaboration.",
    S3: "Critical Thinking.",
    S4: "Attention to Detail.",
    S5: "Laboratory Safety",

    courses:
      "Program at a college typically includes facilities and equipment tailored to support both theoretical and practical aspects of genetics research and experimentation. What you might find here Laboratories, Advanced Equipment, Animal and Plant Facilities, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Bioethics and Safety Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "These companies focus on developing products and technologies based on genetic research. They often hire geneticists for roles such as research scientists, bioinformaticians, genetic engineers, and molecular biologists.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.0 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 15.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 15 LPA ",
      },
    ],

    Topcollege: [
      {
        University: " The Indian Institute of Science, Bengaluru",
      },
      {
        University: "All IIT & NIT",
      },
      {
        University:
          "HNBGU, A Central University (NACC Grade): GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Manipal University",
      },
      {
        University: "Anna University, Chennai, TN",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: " B.Sc in Biological Science",
      },
      {
        Courses: "B.Sc in Chemistry, Zoology, Botany",
      },
      {
        Courses: "B.Sc in Chemistry, Zoology, Biotechnology",
      },
      {
        Courses: "B.Sc in Microbiology, Chemistry, Zoology",
      },
      {
        Courses: "B.Sc in Forestry",
      },
      {
        Courses: "B.Sc in Horticulture",
      },
      {
        Courses: "B.Sc in Agriculture Science",
      },
      {
        Courses: "M.Sc in Genetics /Mol. Biology/ Biochemistry",
      },
      {
        Courses: "M.Sc in Horticulture",
      },
      {
        Courses: "M.Sc in Forestry",
      },
      {
        Courses: "M.Sc in Chemistry / Zoology / Botany.",
      },
      {
        Courses: "Ph. D in Biological science or related field.",
      },
    ],
    Topcompany: [
      {
        Company: "Biocon",
      },
      {
        Company: "Genentech",
      },
      {
        Company: "Novozymes",
      },
      {
        Company: "Thermo Fisher Scientific",
      },
      {
        Company: "Amgen",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Research analyst, Genetic Analysis, Inheritance Patterns, Genetics Counselling, Population Genetic and Regulatory Affairs Specialist roles.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in molecular biology, bioinformatics for data analysis, familiarity with CRISPR-Cas9, competence in biotech equipment operation, and automation knowledge in bioprocesses.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Fluorescence Microscope, Illumina Sequencer, Beckman Coulter Centrifuge, Thermal Cycler, and Stirred-Tank Bioreactor in biotechnological applications for analysis and experimentation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Conducting genetic analyses, implementing expression protocols, optimizing bioprocesses through lab tests, collaborating on experiments, and analyzing data for recommendations.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, pay attention to detail, ensure lab safety, and analyze data effectively in biological science environments.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Post Graduate degree in M.Sc Botany, Zoology, Biotechnology, Microbiology and agriculture Science with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Biocon, Genentech, Novozymes, Thermo Fisher Scientific, and Amgen are prominent companies hiring geneticists.",
      },
    ],
  },

  {
    id: 2,

    career: "MOLECULAR AND CELLULAR BIOLOGIST",
    location: "",
    careersection:
      "A molecular and cellular biologist is a scientist who specializes in studying the molecular and cellular processes that underlie biological phenomena. They investigate how cells function, communicate, grow, differentiate, and respond to their environment at the molecular level. Molecular and cellular biologists play a critical role in advancing our understanding of the molecular basis of life and its implications for health, disease, biotechnology, and other areas of science and technology. Their research contributes to the development of new therapies, diagnostic tools, and biotechnological applications that benefit society.",

    careersection1:
      "As a Molecular and Cellular Biologist, you will conduct research and investigations to explore the molecular and cellular processes that underlie biological phenomena. Your work will involve studying the structure, function, and interactions of molecules within cells, as well as understanding how these processes contribute to the development, growth, and behaviour of living organisms.",

    t1: "Molecular Biology Techniques",
    t2: "Laboratory Techniques",
    t3: "Cell Imaging and Analysis",
    t4: "Computational Biology",
    t5: "Data Visualization",

    X1: " BLAST, NCBI databases, Ensembl, and UCSC Genome Browser",
    X2: "DNA Sequencers - Example: Illumina Sequencer",
    X3: "PacBio sequencing",
    X4: "CellProfile",
    X5: " CLC Genomics Workbench, Geneious, DNASTAR",

    S1: "Genetic Analysis",
    S2: "Cell Culture",
    S3: "Molecular Cloning",
    S4: "Data Analysis",
    S5: "Critical Thinking",

    courses:
      "For colleges offering programs in Molecular and Cellular Biology, it's essential to have infrastructure that supports both theoretical learning and hands-on laboratory work. Here are the key infrastructure requirements are Cell Culture Facilities, Biochemistry and Molecular Biology Equipment, Computational Biology Resources, Safety Equipment and Protocols, Internship and Research Opportunities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "Molecular and cellular biologists can find employment opportunities in various sectors, including pharmaceuticals, biotechnology, healthcare, research institutions, and academia. Here are some types of companies and organizations where molecular and cellular biologists are often hired:",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.0 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 15.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 15 LPA+",
      },
    ],
    Topcollege: [
      {
        University: " The Indian Institute of Science, Bengaluru",
      },
      {
        University: "All IIT & NIT",
      },
      {
        University:
          "HNBGU, A Central University (NACC Grade): GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Manipal University",
      },
      {
        University: "Anna University, Chennai, TN",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: " B.Sc in Biological Science",
      },
      {
        Courses: "B.Sc in Chemistry, Zoology, Botany",
      },
      {
        Courses: "B.Sc in Chemistry, Zoology, Biotechnology",
      },
      {
        Courses: "B.Sc in Microbiology, Chemistry, Zoology",
      },
      {
        Courses: "B.Sc in Forestry",
      },
      {
        Courses: "B.Sc in Horticulture",
      },
      {
        Courses: "B.Sc in Agriculture Science",
      },
      {
        Courses: "M.Sc in Genetics /Mol. Biology/ Biochemistry",
      },
      {
        Courses: "M.Sc in Horticulture",
      },
      {
        Courses: "M.Sc in Forestry",
      },
      {
        Courses: "M.Sc in Chemistry / Zoology / Botany.",
      },
      {
        Courses: "Ph. D in Biological science or related field.",
      },
    ],
    Topcompany: [
      {
        Company: ". Syngene International",
      },
      {
        Company: "Serum Institute of India.",
      },
      {
        Company: "Novozymes",
      },
      {
        Company: "Thermo Fisher Scientific",
      },
      {
        Company: "Amgen",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Research analyst, Academia/Research, Industry, Clinical Research, Biomedical Consulting, Science Communication, Patent Law, Entrepreneurship, Non-Profit Organizations and Regulatory Affairs Specialist roles.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in High-Throughput Screening (HTS), Bioinformatics, Cell Culture, Protein Purification and Analysis, Western Blotting, Flow Cytometry, Microscopy, Gene Editing, DNA Sequencing, Polymerase Chain Reaction.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Cell Culture Equipment, DNA Sequencers, Bioinformatics Software, Western Blotting Apparatus, Centrifuges, Flow Cytometers, Spectrophotometers, Gel Electrophoresis Systems, PCR Machines, and Microscopes.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Design research projects, Develop experimental protocols, Perform laboratory experiments using a variety of techniques and equipment, Analyse experimental data using statistical methods, bioinformatics tools, and software packages.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, pay attention to detail, ensure lab safety, and analyse data effectively in biological science environments.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Post Graduate degree in M.Sc Botany, Zoology, Biotechnology, Microbiology and Agriculture Science with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Biocon, Syngene International, Serum Institute of India, Novozymes, are prominent companies hiring Molecular and Cellular Biologis.",
      },
    ],
  },

  {
    id: 3,

    career: "GEOGRAPHER",
    location: "",
    careersection:
      "Geographers are scholars who study the Earth and its various phenomena, including its physical features, environments, and human societies. They explore spatial relationships between different elements of the Earth's surface and analyse how these relationships impact human activities and natural processes. Geographers use various tools and methodologies such as maps, Geographic Information Systems (GIS), remote sensing, surveys, and statistical analysis to gather, analyze, and interpret spatial data. Their research findings contribute to understanding global issues such as climate change, resource management, urban development, globalization, and geopolitical conflicts.",

    careersection1:
      "Geographers are responsible for researching, analysing, and interpreting spatial data to understand the Earth's surface and its human and natural environments. They study a wide range of topics, including landforms, climate, ecosystems, population distribution, economic activities, urbanization, and political boundaries. Geographers use various methods and tools, such as geographic information systems (GIS), remote sensing, fieldwork, and statistical analysis, to collect, process, and visualize geographical data. They often work in interdisciplinary teams and collaborate with professionals from fields such as environmental science, urban planning, economics, and public policy.",

    t1: " Geographic Information Systems (GIS)",
    t2: "Remote Sensing, Global Positioning System (GPS)",
    t3: "Spatial Analysis and Statistics",
    t4: "Web Mapping and Programming",
    t5: "Data Visualization",

    X1: "ESRI ArcGIS, Landsat, Sentinel, MODIS",
    X2: "UAVs or drones, Leaflet, Mapbox",
    X3: "OpenStreetMap, NASA Earthdata",
    X4: "USGS EarthExplorer, NetLogo, AnyLogic",
    X5: "MySQL, ArcGIS, QGIS, or MapInfo",

    S1: "Communication",
    S2: "Critical Thinking",
    S3: "Attention to Detail",
    S4: "Fieldwork and Data Collection",
    S5: "Urban and Regional Planning.",

    courses:
      "College offering geography programs should support both theoretical learning and practical fieldwork. Here's a breakdown of the essential infrastructure for a college catering to geography students are Geographic Information System (GIS) Lab, Field Equipment, Map Room, Computer Lab, Auditorium and Seminar Halls, Library Resources.",

    college:
      "Certainly! If you're interested in pursuing geography or related fields in India, several universities offer programs in geography and related disciplines. Here are some notable ones:",

    company:
      "Geographers in India can find employment opportunities in various sectors, including government agencies, private companies, research institutions, NGOs, and consulting firms. Here are some types of companies and organizations that hire geographers in India:",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "3.5 LPA to 5.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "5.5 LPA to 7.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 7.0 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: " The Indian Institute of Science, Bengaluru",
      },
      {
        University: "All IIT & NIT",
      },
      {
        University:
          "HNBGU, A Central University (NACC Grade): GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Manipal University",
      },
      {
        University: "Anna University, Chennai, TN",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: " B.Sc in Biological Science",
      },
      {
        Courses: "B.Sc in Chemistry, Zoology, Botany",
      },
      {
        Courses: "B.Sc in Chemistry, Zoology, Biotechnology",
      },
      {
        Courses: "B.Sc in Microbiology, Chemistry, Zoology",
      },
      {
        Courses: "B.Sc in Forestry",
      },
      {
        Courses: "B.Sc in Horticulture",
      },
      {
        Courses: "B.Sc in Agriculture Science",
      },
      {
        Courses: "M.Sc in Genetics /Mol. Biology/ Biochemistry",
      },
      {
        Courses: "M.Sc in Horticulture",
      },
      {
        Courses: "M.Sc in Forestry",
      },
      {
        Courses: "M.Sc in Chemistry / Zoology / Botany.",
      },
      {
        Courses: "Ph. D in Biological science or related field.",
      },
    ],
    Topcompany: [
      {
        Company: "Ministry of Environment, Forest and Climate Change (MoEFCC)",
      },
      {
        Company: "Ministry of Housing and Urban Affairs (MoHUA)",
      },
      {
        Company: "National Remote Sensing Centre (NRSC)",
      },
      {
        Company: "Survey of India",
      },
      {
        Company: "Indian Council of Agricultural Research (ICAR)",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Research analyst, Academia/Research, Industry, GIS and Remote Sensing Specialist Natural Resource Manager Market Research, Entrepreneurship and Regulatory Affairs and Location Analysis Specialist roles.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in Geographic Information Systems (GIS), Remote Sensing, Global Positioning System (GPS), Spatial Analysis Software, Web Mapping Platforms.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like NASA Earthdata, USGS EarthExplorer, ArcGIS, QGIS, Sentinel, MODIS.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Some common work activities that geographers may engage in Data Collection, Data Analysis and Interpretation, Mapping and Cartography, Fieldwork and Field Studies, Environmental Assessment and Management.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, and pay attention to detail, Research Methods, Urban and Regional Planning.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Post Graduate degree in M.Sc Geography, Earth science, Environment Science with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "MoEFCC, MoHUA, Esri India, ERM India, Survey of India are prominent companies hiring Geographers.",
      },
    ],
  },

  {
    id: 4,

    career: "CRITICAL CARE NURSES",
    location: "",
    careersection:
      "Critical care nurses play a vital role in providing specialized care to patients who are critically ill or injured, typically in intensive care units (ICUs), emergency departments, or other acute care settings. Critical care nursing requires specialized training and certification, typically obtained through formal education programs and clinical experience in critical care settings. Many nurses pursue certifications such as Critical Care Registered Nurse (CCRN) or Critical Care Nurse Specialist (CCNS) to demonstrate their expertise in the field.",

    careersection1:
      "A critical care nursing job define on the specific requirements of the healthcare facility and the level of acuity in the critical care unit. Additionally, critical care nurses may work in various settings, including medical-surgical ICUs, cardiac ICUs, neurocritical care units, and pediatric ICUs, with job responsibilities tailored to the specialized needs of each patient population.",

    t1: "Monitoring Patients",
    t2: "Administering Medications",
    t3: "Performing Procedures",
    t4: "Collaborating with Healthcare Team",
    t5: "Patient Advocacy",

    X1: "Mechanical Ventilators",
    X2: "Cardiac Monitors",
    X3: "Pulse Oximeters",
    X4: "Electrocardiogram (ECG) Machines",
    X5: "Arterial Line Monitoring",

    S1: "Clinical Competence",
    S2: "Technical Proficiency",
    S3: "Critical Thinking",
    S4: "Attention to Detail",
    S5: "Patient Advocacy",

    courses:
      "Colleges and universities offer various programs and educational pathways for nurses seeking to specialize in critical care nursing. These programs are designed to provide nurses with the knowledge, skills, and clinical experiences necessary to care for critically ill patients in intensive care units (ICUs), emergency departments, and other acute care settings.",

    college:
      "In Uttarakand and India, several universities and institutions offer nursing courses at various levels, including diploma, bachelor's, master's, and doctoral programs. Here are some universities and institutions that offer nursing courses in India.",

    company:
      "Critical care nurses are employed in various healthcare settings, including hospitals, clinics, specialty centers, and research institutions. While there may not be specific companies dedicated solely to hiring critical care nurses, there are numerous healthcare organizations and hospital chains across the country that employ critical care nurses. Here are some prominent healthcare organizations in India where critical care nurses may find employment opportunities:",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "3.5 LPA to 5.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "5.5 LPA to 7.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 7.0 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: "All India Institute of Medical Sciences (AIIMS)",
      },
      {
        University: "All IIT & NIT",
      },
      {
        University:
          "HNBU Medical Ed University (HNBUMU), D. Dun: GURU NANAK COLLEGE/ BFIT",
      },
      {
        University:
          "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh.",
      },
      {
        University: "Symbiosis International University (SIU), Pune,",
      },
    ],

    Topcourse: [
      {
        Courses: " B.Sc in Nursing",
      },
      {
        Courses: "BSc Nursing Post Basic",
      },
      {
        Courses: "MSc Nursing",
      },
      {
        Courses: "GNM Nursing",
      },
      {
        Courses: "ANM Nursing",
      },
    ],
    Topcompany: [
      {
        Company: "AIIMS",
      },
      {
        Company: " Hinduja Hospital",
      },
      {
        Company: "Aster DM Healthcare",
      },
      {
        Company: "Manipal Hospitals",
      },
      {
        Company: " Apollo Hospitals",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Charge Nurse or Nurse Manager, Nurse Educator, Clinical Nurse Specialist (CNS), Research Nurse or Clinical Trials Coordinator, Consultant or Healthcare Administrator.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in Clinical Decision Support Systems (CDSS), Electronic Health Records (EHR), Telehealth and Telemedicine, Medication Management Systems, Remote Patient Monitoring (RPM).",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Computerized Charting Systems,Point-of-Care Testing (POCT) Devices, Portable Ultrasound Machines, Mechanical Ventilators applications for analysis and operation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Conducting Patient Positioning and Mobility, Wound Care and Dressing Changes, optimizing Medication Administration and Management., and Assessment and Monitoring.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, pay attention to detail, ensure hospital safety, and Patient Advocacy in medical science.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Graduate degree in B.Sc Nursing, ANM, GNM with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Apollo Hospitals, Columbia Asia Hospitals, Manipal Hospitals, Government Hospitals, Hinduja Hospital companies hiring Critical Care Nurses.",
      },
    ],
  },

  {
    id: 5,

    career: "EXERCISE PHYSIOLOGISTS",
    location: "",
    careersection:
      "Exercise physiologists are professionals who specialize in prescribing exercise programs to improve individuals' overall health, fitness, and performance. They work with people of all ages and fitness levels, including athletes, patients with chronic diseases, and those seeking to enhance their physical well-being.",

    careersection1:
      "Exercise physiologists specialize in prescribing exercise programs to help individuals improve their overall health, fitness, and performance. Their job involves assessing clients' fitness levels, designing personalized exercise plans, and monitoring progress over time.",

    t1: "Exercise Prescription.",
    t2: "Fitness Assessment.",
    t3: "Knowledge of Exercise Physiology.",
    t4: "Safety and Risk Management.",
    t5: "Fitness Assessment Software.",

    X1: "Metabolic Carts.",
    X2: "Heart Rate Monitors.",
    X3: "Cardiopulmonary Exercise Testing (CPET) Systems.",
    X4: "Electrocardiogram (ECG) Machines.",
    X5: "Functional Movement Screens (FMS).",

    S1: "Fitness Assessment.",
    S2: "Exercise Prescription.",
    S3: "Communication Skills.",
    S4: "Knowledge of Exercise Physiology.",
    S5: "Technology Proficiency.",

    courses:
      "Colleges and universities offer various programs and educational pathways for nurses seeking to specialize in critical care nursing. These programs are designed to provide nurses with the knowledge, skills, and clinical experiences necessary to care for critically ill patients in intensive care units (ICUs), emergency departments, and other acute care settings.",

    college:
      "These universities are recognized for their academic excellence, faculty expertise, research opportunities, and infrastructure in the field of exercise physiology and sports science. Prospective students should research each university's offerings, curriculum, admission requirements, and facilities before selecting a program that aligns with their academic and career aspirations.",

    company:
      "Exercise physiologists may find employment opportunities in research specific organizations, job roles, and career paths to find the right fit based on individual interests, skills, and professional goals. Networking, internships, and professional certifications can also enhance career opportunities in the field of exercise physiology.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.5 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 14.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 14.0 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: "(LNIPE), Gwalior.",
      },
      {
        University: "Jamia Millia Islamia (JMI) New Delhi,",
      },
      {
        University:
          "HNBU Medical Ed University (HNBUMU), D. Dun: GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Symbiosis School of Sports Sciences (SSSS), Pune.",
      },
      {
        University: "Amity University, Noida.",
      },
    ],

    Topcourse: [
      {
        Courses: "Bachelor of Physiotherapy (BPT)",
      },
      {
        Courses: "B.Sc Physical Education (BP Ed.)",
      },
      {
        Courses: "B.Sc Health Education",
      },
      {
        Courses: "M.Sc Health Education (MP Ed.)",
      },
      {
        Courses: "M.Sc Physical Education",
      },
      {
        Courses: "M.P.T Orthopaedics",
      },
      {
        Courses: "M.P.T Sports",
      },
      {
        Courses: "M.P.T Sports Rehabilitation",
      },
      {
        Courses: "M.P.T Neurology",
      },
      {
        Courses: "M.P.T Cardiology",
      },
    ],
    Topcompany: [
      {
        Company:
          "Different franchises in Indian Premier League (IPL) Cricket Teams.",
      },
      {
        Company: "Indian Super League (ISL) Football Clubs.",
      },
      {
        Company: "Sport Authority of India. SAI.",
      },
      {
        Company: "Hockey India League (HIL) Teams.",
      },
      {
        Company: "Premier Badminton League (PBL) Teams.",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Fitness Trainer or Personal Trainer, Strength and Conditioning Coach, Researcher or Educator, Health and Wellness Program Coordinator, Cardiac Rehabilitation Specialist.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in Gait Analysis Systems, Telehealth Platforms, Rehabilitation Equipment, Data Analytics and Wearable Integration, Fitness Assessment Equipment.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools Fitness Assessment Tools, Treadmills and Stationary Bikes, Dumbbells, Barbells, and Resistance Machines, Pedometers and Accelerometers, Balance and Stability Equipment analysis and operation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Conducting Fitness Assessments, Review Medical History and Client Goals, Provide Exercise Instruction and Demonstration, Educate Clients on Health and Fitness, Supervise Exercise Sessions.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, pay attention to detail, Fitness Assessment, Exercise Prescription, Communication Skills, Knowledge of Exercise Physiology, and Technology Proficiency.",
      },
      {
        Section: "Education",
        Detailing:
          "TThe candidate must have a Graduate degree in BPT, MPT, B.Sc Physical Education, Health Education and Sports with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Different franchises in IPL,ISL,HSL and PBL  franchises hiring  Exercise  physiologists.",
      },
    ],
  },

  {
    id: 6,

    career: "NURSE ANESTHETIST",
    location: "",
    careersection:
      "A Nurse Anesthetist (CRNA - Certified Registered Nurse Anesthetist) is an advanced practice nurse who administers anesthesia for various medical procedures. They are highly trained professionals who work closely with surgeons, anesthesiologists, and other healthcare providers to ensure the safe and effective delivery of anesthesia during surgeries, procedures, and other medical interventions.",

    careersection1:
      "Nurse Anesthetists play a crucial role in healthcare settings by ensuring patient comfort and safety during surgical procedures and other medical interventions. They are highly skilled professionals who undergo rigorous training to provide anesthesia care across a wide range of healthcare settings, including hospitals, surgical centers, and other healthcare facilities.",

    t1: "Patient Monitoring and Alarm Systems.",
    t2: "Medical Devices and Monitoring Equipment.",
    t3: "Anesthesia Information Management Systems (AIMS).",
    t4: "Electronic Health Records (EHR) Systems.",
    t5: "Simulation and Virtual Reality.",

    X1: "Anesthesia Machines.",
    X2: "Patient Monitors.",
    X3: "Point-of-Care Testing Devices",
    X4: "Telehealth and Telemonitoring Technologies.",
    X5: " Intravenous (IV) Pumps.",

    S1: " Anesthesia Administration.",
    S2: "Monitoring and Interpretation.",
    S3: "Crisis Management.",
    S4: "Quality Improvement and Patient Safety.",
    S5: "Continuous Learning and Professional Development.",

    courses:
      "Colleges offer technology-equipped classrooms, multimedia resources, and online learning platforms to facilitate interactive lectures, discussions, and educational activities. Colleges have dedicated skills labs equipped with anesthesia machines, airway management equipment, intravenous access devices, and other tools used in anesthesia practice. The coursework for Nurse Anesthetist programs is designed to provide students with the knowledge and skills necessary to excel in anesthesia practice.",

    college:
      "In Uttarakand and India, several universities and institutions offer Nurse Anesthetists courses at various levels, including diploma, bachelor's, master's, and doctoral programs. Here are some universities and institutions that offer nursing courses in India.",

    company:
      "Nurse Anesthetist are employed in various healthcare settings, including hospitals, clinics, specialty centers, and research institutions. While there may not be specific companies dedicated solely to hiring critical care nurses, there are numerous healthcare organizations and hospital chains across the country that employ critical care nurses. Here are some prominent healthcare organizations in India where critical care nurses may find employment opportunities:",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.5 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 14.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 14.0 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: "( All India Institute of Medical Sciences (AIIMS)",
      },
      {
        University:
          "HNBU Medical Ed University (HNBUMU), D. Dun: GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University:
          "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      },
      {
        University: "ymbiosis International University (SIU), Pune",
      },
    ],

    Topcourse: [
      {
        Courses: "B.Sc in Nursing",
      },
      {
        Courses: "BSc Nursing Post Basic",
      },
      {
        Courses: "BSc. (Anaesthesia & Operation Theatre Techniques) - BAOTT",
      },
      {
        Courses: "MSc Nursing",
      },
      {
        Courses: " GNM Nursing",
      },
      {
        Courses: "ANM Nursing",
      },
      {
        Courses: "Doctor of Nursing Practice (DNP)",
      },
    ],
    Topcompany: [
      {
        Company: "AIIMS",
      },
      {
        Company: "Hinduja Hospital.",
      },
      {
        Company: "Aster DM Healthcare",
      },
      {
        Company: "Manipal Hospitals.",
      },
      {
        Company: "Apollo Hospitals.",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Nurse Educator, Anesthetist Nurse Specialist (CNS), Research Nurse or Clinical Trials Coordinator, Consultant or Healthcare Administrator.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in Clinical Decision Support Systems (CDSS), Electronic Health Records (EHR), Telehealth and Telemedicine, Medication Management Systems, Remote Patient Monitoring (RPM).",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Computerized Charting Systems,Point-of-Care Testing (POCT) Devices, Portable Ultrasound Machines, Mechanical Ventilators applications for analysis and operation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Conducting Patient Positioning and Mobility, Wound Care and Dressing Changes, optimizing Medication Administration and Management., and Assessment and Monitoring.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, pay attention to detail, ensure hospital safety, and Patient Advocacy in medical science.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Graduate degree in B.Sc Nursing, ANM, GNM with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Apollo Hospitals, Columbia Asia Hospitals, Manipal Hospitals, Government Hospitals, Hinduja Hospital companies hiring Critical Care Nurses.",
      },
    ],
  },
  {
    id: 7,

    career: "ANESTHESIOLOGIST ASSISTANTS",
    location: "",
    careersection:
      "Anesthesiologist Assistants (AAs) are healthcare professionals who work under the direction and supervision of licensed anesthesiologists to provide anesthesia care to patients before, during, and after surgical procedures. Anesthesiologist Assistants play a vital role in anesthesia. care delivery, working collaboratively with anesthesiologists and other healthcare professionals to ensure safe and effective anesthesia administration for patients undergoing surgical procedures. ",

    careersection1:
      "An Anesthesiologist Assistant (AA) typically involves a wide range of responsibilities related to providing anesthesia care to patients before, during, and after surgical procedures. The AA's responsibilities include assisting with preoperative assessment, anesthesia induction and maintenance, intraoperative monitoring, and post-anesthesia care to ensure patient safety and comfort throughout the perioperative period.",

    t1: "Anesthesia Monitoring Equipment.",
    t2: "Medical Devices and Monitoring Equipment.",
    t3: "Anesthesia Information Management Systems (AIMS).",
    t4: "Electronic Health Records (EHR) Systems.",
    t5: "Medication Administration Systems.",

    X1: "Anesthesia Machines.",
    X2: "Vital Sign Monitors.",
    X3: "Point-of-Care Testing Devices",
    X4: "Telehealth and Telemonitoring Technologies.",
    X5: " Medication Delivery Systems.",

    S1: " Anesthesia Administration.",
    S2: "Monitoring and Interpretation.",
    S3: "Crisis Management.",
    S4: "Quality Improvement and Patient Safety.",
    S5: "Continuous Learning and Professional Development.",

    courses:
      "Colleges offer technology-equipped classrooms, multimedia resources, and online learning platforms to facilitate interactive lectures, discussions, and educational activities. Colleges have dedicated skills labs equipped with anesthesia machines, airway management equipment, intravenous access devices, and other tools used in anesthesia practice. The coursework for Anesthesiologist Assistants programs is designed to provide students with the knowledge and skills necessary to excel in anesthesia practice.",

    college:
      "In Uttarakand and India, several universities and institutions offer Anesthesiologist Assistants courses at various levels, including diploma, bachelor's, master's, and doctoral programs. Here are some universities and institutions that offer nursing courses in India.       ",

    company:
      "Anesthesiologist Assistants are employed in various healthcare settings, including hospitals, clinics, specialty centers, and research institutions. While there may not be specific companies dedicated solely to hiring critical care nurses, there are numerous healthcare organizations and hospital chains across the country that employ critical care nurses. Here are some prominent healthcare organizations in India where critical care nurses may find employment opportunities:",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.5 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 14.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 14.0 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: "All India Institute of Medical Sciences (AIIMS)",
      },
      {
        University:
          "HNBU Medical Ed University (HNBUMU), D. Dun: GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University:
          "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      },
      {
        University: "Symbiosis International University (SIU), Pune",
      },
    ],

    Topcourse: [
      {
        Courses: "B.Sc in Nursing",
      },
      {
        Courses: "BSc Nursing Post Basic",
      },
      {
        Courses: "BSc. (Anaesthesia & Operation Theatre Techniques) - BAOTT",
      },
      {
        Courses: "MSc Nursing",
      },
      {
        Courses: " GNM Nursing",
      },
      {
        Courses: "ANM Nursing",
      },
      {
        Courses: "Doctor of Nursing Practice (DNP)",
      },
    ],
    Topcompany: [
      {
        Company: "AIIMS",
      },
      {
        Company: "Hinduja Hospital.",
      },
      {
        Company: "Aster DM Healthcare",
      },
      {
        Company: "Manipal Hospitals.",
      },
      {
        Company: "Apollo Hospitals.",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Military Healthcare, Nurse Educator, Anesthetist Nurse Specialist (CNS), Research Nurse or Clinical Trials Coordinator, Consultant or Healthcare Administrator.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in Clinical Decision Support Systems (CDSS), Electronic Health Records (EHR), Telehealth and Telemedicine, Medication Management Systems, Remote Patient Monitoring (RPM).",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Computerized Charting Systems,Point-of-Care Testing (POCT) Devices, Portable Ultrasound Machines, Mechanical Ventilators applications for analysis and operation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Conducting Patient Positioning and Mobility, Wound Care and Dressing Changes, optimizing Medication Administration and Management., and Assessment and Monitoring.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, pay attention to detail, ensure hospital safety, and Patient Advocacy in medical science.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Graduate degree in B.Sc Nursing, ANM, GNM with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Apollo Hospitals, Columbia Asia Hospitals, Manipal Hospitals, Government Hospitals, Hinduja Hospital companies hiring Critical Care Nurses.",
      },
    ],
  },
  {
    id: 8,

    career: "FORESTRY AND CONSERVATION SCIENCE TEACHERS",
    location: "",
    careersection:
      "Forestry and Conservation Science Teachers are educators who specialize in teaching courses related to forestry, conservation science, environmental science, and natural resource management at the postsecondary level. Overall, Forestry and Conservation Science Teachers play a vital role in educating the next generation of professionals in forestry, conservation, and environmental science, fostering stewardship of natural resources, and addressing complex environmental challenges facing society.",

    careersection1:
      "Forestry and Conservation Science Teachers are responsible for delivering high-quality instruction in forestry, conservation science, environmental science, and related disciplines at the postsecondary level. They design and implement curriculum, conduct lectures, facilitate discussions, and engage students in hands-on learning experiences to promote understanding of forest ecosystems, conservation principles, and sustainable natural resource management practices.",

    t1: "Geographic Information Systems (GIS).",
    t2: "Remote Sensing Tools.",
    t3: " Data Analysis and Statistical Software.",
    t4: "Environmental Monitoring Technology.",
    t5: " Literature and Database Searching.",

    X1: "Geographic Information Systems (GIS) Software.",
    X2: "Statistical Analysis Software.",
    X3: "Reference Management Software.",
    X4: "Environmental Monitoring Devices.",
    X5: "Field Equipment.",

    S1: "Knowledge of Forest Ecosystems.",
    S2: "Understanding of Conservation Principles.",
    S3: "Expertise in Natural Resource Management.",
    S4: "Understanding of Wildlife Ecology and Management.",
    S5: "Environmental Monitoring and Assessment Techniques.",

    courses:
      "When considering colleges for Forestry and Conservation Science Teachers, it's essential to evaluate factors such as faculty expertise, research facilities, fieldwork opportunities, academic resources, and institutional support for teaching and research activities. Additionally, visiting campuses, meeting with faculty members, and exploring program curricula can provide valuable insights into the educational experience and academic environment offered by each institution.",

    college:
      "All over India, several universities offer programs in forestry, environmental science, and conservation biology. College / universities are recognized for their contributions to forestry and conservation science education in India. Prospective forestry and conservation science teachers should consider factors such as program offerings, faculty expertise, research opportunities, and location when selecting a suitable institution for their career goals. ",

    company:
      "Forestry and Conservation Science Teachers typically work in academic institutions, research organizations, government agencies, non-profit organizations, or consulting firms focused on forestry, conservation, and environmental management. While they may not work directly for 'companies' in the traditional sense, they may collaborate with various organizations/ Institute and Group.  ",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "4.5 LPA to 7.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "7.5 LPA to 12.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 12 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: "Indian Institute of Forest Management (IIFM) Bhopal.",
      },
      {
        University: "HNBGU Srinagar, Uttarakand: GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Forest Research Institute (FRI) Dehradun",
      },
      {
        University: "Wildlife Institute of India (WII) Dehradun",
      },
      {
        University: "University of Agricultural Sciences (UAS), Bangalore",
      },
    ],

    Topcourse: [
      {
        Courses: "B.Sc Forestry",
      },
      {
        Courses: "B.Sc in Agriculture Science",
      },
      {
        Courses: "B.Sc Horticulture",
      },
      {
        Courses: "B.Sc Chemistry, Zoology, Botany",
      },
      {
        Courses: " M.Sc in Agronomy / Horticulture",
      },
      {
        Courses: "M.Sc Forestry / Botany / Zoology",
      },
      {
        Courses: "M.Sc Environment Science",
      },
      {
        Courses: "M.Sc conservation science, ecology",
      },
    ],
    Topcompany: [
      {
        Company: "Indian Forest service",
      },
      {
        Company: " State Forest service",
      },
      {
        Company: "Academic Institutions",
      },
      {
        Company: "Non-Profit Organizations",
      },
      {
        Company: "Consulting Firms",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Certified Forester (CF) or Certified Wildlife Biologist (CWB), Research analyst, Scientist, Ecologist.",
      },
      {
        Section: "Technology",
        Detailing:
          "GIS software (e.g., ArcGIS, QGIS), remote sensing techniques and software (e.g., ERDAS Imagine, ENVI), statistical software (e.g., R,SAS, SP.",
      },
      {
        Section: "Tools Used",
        Detailing:
          " GPS devices, digital cameras, binoculars, microscopes, soil testing kits,water quality meters for analysis and operation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Develop and deliver courses in forestry, conservation science, ecology, wildlife management, environmental policy, and related subjects, ensuring alignment with departmental goals, academic standards, and student learning outcom",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Environmental Ethics and Stewardship, Community Engagement, GIS and Remote Sensing Skills, Fieldwork Proficiency.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Graduate degree in B.Sc Forestry / Botany/ Zoology, M.Sc Forestry, with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Academic Institutions, Government Agencies, International Organizations, Industry Partners, Educational Publishers hiring Forestry and Conservation Science Teachers.",
      },
    ],
  },
  {
    id: 9,

    career: "NURSE PRACTITIONERS",
    location: "",
    careersection:
      "Nurse practitioners (NPs) are advanced practice registered nurses (APRNs) who have obtained additional education and training beyond that required for a registered nurse (RN). They have a higher level of autonomy and are able to provide a wide range of healthcare services, including diagnosing and treating illnesses, ordering and interpreting diagnostic tests, prescribing medications, and providing patient education and counseling.",

    careersection1:
      "Nurse practitioners play a crucial role in addressing the growing demand for primary care providers, especially in underserved areas where there may be a shortage of physicians. They often work collaboratively with physicians and other healthcare professionals to deliver high- quality, comprehensive care to patients across the lifespan.",

    t1: "Clinical Decision Support Systems (CDSS).",
    t2: "Health Information Exchange (HIE).",
    t3: "Health Informatics.",
    t4: "Environmental Monitoring Technology.",
    t5: "Telehealth.",

    X1: "Stethoscope.",
    X2: " Blood Pressure Cuff.",
    X3: "Thermometer.",
    X4: "Otoscope and Ophthalmoscope.",
    X5: "Sphygmomanometer.",

    S1: "Primary Care.",
    S2: "Technical Proficiency.",
    S3: "Empathy.",
    S4: "Pediatrics",
    S5: "Women's Health.",

    courses:
      "To become a nurse practitioner (NP), individuals typically pursue advanced education and training through graduate-level programs in nursing. These programs are offered by colleges and universities across the Uttarakhand and around the India.",

    college:
      "There are many other colleges and universities offering nurse practitioner programs tailored to various specializations and career paths. Prospective students should research program offerings, accreditation status, faculty expertise, clinical opportunities, and other factors to choose a program that aligns with their career goals and interests.",

    company:
      "In India, nurse practitioners (NPs) find employment opportunities in various healthcare settings, including hospitals, clinics, nursing homes, community health centres, and corporate healthcare organizations.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "4.5 LPA to 7.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "7.5 LPA to 12.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 12 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: "Indian Institute of Forest Management (IIFM) Bhopal.",
      },
      {
        University: "HNBGU Srinagar, Uttarakand: GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University:
          "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh,",
      },
      {
        University: "Symbiosis International University (SIU), Pune,",
      },
    ],

    Topcourse: [
      {
        Courses: "B.Sc in Nursing",
      },
      {
        Courses: "BSc Nursing Post Basic",
      },
      {
        Courses: "M.Sc Nursing",
      },
      {
        Courses: "GNM",
      },
      {
        Courses: "ANM",
      },
    ],
    Topcompany: [
      {
        Company: "AIIMS ",
      },
      {
        Company: " Hinduja Hospital",
      },
      {
        Company: "Fortis Healthcare",
      },
      {
        Company: "Narayana Health",
      },
      {
        Company: "Apollo Hospitals",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Nursing Education and Academia, Global Health and International Nursing, Entrepreneurship and Private Practice, Community Health and Public Health.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in Patient Portals, Clinical Decision Support Systems (CDSS), Electronic Health Records (EHRs), Remote Monitoring Devices, Point-of-Care Testing Devices.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Diagnostic Tests and Point-of-Care Devices, Electrocardiogram (ECG) Machine, Glucometer, Reflex Hammer. for analysis and operation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Acute Care Management, Chronic Disease Management, Health Promotion and Disease Prevention, Advocacy and Health Policy, Research and Evidence-Based Practice.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Collaborate in teams, think critically, Family Medicine, Health Policy and Advocacy, Advanced Pharmacology, Women's Health ensure hospital safety and Patient Advocacy in medical science.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Graduate degree in B.Sc Nursing / Nursing Post Basic / BAOTT, ANM, GNM with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Apollo Hospitals, Columbia Asia Hospitals, Manipal Hospitals, Government Hospitals, Hinduja Hospital companies hiring Nurse Practitioners.",
      },
    ],
  },

  {
    id: 10,

    career: "FORESTERS",
    location: "",
    careersection:
      "Foresters are professionals who specialize in the management, conservation, and sustainable use of forest resources. They play a vital role in ensuring the health and productivity of forests while balancing ecological, social, and economic objectives.",

    careersection1:
      "Foresters play a critical role in managing and conserving forest resources for present and future generations, balancing the multiple benefits provided by forests, including timber production, wildlife habitat, recreation, and carbon sequestration. Their work contributes to sustainable forest management practices that promote environmental stewardship, economic prosperity, and social well-being.",

    t1: "Proficiency in GIS software.",
    t2: "Knowledge of GPS technology.",
    t3: "Remote sensing techniques and satellite imagery analysis.",
    t4: "Environmental Sensors and IoT Devices.",
    t5: "Literature and Database Searching.",

    X1: "Compass and GPS Devices.",
    X2: " Clinometer.",
    X3: "TIncrement Borer.",
    X4: "Prism and Cruising Tapes.",
    X5: "Chainsaws and Logging Equipment.",

    S1: "Community Engagement and Communication.",
    S2: "Wildlife Monitoring and Ecology.",
    S3: " Forest Ecology.",
    S4: "Forest Inventory and Assessment.",
    S5: "Forest Policy and Regulations.",

    courses:
      "When choosing a course or academic program for forester, it's important to consider factors such as the program's curriculum, faculty expertise, research opportunities, and hands-on learning experiences. Additionally, seeking programs accredited by relevant professional organizations or recognized within the conservation community can enhance the credibility and value of the education obtained.",

    college:
      "Indian Universities / College offer courses and programs related to forester profession pathway followed by stream of Botany, Zoology, Ecology, Wildlife Biology, Environment Science. Prospective students interested in pursuing a career in forestry, wildlife science, Ecology should research the curriculum, faculty expertise, research facilities, and opportunities for practical training and fieldwork offered by each institution before making a decision.",

    company:
      "Foresters are employed by various types of organizations involved in forestry, natural resource management, conservation, and related sectors.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "4.5 LPA to 7.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "7.5 LPA to 12.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 12 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: "Forest Research Institute (FRI) Dehradun.",
      },
      {
        University:
          "A Central University (NACC Grade) HNBGU Srinagar: GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Indian Institute of Forest Management (IIFM) Bhopal.",
      },
      {
        University: " Wildlife Institute of India (WII) Dehradun.",
      },
      {
        University: "Tata Institute of Social Sciences (TISS), Mumbai.",
      },
    ],

    Topcourse: [
      {
        Courses: "B.Sc Chemistry, Zoology, Botany",
      },
      {
        Courses: "B.Sc in Forestry / Horticulture",
      },
      {
        Courses: "B.Sc. in Natural Resource Management",
      },
      {
        Courses: "B.Sc in Agriculture Science",
      },
      {
        Courses: "B.Sc. in Ecology",
      },
      {
        Courses: " M.Sc Forestry / Botany / Zoology",
      },
      {
        Courses: " M.Sc in Agronomy / Horticulture / Soil Science",
      },
      {
        Courses: " M.Sc in Wildlife Biology",
      },
      {
        Courses: "M.Sc Environment Science",
      },
      {
        Courses: "M.Sc conservation science, ecology",
      },
    ],
    Topcompany: [
      {
        Company: " Indian Forest service.",
      },
      {
        Company: "State Forest service.",
      },
      {
        Company: "Indian Council of Forestry Research and Education (ICFRE).",
      },
      {
        Company:
          "Non-Profit Organizations (WWF, The Nature Conservancy, Conservation International, Wildlife Conservation Society).",
      },
      {
        Company:
          "Environmental Consulting Firms (AECOM, Golder Associates, Tetra Tech, Cardno).",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Conservation Officer / Ranger, Forest Ecologist, Conservation Planner / Manager, Environmental Consultant, Policy Analyst/ Advocate, Wildlife Biologist, Forest Policy Analyst/Advocate, Forest Researcher/ Scientist, Agroforestry Specialist.",
      },
      {
        Section: "Technology",
        Detailing:
          "Web-Based Tools and Applications, Forest Monitoring Sensors, Forest Modeling Tools, Forest Inventory Software, Global Positioning System (GPS).",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize GPS devices, digital cameras, binoculars, microscopes, soil testing kits, water quality meters, and weather stationsfor analysis and  operation. ",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Conducting field surveys, ecological assessments, and biodiversity inventories to gather data on plant and animal species, habitat types, and ecosystem dynamics.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Fire Management, Forest Policy and Regulations, Environmental Monitoring, Forest Inventory and Assessment.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Graduate degree in B.Sc CBZ / Forestry / Agriculture Science. M.Sc- Forestry / Botany / Zoology with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "State Forest service, Indian Forest service, Non-Profit Organizations hiring Foresters.",
      },
    ],
  },
  {
    id: 11,

    career: "CONSERVATION SCIENTISTS",
    location: "",
    careersection:
      "Conservation scientists are professionals who work to protect and preserve natural resources, ecosystems, and biodiversity. They play a critical role in assessing environmental conditions, developing conservation strategies, and implementing measures to mitigate threats to the environment.",

    careersection1:
      "Conservation scientists conduct research to assess the status of natural resources and ecosystems, monitoring techniques and data collection methods to track changes in environmental conditions over time, work to restore degraded habitats, rehabilitate ecosystems, and reintroduce native species to their natural environments. Conservation scientists develop conservation plans and management strategies to protect and restore natural habitats, species populations, and ecosystem functions.",

    t1: "Geographic Information Systems (GIS).",
    t2: "Remote Sensing Tools.",
    t3: " Data Analysis and Statistical Software.",
    t4: "Environmental Sensors and IoT Devices.",
    t5: "Literature and Database Searching.",

    X1: "Data Loggers and Environmental Sensors.",
    X2: "Camera Traps.",
    X3: "Acoustic Monitoring Equipment.",
    X4: "Decision Support Systems.",
    X5: " Geographic Information Systems (GIS) Software.",

    S1: "Community Engagement and Communication.",
    S2: "Wildlife Monitoring and Ecology.",
    S3: " Expertise in Natural Resource Management.",
    S4: "Understanding of Wildlife Ecology and Management.",
    S5: "Habitat Mapping and GIS.",

    courses:
      "When choosing a course or academic program for conservation scientist, it's important to consider factors such as the program's curriculum, faculty expertise, research opportunities, and hands-on learning experiences. Additionally, seeking programs accredited by relevant professional organizations or recognized within the conservation community can enhance the credibility and value of the education obtained.",

    college:
      "Universities / College in India that offer courses and programs related to Conservation Science, Botany, Ecology, Wildlife Biology, and Environment Science. Prospective students interested in pursuing a career in conservation should research the curriculum, faculty expertise, research facilities, and opportunities for practical training and fieldwork offered by each institution before making a decision.",

    company:
      "While conservation scientists often find employment in government agencies, non-profit organizations, research institutions, and consulting firms, there are also private companies that hire professionals in this field, particularly those specializing in environmental consulting, sustainable development, and natural resource management..",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "4.5 LPA to 7.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "7.5 LPA to 12.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: " 12 LPA+ ",
      },
    ],
    Topcollege: [
      {
        University: " Indian Institute of Forest Management (IIFM) Bhopal.",
      },
      {
        University:
          "A Central University (NACC Grade) HNBGU Srinagar: GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Forest Research Institute (FRI) Dehradun.",
      },
      {
        University: " Wildlife Institute of India (WII) Dehradun.",
      },
      {
        University: "Tata Institute of Social Sciences (TISS), Mumbai.",
      },
    ],

    Topcourse: [
      {
        Courses: "B.Sc Chemistry, Zoology, Botany",
      },
      {
        Courses: "B.Sc in Forestry / Horticulture",
      },
      {
        Courses: "B.Sc. in Natural Resource Management",
      },
      {
        Courses: "B.Sc in Agriculture Science",
      },
      {
        Courses: "B.Sc. in Ecology",
      },
      {
        Courses: " M.Sc Forestry / Botany / Zoology",
      },
      {
        Courses: " M.Sc in Agronomy / Horticulture / Soil Science",
      },
      {
        Courses: " M.Sc in Wildlife Biology",
      },
      {
        Courses: "M.Sc Environment Science",
      },
      {
        Courses: "M.Sc conservation science, ecology",
      },
    ],
    Topcompany: [
      {
        Company: " Indian Forest service.",
      },
      {
        Company: "State Forest service.",
      },
      {
        Company: "Indian Council of Forestry Research and Education (ICFRE).",
      },
      {
        Company:
          "Non-Profit Organizations (WWF, The Nature Conservancy, Conservation International, Wildlife Conservation Society).",
      },
      {
        Company:
          "Environmental Consulting Firms (AECOM, Golder Associates, Tetra Tech, Cardno).",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Research Scientist, Wildlife Biologist, Ecologist, Conservation Planner/ Manager, Environmental Consultant, Policy Analyst/ Advocate, Certified Forester (CF) or Certified Wildlife Biologist (CWB).",
      },
      {
        Section: "Technology",
        Detailing:
          "Machine Learning and Artificial Intelligence, Environmental Sensors and IoT Devices, Communication and Outreach Tools, Field Data Collection Tools.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize GPS devices, digital cameras, binoculars, microscopes, soil testing kits, water quality meters, and weather stationsfor analysis and  operation. ",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Conducting field surveys, ecological assessments, and biodiversity inventories to gather data on plant and animal species, habitat types, and ecosystem dynamics.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Environmental Ethics and Stewardship, Community Engagement, GIS and Remote Sensing Skills, Fieldwork Proficiency.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Graduate degree in B.Sc CBZ, Forestry /, M.Sc- Forestry / Botany / Zoology with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "State Forest service, Indian Forest service, Non-Profit Organizations hiring Foresters.",
      },
    ],
  },

  {
    id: 12,

    career: "Technical Writers",
    location: "",
    careersection:
      "Technical writers are professionals who specialize in creating clear, concise, and user-friendly documentation for various technical fields. They translate complex technical information into accessible content for a wide range of audiences. Their work includes writing manuals, guides, articles, and other forms of communication to help users understand and utilize products, systems, or services effectively. Technical writers play a critical role in bridging the gap between technical experts and end-users, ensuring that technical information is communicated accurately and efficiently.",

    careersection1:
      "As a technical writer, you will produce a variety of documents that communicate complex and technical information in a clear and concise manner. You will collaborate with engineers, developers, and other specialists to gather information and create user manuals, guides, white papers, and online help content, aiming to make technical information accessible to non-technical audiences.",

    t1: "Technical Writing",
    t2: "Information Design",
    t3: "Content Management Systems (CMS)",
    t4: "User Experience (UX) Writing",
    t5: "Editing and Proofreading",

    X1: "Microsoft Word, Google Docs, Adobe FrameMaker",
    X2: "MadCap Flare, RoboHelp",
    X3: "Markdown, DITA XML",
    X4: "Snagit, Camtasia",
    X5: "Confluence, SharePoint",

    S1: "Technical Writing",
    S2: "Team Collaboration",
    S3: "Critical Thinking",
    S4: "Attention to Detail",
    S5: "Content Strategy",

    courses:
      "Programs at a college typically include facilities and equipment tailored to support both theoretical and practical aspects of technical writing and documentation. What you might find here: Computer Labs, Advanced Software Tools, Technical Libraries, Classrooms and Lecture Halls, Qualified Faculty, and Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "These companies focus on developing products and technologies based on genetic research. They often hire geneticists for roles such as research scientists, bioinformaticians, genetic engineers, and molecular biologists.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.0 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "6.0 LPA to 10.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 15 LPA ",
      },
    ],

    Topcollege: [
      {
        University: "Symbiosis Institute of Media and Communication, Pune",
      },
      {
        University: "Indian Institute of Mass Communication, New Delhi",
      },
      {
        University: "Christ University, Bengaluru",
      },
      {
        University: "Manipal University",
      },
      {
        University: "Anna University, Chennai, TN",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: "B.A. in English",
      },
      {
        Courses: "B.A. in Journalism and Mass Communication",
      },
      {
        Courses: "B.A. in Technical Communication",
      },
      {
        Courses: "B.A. in Media Studies",
      },
      {
        Courses: "M.A. in English",
      },
      {
        Courses: "M.A. in Media Studies",
      },
      {
        Courses: "Ph.D. in Technical Communication",
      },
    ],
    Topcompany: [
      {
        Company: "Tata Consultancy Services (TCS)",
      },
      {
        Company: "Infosys",
      },
      {
        Company: "Wipro",
      },
      {
        Company: "HCL Technologies",
      },
      {
        Company: "Cognizant",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Documentation Specialist, Content Strategist, UX Writer, Information Architect, and Technical Editor roles.",
      },
      {
        Section: "Technology",
        Detailing:
          "Utilize tools like Microsoft Word, Adobe FrameMaker, MadCap Flare, and Confluence for creating and managing technical documentation.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Creating user manuals, writing online help guides, designing information architecture, editing technical documents, and collaborating with subject matter experts to ensure accuracy.",
      },
      {
        Section: "Technology",
        Detailing:
          "Strong writing and editing skills, ability to work collaboratively, critical thinking, attention to detail, and strategic content planning.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "The candidate must have a degree in English, Journalism, Technical Communication, or a related field with more than 60%.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Symbiosis Institute of Media and Communication, Pune, Indian Institute of Mass Communication, New Delhi, and other noted institutions.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "TCS, Infosys, Wipro, HCL Technologies, Cognizant, and IBM are prominent companies hiring technical writers.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Post Graduate degree in M.Sc Botany, Zoology, Biotechnology, Microbiology and agriculture Science with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Biocon, Genentech, Novozymes, Thermo Fisher Scientific, and Amgen are prominent companies hiring geneticists.",
      },
    ],
  },

  {
    id: 13,

    career: "Training and Development Specialists",
    location: "",
    careersection:
      "Training and development specialists are professionals who design, implement, and evaluate training programs for organizations. They focus on improving the skills, knowledge, and performance of employees to enhance overall productivity and efficiency. Their responsibilities include conducting needs assessments, creating training materials, delivering training sessions, and evaluating the effectiveness of training programs. These specialists play a critical role in employee development and organizational growth, ensuring that staff members are well-equipped to meet the demands of their roles.",

    careersection1:
      "As a training and development specialist, you will be responsible for developing and implementing training programs that improve employee performance and organizational effectiveness. You will conduct needs assessments, design training materials, facilitate training sessions, and evaluate the outcomes to ensure that learning objectives are met and aligned with organizational goals.",

    t1: "Instructional Design",
    t2: "Learning Management Systems (LMS)",
    t3: "Training Delivery",
    t4: "Performance Analysis",
    t5: "Evaluation and Feedback",

    X1: "Articulate Storyline, Adobe Captivate, Camtasia",
    X2: "Moodle, Blackboard, TalentLMS",
    X3: "WebEx, Zoom, Microsoft Teams",
    X4: "SurveyMonkey, Google Forms",
    X5: "Kirkpatrick Model, ADDIE Model",

    S1: "Instructional Design",
    S2: "Facilitation Skills",
    S3: "Analytical Thinking",
    S4: "Communication Skills",
    S5: "Program Evaluation",

    courses:
      "Program at a college typically includes facilities and equipment tailored to support both theoretical and practical aspects of genetics research and experimentation. What you might find here Laboratories, Advanced Equipment, Animal and Plant Facilities, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Bioethics and Safety Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "These companies focus on developing products and technologies based on genetic research. They often hire geneticists for roles such as research scientists, bioinformaticians, genetic engineers, and molecular biologists.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "4.0 LPA to 7.0 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "7.0 LPA to 12.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 15 LPA ",
      },
    ],

    Topcollege: [
      {
        University: "Tata Institute of Social Sciences (TISS), Mumbai",
      },
      {
        University: "XLRI - Xavier School of Management, Jamshedpur",
      },
      {
        University: "Indian Institute of Management (IIM), Ahmedabad",
      },
      {
        University: "Symbiosis Institute of Business Management, Pune",
      },
      {
        University:
          "Narsee Monjee Institute of Management Studies (NMIMS), Mumbai",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: "B.A. in Psychology",
      },
      {
        Courses: "B.A. in Human Resource Management",
      },
      {
        Courses: "B.A. in Business Administration",
      },
      {
        Courses: "M.A. in Organizational Development",
      },
      {
        Courses: "M.B.A. in Human Resource Management",
      },
      {
        Courses: "M.A. in Human Resource Management",
      },
      {
        Courses: "M.Phil. in Organizational Behavior",
      },
      {
        Courses: "M.Sc in Genetics /Mol. Biology/ Biochemistry",
      },
      {
        Courses: "M.Sc in Horticulture",
      },
      {
        Courses: "M.Sc in Forestry",
      },
      {
        Courses: "M.Sc in Chemistry / Zoology / Botany.",
      },
      {
        Courses: "Ph. D in Biological science or related field.",
      },
    ],
    Topcompany: [
      {
        Company: "Biocon",
      },
      {
        Company: "Genentech",
      },
      {
        Company: "Novozymes",
      },
      {
        Company: "Thermo Fisher Scientific",
      },
      {
        Company: "Amgen",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Editorial roles in scientific publishing, manuscript review and editing, content creation for scientific journals, regulatory document editing, and technical writing for biotech companies.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in using word processing and desktop publishing software, familiarity with reference management tools (e.g., EndNote, Zotero), competence in digital content management systems, and knowledge of online journal submission platforms.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Microsoft Word, Adobe InDesign, LaTeX, Grammarly, and various reference management software to ensure accuracy and consistency in scientific publications.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Reviewing and editing manuscripts for scientific accuracy and clarity, ensuring adherence to journal guidelines, managing the peer review process, coordinating with authors and reviewers, and preparing manuscripts for publication.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Strong written and verbal communication skills, critical thinking, attention to detail, ability to manage multiple projects simultaneously, and effective collaboration with authors, reviewers, and editorial teams.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Post Graduate degree in English, Journalism, Communication, or a related field with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Biocon, Genentech, Novozymes, Thermo Fisher Scientific, and Amgen are prominent companies hiring geneticists.",
      },
    ],
  },

  {
    id: 14,

    career: "Editors",
    location: "",
    careersection:
      "Editors are the guardians of written communication, meticulously crafting and refining content to ensure clarity, coherence, and accuracy. They play a pivotal role in shaping narratives, whether in journalism, publishing, or multimedia production, wielding words with precision to captivate audiences and convey messages effectively.",

    careersection1:
      "As a geneticist, you will conduct research and analysis to study the inheritance, variation, and expression of genes in living organisms. You will investigate how genetic information influences biological processes, traits, and diseases, with the goal of advancing scientific knowledge and addressing societal challenges related to genetics and genomics.",

    t1: "Copy Editing",
    t2: "Content Management Systems (CMS)",
    t3: "Proofreading",
    t4: "SEO (Search Engine Optimization)",
    t5: "Fact-Checking",

    X1: " Microsoft Word, Google Docs",
    X2: "Grammarly, Hemingway App",
    X3: "Adobe InDesign, QuarkXPress",
    X4: " WordPress, Joomla",
    X5: "AP Stylebook, Chicago Manual of Style",

    S1: "Strong Grammar and Language Skills",
    S2: "Attention to Detail",
    S3: "Time Management",
    S4: "Communication Skills",
    S5: "Adaptability",

    courses:
      "Program at a college typically includes facilities and equipment tailored to support both theoretical and practical aspects of genetics research and experimentation. What you might find here Laboratories, Advanced Equipment, Animal and Plant Facilities, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Bioethics and Safety Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "These companies focus on developing products and technologies based on genetic research. They often hire geneticists for roles such as research scientists, bioinformaticians, genetic engineers, and molecular biologists.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.0 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 15.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 15 LPA ",
      },
    ],

    Topcollege: [
      {
        University: " The Indian Institute of Science, Bengaluru",
      },
      {
        University: "All IIT & NIT",
      },
      {
        University:
          "HNBGU, A Central University (NACC Grade): GURU NANAK COLLEGE/ BFIT 2.0",
      },
      {
        University: "Manipal University",
      },
      {
        University: "Anna University, Chennai, TN",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: "B.A. in English Literature",
      },
      {
        Courses: "B.A. in Journalism and Mass Communication",
      },
      {
        Courses: "B.A. in Communication Studies",
      },
      {
        Courses: "B.A. in Technical Communication",
      },
      {
        Courses: "B.A. in Media and Communication",
      },
      {
        Courses: "B.A. in Creative Writing",
      },
      {
        Courses: "M.A. in English Literature",
      },
      {
        Courses: "M.A. in Journalism and Mass Communication",
      },
      {
        Courses: "M.A. in Professional Writing",
      },
      {
        Courses: "M.A. in Technical Communication",
      },
      {
        Courses: "Ph.D. in English or Communication Studies",
      },
      {
        Courses: "Ph.D in English or related field.",
      },
    ],
    Topcompany: [
      {
        Company: "Biocon",
      },
      {
        Company: "HarperCollins India",
      },
      {
        Company: "Hindustan Times",
      },
      {
        Company: "Penguin Random House India",
      },
      {
        Company: "Times Group",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Editorial roles in scientific publishing, manuscript review and editing, content creation for scientific journals, regulatory document editing, and technical writing for biotech companies.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficient in using word processing and desktop publishing software, familiarity with reference management tools (e.g., EndNote, Zotero), competence in digital content management systems, and knowledge of online journal submission platforms.",
      },
      {
        Section: "Tools Used",
        Detailing:
          "Utilize tools like Microsoft Word, Adobe InDesign, LaTeX, Grammarly, and various reference management software to ensure accuracy and consistency in scientific publications.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Reviewing and editing manuscripts for scientific accuracy and clarity, ensuring adherence to journal guidelines, managing the peer review process, coordinating with authors and reviewers, and preparing manuscripts for publication.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Strong written and verbal communication skills, critical thinking, attention to detail, ability to manage multiple projects simultaneously, and effective collaboration with authors, reviewers, and editorial teams.",
      },
      {
        Section: "Education",
        Detailing:
          "The candidate must have a Post Graduate degree in English, Journalism, Communication, or a related field with more than 60%.",
      },
      {
        Section: "College",
        Detailing:
          "A Central University (NACC Grade) affiliated GURU NANAK COLLEGE Dehradun,  A Central University (NACC Grade) affiliated college BFIT 2.0.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Biocon, Genentech, Novozymes, Thermo Fisher Scientific, and Amgen are prominent companies hiring geneticists.",
      },
    ],
  },

  {
    id: 15,
    
    career: "Media Programming Directors",
    location: "",
    careersection:
      "Advertising Sales Agents are dynamic professionals who bridge the gap between media organizations and advertisers. They play a crucial role in generating revenue by selling advertising space or time to clients. Their expertise in understanding market trends, client needs, and media platforms allows them to create effective advertising strategies that help businesses reach their target audiences.",

    careersection1:
      "As an Advertising Sales Agent, your primary responsibility is to sell advertising space or time to businesses and individuals. You will identify potential clients, understand their advertising needs, and propose suitable media plans. Additionally, you will negotiate contracts, ensure client satisfaction, and maintain long-term relationships to secure repeat business.",

    t1: "Client Prospecting",
    t2: "Media Planning",
    t3: "Sales Negotiation",
    t4: "Market Analysis",
    t5: "Campaign Coordination",

    X1: "Customer Relationship Management (CRM)",
    X2: "Advertising Platforms",
    X3: "Presentation Software",
    X4: "Market Analysis Tools",
    X5: "Office Suites",

    S1: "Salesmanship",
    S2: "Communication",
    S3: "Analytical Thinking",
    S4: "Time Management",
    S5: "Adaptability",

    courses:
      "Program at a college typically includes facilities and equipment tailored to support both theoretical and practical aspects of genetics research and experimentation. What you might find here Laboratories, Advanced Equipment, Animal and Plant Facilities, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Bioethics and Safety Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "These companies focus on developing products and technologies based on genetic research. They often hire geneticists for roles such as research scientists, bioinformaticians, genetic engineers, and molecular biologists.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.0 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 15.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 15 LPA ",
      },
    ],

    Topcollege: [
      {
        University: " Indian Institute of Management, Ahmedabad",
      },
      {
        University: "Xavier Institute of Management, Bhubaneswar",
      },
      {
        University: "Mudra Institute of Communications, Ahmedabad (MICA)",
      },
      {
        University: "Symbiosis Institute of Media & Communication, Pune",
      },
      {
        University: "Anna University, Chennai, TN",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: "B.A. in Marketing",
      },
      {
        Courses: "B.A. in Advertising",
      },
      {
        Courses: "B.A. in Business Administration",
      },
      {
        Courses: "Certificate in Digital Marketing",
      },
      {
        Courses: "B.A. in Media and Communication",
      },
      {
        Courses: "B.A. in Creative Writing",
      },
      {
        Courses: "M.A. in English Literature",
      },
      {
        Courses: "M.A. in Journalism and Mass Communication",
      },
      {
        Courses: "M.A. in Professional Writing",
      },
      {
        Courses: "M.A. in Technical Communication",
      },
      {
        Courses: "Ph.D. in English or Communication Studies",
      },
      {
        Courses: "Ph.D in English or related field.",
      },
    ],
    Topcompany: [
      {
        Company: "Biocon",
      },
      {
        Company: "HarperCollins India",
      },
      {
        Company: "Hindustan Times",
      },
      {
        Company: "Penguin Random House India",
      },
      {
        Company: "Times Group",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Opportunities in media sales, account management, and client services.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficiency in CRM systems, digital advertising platforms, and data analysis tools.",
      },
      {
        Section: "Tools Used",
        Detailing: "Salesforce, Google Ads, Nielsen, Microsoft Office.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Prospecting clients, negotiating contracts, planning media campaigns, and analyzing market data.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Sales, communication, market analysis, and client relationship management.",
      },
      {
        Section: "Education",
        Detailing:
          "Degree in Marketing, Advertising, or Business; continuous training in digital advertising.",
      },
      {
        Section: "College",
        Detailing:
          "Top institutions offering courses in marketing and advertising.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Major media houses, digital platforms, and advertising agencies.",
      },
    ],
  },

  {
    id: 16,

    career: "Commercial and Industrial Designers",
    location: "",
    careersection:
      "Commercial and Industrial Designers develop concepts and designs for manufactured products, such as cars, home appliances, and toys. They combine art, business, and engineering to make products that people use every day.",

    careersection1:
      "As a Commercial and Industrial Designer, your primary responsibility is to create and develop product designs that are functional, aesthetically pleasing, and manufacturable. You will conduct research to understand user needs, collaborate with engineers and marketing teams, create prototypes, and refine designs based on feedback.",

    t1: "Product Design",
    t2: "Prototyping",
    t3: "User Research",
    t4: "Material Selection",
    t5: "Manufacturing Liaison",

    X1: "CAD Software",
    X2: "3D Modeling Tools",
    X3: "Prototyping Equipment",
    X4: "User Research Tools",
    X5: "Project Management Software",

    S1: "Creativity",
    S2: "Technical Skills",
    S3: "Problem-Solving",
    S4: "Communication",
    S5: "Attention to Detail",

    courses:
      "Program at a college typically includes facilities and equipment tailored to support both theoretical and practical aspects of genetics research and experimentation. What you might find here Laboratories, Advanced Equipment, Animal and Plant Facilities, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Bioethics and Safety Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "These companies focus on developing products and technologies based on genetic research. They often hire geneticists for roles such as research scientists, bioinformaticians, genetic engineers, and molecular biologists.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.0 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 15.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 15 LPA ",
      },
    ],

    Topcollege: [
      {
        University: "National Institute of Design, Ahmedabad",
      },
      {
        University: "Indian Institute of Technology (IIT), Delhi",
      },
      {
        University: "MIT Institute of Design, Pune",
      },
      {
        University: "Symbiosis Institute of Media & Communication, Pune",
      },
      {
        University: "Symbiosis Institute of Design, Pune",
      },
      {
        University: "Indian Institute of Art and Design, New Delhi",
      },
    ],

    Topcourse: [
      {
        Courses: "B.Des in Graphic Design",
      },
      {
        Courses: "B.Des in Communication Design",
      },
      {
        Courses: "B.F.A. in Applied Arts",
      },
      {
        Courses: "Certificate in Digital Marketing",
      },
      {
        Courses: "M.Des in Visual Communication",
      },
      {
        Courses: "Diploma in Graphic Design",
      },
      {
        Courses: "M.F.A. in Graphic Design",
      },
      {
        Courses: "M.A. in Journalism and Mass Communication",
      },
      {
        Courses: "Ph.D. in Visual Arts",
      },
      {
        Courses: "Ph.D. in Design",
      },
    ],
    Topcompany: [
      {
        Company: "Tata Motors",
      },
      {
        Company: "Godrej & Boyce",
      },
      {
        Company: "Whirlpool India",
      },
      {
        Company: "Havells India",
      },
      {
        Company: "Samsung India",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Opportunities in product design, manufacturing, and user experience design.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficiency in CAD software, 3D modeling tools, and prototyping equipment.",
      },
      {
        Section: "Tools Used",
        Detailing: "AutoCAD, SolidWorks, Rhino, 3D printers, laser cutters.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Designing products, creating prototypes, conducting user research, and selecting materials.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Creativity, technical skills, problem-solving, communication, and attention to detail.",
      },
      {
        Section: "Education",
        Detailing:
          "Degree in Industrial Design, Product Design, or Mechanical Engineering; continuous training in design software and prototyping techniques.",
      },
      {
        Section: "College",
        Detailing:
          "Top institutions offering courses in industrial and product design.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Major advertising agencies, media production companies, and corporate branding departments.",
      },
    ],
  },

  {
    id: 17,

    career: "Art Directors",
    location: "",
    careersection:
      "Advertising Sales Agents are dynamic professionals who bridge the gap between media organizations and advertisers. They play a crucial role in generating revenue by selling advertising space or time to clients. Their expertise in understanding market trends, client needs, and media platforms allows them to create effective advertising strategies that help businesses reach their target audiences.",

    careersection1:
      "As an Advertising Sales Agent, your primary responsibility is to sell advertising space or time to businesses and individuals. You will identify potential clients, understand their advertising needs, and propose suitable media plans. Additionally, you will negotiate contracts, ensure client satisfaction, and maintain long-term relationships to secure repeat business.",

    t1: "Client Prospecting",
    t2: "Media Planning",
    t3: "Sales Negotiation",
    t4: "Market Analysis",
    t5: "Campaign Coordination",

    X1: "Customer Relationship Management (CRM)",
    X2: "Advertising Platforms",
    X3: "Presentation Software",
    X4: "Market Analysis Tools",
    X5: "Office Suites",

    S1: "Salesmanship",
    S2: "Communication",
    S3: "Analytical Thinking",
    S4: "Time Management",
    S5: "Adaptability",

    courses:
      "Program at a college typically includes facilities and equipment tailored to support both theoretical and practical aspects of genetics research and experimentation. What you might find here Laboratories, Advanced Equipment, Animal and Plant Facilities, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Bioethics and Safety Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring geneticists to pursue their education and career goals. Here are some notable universities in India known for their genetics and related programs.",

    company:
      "These companies focus on developing products and technologies based on genetic research. They often hire geneticists for roles such as research scientists, bioinformaticians, genetic engineers, and molecular biologists.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "5.0 LPA to 8.5 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "8.5 LPA to 15.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 15 LPA ",
      },
    ],

    Topcollege: [
      {
        University: " Indian Institute of Management, Ahmedabad",
      },
      {
        University: "Xavier Institute of Management, Bhubaneswar",
      },
      {
        University: "Mudra Institute of Communications, Ahmedabad (MICA)",
      },
      {
        University: "Symbiosis Institute of Media & Communication, Pune",
      },
      {
        University: "Anna University, Chennai, TN",
      },
      {
        University: "Amity University",
      },
    ],

    Topcourse: [
      {
        Courses: "B.A. in Marketing",
      },
      {
        Courses: "B.A. in Advertising",
      },
      {
        Courses: "B.A. in Business Administration",
      },
      {
        Courses: "Certificate in Digital Marketing",
      },
      {
        Courses: "B.A. in Media and Communication",
      },
      {
        Courses: "B.A. in Creative Writing",
      },
      {
        Courses: "M.A. in English Literature",
      },
      {
        Courses: "M.A. in Journalism and Mass Communication",
      },
      {
        Courses: "M.A. in Professional Writing",
      },
      {
        Courses: "M.A. in Technical Communication",
      },
      {
        Courses: "Ph.D. in English or Communication Studies",
      },
      {
        Courses: "Ph.D in English or related field.",
      },
    ],
    Topcompany: [
      {
        Company: "Biocon",
      },
      {
        Company: "HarperCollins India",
      },
      {
        Company: "Hindustan Times",
      },
      {
        Company: "Penguin Random House India",
      },
      {
        Company: "Times Group",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Opportunities in media sales, account management, and client services.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficiency in CRM systems, digital advertising platforms, and data analysis tools.",
      },
      {
        Section: "Tools Used",
        Detailing: "Salesforce, Google Ads, Nielsen, Microsoft Office.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Prospecting clients, negotiating contracts, planning media campaigns, and analyzing market data.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Sales, communication, market analysis, and client relationship management.",
      },
      {
        Section: "Education",
        Detailing:
          "Degree in Marketing, Advertising, or Business; continuous training in digital advertising.",
      },
      {
        Section: "College",
        Detailing:
          "Top institutions offering courses in marketing and advertising.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Major media houses, digital platforms, and advertising agencies.",
      },
    ],
  },
];

export default career_details;
