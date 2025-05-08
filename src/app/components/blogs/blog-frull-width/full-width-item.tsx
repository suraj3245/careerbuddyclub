import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlogDataType } from "@/types/blog-type";

const FullWidthItem = ({ blog }: { blog: IBlogDataType }) => {
  const { id, img_full, date, featured, tags, title } = blog || {};

  return (
    <article className="blog-meta-two box-layout mb-50 lg-mb-30">
      <figure className="post-img m0">
        <Image
          src={img_full!}
          alt="blog-img"
          className="lazy-img w-100 tran4s"
        />
        <span className="tags fw-500">{tags[0]}</span>
      </figure>
      <div className="post-data mt-35">
        <div className="date">
          {featured && <span className="fw-500 text-dark">Featured - </span>}
          <span>{date}</span>
        </div>
        <h4 className="tran3s blog-title">{`${title.substring(0, 30)}...`}</h4>

        <Link
          href={id === 7 ? "/blog-v4" : `/blog-details/${id}`}
          className="continue-btn tran3s d-flex align-items-center"
        >
          <span className="fw-500 me-2">Continue Reading</span>
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default FullWidthItem;
