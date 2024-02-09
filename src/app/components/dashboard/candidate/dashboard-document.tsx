import React, { useState } from "react";
import DashboardHeader from "./dashboard-header";

// Assuming you have an API endpoint to upload files
const UPLOAD_ENDPOINT = "https://yourapi.com/upload";

type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const DashboardDocument: React.FC<IProps> = ({ setIsOpenSidebar }) => {
  // State to keep track of the file names
  const [uploadedFiles, setUploadedFiles] = useState<{
    upload10th?: string;
    upload12th?: string;
    uploadAadhar?: string;
  }>({});

  // Function to handle file upload
  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch(UPLOAD_ENDPOINT, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const result = await response.json();
          setUploadedFiles((prevState) => ({
            ...prevState,
            [key]: result.fileName || file.name,
          }));
        } else {
          console.error("Upload failed:", response.statusText);
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };

  // Function to handle document change
  const handleChangeDocument = (key: string) => {
    setUploadedFiles((prevState) => ({
      ...prevState,
      [key]: undefined,
    }));
  };

  return (
    <>
      <div className="dashboard-body">
        <div className="position-relative">
          <DashboardHeader setIsOpenSidebar={setIsOpenSidebar} />
          <h2 className="main-title">Documents</h2>
          <div className="bg-white card-box border-20">
            <div className="row">
              {/* Example for 10th Marksheet */}
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="upload10thCV">10th Marksheet*</label>
                </div>
                {uploadedFiles.upload10th ? (
                  <div>
                    <p>
                      {uploadedFiles.upload10th}{" "}
                      <button
                        onClick={() => handleChangeDocument("upload10th")}
                        className="btn btn-link"
                      >
                        Change
                      </button>
                    </p>
                  </div>
                ) : (
                  <div className="dash-btn-one d-inline-block position-relative me-3">
                    <i className="bi bi-plus"></i>
                    Upload
                    <input
                      type="file"
                      id="upload10th"
                      name="upload10th"
                      onChange={(event) => handleUpload(event, "upload10th")}
                    />
                  </div>
                )}
                <small>Upload file .pdf</small>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="upload10thCV">12th Marksheet*</label>
                </div>
                {uploadedFiles.upload12th ? (
                  <div>
                    <p>
                      {uploadedFiles.upload12th}{" "}
                      <button
                        onClick={() => handleChangeDocument("upload12th")}
                        className="btn btn-link"
                      >
                        Change
                      </button>
                    </p>
                  </div>
                ) : (
                  <div className="dash-btn-one d-inline-block position-relative me-3">
                    <i className="bi bi-plus"></i>
                    Upload
                    <input
                      type="file"
                      id="upload12th"
                      name="upload12th"
                      onChange={(event) => handleUpload(event, "upload12th")}
                    />
                  </div>
                )}
                <small>Upload file .pdf</small>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="dash-input-wrapper mb-20">
                  <label htmlFor="upload10thCV">Aadhar Attachment*</label>
                </div>
                {uploadedFiles.uploadAadhar ? (
                  <div>
                    <p>
                      {uploadedFiles.uploadAadhar}{" "}
                      <button
                        onClick={() => handleChangeDocument("uploadAadhar")}
                        className="btn btn-link"
                      >
                        Change
                      </button>
                    </p>
                  </div>
                ) : (
                  <div className="dash-btn-one d-inline-block position-relative me-3">
                    <i className="bi bi-plus"></i>
                    Upload
                    <input
                      type="file"
                      id="uploadAadhar"
                      name="uploadAadhar"
                      onChange={(event) => handleUpload(event, "uploadAadhar")}
                    />
                  </div>
                )}
                <small>Upload file .pdf</small>
              </div>
              {/* Repeat for other documents */}
            </div>
          </div>
          <div className="button-group d-inline-flex align-items-center mt-30">
            <button className="dash-btn-two tran3s me-3">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDocument;
