import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlogDataType } from "@/types/blog-type";

const BlogItem = ({ item }: { item: IBlogDataType }) => {
  return (
    <article className="blog-meta-one mt-35 wow fadeInUp">
      <figure className="post-img m0">
        <div className="w-100 d-block">
          <Image
            src={item.img}
            alt="blog-img"
            className="lazy-img blog-img w-100 tran4s"
          />
        </div>
      </figure>
      <div className="post-data mt-30 lg-mt-20">
        <ul className="tags style-none d-flex">
          {item.tags.map((t, i) => (
            <li key={i}>
              <div>{t}</div>
            </li>
          ))}
        </ul>
        <div className="mt-10 mb-10">
          <h4 className="tran3s blog-title">{item.title}</h4>
        </div>
        <div className="author">
          <div className="text-dark fw-500">{item.author}</div>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
