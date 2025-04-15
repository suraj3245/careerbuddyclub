import React, { useEffect, useState } from "react";
import Image from "next/image";
import shape from "@/assets/images/shape/shape_29.svg";
import useSearchFormSubmit from "@/hooks/use-search-form-submit";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import ModalHeader from "@/app/components/homeModal";
import aptiimg from "@/assets/images/assets/apti.png";

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
    // This code now runs on client-side only, ensuring no mismatch during hydration
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);
  return (
    <>
      <div className="container" style={{'marginTop': '8rem'}}>
        <div className="row d-flez align-items-center justify-content-center">
          <div className="col-lg-6 col-md-8">
            <h1 className="wow fadeInUp" data-wow-delay="0.3s">
              Uncertain about the ideal career path for you?
            </h1>
            <p
              className="text-md mt-40 lg-mt-20 mb-10 lg-mb-10 pe-xxl-5 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              We discover your unique skills and interests, guiding you towards
              a successful and fulfilling career path.
            </p>
            {isLoggedIn ? (
          <button
            className="btn-five wow fadeInUp"
            onClick={() => router.push("/aptitudetest")}
            data-wow-delay="0.6s"
          >
            Begin your Free Test
          </button>
        ) : (
          <button
            className="btn-five wow fadeInUp"
            onClick={() => openApplyModal("student")}
          >
            Begin your free test
          </button>
        )}

          </div>
        
        {/* Conditionally render button or link based on login status */}
        <div className="col-lg-6">
            <Image
              src={aptiimg}
              alt="Apti Banner"
              width={900}
              height={780}  
              className="wow fadeInUp"
              data-wow-delay="0.3s"
            />
        </div>
        </div>
      <ModalHeader
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalType={modalType}
      />
    </div>
    </>
  );
};

export default AptiBanner;
