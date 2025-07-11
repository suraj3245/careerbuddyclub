import React from "react";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";
import CompanyBreadcrumb from "../../components/common/common-breadcrumb";
import FooterOne from "@/layouts/footers/footer-one";
import CollegeBlogDetailsArea from "@/app/components/college-blogs/blog-details/index";
import blog_data1 from "@/data/college-blog1";

// ✅ Dynamic Metadata (includes meta description + canonical)
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const blog = blog_data1.find((b) => b.id === params.id);

  if (!blog) {
    return {
      title: "Blog Not Found | College Blog",
      description: "Oops! The blog you’re looking for doesn’t exist. Explore other great reads on Career Buddy Club.",
      robots: "noindex",
    };
  }

  const canonicalUrl = `https://careerbuddyclub.com/college-blogs/${params.id}`;
  const metaDescription =
    blog.metaDescription ||
    blog.excerpt?.slice(0, 150) ||
    "Get expert insights into top colleges, courses, and careers.";

  return {
    title: `${blog.title} | Career Buddy Club`,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: blog.title,
      description: metaDescription,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: metaDescription,
    },
  };
}

// ✅ Page Component
const BlogDetailsDynamicPage = ({ params }: { params: { id: string } }) => {
  const blog = blog_data1.find((b) => b.id === params.id);

  if (!blog) {
    return (
      <Wrapper>
        <div className="main-page-wrapper py-5 text-center">
          <h2>Blog Not Found 😓</h2>
          <p>We couldn't find the blog you're looking for.</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <CompanyBreadcrumb
          title="Insights"
          subtitle="Read our blog from top talents"
        />
        <CollegeBlogDetailsArea item={blog} />
        <FooterOne />
      </div>
    </Wrapper>
  );
};

export default BlogDetailsDynamicPage;
