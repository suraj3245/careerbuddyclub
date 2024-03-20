import React, { useState, useEffect } from "react";
import DashboardHeader from "./dashboard-header";
import Link from "next/link";

const UPLOAD_ENDPOINTS = {
  "10th_certificate":
    "https://test.careerbuddyclub.com:8080/api/students/upload10thcertificate",
  "12th_certificate":
    "https://test.careerbuddyclub.com:8080/api/students/upload12thcertificate",
  aadhar_card:
    "https://test.careerbuddyclub.com:8080/api/students/uploadaadharcard",
};

type DocumentType = "10th_certificate" | "12th_certificate" | "aadhar_card";

interface IProps {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardDocument: React.FC<IProps> = ({ setIsOpenSidebar }) => {
  const [uploadedFiles, setUploadedFiles] = useState<{
    [K in DocumentType]?: string;
  }>({});
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Example token, replace with actual token retrieval logic
    const token = localStorage.getItem("token");
    const fetchDocuments = async () => {
      try {
        const response = await fetch(
          "https://test.careerbuddyclub.com:8080/api/students/fetchdocuments",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              document_types: ["10th", "12th", "aadhar"],
            }),
          }
        );
        const data = await response.json();
        setUploadedFiles({
          "10th_certificate": data["10th_certificate"],
          "12th_certificate": data["12th_certificate"],
          aadhar_card: data["aadhar_card"],
        });
      } catch (error) {
        console.error("Error fetching documents:", error);
      } finally {
        // Ensure isLoading is set to false once the operation is complete
        setIsLoading(false);
        // Since you already have a logic to hide the loader after 3 seconds,
        // you might reconsider if you still need the setShowLoader logic here.
      }
    };

    fetchDocuments();
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 3 seconds
    }, 3500);

    // Cleanup timeout if component unmounts before timeout completes
    return () => clearTimeout(timer);
  }, []);

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    documentType: DocumentType
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (!file) return;

    const formData = new FormData();
    formData.append("certificate", file);

    const token = localStorage.getItem("token");
    try {
      const response = await fetch(UPLOAD_ENDPOINTS[documentType], {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        // Assuming the response includes the full URL or the correct path to access the uploaded file
        const newFileUrl = result.url || `${result.path}`;
        console.log(result.path);
        setUploadedFiles((prev) => ({
          ...prev,
          [documentType]: newFileUrl,
        }));
      } else {
        console.error("Upload failed:", response.statusText);
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const renderDocumentSection = (documentType: DocumentType, label: string) => {
    const documentUrl = uploadedFiles[documentType];
    return (
      <div className="col-lg-4 col-md-6 col-sm-12" key={documentType}>
        <div className="dash-input-wrapper mb-20 mt-20">
          <label htmlFor={documentType} style={{ color: "#14adbd" }}>
            {label}
          </label>
        </div>
        {documentUrl ? (
          <div>
            <img
              src={`https://test.careerbuddyclub.com:8080${documentUrl}`}
              alt={label}
              style={{
                width: "260px",
                height: "230px",
                marginBottom: "10px",
              }}
            />
            <button
              onClick={() =>
                setUploadedFiles((prev) => ({
                  ...prev,
                  [documentType]: undefined,
                }))
              }
              className="btn btn-link"
            >
              Change
            </button>
          </div>
        ) : (
          <div className="dash-btn-one d-inline-block position-relative me-3">
            <i className="bi bi-plus"></i> Upload
            <input
              type="file"
              accept="image/*"
              id={documentType}
              name={documentType}
              onChange={(event) => handleUpload(event, documentType)}
            />
          </div>
        )}
        <small>Upload file .png, .jpg</small>
      </div>
    );
  };
  if (showLoader || isLoading) {
    return (
      <div
        className="dashboard-body"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <iframe
          src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json"
          style={{ width: "300px", height: "300px" }} // Adjust size as needed
        ></iframe>
      </div>
    ); // Replace with your loader component or element
  }
  return (
    <>
      <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
      <div className="dashboard-body">
        <h2 className="main-title">Documents</h2>
        <div className="bg-white card-box border-20">
          <div className="row">
            {renderDocumentSection("10th_certificate", "10th Marksheet")}
            {renderDocumentSection("12th_certificate", "12th Marksheet")}
            {renderDocumentSection("aadhar_card", "Aadhar Card")}
          </div>
        </div>
        <div className="button-group d-inline-flex align-items-center mt-30">
          <Link type="submit" className="dash-btn-two tran3s me-3" href="/">
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default DashboardDocument;
