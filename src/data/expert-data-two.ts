import { StaticImageData } from "next/image";
import img_1 from "@/assets/images/assets/img_96.png";
import img_2 from "@/assets/images/assets/img_98.jpg";
import img_3 from "@/assets/images/assets/img_97.png";

// expert data type
type IExpertType = {
  id: number;
  img: StaticImageData;
  name: string;
  designation: string;
  description: string;
};

const expert_data_two: IExpertType[] = [
  {
    id: 1,
    img: img_1,
    name: "Saithjeet Arora",
    designation: "Founder and Chief Executive Officer (CEO)",
    description: "",
  },
  {
    id: 2,
    img: img_2,
    name: "Tanvir Shah",
    designation: "Founder and Chief Strategy Officer (CSO)",
    description: "",
  },
  {
    id: 3,
    img: img_3,
    name: "Anukriti Batra Arora",
    designation: "Chief Operating Officer (COO)",
    description: "",
  },
];

export default expert_data_two;
