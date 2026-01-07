import Link from "next/link";
import { Metadata } from "next";
import Wrapper from "@/layouts/wrapper";

export const metadata: Metadata = {
  title: "Universities in India | Private, Government & State Universities",
  description:
    "Explore UGC-approved universities in India including private, government, state and deemed universities. Compare courses, fees, admissions and placements.",
};

export default function UniversitiesPage() {
  return (
    <Wrapper>
      <div className="main-page-wrapper">
        <section className="container py-5" style={{ marginTop: "70px" }}>

          {/* Page Heading */}
          <h1 className="mb-3">Universities in India</h1>

          {/* Intro */}
          <p className="text-muted mb-4">
            India has a wide range of universities offering courses in
            engineering, medical, management, arts, science, commerce, and many
            other fields. Choosing the right university is an important step in
            building a successful career.
          </p>

          <p className="text-muted mb-4">
            On Career Buddy Club, you can explore UGC-approved private,
            government, state, and deemed universities across India. Compare
            courses, fees, admission process, and placement opportunities to
            make an informed decision.
          </p>

          {/* Categories */}
          <div className="row g-4 my-4">
            <CategoryCard
              title="Private Universities"
              desc="Private universities focus on industry-oriented education, modern infrastructure, and a wide range of professional and skill-based courses."
              link="/universities/private-university-in-dehradun"
            />

            <CategoryCard
              title="Government Universities"
              desc="Government universities are known for academic excellence, experienced faculty, affordable fees, and degrees recognized across India."
              link="/universities/government"
            />
          </div>

          <h2 className="h4 mt-5 mb-3">
            Need Help Choosing the Right University?
          </h2>
          <p className="text-muted">
            If you are confused about course selection, university type, or
            admission process, our experts are here to help. Career Buddy Club
            provides free counselling to guide you towards the best university
            based on your interests, budget, and career goals.
          </p>

          {/* Trust Line */}
          <p className="text-muted mt-4 small">
            ✔ UGC Recognized Universities &nbsp;|&nbsp; ✔ Student-Friendly
            Guidance &nbsp;|&nbsp; ✔ Free Expert Counselling
          </p>

        </section>
      </div>
    </Wrapper>
  );
}

/* ================= Category Card ================= */

function CategoryCard({ title, desc, link }: any) {
  return (
    <div className="col-md-6 col-lg-3">
      <Link href={link} className="text-decoration-none text-dark">
        <div className="card h-100 shadow-sm hover-shadow">
          <div className="card-body">
            <h3 className="h5 mb-2">{title}</h3>
            <p className="text-muted mb-3">{desc}</p>
            <span className="text-primary fw-semibold">
              View Universities →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
