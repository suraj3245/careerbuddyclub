"use client";
import React, { useState } from "react";
import blog_data from "@/data/blog-data";
import blog_data1 from "@/data/blog-data1";
import FullWidthItem from "./full-width-item";

const itemsPerPage = 8; // Adjust based on your preference

const BlogFullWidthArea = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = blog_data1.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = blog_data1.slice(startIndex, endIndex);

  return (
    <section className="blog-section bg-color pt-100 lg-pt-80 pb-120 lg-pb-80">
      <div className="container">
        <div className="row gx-xl-5">
          {currentItems.map((item) => (
            <div key={item.id} className="col-md-6">
              <FullWidthItem blog={item} />
            </div>
          ))}
        </div>
        <div
          className="pagination"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {currentPage > 1 && (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="btn-five"
              style={{ margin: "0 10px" }}
            >
              Previous
            </button>
          )}

          {currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className="btn-five"
              style={{ margin: "0 10px" }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogFullWidthArea;
