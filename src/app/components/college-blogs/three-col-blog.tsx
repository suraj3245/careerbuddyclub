"use client";
import React, { useState } from "react";
import BlogCard from "@/app/components/college-blogs/blog-card";
import blog_data1 from "@/data/college-blog1";
import school_data from "@/data/school-blog";

// Type for mode prop, can be 'schools' or 'campus'
type BlogSectionMode = "schools" | "campus";

// If you want to use route/query param, you can remove the prop
const ITEMS_PER_PAGE = 9;

// Accept mode as a prop
const ThreeColumnBlogSection: React.FC<{ mode: BlogSectionMode }> = ({ mode }) => {
  // Select data source based on mode
  const dataSource = mode === "schools" ? school_data : blog_data1;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dataSource.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentBlogs = dataSource.slice(startIndex, endIndex);

  // Scroll to top of section on page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const section = document.getElementById("blog-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blog-section" className="py-5 bg-white">
      <div className="container mb-5">
        <h2 className="fw-bold display-5 mb-4 ">
          {mode === "schools" ? "🏫 Featured Blogs for Schools" : "📚 Featured Blogs for Colleges"}
        </h2>
        <p className="lead text-muted">
          {mode === "schools"
            ? "Explore top schools and trending topics with insights tailored to you."
            : "Explore top colleges and trending courses with insights tailored to you."}
        </p>
        <hr
          className="mb-10"
          style={{ borderBottom: "3px solid black", borderWidth: "3px", borderStyle: "solid" }}
        />
      </div>

      <div className="container" style={{ marginTop: "2rem" }}>
        {currentBlogs.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>No blog posts found.</p>
          </div>
        ) : (
          <div className="row justify-content-start g-4">
            {currentBlogs.map((item) => (
              <div
                key={item.id}
                className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center mb-4"
              >
                <BlogCard blog={item} type={mode}/>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div
          className="d-flex justify-content-center align-items-center gap-5 flex-wrap pt-5"
          style={{ marginTop: "5rem" }}
        >
          <button
            className="btn btn-outline-secondary rounded-pill px-4"
            disabled={currentPage === 1}
            aria-label="Previous page"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>

          {/* Page number buttons */}
          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
            <button
              key={page}
              className={`btn rounded-pill px-3 mx-1 ${
                page === currentPage ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => handlePageChange(page)}
              aria-label={`Go to page ${page}`}
              disabled={page === currentPage}
              style={{ minWidth: "40px" }}
            >
              {page}
            </button>
          ))}

          <button
            className="btn btn-outline-secondary rounded-pill px-4"
            disabled={currentPage === totalPages}
            aria-label="Next page"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnBlogSection;