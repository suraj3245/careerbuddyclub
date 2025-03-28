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
  {
    id: 18,

    career: "Broadcast Announcers and Radio Disc Jockeys",
    location: "",
    careersection:
      "Broadcast Announcers and Radio Disc Jockeys are dynamic professionals who bring energy, entertainment, and information to listeners. They play a crucial role in engaging audiences through music, news, interviews, and commentary. Their expertise in understanding audience preferences, current events, and media trends allows them to create captivating shows that keep listeners tuned in.",

    careersection1:
      "As a Broadcast Announcer or Radio Disc Jockey, your primary responsibility is to host radio shows, provide commentary, and play music. You will interact with listeners, conduct interviews, and present news or weather reports. Additionally, you will plan show content, operate broadcasting equipment, and ensure smooth transitions between segments.",

    t1: "Show Planning",
    t2: "Audience Engagement",
    t3: "Content Presentation",
    t4: "Technical Operation",
    t5: "Interview Conducting",

    X1: "Broadcast Software",
    X2: "Audio Editing Tools",
    X3: "Microphone Techniques",
    X4: "Music Libraries",
    X5: "Office Suites",

    S1: "Public Speaking",
    S2: "Communication",
    S3: "Creativity",
    S4: "Time Management",
    S5: "Adaptability",

    courses:
      "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of broadcasting. What you might find here: Recording Studios, Broadcast Equipment, Soundproof Studios, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Media Ethics and Safety Training Facilities.",

    college:
      "Several universities in India offer programs and opportunities for aspiring broadcast announcers and radio DJs to pursue their education and career goals. Here are some notable universities in India known for their media and communication programs.",

    company:
      "These companies focus on media and broadcasting. They often hire announcers and DJs for roles such as radio hosts, broadcast journalists, and media producers.",

    summary: "",

    Package: [
      {
        Student: "Freshers",
        Package: "3.0 LPA to 6.0 LPA",
      },
      {
        Student:
          "1 Year Experience (Should be domain specific Internship or Job)",
        Package: "6.0 LPA to 10.0 LPA",
      },
      {
        Student: "2+ Years of Experience",
        Package: "Up to 12 LPA ",
      },
    ],

    Topcollege: [
      {
        University: "Indian Institute of Mass Communication, New Delhi",
      },
      {
        University: "Symbiosis Institute of Media & Communication, Pune",
      },
      {
        University: "Mudra Institute of Communications, Ahmedabad (MICA)",
      },
      {
        University: "Asian College of Journalism, Chennai",
      },
      {
        University: "Amity School of Communication, Noida",
      },
      {
        University: "Christ University, Bangalore",
      },
    ],

    Topcourse: [
      {
        Courses: "B.A. in Journalism and Mass Communication",
      },
      {
        Courses: "B.A. in Media and Communication",
      },
      {
        Courses: "Certificate in Radio Jockeying",
      },
      {
        Courses: "B.A. in Broadcasting",
      },
      {
        Courses: "B.A. in Performing Arts",
      },
      {
        Courses: "M.A. in Media Studies",
      },
      {
        Courses: "M.A. in Journalism and Mass Communication",
      },
      {
        Courses: "M.A. in Broadcast Journalism",
      },
      {
        Courses: "Ph.D. in Media Studies",
      },
      {
        Courses: "Ph.D. in Communication Studies",
      },
    ],

    Topcompany: [
      {
        Company: "All India Radio",
      },
      {
        Company: "Radio Mirchi",
      },
      {
        Company: "Red FM",
      },
      {
        Company: "Big FM",
      },
      {
        Company: "Fever FM",
      },
    ],

    Summary: [
      {
        Section: "Career Choices",
        Detailing:
          "Opportunities in radio hosting, broadcasting, and media production.",
      },
      {
        Section: "Technology",
        Detailing:
          "Proficiency in broadcast software, audio editing tools, and technical operation.",
      },
      {
        Section: "Tools Used",
        Detailing: "Adobe Audition, Pro Tools, Audacity, Microsoft Office.",
      },
      {
        Section: "Detailed Work Activities",
        Detailing:
          "Planning shows, engaging with audiences, presenting content, and operating technical equipment.",
      },
      {
        Section: "Skills (Interpersonal and Domain Specific)",
        Detailing:
          "Public speaking, communication, creativity, and time management.",
      },
      {
        Section: "Education",
        Detailing:
          "Degree in Media, Broadcasting, or Communication; continuous training in new broadcasting technologies.",
      },
      {
        Section: "College",
        Detailing:
          "Top institutions offering courses in media and communication.",
      },
      {
        Section: "Companies Related",
        Detailing:
          "Major radio stations, media houses, and broadcasting networks.",
      },
    ],
},
{
  id: 19,

  career: "Film and Video Editors",
  location: "",
  careersection:
    "Film and Video Editors are creative professionals who play a critical role in the post-production process of filmmaking and video production. They are responsible for piecing together raw footage, sound, and special effects to create a cohesive and engaging final product. Their expertise in storytelling, technical skills, and attention to detail ensures that the vision of the director is effectively translated on screen.",

  careersection1:
    "As a Film and Video Editor, your primary responsibility is to edit film and video footage to produce a final product that aligns with the director's vision. You will review raw footage, select scenes, and piece them together using editing software. Additionally, you will add effects, graphics, sound, and music, and ensure the final product meets quality standards and project deadlines.",

  t1: "Footage Review",
  t2: "Scene Selection",
  t3: "Editing and Sequencing",
  t4: "Special Effects Integration",
  t5: "Sound and Music Editing",

  X1: "Editing Software",
  X2: "Color Grading Tools",
  X3: "Audio Editing Software",
  X4: "Graphic Design Tools",
  X5: "Office Suites",

  S1: "Attention to Detail",
  S2: "Creativity",
  S3: "Technical Proficiency",
  S4: "Time Management",
  S5: "Communication",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of film and video editing. What you might find here: Editing Labs, Advanced Editing Software, Sound Studios, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, Film Ethics and Safety Training Facilities.",

  college:
    "Several universities in India offer programs and opportunities for aspiring film and video editors to pursue their education and career goals. Here are some notable universities in India known for their film and media programs.",

  company:
    "These companies focus on film production, television, and digital media. They often hire film and video editors for roles such as post-production editors, visual effects artists, and media content creators.",

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
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "Film and Television Institute of India, Pune",
    },
    {
      University: "Satyajit Ray Film and Television Institute, Kolkata",
    },
    {
      University: "Whistling Woods International, Mumbai",
    },
    {
      University: "Symbiosis Institute of Media & Communication, Pune",
    },
    {
      University: "Asian Academy of Film & Television, Noida",
    },
    {
      University: "Amity School of Communication, Noida",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Film and Television Production",
    },
    {
      Courses: "B.A. in Media and Communication",
    },
    {
      Courses: "Certificate in Film Editing",
    },
    {
      Courses: "B.A. in Digital Media Production",
    },
    {
      Courses: "M.A. in Film Studies",
    },
    {
      Courses: "M.A. in Media Studies",
    },
    {
      Courses: "M.A. in Editing and Post Production",
    },
    {
      Courses: "Ph.D. in Film Studies",
    },
    {
      Courses: "Ph.D. in Media and Communication",
    },
  ],

  Topcompany: [
    {
      Company: "Yash Raj Films",
    },
    {
      Company: "Dharma Productions",
    },
    {
      Company: "Balaji Telefilms",
    },
    {
      Company: "Red Chillies Entertainment",
    },
    {
      Company: "Reliance Entertainment",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in film editing, television production, and digital media content creation.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in editing software, audio editing tools, and special effects integration.",
    },
    {
      Section: "Tools Used",
      Detailing: "Adobe Premiere Pro, Final Cut Pro, Avid Media Composer, DaVinci Resolve.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Reviewing footage, selecting scenes, editing and sequencing, and integrating special effects and sound.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Attention to detail, creativity, technical proficiency, and time management.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Film Production, Media, or Communication; continuous training in new editing technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in film and video editing.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major film production houses, television networks, and digital media companies.",
    },
  ],
},
{
  id: 20,

  career: "Interior Designers",
  location: "",
  careersection:
    "Interior Designers are creative professionals who enhance the functionality and aesthetic appeal of indoor spaces. They work closely with clients to understand their needs and preferences, then use their expertise in design principles, space planning, and materials to create harmonious and visually pleasing environments. Their role is crucial in transforming spaces into livable and beautiful areas.",

  careersection1:
    "As an Interior Designer, your primary responsibility is to plan, design, and furnish the interiors of residential, commercial, or industrial buildings. You will consult with clients to determine their requirements, create design concepts, and present them for approval. Additionally, you will coordinate with contractors, oversee the implementation of designs, and ensure the final outcome meets the client's expectations.",

  t1: "Client Consultation",
  t2: "Design Conceptualization",
  t3: "Space Planning",
  t4: "Material Selection",
  t5: "Project Coordination",

  X1: "Design Software",
  X2: "3D Modeling Tools",
  X3: "Presentation Software",
  X4: "Color Theory Applications",
  X5: "Office Suites",

  S1: "Creativity",
  S2: "Communication",
  S3: "Attention to Detail",
  S4: "Project Management",
  S5: "Adaptability",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of interior design. What you might find here: Design Studios, Advanced Software, Material Libraries, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Design Trends.",

  college:
    "Several universities in India offer programs and opportunities for aspiring interior designers to pursue their education and career goals. Here are some notable universities in India known for their interior design programs.",

  company:
    "These companies focus on interior design and architecture. They often hire interior designers for roles such as residential designers, commercial space designers, and design consultants.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "3.0 LPA to 6.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "6.0 LPA to 10.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "National Institute of Design, Ahmedabad",
    },
    {
      University: "CEPT University, Ahmedabad",
    },
    {
      University: "JJ School of Art, Mumbai",
    },
    {
      University: "Arch Academy of Design, Jaipur",
    },
    {
      University: "Pearl Academy, Delhi",
    },
    {
      University: "Amity School of Design, Noida",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Interior Design",
    },
    {
      Courses: "B.A. in Interior Architecture",
    },
    {
      Courses: "Diploma in Interior Design",
    },
    {
      Courses: "B.Sc. in Interior Design",
    },
    {
      Courses: "M.A. in Interior Design",
    },
    {
      Courses: "M.Sc. in Interior Design",
    },
    {
      Courses: "M.A. in Design Management",
    },
    {
      Courses: "Ph.D. in Interior Design",
    },
    {
      Courses: "Ph.D. in Design Studies",
    },
  ],

  Topcompany: [
    {
      Company: "Godrej Interio",
    },
    {
      Company: "Livspace",
    },
    {
      Company: "Urban Ladder",
    },
    {
      Company: "Pepperfry",
    },
    {
      Company: "Fabindia",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in residential design, commercial space design, and design consultancy.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in design software, 3D modeling tools, and presentation software.",
    },
    {
      Section: "Tools Used",
      Detailing: "AutoCAD, SketchUp, 3ds Max, Adobe Creative Suite.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Consulting with clients, creating design concepts, planning spaces, selecting materials, and coordinating projects.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Creativity, communication, attention to detail, and project management.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Interior Design, Architecture, or related fields; continuous training in design trends and technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in interior design.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major interior design firms, architecture companies, and furniture design brands.",
    },
  ],
},
{
  id: 21,

  career: "Music Directors and Composers",
  location: "",
  careersection:
    "Music Directors and Composers are talented professionals who create, arrange, and direct music for various performances, recordings, and productions. They play a pivotal role in shaping the musical landscape by composing original scores, conducting orchestras, and collaborating with other artists. Their expertise in music theory, composition, and arrangement helps bring musical ideas to life and enhance the emotional impact of media and performances.",

  careersection1:
    "As a Music Director or Composer, your primary responsibility is to compose original music and direct musical performances. You will work on creating scores for films, television, concerts, and other media. Additionally, you will arrange music, conduct rehearsals, and collaborate with performers to ensure the music aligns with the overall vision of the project.",

  t1: "Music Composition",
  t2: "Score Arrangement",
  t3: "Conducting Rehearsals",
  t4: "Collaboration with Artists",
  t5: "Music Production",

  X1: "Music Notation Software",
  X2: "Digital Audio Workstations",
  X3: "Recording Equipment",
  X4: "Sound Libraries",
  X5: "Office Suites",

  S1: "Creativity",
  S2: "Musicality",
  S3: "Attention to Detail",
  S4: "Leadership",
  S5: "Collaboration",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of music composition and direction. What you might find here: Music Studios, Advanced Software, Instrument Libraries, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Music Trends.",

  college:
    "Several universities in India offer programs and opportunities for aspiring music directors and composers to pursue their education and career goals. Here are some notable universities in India known for their music programs.",

  company:
    "These companies focus on music production, film scoring, and media entertainment. They often hire music directors and composers for roles such as film scorers, music producers, and orchestral conductors.",

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
      Package: "Up to 20 LPA",
    },
  ],

  Topcollege: [
    {
      University: "KM Music Conservatory, Chennai",
    },
    {
      University: "Swarnabhoomi Academy of Music, Tamil Nadu",
    },
    {
      University: "Rabindra Bharati University, Kolkata",
    },
    {
      University: "Banaras Hindu University, Varanasi",
    },
    {
      University: "Delhi University, Delhi",
    },
    {
      University: "Symbiosis School of Media and Communication, Pune",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Music Composition",
    },
    {
      Courses: "B.A. in Performing Arts",
    },
    {
      Courses: "Diploma in Music Production",
    },
    {
      Courses: "B.A. in Music Theory",
    },
    {
      Courses: "M.A. in Music Composition",
    },
    {
      Courses: "M.A. in Music Production",
    },
    {
      Courses: "M.A. in Conducting",
    },
    {
      Courses: "Ph.D. in Music Composition",
    },
    {
      Courses: "Ph.D. in Music Theory",
    },
  ],

  Topcompany: [
    {
      Company: "T-Series",
    },
    {
      Company: "Sony Music India",
    },
    {
      Company: "Zee Music Company",
    },
    {
      Company: "Saregama India Ltd.",
    },
    {
      Company: "Tips Industries",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in music composition, direction, and production across various media.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in music notation software, digital audio workstations, and recording equipment.",
    },
    {
      Section: "Tools Used",
      Detailing: "Sibelius, Finale, Logic Pro, Ableton Live.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Composing music, arranging scores, conducting rehearsals, collaborating with artists, and producing music.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Creativity, musicality, attention to detail, leadership, and collaboration.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Music Composition, Conducting, or related fields; continuous training in new music technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in music composition and direction.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major music production houses, film studios, and media companies.",
    },
  ],
},
{
  id: 22,

  career: "Musicians and Singers",
  location: "",
  careersection:
    "Musicians and Singers are talented performers who create, interpret, and perform music across various genres and settings. They play a vital role in the entertainment industry, bringing music to life through live performances, recordings, and collaborations. Their expertise in vocal or instrumental music, along with their ability to connect with audiences, makes them essential contributors to cultural and artistic expression.",

  careersection1:
    "As a Musician or Singer, your primary responsibility is to perform music, either live or in recording sessions. You will practice regularly to maintain and improve your skills, perform in various venues, and collaborate with other musicians and artists. Additionally, you may compose original music, arrange existing pieces, and engage with fans and audiences.",

  t1: "Music Performance",
  t2: "Practice and Rehearsal",
  t3: "Music Composition",
  t4: "Collaboration with Artists",
  t5: "Audience Engagement",

  X1: "Musical Instruments",
  X2: "Microphones and Amplifiers",
  X3: "Music Notation Software",
  X4: "Recording Equipment",
  X5: "Office Suites",

  S1: "Musical Talent",
  S2: "Performance Skills",
  S3: "Creativity",
  S4: "Discipline",
  S5: "Adaptability",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of music performance and education. What you might find here: Music Studios, Practice Rooms, Performance Halls, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Performance Techniques.",

  college:
    "Several universities in India offer programs and opportunities for aspiring musicians and singers to pursue their education and career goals. Here are some notable universities in India known for their music programs.",

  company:
    "These companies focus on music production, live performances, and recording. They often hire musicians and singers for roles such as recording artists, live performers, and session musicians.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "3.0 LPA to 6.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "6.0 LPA to 10.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "KM Music Conservatory, Chennai",
    },
    {
      University: "Swarnabhoomi Academy of Music, Tamil Nadu",
    },
    {
      University: "Rabindra Bharati University, Kolkata",
    },
    {
      University: "Banaras Hindu University, Varanasi",
    },
    {
      University: "Delhi University, Delhi",
    },
    {
      University: "Symbiosis School of Media and Communication, Pune",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Music",
    },
    {
      Courses: "B.A. in Performing Arts",
    },
    {
      Courses: "Diploma in Music Performance",
    },
    {
      Courses: "B.A. in Vocal Performance",
    },
    {
      Courses: "M.A. in Music",
    },
    {
      Courses: "M.A. in Performing Arts",
    },
    {
      Courses: "M.A. in Vocal Performance",
    },
    {
      Courses: "Ph.D. in Music",
    },
    {
      Courses: "Ph.D. in Performing Arts",
    },
  ],

  Topcompany: [
    {
      Company: "T-Series",
    },
    {
      Company: "Sony Music India",
    },
    {
      Company: "Zee Music Company",
    },
    {
      Company: "Saregama India Ltd.",
    },
    {
      Company: "Tips Industries",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in live performance, recording, and music composition across various genres.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in musical instruments, recording equipment, and music notation software.",
    },
    {
      Section: "Tools Used",
      Detailing: "Guitars, keyboards, microphones, DAWs like Pro Tools and Logic Pro.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Performing music, practicing and rehearsing, composing music, collaborating with other artists, and engaging with audiences.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Musical talent, performance skills, creativity, discipline, and adaptability.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Music, Performing Arts, or related fields; continuous training in new music techniques and technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in music and performance.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major music production houses, live performance venues, and recording studios.",
    },
  ],
},
{
  id: 23,

  career: "News Analysts, Reporters, and Journalists",
  location: "",
  careersection:
    "News Analysts, Reporters, and Journalists are dedicated professionals who gather, analyze, and present news and information to the public. They play a crucial role in keeping the public informed about current events, issues, and trends. Their expertise in investigative research, interviewing, and storytelling helps to deliver accurate and engaging news content across various media platforms.",

  careersection1:
    "As a News Analyst, Reporter, or Journalist, your primary responsibility is to research, write, and report news stories. You will gather information through interviews, observations, and research, then present your findings in a clear and compelling manner. Additionally, you will work on tight deadlines, fact-check your work, and ensure the accuracy and fairness of your reports.",

  t1: "Investigative Research",
  t2: "Interviewing Sources",
  t3: "Writing and Editing",
  t4: "Fact-Checking",
  t5: "Broadcast Reporting",

  X1: "Journalism Software",
  X2: "Content Management Systems",
  X3: "Editing Tools",
  X4: "Research Databases",
  X5: "Office Suites",

  S1: "Writing Skills",
  S2: "Communication",
  S3: "Analytical Thinking",
  S4: "Time Management",
  S5: "Adaptability",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of journalism and reporting. What you might find here: Newsrooms, Advanced Editing Software, Broadcast Studios, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Journalism Ethics and Techniques.",

  college:
    "Several universities in India offer programs and opportunities for aspiring news analysts, reporters, and journalists to pursue their education and career goals. Here are some notable universities in India known for their journalism programs.",

  company:
    "These companies focus on news production, broadcasting, and digital media. They often hire news analysts, reporters, and journalists for roles such as news anchors, investigative reporters, and multimedia journalists.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "3.0 LPA to 6.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "6.0 LPA to 10.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "Indian Institute of Mass Communication, New Delhi",
    },
    {
      University: "Symbiosis Institute of Media & Communication, Pune",
    },
    {
      University: "Asian College of Journalism, Chennai",
    },
    {
      University: "Jamia Millia Islamia, New Delhi",
    },
    {
      University: "Xavier Institute of Communication, Mumbai",
    },
    {
      University: "Amity School of Communication, Noida",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Journalism",
    },
    {
      Courses: "B.A. in Mass Communication",
    },
    {
      Courses: "Diploma in Journalism",
    },
    {
      Courses: "B.A. in Multimedia Journalism",
    },
    {
      Courses: "M.A. in Journalism",
    },
    {
      Courses: "M.A. in Mass Communication",
    },
    {
      Courses: "M.A. in Investigative Journalism",
    },
    {
      Courses: "Ph.D. in Journalism",
    },
    {
      Courses: "Ph.D. in Communication Studies",
    },
  ],

  Topcompany: [
    {
      Company: "Times of India",
    },
    {
      Company: "Hindustan Times",
    },
    {
      Company: "NDTV",
    },
    {
      Company: "The Indian Express",
    },
    {
      Company: "India Today",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in news reporting, investigative journalism, and broadcast journalism across various media platforms.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in journalism software, content management systems, and editing tools.",
    },
    {
      Section: "Tools Used",
      Detailing: "WordPress, Adobe Premiere Pro, Final Cut Pro, Microsoft Office.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Conducting research, interviewing sources, writing and editing news stories, fact-checking, and presenting news reports.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Writing skills, communication, analytical thinking, time management, and adaptability.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Journalism, Mass Communication, or related fields; continuous training in new journalism techniques and technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in journalism and mass communication.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major news organizations, broadcasting networks, and digital media companies.",
    },
  ],
},
{
  id: 24,

  career: "Video Game Designers",
  location: "",
  careersection:
    "Video Game Designers are innovative professionals who create engaging and immersive video game experiences. They are responsible for developing the concept, storyline, characters, and gameplay mechanics that define a game. Their expertise in design principles, storytelling, and technology enables them to bring imaginative worlds to life and provide players with captivating entertainment.",

  careersection1:
    "As a Video Game Designer, your primary responsibility is to design and develop video games. You will create game concepts, design characters and environments, and develop gameplay mechanics. Additionally, you will collaborate with artists, programmers, and other team members to ensure the game is visually appealing, technically sound, and fun to play.",

  t1: "Game Concept Development",
  t2: "Character and Environment Design",
  t3: "Gameplay Mechanics Design",
  t4: "Storyline Creation",
  t5: "Collaboration with Development Team",

  X1: "Game Design Software",
  X2: "3D Modeling Tools",
  X3: "Programming Languages",
  X4: "Storyboarding Tools",
  X5: "Office Suites",

  S1: "Creativity",
  S2: "Technical Skills",
  S3: "Problem-Solving",
  S4: "Collaboration",
  S5: "Attention to Detail",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of game design. What you might find here: Game Development Labs, Advanced Software, Design Studios, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Game Development Trends.",

  college:
    "Several universities in India offer programs and opportunities for aspiring video game designers to pursue their education and career goals. Here are some notable universities in India known for their game design programs.",

  company:
    "These companies focus on video game development and production. They often hire video game designers for roles such as game developers, level designers, and narrative designers.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "4.0 LPA to 8.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "8.0 LPA to 12.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 20 LPA",
    },
  ],

  Topcollege: [
    {
      University: "National Institute of Design, Ahmedabad",
    },
    {
      University: "Symbiosis Institute of Design, Pune",
    },
    {
      University: "Maya Academy of Advanced Cinematics, Mumbai",
    },
    {
      University: "ICAT Design and Media College, Chennai",
    },
    {
      University: "Amity School of Fine Arts, Noida",
    },
    {
      University: "Lovely Professional University, Punjab",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Game Design",
    },
    {
      Courses: "B.A. in Animation and Game Design",
    },
    {
      Courses: "Diploma in Game Development",
    },
    {
      Courses: "B.Sc. in Computer Science with Game Design",
    },
    {
      Courses: "M.A. in Game Design",
    },
    {
      Courses: "M.A. in Interactive Media",
    },
    {
      Courses: "M.Sc. in Game Development",
    },
    {
      Courses: "Ph.D. in Game Design",
    },
    {
      Courses: "Ph.D. in Interactive Media",
    },
  ],

  Topcompany: [
    {
      Company: "Ubisoft India",
    },
    {
      Company: "Electronic Arts India",
    },
    {
      Company: "Nodding Heads Games",
    },
    {
      Company: "Dhruva Interactive",
    },
    {
      Company: "99Games",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in game development, level design, narrative design, and interactive media design.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in game design software, 3D modeling tools, and programming languages.",
    },
    {
      Section: "Tools Used",
      Detailing: "Unity, Unreal Engine, Blender, Adobe Creative Suite.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Developing game concepts, designing characters and environments, creating gameplay mechanics, writing storylines, and collaborating with the development team.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Creativity, technical skills, problem-solving, collaboration, and attention to detail.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Game Design, Animation, or related fields; continuous training in new game development technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in game design and development.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major video game development studios and interactive media companies.",
    },
  ],
},
{
  id: 25,

  career: "Choreographers",
  location: "",
  careersection:
    "Choreographers are creative professionals who design and direct the movements of dancers and performers. They are responsible for creating dance routines and sequences that are performed in various settings such as theater, film, television, and live performances. Their expertise in dance techniques, creativity, and an understanding of music and rhythm help bring artistic visions to life on stage and screen.",

  careersection1:
    "As a Choreographer, your primary responsibility is to create and develop dance routines. You will work with dancers, directors, and producers to design movements that match the theme and music of the production. Additionally, you will conduct rehearsals, teach dance techniques, and make adjustments to ensure a flawless performance.",

  t1: "Dance Routine Creation",
  t2: "Rehearsal Direction",
  t3: "Music Selection",
  t4: "Technique Instruction",
  t5: "Performance Coordination",

  X1: "Choreography Software",
  X2: "Music Editing Tools",
  X3: "Video Recording Equipment",
  X4: "Dance Notation Systems",
  X5: "Office Suites",

  S1: "Creativity",
  S2: "Physical Stamina",
  S3: "Teaching Skills",
  S4: "Time Management",
  S5: "Attention to Detail",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of choreography. What you might find here: Dance Studios, Advanced Music and Video Editing Software, Performance Halls, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Dance Techniques and Trends.",

  college:
    "Several universities in India offer programs and opportunities for aspiring choreographers to pursue their education and career goals. Here are some notable universities in India known for their dance and choreography programs.",

  company:
    "These companies focus on dance production, performing arts, and entertainment. They often hire choreographers for roles such as dance directors, movement coaches, and performance coordinators.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "3.0 LPA to 6.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "6.0 LPA to 10.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "National School of Drama, New Delhi",
    },
    {
      University: "Sangeet Natak Akademi, New Delhi",
    },
    {
      University: "Kalakshetra Foundation, Chennai",
    },
    {
      University: "Rabindra Bharati University, Kolkata",
    },
    {
      University: "Banaras Hindu University, Varanasi",
    },
    {
      University: "Sri Ram Bharatiya Kala Kendra, New Delhi",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Dance",
    },
    {
      Courses: "B.A. in Performing Arts",
    },
    {
      Courses: "Diploma in Choreography",
    },
    {
      Courses: "B.F.A. in Dance",
    },
    {
      Courses: "M.A. in Dance",
    },
    {
      Courses: "M.A. in Performing Arts",
    },
    {
      Courses: "M.F.A. in Dance",
    },
    {
      Courses: "Ph.D. in Dance",
    },
    {
      Courses: "Ph.D. in Performing Arts",
    },
  ],

  Topcompany: [
    {
      Company: "Indian Council for Cultural Relations (ICCR)",
    },
    {
      Company: "Indian People's Theatre Association (IPTA)",
    },
    {
      Company: "Dance India Dance",
    },
    {
      Company: "Nrityagram",
    },
    {
      Company: "Attakkalari Centre for Movement Arts",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in dance choreography, performance coordination, and movement coaching across various performing arts platforms.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in choreography software, music editing tools, and video recording equipment.",
    },
    {
      Section: "Tools Used",
      Detailing: "Dance Designer, Audacity, Final Cut Pro, Microsoft Office.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Creating dance routines, directing rehearsals, selecting music, teaching dance techniques, and coordinating performances.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Creativity, physical stamina, teaching skills, time management, and attention to detail.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Dance, Performing Arts, or related fields; continuous training in new dance techniques and trends.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in dance and choreography.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major dance production companies, performing arts organizations, and entertainment industry players.",
    },
  ],
},
{
  id: 26,

  career: "Graphic Designers",
  location: "",
  careersection:
    "Graphic Designers are creative professionals who use visual concepts to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and corporate reports. Their expertise in design principles, typography, and digital tools helps bring visual stories to life.",

  careersection1:
    "As a Graphic Designer, your primary responsibility is to create visual concepts by hand or using computer software. You will develop layouts for various media, choose colors, images, and typefaces to use, and work with clients to ensure their requirements are met. Additionally, you will revise designs based on feedback and stay updated on industry trends.",

  t1: "Visual Concept Development",
  t2: "Layout Design",
  t3: "Typography Selection",
  t4: "Image Editing",
  t5: "Client Collaboration",

  X1: "Graphic Design Software",
  X2: "Image Editing Tools",
  X3: "Typography Software",
  X4: "Prototyping Tools",
  X5: "Office Suites",

  S1: "Creativity",
  S2: "Attention to Detail",
  S3: "Technical Skills",
  S4: "Time Management",
  S5: "Communication",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of graphic design. What you might find here: Design Studios, Advanced Software, Printing Labs, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Design Trends.",

  college:
    "Several universities in India offer programs and opportunities for aspiring graphic designers to pursue their education and career goals. Here are some notable universities in India known for their design programs.",

  company:
    "These companies focus on advertising, media, and digital design. They often hire graphic designers for roles such as visual designers, UI/UX designers, and brand designers.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "3.0 LPA to 6.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "6.0 LPA to 10.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "National Institute of Design, Ahmedabad",
    },
    {
      University: "Symbiosis Institute of Design, Pune",
    },
    {
      University: "MIT Institute of Design, Pune",
    },
    {
      University: "Srishti Institute of Art, Design and Technology, Bangalore",
    },
    {
      University: "Pearl Academy, Delhi",
    },
    {
      University: "Amity School of Fine Arts, Noida",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Graphic Design",
    },
    {
      Courses: "B.A. in Communication Design",
    },
    {
      Courses: "Diploma in Graphic Design",
    },
    {
      Courses: "B.Des. in Graphic Design",
    },
    {
      Courses: "M.A. in Graphic Design",
    },
    {
      Courses: "M.A. in Visual Communication",
    },
    {
      Courses: "M.Des. in Communication Design",
    },
    {
      Courses: "Ph.D. in Graphic Design",
    },
    {
      Courses: "Ph.D. in Design Studies",
    },
  ],

  Topcompany: [
    {
      Company: "Ogilvy & Mather",
    },
    {
      Company: "Wieden+Kennedy",
    },
    {
      Company: "Leo Burnett",
    },
    {
      Company: "Dentsu India",
    },
    {
      Company: "Landor",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in visual design, UI/UX design, brand design, and digital media design.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in graphic design software, image editing tools, and typography software.",
    },
    {
      Section: "Tools Used",
      Detailing: "Adobe Creative Suite, CorelDRAW, Sketch, Figma.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Developing visual concepts, designing layouts, selecting typography, editing images, and collaborating with clients.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Creativity, attention to detail, technical skills, time management, and communication.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Graphic Design, Communication Design, or related fields; continuous training in new design techniques and technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in graphic design and visual communication.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major advertising agencies, design studios, and digital media companies.",
    },
  ],
},
{
  id: 26,

  career: "Graphic Designers",
  location: "",
  careersection:
    "Graphic Designers are creative professionals who use visual concepts to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and corporate reports. Their expertise in design principles, typography, and digital tools helps bring visual stories to life.",

  careersection1:
    "As a Graphic Designer, your primary responsibility is to create visual concepts by hand or using computer software. You will develop layouts for various media, choose colors, images, and typefaces to use, and work with clients to ensure their requirements are met. Additionally, you will revise designs based on feedback and stay updated on industry trends.",

  t1: "Visual Concept Development",
  t2: "Layout Design",
  t3: "Typography Selection",
  t4: "Image Editing",
  t5: "Client Collaboration",

  X1: "Graphic Design Software",
  X2: "Image Editing Tools",
  X3: "Typography Software",
  X4: "Prototyping Tools",
  X5: "Office Suites",

  S1: "Creativity",
  S2: "Attention to Detail",
  S3: "Technical Skills",
  S4: "Time Management",
  S5: "Communication",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of graphic design. What you might find here: Design Studios, Advanced Software, Printing Labs, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Design Trends.",

  college:
    "Several universities in India offer programs and opportunities for aspiring graphic designers to pursue their education and career goals. Here are some notable universities in India known for their design programs.",

  company:
    "These companies focus on advertising, media, and digital design. They often hire graphic designers for roles such as visual designers, UI/UX designers, and brand designers.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "6.0 LPA to 10.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "12.0 LPA to 15.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "National Institute of Design, Ahmedabad",
    },
    {
      University: "Symbiosis Institute of Design, Pune",
    },
    {
      University: "MIT Institute of Design, Pune",
    },
    {
      University: "Srishti Institute of Art, Design and Technology, Bangalore",
    },
    {
      University: "Pearl Academy, Delhi",
    },
    {
      University: "Amity School of Fine Arts, Noida",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Graphic Design",
    },
    {
      Courses: "B.A. in Communication Design",
    },
    {
      Courses: "Diploma in Graphic Design",
    },
    {
      Courses: "B.Des. in Graphic Design",
    },
    {
      Courses: "M.A. in Graphic Design",
    },
    {
      Courses: "M.A. in Visual Communication",
    },
    {
      Courses: "M.Des. in Communication Design",
    },
    {
      Courses: "Ph.D. in Graphic Design",
    },
    {
      Courses: "Ph.D. in Design Studies",
    },
  ],

  Topcompany: [
    {
      Company: "Ogilvy & Mather",
    },
    {
      Company: "Wieden+Kennedy",
    },
    {
      Company: "Leo Burnett",
    },
    {
      Company: "Dentsu India",
    },
    {
      Company: "Landor",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in visual design, UI/UX design, brand design, and digital media design.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in graphic design software, image editing tools, and typography software.",
    },
    {
      Section: "Tools Used",
      Detailing: "Adobe Creative Suite, CorelDRAW, Sketch, Figma.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Developing visual concepts, designing layouts, selecting typography, editing images, and collaborating with clients.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Creativity, attention to detail, technical skills, time management, and communication.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Graphic Design, Communication Design, or related fields; continuous training in new design techniques and technologies.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in graphic design and visual communication.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major advertising agencies, design studios, and digital media companies.",
    },
  ],
},
{
  id: 27,

  career: "Advertising and Promotions Managers",
  location: "",
  careersection:
    "Advertising and Promotions Managers are strategic leaders who oversee promotional campaigns to enhance the visibility and sales of products or services. They collaborate with teams to develop advertising strategies, negotiate contracts with media outlets, and analyze market trends. Their expertise in marketing, creativity, and project management ensures successful promotional initiatives that resonate with target audiences.",

  careersection1:
    "As an Advertising and Promotions Manager, your primary responsibility is to plan and execute advertising and promotional campaigns. You will coordinate with advertising agencies, media organizations, and internal teams to develop marketing strategies. Additionally, you will manage budgets, evaluate campaign effectiveness, and ensure brand consistency across all promotional efforts.",

  t1: "Campaign Strategy",
  t2: "Media Planning",
  t3: "Budget Management",
  t4: "Market Analysis",
  t5: "Creative Direction",

  X1: "Marketing Automation Tools",
  X2: "Advertising Platforms",
  X3: "Budgeting Software",
  X4: "Market Research Tools",
  X5: "Project Management Software",

  S1: "Leadership",
  S2: "Creativity",
  S3: "Analytical Thinking",
  S4: "Decision-Making",
  S5: "Communication",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of advertising and promotions. What you might find here: Advertising Studios, Marketing Research Labs, Media Planning Rooms, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Consumer Behavior and Campaign Planning.",

  college:
    "Several universities in India offer programs and opportunities for aspiring advertising and promotions managers to pursue their education and career goals. Here are some notable universities in India known for their marketing and advertising programs.",

  company:
    "These companies focus on advertising, marketing agencies, and corporate communications. They often hire advertising and promotions managers for roles such as campaign managers, brand managers, and marketing directors.",

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
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "Indian Institute of Management, Ahmedabad",
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
      Courses: "MBA in Marketing",
    },
    {
      Courses: "MBA in Advertising Management",
    },
    {
      Courses: "MBA in Brand Management",
    },
    {
      Courses: "MBA in Media Management",
    },
    {
      Courses: "MBA in Digital Marketing",
    },
    {
      Courses: "M.A. in Advertising and Public Relations",
    },
    {
      Courses: "M.A. in Marketing Communication",
    },
    {
      Courses: "Ph.D. in Marketing",
    },
    {
      Courses: "Ph.D. in Advertising",
    },
  ],

  Topcompany: [
    {
      Company: "WPP India",
    },
    {
      Company: "Publicis Groupe",
    },
    {
      Company: "Dentsu Aegis Network",
    },
    {
      Company: "Omnicom Group",
    },
    {
      Company: "Interpublic Group",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in advertising strategy, campaign management, and brand promotion across various industries.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in marketing automation tools, advertising platforms, and project management software.",
    },
    {
      Section: "Tools Used",
      Detailing: "HubSpot, Google Ads, Asana, Nielsen Marketing Cloud.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Developing campaign strategies, planning media placements, managing budgets, analyzing market data, and directing creative development.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Leadership, creativity, analytical thinking, decision-making, and communication.",
    },
    {
      Section: "Education",
      Detailing:
        "MBA in Marketing or related fields; continuous training in digital advertising and consumer behavior.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in marketing and advertising management.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major advertising agencies, marketing firms, and corporate communication departments.",
    },
  ],
},
{
  id: 28,

  career: "Producers and Directors",
  location: "",
  careersection:
    "Producers and Directors are creative leaders who oversee the production of films, television shows, theater productions, and other performing arts endeavors. They are responsible for the overall management, planning, and coordination of productions, from initial concept to final execution. Their expertise in storytelling, project management, and leadership ensures the successful creation of compelling and engaging entertainment.",

  careersection1:
    "As a Producer or Director, your primary responsibility is to bring creative visions to life. You will oversee all aspects of production, including script development, casting, budgeting, scheduling, and post-production. Additionally, you will collaborate with actors, crew members, and other stakeholders to ensure a cohesive and high-quality final product.",

  t1: "Script Development",
  t2: "Casting",
  t3: "Budgeting",
  t4: "Scheduling",
  t5: "Post-Production Supervision",

  X1: "Production Management Software",
  X2: "Video Editing Tools",
  X3: "Casting Software",
  X4: "Budgeting Software",
  X5: "Project Management Tools",

  S1: "Creativity",
  S2: "Leadership",
  S3: "Problem-Solving",
  S4: "Time Management",
  S5: "Decision-Making",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of film, television, and theater production. What you might find here: Production Studios, Editing Suites, Casting Rooms, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Screenwriting and Directing Techniques.",

  college:
    "Several universities in India offer programs and opportunities for aspiring producers and directors to pursue their education and career goals. Here are some notable universities in India known for their film and media programs.",

  company:
    "These companies focus on film production, television networks, theater companies, and digital media. They often hire producers and directors for roles such as film directors, executive producers, showrunners, and creative directors.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "5.0 LPA to 10.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "10.0 LPA to 20.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 30 LPA",
    },
  ],

  Topcollege: [
    {
      University: "Film and Television Institute of India, Pune",
    },
    {
      University: "Satyajit Ray Film and Television Institute, Kolkata",
    },
    {
      University: "Whistling Woods International, Mumbai",
    },
    {
      University: "Asian Academy of Film & Television, Noida",
    },
    {
      University: "National School of Drama, New Delhi",
    },
    {
      University: "Xavier Institute of Communication, Mumbai",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Film Production",
    },
    {
      Courses: "B.A. in Film Direction",
    },
    {
      Courses: "B.A. in Theater Arts",
    },
    {
      Courses: "Diploma in Film Making",
    },
    {
      Courses: "M.A. in Film and Television Production",
    },
    {
      Courses: "M.A. in Direction",
    },
    {
      Courses: "M.F.A. in Film Making",
    },
    {
      Courses: "Ph.D. in Film Studies",
    },
    {
      Courses: "Ph.D. in Media Arts",
    },
  ],

  Topcompany: [
    {
      Company: "Yash Raj Films",
    },
    {
      Company: "Eros International",
    },
    {
      Company: "Balaji Telefilms",
    },
    {
      Company: "Zee Entertainment Enterprises",
    },
    {
      Company: "Netflix India",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in film directing, television production, theater direction, and digital media production.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in production management software, video editing tools, and casting software.",
    },
    {
      Section: "Tools Used",
      Detailing: "Final Draft, Adobe Premiere Pro, Movie Magic Budgeting, Trello.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Developing scripts, casting actors, managing budgets, scheduling shoots, and supervising post-production.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Creativity, leadership, problem-solving, time management, and decision-making.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Film Production, Film Direction, Theater Arts, or related fields; continuous training in directing techniques and new media trends.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in film and media production.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major film studios, television networks, theater companies, and digital media production houses.",
    },
  ],
},
{
  id: 29,

  career: "Public Relations Specialists",
  location: "",
  careersection:
    "Public Relations (PR) Specialists are communication professionals who manage the public image of individuals, organizations, or companies. They create and maintain a favorable public image by communicating key messages to target audiences through various media channels. Their expertise in media relations, strategic communication, and crisis management helps build and protect the reputation of their clients.",

  careersection1:
    "As a Public Relations Specialist, your primary responsibility is to cultivate and maintain positive relationships with the public, media, and other stakeholders. You will craft press releases, organize events, and coordinate with journalists to ensure accurate and favorable coverage. Additionally, you will monitor public opinion and respond to inquiries to manage the reputation of your clients.",

  t1: "Media Relations",
  t2: "Press Release Writing",
  t3: "Event Management",
  t4: "Crisis Communication",
  t5: "Content Creation",

  X1: "Media Monitoring Tools",
  X2: "Press Release Distribution Services",
  X3: "Event Planning Software",
  X4: "Social Media Management",
  X5: "Project Management Tools",

  S1: "Communication",
  S2: "Relationship Building",
  S3: "Adaptability",
  S4: "Problem-Solving",
  S5: "Organizational Skills",

  courses:
    "Programs typically include facilities and equipment tailored to support both theoretical and practical aspects of public relations. What you might find here: PR Agencies, Media Rooms, Event Spaces, Classrooms and Lecture Halls, Library Resources, Qualified Faculty, and Workshops on Crisis Management and Media Relations Strategies.",

  college:
    "Several universities in India offer programs and opportunities for aspiring public relations specialists to pursue their education and career goals. Here are some notable universities in India known for their PR and communication programs.",

  company:
    "These companies focus on public relations agencies, corporate communications, and media relations. They often hire public relations specialists for roles such as PR managers, media relations specialists, and corporate communications officers.",

  summary: "",

  Package: [
    {
      Student: "Freshers",
      Package: "3.0 LPA to 6.0 LPA",
    },
    {
      Student:
        "1 Year Experience (Should be domain specific Internship or Job)",
      Package: "6.0 LPA to 10.0 LPA",
    },
    {
      Student: "2+ Years of Experience",
      Package: "Up to 15 LPA",
    },
  ],

  Topcollege: [
    {
      University: "Indian Institute of Mass Communication, New Delhi",
    },
    {
      University: "Symbiosis Institute of Media & Communication, Pune",
    },
    {
      University: "Xavier Institute of Communications, Mumbai",
    },
    {
      University: "Amity School of Communication, Noida",
    },
    {
      University: "Mudra Institute of Communications, Ahmedabad (MICA)",
    },
    {
      University: "SIMC Pune - Symbiosis Institute of Media and Communication",
    },
  ],

  Topcourse: [
    {
      Courses: "B.A. in Public Relations",
    },
    {
      Courses: "B.A. in Corporate Communication",
    },
    {
      Courses: "Diploma in Public Relations",
    },
    {
      Courses: "M.A. in Public Relations",
    },
    {
      Courses: "M.A. in Corporate Communication",
    },
    {
      Courses: "MBA in Public Relations",
    },
    {
      Courses: "Ph.D. in Communication Studies",
    },
    {
      Courses: "Ph.D. in Public Relations",
    },
  ],

  Topcompany: [
    {
      Company: "Edelman India",
    },
    {
      Company: "Genesis BCW",
    },
    {
      Company: "Weber Shandwick",
    },
    {
      Company: "FleishmanHillard",
    },
    {
      Company: "Adfactors PR",
    },
  ],

  Summary: [
    {
      Section: "Career Choices",
      Detailing:
        "Opportunities in media relations, crisis communication, corporate communications, and event management.",
    },
    {
      Section: "Technology",
      Detailing:
        "Proficiency in media monitoring tools, press release distribution services, and social media management.",
    },
    {
      Section: "Tools Used",
      Detailing: "Meltwater, Cision, Hootsuite, Eventbrite.",
    },
    {
      Section: "Detailed Work Activities",
      Detailing:
        "Building media relationships, crafting press releases, managing events, handling crises, and creating compelling content.",
    },
    {
      Section: "Skills (Interpersonal and Domain Specific)",
      Detailing:
        "Communication, relationship building, adaptability, problem-solving, and organizational skills.",
    },
    {
      Section: "Education",
      Detailing:
        "Degree in Public Relations, Corporate Communication, or related fields; continuous training in crisis management and media relations.",
    },
    {
      Section: "College",
      Detailing:
        "Top institutions offering courses in public relations and communication.",
    },
    {
      Section: "Companies Related",
      Detailing:
        "Major PR agencies, corporate communications departments, and media relations firms.",
    },
  ],
},
{
  id: 30,
  career: "Writers and Authors",
  location : "Global",
  careersection : "Writers and Authors are imaginative professionals who create captivating stories and informative content across various platforms. They harness their expertise in language, storytelling, and research to produce engaging narratives that resonate with diverse audiences. Whether crafting compelling fiction, informative articles, or persuasive marketing copy, Writers and Authors play a vital role in shaping how information and ideas are communicated.",
  careersection1: "As a Writer or Author, your primary responsibility is to develop original content that entertains, educates, or persuades readers. This involves conducting thorough research, brainstorming creative ideas, drafting manuscripts, and refining your work through editing and proofreading. Collaboration with editors, publishers, and clients is crucial to ensure your content meets their expectations and aligns with their objectives.",
    t1: "Research",
    t2: "Writing",
    t3: "Editing",
    t4: "Proofreading",
    t5: "Content Development",
    X1: "Microsoft Word",
    X2: "WordPress",
    X3: "Grammarly",
    X4: "JSTOR",
    X5: "Trello",
    S1: "Creativity",
    S2: "Adaptability",
    S3: "Research Skills",
    S4: "Time Management",
    S5: "Communication",
    courses: "Educational programs for Writers and Authors provide comprehensive training in writing techniques, literature analysis, and publishing practices. These programs often include access to modern writing labs, digital libraries, and workshops led by experienced industry professionals.",
    college: "Numerous universities worldwide offer specialized degrees and courses tailored for aspiring Writers and Authors. Notable institutions include Oxford University, Columbia University, and the University of Melbourne, renowned for their robust literary programs.",
    company: "Career opportunities for Writers and Authors span across publishing houses, media conglomerates, advertising agencies, and online platforms. Positions may include Content Creators, Scriptwriters, Copy Editors, and Editorial Assistants, offering diverse avenues to showcase your writing talents.",
    summary: "Writers and Authors excel in creating impactful narratives that entertain, inform, and influence audiences worldwide. They leverage their creativity, research skills, and proficiency in writing tools to deliver compelling content across various media platforms.",
  Package: [
      {
           Student: "Freshers",
           Package: "Starting from $30,000 per annum"
      },
      {
          Student: "1 Year Experience",
          Package: "Up to $50,000 per annum"
      },
      {
           Student: "2+ Years of Experience",
           Package: "Potential to earn over $70,000 per annum"
      }
  ],
   Topcollege: [
      {
           University: "Oxford University"
      },
      {
          University: "Columbia University"
      },
      {
          University: "University of Melbourne"
      }
  ],
  Topcourse: [
      {
           Courses: "Bachelor of Arts in Creative Writing"
      },
      {
           Courses: "Master of Fine Arts in Writing"
      },
      {
           Courses: "Ph.D. in Literature and Writing Studies"
      }
  ],
   Topcompany: [
      {
           Company: "Penguin Random House"
      },
      {
           Company: "Hachette Book Group"
      },
      {
           Company: "Netflix Studios"
      }
  ],
  "Summary": [
      {
           Section: "Career Choices",
           Detailing: "Diverse opportunities in fiction writing, non-fiction writing, journalism, and marketing content creation."
      },
      {
           Section: "Technology",
           Detailing: "Proficiency in essential tools such as Microsoft Word, WordPress, Grammarly, and JSTOR."
      },
      {
           Section: "Skills",
           Detailing: "Critical skills include creativity, adaptability, research abilities, time management, and effective communication."
      },
      {
           Section: "Education",
           Detailing: "Relevant degrees in Creative Writing, Literature, or Journalism, complemented by ongoing professional development."
      },
      {
           Section: "Companies",
           Detailing: "Prominent employers encompass major publishing houses, media corporations, and digital platforms."
      }
  ]
},
{
  id: 31,
  career: "Adult Basic Education, Adult Secondary Education, and English as a Second Language Instructors",
  location: "",
  careersection: "Adult Basic Education (ABE), Adult Secondary Education (ASE), and English as a Second Language (ESL) Instructors are educators who specialize in teaching adults who have varying educational backgrounds and needs. They provide instruction in foundational skills such as reading, writing, mathematics, and English language proficiency. These instructors play a crucial role in helping adults achieve literacy, earn their high school equivalency diplomas, improve language skills, and prepare for further education or employment.",
  careersection1: "As an instructor in ABE, ASE, or ESL, your primary responsibility is to assess students' educational levels, develop personalized learning plans, and deliver instructional lessons that cater to their needs. You will utilize teaching methods that promote adult learning principles, encourage student engagement, and monitor progress through assessments. Additionally, you may collaborate with community organizations, educational institutions, and employers to support adult learners' educational and career goals.",
   t1: "Adult Education Instruction",
   t2: "ESL Teaching",
   t3: "Curriculum Development",
   t4: "Student Assessment",
   t5: "Community Outreach",
   X1: "Learning Management Systems (LMS)",
   X2: "Assessment Tools",
   X3: "Language Teaching Software",
   X4: "Educational Resource Websites",
   X5: "Video Conferencing Tools",
   S1: "Teaching Skills",
   S2: "Patience and Empathy",
   S3: "Adaptability",
   S4: "Communication",
   S5: "Collaboration",
   courses: "Programs for ABE, ASE, and ESL instructors typically include specialized coursework and practical training to effectively teach adult learners. These programs may offer access to resources such as teaching labs, educational software, language labs, classroom spaces, libraries, and workshops focused on adult learning strategies and curriculum design.",
   college: "Several universities and institutions worldwide offer programs and opportunities for aspiring ABE, ASE, and ESL instructors to pursue their education and career goals. Here are some notable institutions known for their adult education and ESL programs.",
   company: "These instructors work in various settings including community colleges, adult education centers, nonprofit organizations, vocational schools, and language institutes. They may hold positions such as adult education teachers, ESL instructors, GED instructors, or literacy program coordinators.",
   summary: "",
   Package: [
      {
          Student: "Freshers",
          Package: "2.5 LPA to 4.5 LPA"
      },
      {
           Student: "1 Year Experience",
           Package: "4.5 LPA to 7.0 LPA"
      },
      {
           Student: "2+ Years of Experience",
           Package: "Up to 10 LPA"
      }
  ],
  Topcollege: [
      {
           University: "University of California, Los Angeles (UCLA), USA"
      },
      {
           University: "University of Oxford, UK"
      },
      {
          University: "University of Toronto, Canada"
      },
      {
          University: "University of Melbourne, Australia"
      }
  ],
   Topcourse: [
      {
           Courses: "M.A. in Adult Education"
      },
      {
           Courses: "M.Ed. in Teaching English to Speakers of Other Languages (TESOL)"
      },
      {
           Courses: "Certificate in Adult Basic Education (ABE)"
      },
      {
           Courses: "Diploma in Adult Secondary Education (ASE)"
      },
      {
           Courses: "Ph.D. in Education with a focus on Adult Learning"
      }
  ],
   Topcompany: [
      {
           Company: "Kaplan International"
      },
      {
           Company: "Berlitz Corporation"
      },
      {
           Company: "EF Education First"
      },
      {
           Company: "LanguageLine Solutions"
      }
  ],
   Summary: [
      {
           Section: "Career Overview",
           Detailing: "Instruction in Adult Basic Education (ABE), Adult Secondary Education (ASE), and English as a Second Language (ESL) for adult learners."
      },
      {
           Section: "Tools and Technologies",
           Detailing: "Use of Learning Management Systems (LMS), assessment tools, language teaching software, educational resource websites, and video conferencing tools."
      },
      {
           Section: "Education and Training",
           Detailing: "Specialized programs offering access to teaching labs, educational software, language labs, and workshops on adult learning strategies."
      },
      {
           Section: "Top Institutions",
           Detailing: "Notable universities worldwide known for their adult education and ESL programs."
      },
      {
           Section: "Companies",
           Detailing: "Employment opportunities in community colleges, adult education centers, language institutes, and vocational schools."
      }
  ]
},
{
   id: 32,
   career: "Secondary School Teachers, Except Special and Career/Technical Education",
   location: "",
   careersection: "Secondary School Teachers, Except Special and Career/Technical Education, are educators who specialize in teaching students in middle school and high school settings. They instruct students in various academic subjects, such as mathematics, science, English, history, and foreign languages, depending on their expertise and the curriculum of the school. These teachers play a vital role in preparing students for higher education and future careers by providing foundational knowledge and fostering critical thinking skills.",
   careersection1: "As a Secondary School Teacher, your primary responsibility is to develop lesson plans, deliver instructional lectures, facilitate class discussions, and assess student progress through tests, projects, and assignments. You will also mentor and guide students, collaborate with colleagues and parents, participate in school events, and adhere to educational standards and school policies.",
   t1: "Curriculum Development",
   t2: "Lesson Planning",
   t3: "Classroom Management",
   t4: "Student Assessment",
   t5: "Extracurricular Activities",
   X1: "Learning Management Systems (LMS)",
   X2: "Student Information Systems (SIS)",
   X3: "Interactive Whiteboards",
   X4: "Online Educational Tools",
   X5: "Collaboration Tools",
   S1: "Teaching Skills",
   S2: "Patience and Empathy",
   S3: "Adaptability",
   S4: "Communication",
   S5: "Leadership",
   courses: "Programs for Secondary School Teachers typically include coursework and practical training in educational theories, teaching methodologies, classroom management, and subject-specific content. These programs may provide access to teaching resources such as classrooms, laboratories, libraries, and educational technology tools.",
   college: "Several universities and institutions worldwide offer programs and opportunities for aspiring Secondary School Teachers to pursue their education and career goals. Here are some notable institutions known for their teacher education programs.",
   company: "Secondary School Teachers work in public and private middle schools and high schools, as well as international schools. They may hold positions such as subject teachers, grade-level teachers, department heads, or curriculum coordinators.",
   summary: "",
   Package: [
      {
           Student: "Freshers",
           Package: "3.0 LPA to 6.0 LPA"
      },
      {
           Student: "1 Year Experience",
           Package: "4.5 LPA to 8.0 LPA"
      },
      {
           Student: "5+ Years of Experience",
           Package: "Up to 15 LPA"
      }
  ],
   Topcollege: [
      {
           University: "Harvard Graduate School of Education, USA"
      },
      {
           University: "University College London (UCL), UK"
      },
      {
           University: "Stanford Graduate School of Education, USA"
      },
      {
          University: "University of Melbourne, Australia"
      }
  ],
   Topcourse: [
      {
           Courses: "Bachelor of Education (B.Ed.)"
      },
      {
           Courses: "Postgraduate Diploma in Education (PGDE)"
      },
      {
           Courses: "Master of Arts in Teaching (MAT)"
      },
      {
           Courses: "Master of Education (M.Ed.)"
      },
      {
          Courses: "Ph.D. in Education"
      }
  ],
  Topcompany: [
      {
           Company: "International School Services (ISS)"
      },
      {
           Company: "GEMS Education"
      },
      {
           Company: "Nord Anglia Education"
      },
      {
           Company: "Taaleem"
      }
  ],
  Summary: [
      {
           Section: "Career Overview",
           Detailing: "Instruction in academic subjects for middle school and high school students."
      },
      {
           Section: "Tools and Technologies",
           Detailing: "Use of Learning Management Systems (LMS), Student Information Systems (SIS), interactive whiteboards, online educational tools, and collaboration tools."
      },
      {
           Section: "Education and Training",
           Detailing: "Programs offering coursework in educational theories, teaching methodologies, classroom management, and subject-specific content."
      },
      {
           Section: "Top Institutions",
           Detailing: "Notable universities worldwide known for their teacher education programs."
      },
      {
           Section: "Companies",
           Detailing: "Employment opportunities in public and private middle schools, high schools, and international schools."
      }
  ]
},
{
   id: 33,
   career: "Advertising Sales Agents",
   location: "",
   careersection: "Advertising Sales Agents are professionals who sell advertising space and time to businesses and individuals. They work in various media platforms such as print, digital, television, radio, and outdoor advertising. These agents play a critical role in generating revenue for media organizations and advertising agencies by identifying potential clients, presenting advertising options, negotiating contracts, and ensuring client satisfaction.",
   careersection1: "As an Advertising Sales Agent, your primary responsibility is to understand client needs, develop advertising proposals, and deliver persuasive sales pitches. You will build and maintain relationships with advertisers, collaborate with creative teams to develop ad campaigns, monitor advertising performance, and provide post-campaign analysis and reporting.",
   t1: "Client Relationship Management",
   t2: "Sales Pitching",
   t3: "Negotiation",
   t4: "Campaign Management",
   t5: "Market Research",
   X1: "CRM Software",
   X2: "Salesforce Automation Tools",
   X3: "Ad Serving Platforms",
   X4: "Market Research Tools",
   X5: "Project Management Software",
   S1: "Sales Skills",
   S2: "Communication",
   S3: "Negotiation",
   S4: "Analytical Thinking",
   S5: "Time Management",
   courses: "Programs for Advertising Sales Agents may include coursework focused on advertising principles, sales techniques, market analysis, and digital media strategies. These programs may offer access to resources such as sales labs, digital marketing platforms, networking events, and internships with advertising agencies or media companies.",
   college: "Several universities and institutions worldwide offer programs and opportunities for aspiring Advertising Sales Agents to pursue their education and career goals. Here are some notable institutions known for their advertising and marketing programs.",
   company: "Advertising Sales Agents work in advertising agencies, media companies, digital marketing firms, newspapers, magazines, television stations, radio stations, and outdoor advertising companies. They may hold positions such as advertising sales executives, media sales representatives, account managers, or digital sales specialists.",
  summary: "",
  Package: [
      {
           Student: "Freshers",
           Package: "3.0 LPA to 6.0 LPA"
      },
      {
           Student: "1 Year Experience",
           Package: "4.5 LPA to 8.0 LPA"
      },
      {
           Student: "5+ Years of Experience",
           Package: "Up to 20 LPA"
      }
  ],
   Topcollege: [
      {
           University: "New York University (NYU), USA"
      },
      {
           University: "London School of Economics and Political Science (LSE), UK"
      },
      {
           University: "University of Sydney, Australia"
      },
      {
           University: "National University of Singapore (NUS), Singapore"
      }
  ],
   Topcourse: [
      {
           Courses: "B.A. in Advertising"
      },
      {
           Courses: "B.Sc. in Marketing"
      },
      {
           Courses: "Diploma in Advertising Sales"
      },
      {
           Courses: "M.A. in Advertising and Marketing"
      },
      {
           Courses: "MBA with a focus on Marketing"
      }
  ],
   Topcompany: [
      {
           Company: "WPP Group"
      },
      {
           Company: "Omnicom Group"
      },
      {
           Company: "Publicis Groupe"
      },
      {
           Company: "Dentsu Group"
      }
  ],
   Summary: [
      {
           Section: "Career Overview",
           Detailing: "Selling advertising space and time across various media platforms."
      },
      {
           Section: "Tools and Technologies",
           Detailing: "Use of CRM software, Salesforce automation tools, ad serving platforms, market research tools, and project management software."
      },
      {
           Section: "Education and Training",
           Detailing: "Programs offering coursework in advertising principles, sales techniques, market analysis, and digital media strategies."
      },
      {
           Section: "Top Institutions",
           Detailing: "Notable universities worldwide known for their advertising and marketing programs."
      },
      {
           Section: "Companies",
           Detailing: "Employment opportunities in advertising agencies, media companies, digital marketing firms, and various media platforms."
      }
  ]
},
{
   id: 34,
   career: "Fundraisers",
   location: "",
   careersection: "Fundraisers are professionals who organize events and campaigns to raise money and other kinds of donations for an organization. They work in various settings such as nonprofit organizations, educational institutions, healthcare facilities, and political campaigns. Fundraisers are crucial for securing the financial support needed to achieve the goals of their organizations.",
   careersection1: "As a Fundraiser, your primary responsibility is to develop fundraising strategies, plan and execute fundraising events, and cultivate relationships with donors. You will identify and approach potential donors, write grant proposals, manage donor databases, and ensure compliance with fundraising regulations. Additionally, you will create promotional materials and utilize various communication channels to engage and retain donors.",
   t1: "Donor Cultivation",
   t2: "Event Planning",
   t3: "Grant Writing",
   t4: "Campaign Management",
   t5: "Public Relations",
   X1: "Donor Management Software",
   X2: "Event Planning Tools",
   X3: "Grant Management Software",
   X4: "Social Media Platforms",
   X5: "Email Marketing Software",
   S1: "Communication Skills",
   S2: "Relationship Building",
   S3: "Organizational Skills",
   S4: "Creativity",
   S5: "Persistence",
   courses: "Programs for Fundraisers typically include coursework in nonprofit management, marketing, communication, and event planning. These programs may provide access to resources such as fundraising labs, donor management software, networking events, and internships with nonprofit organizations or fundraising firms.",
   college: "Several universities and institutions worldwide offer programs and opportunities for aspiring Fundraisers to pursue their education and career goals. Here are some notable institutions known for their nonprofit management and fundraising programs.",
   company: "Fundraisers work in various settings including nonprofit organizations, educational institutions, healthcare facilities, political campaigns, and cultural institutions. They may hold positions such as development officers, donor relations managers, campaign directors, or grant writers.",
   summary: "",
   Package: [
      {
           Student: "Freshers",
           Package: "2.5 LPA to 5.0 LPA"
      },
      {
           Student: "1 Year Experience",
           Package: "4.0 LPA to 7.5 LPA"
      },
      {
           Student: "5+ Years of Experience",
           Package: "Up to 15 LPA"
      }
  ],
   Topcollege: [
      {
           University: "Indiana University Lilly Family School of Philanthropy, USA"
      },
      {
           University: "New York University (NYU), USA"
      },
      {
           University: "University of Kent, UK"
      },
      {
           University: "The University of Queensland, Australia"
      }
  ],
   Topcourse: [
      {
           Courses: "B.A. in Nonprofit Management"
      },
      {
           Courses: "B.A. in Public Relations"
      },
      {
           Courses: "Certificate in Fundraising"
      },
      {
          Courses: "M.A. in Philanthropic Studies"
      },
      {
          Courses: "MBA with a focus on Nonprofit Management"
      }
  ],
   Topcompany: [
      {
           Company: "Save the Children"
      },
      {
           Company: "Greenpeace"
      },
      {
           Company: "World Wildlife Fund (WWF)"
      },
      {
          Company: "American Red Cross"
      }
  ],
   Summary: [
      {
           Section: "Career Overview",
           Detailing: "Organizing events and campaigns to raise money and other donations for an organization."
      },
      {
           Section: "Tools and Technologies",
           Detailing: "Use of donor management software, event planning tools, grant management software, social media platforms, and email marketing software."
      },
      {
           Section: "Education and Training",
           Detailing: "Programs offering coursework in nonprofit management, marketing, communication, and event planning."
      },
      {
           Section: "Top Institutions",
           Detailing: "Notable universities worldwide known for their nonprofit management and fundraising programs."
      },
      {
           Section: "Companies",
           Detailing: "Employment opportunities in nonprofit organizations, educational institutions, healthcare facilities, political campaigns, and cultural institutions."
      }
  ]
},
{
   id: 35,
   career: "Sustainability Specialists",
   location: "",
   careersection: "Sustainability Specialists are professionals who focus on promoting environmental responsibility and sustainable practices within organizations. They develop, implement, and monitor sustainability strategies to reduce the environmental impact of an organization's operations. Their work is crucial in helping companies achieve their sustainability goals and comply with environmental regulations.",
   careersection1: "As a Sustainability Specialist, your primary responsibility is to assess the environmental impact of an organization's activities and develop strategies to improve sustainability. You will conduct environmental audits, analyze data, and create reports on sustainability metrics. Additionally, you will collaborate with various departments to implement sustainable practices, educate employees on sustainability initiatives, and stay updated on environmental laws and regulations.",
   t1: "Environmental Auditing",
   t2: "Data Analysis",
   t3: "Sustainability Reporting",
   t4: "Policy Development",
   t5: "Employee Training",
   X1: "Environmental Management Software",
   X2: "Data Analysis Tools",
   X3: "Sustainability Reporting Tools",
   X4: "Project Management Software",
   X5: "Compliance Tracking Systems",
   S1: "Analytical Skills",
   S2: "Communication",
   S3: "Problem-Solving",
   S4: "Attention to Detail",
   S5: "Leadership",
   courses: "Programs for Sustainability Specialists typically include coursework in environmental science, sustainability management, data analysis, and policy development. These programs may provide access to resources such as environmental labs, data analysis software, sustainability reporting tools, and internships with organizations focused on sustainability.",
   college: "Several universities and institutions worldwide offer programs and opportunities for aspiring Sustainability Specialists to pursue their education and career goals. Here are some notable institutions known for their sustainability and environmental science programs.",
   company: "Sustainability Specialists work in various settings including corporations, government agencies, nonprofit organizations, and consulting firms. They may hold positions such as sustainability coordinators, environmental consultants, corporate social responsibility (CSR) managers, or sustainability analysts.",
   summary: "",
   Package: [
      {
           Student: "Freshers",
           Package: "3.5 LPA to 6.0 LPA"
      },
      {
           Student: "1 Year Experience",
           Package: "5.0 LPA to 9.0 LPA"
      },
      {
           Student: "5+ Years of Experience",
           Package: "Up to 20 LPA"
      }
  ],
  Topcollege: [
      {
           University: "Yale School of the Environment, USA"
      },
      {
          University: "University of Cambridge, UK"
      },
      {
          University: "University of California, Berkeley, USA"
      },
      {
          University: "Wageningen University & Research, Netherlands"
      }
  ],
   Topcourse: [
      {
           Courses: "B.Sc. in Environmental Science"
      },
      {
          Courses: "B.A. in Sustainability Studies"
      },
      {
          Courses: "M.Sc. in Sustainability Management"
      },
      {
          Courses: "M.A. in Environmental Policy"
      },
      {
          Courses: "Ph.D. in Environmental Science and Policy"
      }
  ],
   Topcompany: [
      {
          Company: "Schneider Electric"
      },
      {
          Company: "Unilever"
      },
      {
          Company: "Patagonia"
      },
      {
          Company: "Tesla"
      }
  ],
   Summary: [
      {
           Section: "Career Overview",
           Detailing: "Promoting environmental responsibility and sustainable practices within organizations."
      },
      {
           Section: "Tools and Technologies",
           Detailing: "Use of environmental management software, data analysis tools, sustainability reporting tools, project management software, and compliance tracking systems."
      },
      {
           Section: "Education and Training",
           Detailing: "Programs offering coursework in environmental science, sustainability management, data analysis, and policy development."
      },
      {
           Section: "Top Institutions",
           Detailing: "Notable universities worldwide known for their sustainability and environmental science programs."
      },
      {
           Section: "Companies",
           Detailing: "Employment opportunities in corporations, government agencies, nonprofit organizations, and consulting firms."
      }
  ]
},
{
   id: 36,
   career: "Recreation Workers",
   location: "",
   careersection: "Recreation Workers are professionals who plan, organize, and lead recreational activities for groups and individuals in various settings such as community centers, parks, camps, and senior centers. They aim to enhance the well-being of participants through engaging and enjoyable activities, promoting physical fitness, social interaction, and personal growth.",
   careersection1: "As a Recreation Worker, your primary responsibility is to design and implement recreation programs tailored to the interests and needs of the community. You will coordinate activities such as sports, arts and crafts, music, and outdoor adventures. Additionally, you will ensure the safety of participants, maintain recreation equipment, and collaborate with other staff and volunteers to deliver high-quality programs.",
   t1: "Program Planning",
   t2: "Activity Coordination",
   t3: "Participant Supervision",
   t4: "Equipment Maintenance",
   t5: "Community Outreach",
   X1: "Scheduling Software",
   X2: "Registration Systems",
   X3: "First Aid Kits",
   X4: "Sports Equipment",
   X5: "Communication Tools",
   S1: "Leadership",
   S2: "Communication",
   S3: "Creativity",
   S4: "Organizational Skills",
   S5: "Interpersonal Skills",
   courses: "Programs for Recreation Workers typically include coursework in recreation management, physical education, event planning, and leadership. These programs may offer access to resources such as recreation facilities, sports equipment, event planning software, and internships with community organizations or recreation centers.",
   college: "Several universities and institutions worldwide offer programs and opportunities for aspiring Recreation Workers to pursue their education and career goals. Here are some notable institutions known for their recreation management and physical education programs.",
   company: "Recreation Workers are employed in various settings including community centers, parks and recreation departments, schools, camps, and senior centers. They may hold positions such as recreation coordinators, activity directors, camp counselors, or fitness instructors.",
   summary: "",
   Package: [
      {
           Student: "Freshers",
           Package: "2.5 LPA to 4.5 LPA"
      },
      {
           Student: "1 Year Experience",
           Package: "3.5 LPA to 6.5 LPA"
      },
      {
           Student: "5+ Years of Experience",
           Package: "Up to 10 LPA"
      }
  ],
   Topcollege: [
      {
           University: "California State University, Long Beach, USA"
      },
      {
          University: "University of Waterloo, Canada"
      },
      {
          University: "Victoria University, Australia"
      },
      {
          University: "Loughborough University, UK"
      }
  ],
   Topcourse: [
      {
           Courses: "B.Sc. in Recreation Management"
      },
      {
           Courses: "B.A. in Physical Education"
      },
      {
          Courses: "Diploma in Recreation and Leisure Services"
      },
      {
          Courses: "M.Sc. in Sports Management"
      },
      {
          Courses: "M.A. in Event Management"
      }
  ],
   Topcompany: [
      {
           Company: "YMCA"
      },
      {
           Company: "Boys & Girls Clubs of America"
      },
      {
          Company: "Recreation.gov"
      },
      {
          Company: "Sport and Recreation Alliance"
      }
  ],
   Summary: [
      {
           Section: "Career Overview",
           Detailing: "Planning, organizing, and leading recreational activities to enhance the well-being of participants."
      },
      {
           Section: "Tools and Technologies",
           Detailing: "Use of scheduling software, registration systems, first aid kits, sports equipment, and communication tools."
      },
      {
           Section: "Education and Training",
           Detailing: "Programs offering coursework in recreation management, physical education, event planning, and leadership."
      },
      {
           Section: "Top Institutions",
           Detailing: "Notable universities worldwide known for their recreation management and physical education programs."
      },
      {
           Section: "Companies",
           Detailing: "Employment opportunities in community centers, parks and recreation departments, schools, camps, and senior centers."
      }
  ]
},





























 
  
];

export default career_details;
