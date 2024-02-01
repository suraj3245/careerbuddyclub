import { StaticImageData } from 'next/image';
import img_4 from '@/assets/images/assets/img_99.png';
import img_5 from '@/assets/images/assets/img_100.png';
import img_6 from '@/assets/images/assets/img_101.png';
import img_7 from '@/assets/images/assets/img_103.png';
// expert data type 
type IExpertType = {
  id: number;
  img: StaticImageData;
  name: string;
  designation: string;
  description: string;
}

const expert_data:IExpertType[] = [
 
  {
    id:2,
    img:img_7,
    name:'Sunil Kumar Malik',
    designation:'Vice President (VP)-Campus Relations',
    description: "",
  },
  {
    id:1,
    img:img_4,
    name:'Anupam Singh',
    designation:'Vice President (VP)-Marketing',
    description: ".",
  },
  {
    id:3,
    img:img_5,
    name:'Ashish Jain',
    designation:'Vice President (VP)-Corporate Relations',
    description: " ",
  },
 /* {
    id:4,
    img:img_6,
    name:'Ganesh Khanna',
    designation:'Vice President (VP)- Career Centres',
    description: "Ex.Sr.Trainer in T&P Deptt. SRM Uni., Sonipat, Ex- Sr.Manager/Dy.Dir(Training) at ITTM, MTNL, Delhi (Govt.of India).",
  },*/
 
]

export default expert_data;