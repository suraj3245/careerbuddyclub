"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";

const Careerlist: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [careersData, setCareersData] = useState<any[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [selectedStream, setSelectedStream] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchCareers = async () => {
      try {
        const res = await fetch(
          "https://test.careerbuddyclub.com:8080/api/students/getallcareers",
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch careers");
        const data = await res.json();
        if (isMounted) {
          const careersArray = Array.isArray(data.data)
            ? data.data
            : Object.values(data.data);
          setCareersData(careersArray);
          setVisibleCards(new Array(careersArray.length).fill(false));
        }
      } catch (err: any) {
        console.error(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchCareers();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!careersData.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting) {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [careersData]);

  const allStreams = useMemo(
    () =>
      Array.from(
        new Set(
          careersData.flatMap(
            (career: any) =>
              career.streams?.map((s: any) =>
                typeof s === "object" ? s.title || s.name : s
              ) || []
          )
        )
      ),
    [careersData]
  );

  const filteredCareers = useMemo(
    () =>
      selectedStream === "All"
        ? careersData
        : careersData.filter((career: any) =>
            career.streams?.some((s: any) =>
              typeof s === "object"
                ? s.title === selectedStream || s.name === selectedStream
                : s === selectedStream
            )
          ),
    [careersData, selectedStream]
  );

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "30vh" }}
      >
        <iframe
          src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json"
          style={{ width: "300px", height: "300px", border: "none" }}
        ></iframe>
      </div>
    );

  return (
    <div className="container my-5 career-list">
      <h3 className="mb-4 text-center fw-bold fade-in">
        Explore <span className="highlight">{filteredCareers.length}</span>{" "}
        Careers
      </h3>

      <div className="row">
        {/* Sidebar */}
        <div className="col-lg-3 mb-4">
          <div className="stream-sidebar p-3 rounded-4 shadow-sm">
            <h5 className="mb-3 fw-bold text-center">Streams</h5>
            <ul className="list-unstyled">
              <li>
                <button
                  className={`stream-item ${
                    selectedStream === "All" ? "active" : ""
                  }`}
                  onClick={() => setSelectedStream("All")}
                >
                  All Streams
                </button>
              </li>
              {allStreams.map((stream, index) => (
                <li key={index}>
                  <button
                    className={`stream-item ${
                      selectedStream === stream ? "active" : ""
                    }`}
                    onClick={() => setSelectedStream(stream)}
                  >
                    {stream}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Career Cards */}
        <div className="col-lg-9">
          <div className="row g-4">
            {filteredCareers.map((career: any, index: number) => (
              <div
                className="col-md-6 col-lg-6"
                key={career.id || index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                data-index={index}
              >
                <div
                  className={`card h-100 border-0 rounded-4 p-4 hover-animate ${
                    visibleCards[index]
                      ? index % 2 === 0
                        ? "slide-left"
                        : "slide-right"
                      : "hidden-card"
                  }`}
                >
                  <h3 className="text-center mb-2 fw-bold career-title">
                    {career.title || career.name}
                  </h3>
                  <hr />
                  <div className="d-flex justify-content-start flex-wrap gap-1 mb-3">
                    <div>
                      <h6 className="fw-bold mb-1">Streams:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {career.streams?.map((stream: any, i: number) => (
                          <span key={i} className="badge career-badge">
                            {typeof stream === "object"
                              ? stream.title || stream.name
                              : stream}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row d-flex justify-content-around align-items-center">
                      <div className="col-lg-5">
                        <div>
                          <h6 className="fw-bold mb-1">Top Skills:</h6>
                          <div className="d-flex flex-wrap gap-1">
                            {career.skills
                              ?.slice(0, 3)
                              .map((skill: any, i: number) => (
                                <span key={i} className="skill-badge">
                                  {typeof skill === "object"
                                    ? skill.title || skill.name
                                    : skill}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5">
                        <div>
                          <h6 className="fw-bold mb-1">Top Companies:</h6>
                          <div className="d-flex flex-wrap gap-1">
                            {career.companies
                              ?.slice(0, 3)
                              .map((company: any, i: number) => (
                                <span key={i} className="company-badge">
                                  {typeof company === "object"
                                    ? company.title || company.name
                                    : company}
                                </span>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700&display=swap");

        .stream-sidebar {
          background: #ffffff;
          border-left: 4px solid #14adbd;
          border-radius: 12px;
          padding: 20px;
          max-height: 70vh;
          overflow-y: auto;
          position: sticky;
          top: 2rem;
          font-family: "Inter", sans-serif;
          color: #0b3d91;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
        }

        .stream-sidebar h5 {
          position: sticky;
          top: 0;
          background: #ffffff;
          z-index: 10;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #14adbd;
          font-weight: 600;
        }

        .career-list {
          font-family: "Inter", sans-serif;
        }

        h3 {
          font-size: 2.2rem;
          color: #0b3d91;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .highlight {
          color: #14adbd;
        }

        .card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transition: all 0.35s ease;
          border: 1px solid #f1f1f1;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);
        }

        .career-title {
          color: #0b3d91;
          font-size: 1.25rem;
          font-weight: 600;
          text-align: center;
          letter-spacing: -0.3px;
          font-family: "Poppins", sans-serif;
        }

        .career-badge,
        .skill-badge,
        .company-badge {
          font-size: 0.8rem;
          background-color: #eaf7f9;
          color: #0b3d91;
          padding: 5px 10px;
          border-radius: 8px;
          font-weight: 500;
        }

        .hidden-card {
          opacity: 0;
          transform: translateY(20px);
        }

        .slide-left,
        .slide-right {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.6s ease-out;
        }

        .stream-item {
          display: block;
          width: 100%;
          padding: 10px 15px;
          margin-bottom: 8px;
          border-radius: 10px;
          border: 1px solid #14adbd;
          background: #fff;
          color: #0b3d91;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .stream-item:hover,
        .stream-item.active {
          background-color: #14adbd;
          color: #fff;
          box-shadow: 0 4px 8px rgba(20, 173, 189, 0.3);
        }

        h6 {
          font-weight: 600;
          color: #0b3d91;
          margin-bottom: 5px;
        }

        hr {
          border-top: 1px solid #e5e5e5;
          margin: 10px 0 15px;
        }
      `}</style>
    </div>
  );
};

export default Careerlist;
