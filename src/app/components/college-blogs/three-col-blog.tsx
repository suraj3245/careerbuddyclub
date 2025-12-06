"use client";
import React, { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import blog_data1 from "@/data/college-blog1";
import school_data from "@/data/school-blog";
import { IBlogDataType } from "@/types/blog-type";

// Type for mode prop, can be 'schools' or 'campus'
type BlogSectionMode = "schools" | "campus";

type Breakpoint = "mobile" | "tablet" | "desktop";


const ThreeColumnBlogSection: React.FC<{ mode: BlogSectionMode }> = ({ mode }) => {
  
  const dataSource = mode === "schools" ? school_data : blog_data1;
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("desktop");

  
  const currentBlogs = [...dataSource].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBreakpoint("mobile");
      } else if (window.innerWidth < 1200) {
        setBreakpoint("tablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    // Set initial breakpoint on component mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="blog-section" className="py-5 bg-white">
      <div className="container mb-5">
        <h2 className="fw-bold display-5 mb-4 ">
          {mode === "schools" ? " Featured Blogs for Schools" : " Featured Blogs for Colleges"}
        </h2>
        <p className="lead text-muted mb-1">
          {mode === "schools"
            ? "Explore top schools and trending topics with insights tailored to you."
            : "Explore top colleges and trending courses with insights tailored to you."}
        </p>
        <hr
          className="mb-1"
          style={{ borderBottom: "2px solid #e0e0e0" }}
        />
      </div>

      <div
        className="container"
        style={{
          marginTop: "2rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        {dataSource.length === 0 ? (
          <div className="text-center py-5 text-muted">
            <p>No blog posts found.</p>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                breakpoint === "desktop"
                  ? "repeat(3, 1fr)"
                  : breakpoint === "tablet"
                  ? "repeat(2, 1fr)"
                  : "1fr",
              gridAutoRows: "auto",
              gap: "1.5rem",
            }}
          >
            {currentBlogs.map((blog: IBlogDataType, index: number) => {
              let gridStyles = {};
              let isLarge = false;

              isLarge = false;
              gridStyles = { gridColumn: "span 1", gridRow: "span 1" };

              
              
              
             
              const separatorStyles = {};

              
              const cardHeight = {};
              const imageHeight = "200px";

              return (
                <Fragment key={blog.id}>
                  <div
                    className="card position-relative"
                    style={{
                      ...gridStyles,
                      ...cardHeight,
                      ...separatorStyles, 
                      overflow: "hidden",
                      background: "#fff",
                      display: "flex",
                      flexDirection: "column",
                      border:"1px solid #e0e0e0",
                      }}
                  >
                    <div
                      className="position-relative"
                      style={{
                        height: imageHeight,
                        background: "#f5f5f5",
                        border:"none",
                      }}
                    >
                      <Image
                        src={isLarge ? blog.img_full || blog.img : blog.img}
                        alt={blog.title}
                        fill
                        className="card-img-top"
                        style={{ objectFit: "cover" }} 
                      />
                    </div>
                    <div
                      className="card-body d-flex flex-column p-3"
                      style={{ flex: 1 }} 
                    >
                      <div
                        className="d-flex align-items-center mb-2"
                        style={{ fontSize: "0.85rem", color: "#888" }}
                      >
                        <span className="text-primary">
                          {new Date(blog.date).toLocaleDateString(undefined, {
                            year:"numeric",
                            month:"short",
                            day:"numeric",
                          })}
                        </span>
                      </div>
                      <h5
                        className="card-title fw-bold mb-2"
                        style={{
                          fontSize: "1.1rem",
                          lineHeight: "1.4em",
                          overflow: "hidden", 
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        {blog.title}
                      </h5>
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {blog.tags?.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="badge"
                            style={{
                              background: "#e0e7ff",
                              color: "#3730a3",
                              fontWeight: 500,
                              fontSize: "0.8rem",
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto d-flex justify-content-end">
                        <Link
                          href={
                            mode === "schools"
                              ? `/school-blog/${blog.id}`
                              : `/college-blogs/${blog.id}`
                          }
                          className="text-primary fw-medium text-decoration-none d-flex align-items-center gap-1"
                        >
                          Read More{" "}
                          <span style={{ fontSize: "1.2em" }}>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ThreeColumnBlogSection;