import React from "react";

export default function WhatsappChatButton() {
  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
        .whatsapp-bounce {
          animation: bounce 2.5s infinite;
        }
      `}</style>
      <a
        href="https://wa.me/917456000100"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-bounce"
        style={{
          position: "fixed",
          bottom: "100px",
          right: "24px",
          zIndex: 9999,
          backgroundColor: "#25d366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        }}
      >
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
          alt="WhatsApp"
          style={{ width: "36px", height: "36px" }}
        />
      </a>
    </>
  );
}