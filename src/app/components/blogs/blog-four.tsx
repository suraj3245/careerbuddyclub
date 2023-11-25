import React from "react";
import blog_data from "@/data/blog-data";
import BlogItemFour from "./blog-item/blog-item-4";
import Link from "next/link";

const BlogFour = () => {
  const blog_items = blog_data.filter((b) => b.blog === "blog-two");
  return (
    <section className="blog-section-one mt-160 xl-mt-150 lg-mt-100">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-7">
              <div className="title-one mb-30 lg-mb-10">
                <h2
                  className="main-font color-blue wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  Benefits with Us:
                </h2>
              </div>
            </div>
          </div>

          <div className="row gx-xxl-5">
            {blog_items.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <BlogItemFour blog={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFour;
