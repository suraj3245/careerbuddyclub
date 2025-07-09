import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBlogDataType } from "@/types/blog-type";

const BlogCard = ({ blog }: { blog: IBlogDataType }) => {
  const { id, img_full, date, featured, tags, title, desc, img } = blog || {};

  return (
    <div
      className="card shadow-lg border-0 position-relative h-100"
      style={{
        width: "100%",
        maxWidth: "22rem",
        overflow: "hidden",
        background: "#fff",
      }}
    >
      <div className="position-relative" style={{ height: "160px", background: "#f5f5f5" }}>
        <Image
          src={img}
          alt={title}
          fill
          className="card-img-top object-fit-cover"
          style={{
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            transition: "transform 0.3s",
          }}
        />
        {featured && (
          <span
            className="badge bg-warning text-dark position-absolute"
            style={{
              top: 12,
              left: 12,
              fontWeight: 600,
              fontSize: "0.9rem",
            }}
          >
            ★ Featured
          </span>
        )}
      </div>

      <div className="card-body d-flex flex-column p-3">
        <div
          className="d-flex align-items-center mb-2"
          style={{ fontSize: "0.85rem", color: "#888" }}
        >
          <span className="text-primary">
            {new Date(date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
        </div>

        <h5
          className="card-title fw-bold mb-2 text-truncate"
          style={{ fontSize: "1.15rem", lineHeight: "1.3em", maxHeight: "2.6em", overflow: "hidden" }}
        >
          {title}
        </h5>

        <p
          className="card-text text-muted mb-3"
          style={{
            fontSize: "0.95rem",
            lineHeight: "1.4em",
            maxHeight: "4.2em",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {desc}
        </p>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {tags?.slice(0, 3).map((tag, idx) => (
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
            href={`/college-blogs/${blog.id}`}
            className="text-primary fw-medium text-decoration-none d-flex align-items-center gap-1"
            style={{
              fontSize: "0.95rem",
              transition: "color 0.2s",
            }}
          >
            Read More <span style={{ fontSize: "1.2em" }}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
