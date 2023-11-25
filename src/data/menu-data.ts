import { IMenuData } from "@/types/menu-data-type";

const menu_data: IMenuData[] = [
  {
    id: 1,
    link: "/",
    title: "Home",
  },
  {
    id: 2,
    link: "/job-list-v1",
    title: "Job",
  },
  {
    id: 3,
    link: "/schools",
    title: "Schools",
  },
  {
    id: 4,
    link: "/campus",
    title: "Campus",
  },
  {
    id: 5,
    link: "/addmission",
    title: "Admission",
  },
  {
    id: 6,
    link: "/corporate",
    title: "Corporate",
  },
  // {
  //   id: 5,
  //   link: "/dashboard/employer-dashboard",
  //   title: "Dashboard",
  //   sub_menus: [
  //     { link: "/dashboard/candidate-dashboard", title: "Candidate Dashboard" },
  //     { link: "/dashboard/employ-dashboard", title: "College Dashboard" },
  //   ],
  // },
  {
    id: 6,
    link: "/about-us",
    title: "About us",
  },
];

export default menu_data;
