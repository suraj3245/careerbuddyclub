import { StaticImageData } from "next/image";

export interface IBlogDataType {
  id: string | number;
  img: string | StaticImageData;
  grid_img: string | StaticImageData;
  img_full: string | StaticImageData;
  tags: string[] ;
  title: string;
  author: string;
  date: string;
  featured?: boolean;
  desc?: string;
  descComponent?: React.ComponentType;
  metaDescription?: string;
  excerpt?: string;
  blog?: string;
  content?: string;
  category?: string;
  image?: string | StaticImageData;
  table?: {
    heading: string;
    rows: {
      label: string;
      value: string;
    }[];
  };
}
