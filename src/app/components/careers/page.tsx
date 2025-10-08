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

  // Intersection Observer for animations
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

  // Unique streams
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

  // Filtered careers
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

  // Loader
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
            <h5
              className="mb-3 fw-bold text-center"
              style={{ marginTop: "-20px" }}
            >
              Streams
            </h5>
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
                ref={(el) => (cardsRef.current[index] = el)}
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
                                  <span
                                    key={i}
                                    style={{
                                      backgroundColor: "#d1ecf1",
                                      padding: "2px 6px",
                                      borderRadius: "10px",
                                      color: "black",
                                      fontSize: "0.75rem",
                                    }}
                                  >
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
                                <span key={i} style={{
                                  backgroundColor: "#d1ecf1",
                                  padding: "2px 6px",
                                  borderRadius: "4px",
                                  color: "black",
                                  fontSize: "0.80rem",
                                }}>
                                  {typeof company === "object"
                                    ? company.title || company.name
                                    : company}
                                </span>
                              ))}&nbsp;
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
        .stream-sidebar {
          background: #ffffff;
          border-left: 4px solid #14adbd;
          border-radius: 10px;
          padding: 15px 20px;
          max-height: 60vh;
          overflow-y: auto;
          position: relative; /* change sticky to relative */
          font-family: "Segoe UI", sans-serif;
          color: #0b3d91;
        }

        /* Make the Streams heading fixed within sidebar */
        .stream-sidebar h5 {
          position: sticky;
          top: 0; /* sticks to the top of sidebar */
          background: #ffffff;
          z-index: 10;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid #14adbd;
          z-index: 100;
        }

        .career-list {
          font-family: "Georgia", serif;
          font-style: italic;
        }
        h3 {
          font-size: 2rem;
          color: #0b3d91;
        }
        .highlight {
          color: #14adbd;
        }
        .career-title {
          color: #14adbd;
          font-size: 1.3rem;
        }
        .career-badge {
          font-size: 0.75rem;
          background-color: #d1ecf1;
          color: #0c5460;
          padding: 4px 8px;
          border-radius: 12px;
          margin: 2px;
        }
        .hidden-card {
          opacity: 0;
          transform: translateY(30px);
        }
        .slide-left,
        .slide-right {
          opacity: 1;
          transform: translateX(0);
          transition: all 0.8s ease-out;
        }
        .hover-animate {
          transition: all 0.4s ease;
          background: #fff;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
        }
        .hover-animate:hover {
          transform: translateY(-6px) scale(1.03);
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.18);
          background: linear-gradient(135deg, #e6f7ff, #ffffff);
        }
        .stream-sidebar {
          background: #ffffff;
          border-left: 4px solid #14adbd;
          border-radius: 10px;
          padding: 15px 20px;
          max-height: 60vh;
          overflow-y: auto;
          position: sticky;
          top: 2rem;
          font-family: "Segoe UI", sans-serif;
          color: #0b3d91;
        }
        .stream-item {
          display: block;
          width: 100%;
          padding: 10px 15px;
          margin-bottom: 8px;
          border-radius: 12px;
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
        }
      `}</style>
    </div>
  );
};

export default Careerlist;
