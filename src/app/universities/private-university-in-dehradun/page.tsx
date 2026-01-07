"use client";
import Link from "next/link";
import Wrapper from "@/layouts/wrapper";
import private_university_data from "@/data/university-data";

export default function PrivateUniversityDehradunPage() {
  return (
    <Wrapper>
      {/* ===== Internal Global CSS ===== */}
      <style jsx global>{`
        .university-row {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 28px 32px;
          background: #ffffff;
          border: 1px solid #e9edf3;
          border-radius: 14px;
          transition:
            background 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.25s ease;
          height: 100%;
        }

        .university-row::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 4px;
          background: linear-gradient(180deg, #0d6efd, #6610f2);
          border-radius: 14px 0 0 14px;
          opacity: 0;
          transition: opacity 0.25s ease;
        }

        .university-row:hover::before {
          opacity: 1;
        }

        .university-row:hover {
          background: #f8faff;
          box-shadow: 0 14px 36px rgba(13, 110, 253, 0.14);
          transform: translateY(-3px);
        }

        .university-info {
          max-width: 72%;
        }

        .university-badge {
          display: inline-block;
          background: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 14px;
          border-radius: 20px;
          margin-bottom: 10px;
        }

        .university-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 6px;
          line-height: 1.4;
        }

        .university-location {
          font-size: 14px;
          color: #6c757d;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ===== BUTTON (NO COLOR CHANGE ON HOVER) ===== */
        .university-action {
          background: #f1f5ff;
          color: #0d6efd;
          padding: 10px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          transition: transform 0.25s ease;
        }

        /* ONLY slight movement, no color change */
        .university-row:hover .university-action {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .university-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .university-info {
            max-width: 100%;
          }

          .university-action {
            align-self: flex-start;
          }
        }
      `}</style>

      <div className="main-page-wrapper">
        <div className="container py-5" style={{ marginTop: "70px" }}>

          {/* ===== Header ===== */}
          <div className="mb-4">
            <h1 className="fw-bold">Private Universities in Dehradun</h1>
            <p className="text-muted mt-2">
              Explore UGC-approved private universities in Dehradun. Compare
              courses, fees, admission process, and placement opportunities to
              choose the right university for your future.
            </p>
          </div>

          {/* ===== 3 Cards Per Row ===== */}
          <div className="row g-4">
            {private_university_data.map((uni) => (
              <div key={uni.slug} className="col-lg-4 col-md-6 col-sm-12">
                <Link
                  href={`/universities/${uni.slug}`}
                  className="text-decoration-none text-dark"
                >
                  <div className="university-row">
                    <div className="university-info">
                      <span className="university-badge">
                        Private University
                      </span>

                      <div className="university-name">
                        {uni.name}
                      </div>

                      <div className="university-location">
                        <i className="bi bi-geo-alt"></i>
                        {uni.location}
                      </div>
                    </div>

                    <div className="university-action">
                      View Details →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
