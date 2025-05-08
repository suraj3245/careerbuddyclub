import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlogDataType } from "@/types/blog-type";

const BlogItem = ({ item }: { item: IBlogDataType }) => {
  return (
    <article className="relative overflow-hidden rounded-xl transition hover:shadow-lg text-center" style={{'borderRadius': '0.8rem', 'boxShadow': '3px 6px 11px -8px rgba(0,0,0,0.75),;'}}>
      <Image
        src={item.img}
        alt={item.title}
        width={500}
        height={250}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
        <div className="p-0 sm:p-4">
          <Link href="#" className="" style={{padding:"20px 13px 25px !important", textAlign:'initial'}}>
            <h1 className="text-lg font-weight-bold tracking-wider" style={{ color: "#05A9C7", letterSpacing: "2px",}}>{item.title}</h1>
          </Link>
          <time dateTime={item.date} className="block text-xs text-white/90" style={{ fontWeight:'600'}}>
            {item.date}
          </time>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95" style={{ fontWeight:'600'}}>
            {item.author}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogItem;
