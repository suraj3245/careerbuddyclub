import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ModalHeader from "@/app/components/homeModal";
import aptiimg from "@/assets/images/assets/apti.jpg";

const AptiBanner = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<string | null>(null);

  const openApplyModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <>
      {/* Hero section */}
      <section
        style={{
          background: "linear-gradient(135deg, #f0fbfc 0%, #ffffff 60%)",
          paddingTop: "7rem",
          paddingBottom: "3rem",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row align-items-center g-4">

            {/* ── Left: Text content ── */}
            <div className="col-lg-6 col-12">
              {/* Eyebrow tag */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#e5f7f8",
                  color: "#0788a1",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: 700,
                  marginBottom: "20px",
                  letterSpacing: "0.3px",
                }}
                className="wow fadeInUp"
                data-wow-delay="0.1s"
              >
                🎯 Free Career Assessment
              </div>

              <h1
                style={{
                  fontSize: "clamp(32px, 4.5vw, 52px)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-1.5px",
                  color: "#122036",
                  marginBottom: "20px",
                }}
                className="wow fadeInUp"
                data-wow-delay="0.2s"
              >
                Uncertain about the{" "}
                <span style={{ color: "#079db4" }}>ideal career</span>{" "}
                path for you?
              </h1>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.7,
                  color: "#647085",
                  maxWidth: "460px",
                  marginBottom: "32px",
                }}
                className="wow fadeInUp"
                data-wow-delay="0.3s"
              >
                We discover your unique skills and interests, guiding you
                towards a successful and fulfilling career path.
              </p>

              {isLoggedIn ? (
                <button
                  className="btn-five wow fadeInUp"
                  onClick={() => router.push("/aptitudetest")}
                  data-wow-delay="0.4s"
                  style={{ fontSize: "15px", padding: "14px 30px" }}
                >
                  Begin your Free Test →
                </button>
              ) : (
                <button
                  className="btn-five wow fadeInUp"
                  onClick={() => openApplyModal("student")}
                  data-wow-delay="0.4s"
                  style={{ fontSize: "15px", padding: "14px 30px" }}
                >
                  Begin your free test →
                </button>
              )}
            </div>

            {/* ── Right: Image ── */}
            <div
              className="col-lg-6 col-12 wow fadeInUp"
              data-wow-delay="0.2s"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(7, 125, 155, 0.15)",
                  maxWidth: "480px",
                  maxHeight: "320px",
                  width: "100%",
                }}
              >
                <Image
                  src={aptiimg}
                  alt="Students taking career aptitude test"
                  width={480}
                  height={320}
                  style={{
                    width: "100%",
                    height: "320px",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <ModalHeader
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalType={modalType}
      />
    </>
  );
};

export default AptiBanner;

