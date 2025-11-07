"use client";
import React, { useEffect, useState, useTransition } from "react";
import ShortSelect from "../common/short-select";
import CompanyPagination from "./company-pagination";

const CompanyV1Area = ({ style_2 = false }: { style_2?: boolean }) => {
  const [viewType, setViewType] = useState<string>(style_2 ? "list" : "grid");
  const [companies, setCompanies] = useState<any[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<any[]>([]);
  const [selectedJobType, setSelectedJobType] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // ✅ Fetch companies from backend
  useEffect(() => {
    const controller = new AbortController();
    const fetchCompanies = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://test.careerbuddyclub.com:8080/api/students/getallcompanies", {
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          signal: controller.signal,
        });
        const data = await res.json();
        console.log("Fetched companies:", data);
        const list = Array.isArray(data) ? data : data?.data || [];
        setCompanies(list);
        setFilteredCompanies(list);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          setError("Something went wrong while loading companies.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchCompanies();
    return () => controller.abort();
  }, []);

  // ✅ Filter change handler
  const handleFilterChange = (type: string) => {
    setSelectedJobType(type);
    startTransition(() => {
      if (type === "all") setFilteredCompanies(companies);
      else {
        const filtered = companies.filter(
          (item) => item.job_types?.toLowerCase() === type.toLowerCase()
        );
        setFilteredCompanies(filtered);
      }
    });
  };

  // ✅ Extract unique job types dynamically
  const jobTypes = Array.from(new Set(companies.map((c) => c.job_types).filter(Boolean)));

  return (
    <section className="company-section py-5 bg-light">
      <div className="container">
        <div className="row g-4">
          {/* ================= SIDEBAR ================= */}
          <div className="col-xl-3 col-lg-4">
            <aside
              className="sidebar p-4 rounded-4 shadow-sm bg-white sticky-top"
              style={{ top: "100px", zIndex: 9 }}
            >
              <h5 className="fw-bold mb-4 text-dark">
                <i className="bi bi-funnel-fill me-2" style={{ color: "#14adbd" }}></i>
                Filter Companies
              </h5>

              <div className="filter-options">
                {["all", ...jobTypes].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleFilterChange(type)}
                    className={`btn w-100 text-start fw-semibold mb-2 rounded-3 py-2 px-3 ${
                      selectedJobType === type ? "btn-custom text-white" : "btn-outline-custom"
                    }`}
                    style={{
                      border: "1px solid #14adbd",
                      color: selectedJobType === type ? "#fff" : "#14adbd",
                      backgroundColor: selectedJobType === type ? "#14adbd" : "#fff",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {type === "all" ? "All Job Types" : type}
                    {selectedJobType === type && (
                      <i className="bi bi-check-circle-fill ms-2"></i>
                    )}
                  </button>
                ))}
              </div>
            </aside>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="col-xl-9 col-lg-8">
            {/* Header Section */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
              <div className="text-muted small mb-3 mb-md-0">
                {loading ? (
                  <>Loading companies...</>
                ) : error ? (
                  <span className="text-danger">{error}</span>
                ) : filteredCompanies.length > 0 ? (
                  <>
                    Showing <strong>{filteredCompanies.length}</strong> companies
                  </>
                ) : (
                  <span>No companies found.</span>
                )}
              </div>

              <div className="d-flex align-items-center gap-3">
                <div className="d-flex align-items-center">
                  <span className="me-2 text-muted fw-semibold">Sort:</span>
                  <ShortSelect />
                </div>
                <div className="btn-group">
                  <button
                    onClick={() => setViewType("list")}
                    className={`btn btn-sm ${
                      viewType === "list" ? "btn-custom text-white" : "btn-outline-custom"
                    }`}
                    style={{
                      border: "1px solid #14adbd",
                      color: viewType === "list" ? "#fff" : "#14adbd",
                      backgroundColor: viewType === "list" ? "#14adbd" : "#fff",
                    }}
                  >
                    <i className="bi bi-list"></i>
                  </button>
                  <button
                    onClick={() => setViewType("grid")}
                    className={`btn btn-sm ${
                      viewType === "grid" ? "btn-custom text-white" : "btn-outline-custom"
                    }`}
                    style={{
                      border: "1px solid #14adbd",
                      color: viewType === "grid" ? "#fff" : "#14adbd",
                      backgroundColor: viewType === "grid" ? "#14adbd" : "#fff",
                    }}
                  >
                    <i className="bi bi-grid"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* ================= GRID VIEW ================= */}
            {viewType === "grid" && (
              <div className="row g-4">
                {(loading || isPending)
                  ? Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="col-md-6 col-lg-4">
                        <div className="card placeholder-glow border-0 shadow-sm p-4 rounded-4">
                          <div className="placeholder w-75 mb-3"></div>
                          <div className="placeholder w-100 mb-2"></div>
                          <div className="placeholder w-50"></div>
                        </div>
                      </div>
                    ))
                  : filteredCompanies.map((item) => (
                      <div key={item.id} className="col-md-6 col-lg-4">
                        <div
                          className="card company-card border-0 rounded-4 shadow-sm p-4 bg-white h-100"
                          style={{
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                        >
                          <div className="d-flex align-items-center mb-3">
                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center fw-bold me-3"
                              style={{
                                width: 50,
                                height: 50,
                                fontSize: 18,
                                backgroundColor: "#e8f8f9",
                                color: "#14adbd",
                              }}
                            >
                              {item.name?.charAt(0) || "C"}
                            </div>
                            <div>
                              <h6 className="fw-bold mb-1" style={{ color: "#14adbd" }}>
                                {item.name}
                              </h6>
                              <small className="text-muted">
                                <i className="bi bi-briefcase me-1"></i>
                                {item.job_types || "Not specified"}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            )}

            {/* ================= LIST VIEW ================= */}
            {viewType === "list" && (
              <div className="list-group shadow-sm rounded-4">
                {filteredCompanies.map((item) => (
                  <div
                    key={item.id}
                    className="list-group-item border-0 border-bottom py-4 px-3 bg-white company-list-item"
                    style={{
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                  >
                    <h6 className="fw-bold mb-1" style={{ color: "#14adbd" }}>
                      {item.name}
                    </h6>
                    <small className="text-muted d-block mb-1">
                      <i className="bi bi-briefcase me-1"></i>
                      {item.job_types || "Not specified"}
                    </small>
                  </div>
                ))}
              </div>
            )}

            {/* ================= PAGINATION ================= */}
            {!loading && !error && filteredCompanies.length > 9 && (
              <div className="mt-5">
                <CompanyPagination />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .company-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(20, 173, 189, 0.2);
        }
        .company-list-item:hover {
          background: #f3fcfc !important;
          transform: translateX(6px);
        }
        .btn-custom {
          background-color: #14adbd !important;
          border-color: #14adbd !important;
        }
        .btn-outline-custom {
          border-color: #14adbd !important;
          color: #14adbd !important;
        }
        .btn-outline-custom:hover {
          background-color: #14adbd !important;
          color: #fff !important;
        }
      `}</style>
    </section>
  );
};

export default CompanyV1Area;
