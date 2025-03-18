import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlogDataType } from "@/types/blog-type";

const BlogItem = ({ item }: { item: IBlogDataType }) => {
  return (
    <article className="relative overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg">
      <Image
        src={item.img}
        alt={item.title}
        width={500}
        height={200}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-4 sm:p-6">
          <time dateTime={item.date} className="block text-xs text-white/90">
            {item.date}
          </time>

          <Link href="#">
            <h1 className="mt-0.5 text-lg font-weight-bold tracking-wider" style={{ color: "#05A9C7", letterSpacing: "2px"}}>{item.title}</h1>
          </Link>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
            {item.author}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
