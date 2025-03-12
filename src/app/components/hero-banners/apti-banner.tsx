import React, { useEffect, useState } from "react";
import Image from "next/image";
import shape from "@/assets/images/shape/shape_29.svg";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";
import { useRouter } from "next/navigation"; 
import { ToastContainer, toast } from "react-toastify";

const AptiBanner = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // This code now runs on client-side only, ensuring no mismatch during hydration
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // Assuming localStorage is directly accessible; in Next.js, consider using useEffect to manage state based on localStorage due to SSR.
  // const isLoggedIn =
  //   typeof window !== "undefined" && localStorage.getItem("token");

  return (
    <div className="hero-banner-five position-relative pt-150 lg-pt-150 pb-30">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <h1 className="wow fadeInUp" data-wow-delay="0.3s">
                Uncertain about the ideal career path for you?
              </h1>
              <p
                className="text-md mt-40 lg-mt-20 mb-10 lg-mb-10 pe-xxl-5 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                We discover your unique skills and interests, guiding you
                towards a successful and fulfilling career path.
              </p>
            </div>
          </div>
        </div>
        {/* Conditionally render button or link based on login status */}
        {isLoggedIn ? (
          <button
            className="btn-five wow fadeInUp"
            onClick={() => router.push("/aptitudetest")}
            data-wow-delay="0.6s"
          >
            Begin your Free Test
          </button>
        ) : (
          <a
            href="#"
            className="btn-five wow fadeInUp"
            data-bs-toggle="modal"
            data-bs-target="#ApplyModal"
          >
            Begin your free test
          </a>
        )}
      </div>
      <div className="img-meta">
        {/* <Image
          src={shape}
          alt="shape img"
          className="lazy-img shapes shape_01"
        /> */}
      </div>
      <a href="#" className="chat-btn tran3s">
        <i className="bi bi-chat-dots"></i>
      </a>
    </div>
  );
};

export default AptiBanner;
