import { StaticImageData } from "next/image";
import img_1 from "@/assets/images/assets/img_31.jpg";
import img_2 from "@/assets/images/assets/img_32.jpg";
import img_3 from "@/assets/images/assets/img_33.jpg";

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
    designation: "Chief Executive Officer",
    description: "Come with us on success journey",
  },
  {
    id: 2,
    img: img_2,
    name: "Tanvir Shah",
    designation: "Chief Operating Officer",
    description: "Come with us on success journey",
  },
  {
    id: 3,
    img: img_3,
    name: "Chris Dionne",
    designation: "Chief Marketing Officer",
    description: "Come with us on success journey",
  },
];

export default expert_data_two;
