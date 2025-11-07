"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";

const Careerlist: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [careersData, setCareersData] = useState<any[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [selectedDuration, setSelectedDuration] = useState<string>("All");
  const [selectedStream, setSelectedStream] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch Courses
  useEffect(() => {
    let isMounted = true;
    const fetchCareers = async () => {
      try {
        const res = await fetch(
          "https://test.careerbuddyclub.com:8080/api/students/getallcourses",
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Failed to fetch courses");
        const data = await res.json();

        if (isMounted) {
          const careersArray = Array.isArray(data) ? data : Object.values(data);
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

  // ✅ Animate Cards on Scroll
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
0
    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, [careersData]);

  // ✅ Unique Durations
  const allDurations = useMemo(
    () =>
      Array.from(
        new Set(
          careersData
            .map((career: any) => career.duration)
            .filter((d: any) => d && d.trim() !== "")
        )
      ),
    [careersData]
  );

  // ✅ Unique Streams
  const allStreams = useMemo(
    () =>
      Array.from(
        new Set(
          careersData
            .map((career: any) => career.stream?.title)
            .filter((s: any) => s && s.trim() !== "")
        )
      ),
    [careersData]
  );

  // ✅ Combined Filter (Stream + Duration)
  const filteredCareers = useMemo(() => {
    return careersData.filter((career: any) => {
      const matchDuration =
        selectedDuration === "All" ||
        (career.duration &&
          career.duration.toLowerCase() === selectedDuration.toLowerCase());
      const matchStream =
        selectedStream === "All" ||
        (career.stream &&
          career.stream.title?.toLowerCase() === selectedStream.toLowerCase());
      return matchDuration && matchStream;
    });
  }, [careersData, selectedDuration, selectedStream]);

  // ✅ Loader
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
        Courses
      </h3>

      <div className="row">
        {/* ✅ Sidebar */}
        <div className="col-lg-2 mb-4">
          <div className="filter-box p-3 rounded-4 shadow-sm mb-4">
            <h5 className="mb-3 fw-bold text-center">Streams</h5>
            <ul className="list-unstyled">
              <li>
                <button
                  className={`filter-item ${
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
                    className={`filter-item ${
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

          {/* Durations Box */}
         
        </div>
        <div className="col-lg-2 mb-4">
        <div className="filter-box p-3 rounded-4 shadow-sm">
            <h5 className="mb-3 fw-bold text-center">Durations</h5>
            <ul className="list-unstyled">
              <li>
                <button
                  className={`filter-item ${
                    selectedDuration === "All" ? "active" : ""
                  }`}
                  onClick={() => setSelectedDuration("All")}
                >
                  All Durations
                </button>
              </li>
              {allDurations.map((duration, index) => (
                <li key={index}>
                  <button
                    className={`filter-item ${
                      selectedDuration === duration ? "active" : ""
                    }`}
                    onClick={() => setSelectedDuration(duration)}
                  >
                    {duration}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ✅ Career Cards */}
        <div className="col-lg-8">
          <div className="row g-4">
            {filteredCareers.length > 0 ? (
              filteredCareers.map((career: any, index: number) => (
                <div
                  className="col-md-6"
                  key={career.id || index}
                  ref={(el) => { cardsRef.current[index] = el; }}
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
                      {career.name || "N/A"}
                    </h3>
                    <hr />

                    <div className="d-flex justify-content-between flex-wrap">
                      <div>
                        <h6 className="fw-bold mb-1">Stream:</h6>
                        <span className="badge career-badge">
                          {typeof career.stream === "object"
                            ? career.stream?.title || "N/A"
                            : "N/A"}
                        </span>
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Duration:</h6>
                        <span className="badge career-badge">
                          {career.duration || "N/A"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3">
                      <h6 className="fw-bold mb-1">Top Careers:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {career.careers && career.careers.length > 0 ? (
                          career.careers
                            .slice(0, 3)
                            .map((c: any, i: number) => (
                              <span key={i} className="career-badge">
                                {c?.title || "N/A"}
                              </span>
                            ))
                        ) : (
                          <span className="career-badge">N/A</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No courses found.</p>
            )}
          </div>
        </div>
      </div>

      {/* ✅ Styles */}
      <style jsx>{`
        .filter-box {
          background: #ffffff;
          border-left: 4px solid #14adbd;
          border-radius: 10px;
          padding: 15px 20px;
          max-height: 70vh;
          overflow-y: auto;
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
        .filter-item {
          display: block;
          width: 100%;
          padding: 10px 15px;
          margin-bottom: 8px;
          border-radius: 12px;
          border: 1px solid #14adbd;
          background: #fff;
          color: #0b3d91;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .filter-item:hover,
        .filter-item.active {
          background-color: #14adbd;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Careerlist;
