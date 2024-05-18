import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ICompany } from "@/types/company-type";

const CompanyGridItem = ({ item }: { item: ICompany }) => {
  return (
    <div
      className={`company-grid-layout ${item.isFav ? "favourite" : ""} mb-30`}
    >
      <Link
        href={`/company-details/${item.id}`}
        className="company-logo me-auto ms-auto rounded-circle"
      >
        <Image src={item.img} alt="image" className="lazy-img rounded-circle" />
      </Link>
      <h5 className="text-center">
        <Link
          href={`/company-details/${item.id}`}
          className="company-name tran3s"
        >
          {item.name}
        </Link>
      </h5>
      <p className="text-center mb-auto">{item.location}</p>
    </div>
  );
};

export default CompanyGridItem;
