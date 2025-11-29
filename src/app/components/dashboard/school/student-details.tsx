import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DownloadIcon from "@mui/icons-material/Download";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./studentdetails.css";
import { ToastContainer, toast } from "react-toastify";
import StudentScoreModal from "./studentscore-modal";

const StudentTable: React.FC = () => {
  const [name, setName] = useState("");
  const [studentId, setStudentId] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditingMobile, setIsEditingMobile] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStudentId, setLoadingStudentId] = useState<number | null>(null);
  const [selectedClassCategory, setSelectedClassCategory] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    email: "",
    mobile: "",
    realistic_score: "N/A",
    investigative_score: "N/A",
    artistic_score: "N/A",
    social_score: "N/A",
    enterprising_score: "N/A",
    conventional_score: "N/A",
  });

  const studentsPerPage = 10;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const fetchStudents = async () => {
    try {
      const School_id = localStorage.getItem("School_id");
      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getstudentsbyschool",
        JSON.stringify({ School_id }),
        { headers: { "Content-Type": "application/json" } }
      );
      setStudents((response.data || []).slice(0, 250));
    } catch (error) {
      toast.error("Error fetching students");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);
  const studentUpdate = async (id: number, name: string) => {
    setStudentId(id);
    setName(name);
  };
  const handleStudentUpdate = async (e: any) => {
    e.preventDefault();
    setIsUpdating(true);
    const response = await fetch(
      `https://test.careerbuddyclub.com:8080/api/students/studentEdit/${studentId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
        }),
      }
    );
    const data = await response.json();
    if (data.status == 200) {
      toast.success("Student Name Updated Successfully");
      setTimeout(() => {
        setIsUpdating(false);
        window.location.reload();
      }, 1000);
    }
    if (data.status == 401) {
      toast.error("Error Updating Student Details");
      setIsUpdating(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setCurrentStudentId(null);
    setSelectedStudent(null);
    setFormData({
      name: "",
      class: "",
      email: "",
      mobile: "",
      realistic_score: "N/A",
      investigative_score: "N/A",
      artistic_score: "N/A",
      social_score: "N/A",
      enterprising_score: "N/A",
      conventional_score: "N/A",
    });
  };
  const handleShowModal = () => setShowModal(true);

  const handleFocus = () => setIsEditingMobile(true);
  const handleBlur = () => setIsEditingMobile(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };
  const searchClassData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClassCategory(e.target.value);
    setCurrentPage(1);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByClass =
    selectedClassCategory === "all" || selectedClassCategory === ""
      ? filteredStudents
      : filteredStudents.filter(
          (student) => student.class === selectedClassCategory
        );

  const filteredStudentsWithScores = filteredByClass.map((student) => {
    const scores = [
      { name: "Realistic", score: student.realistic_score },
      { name: "Investigative", score: student.investigative_score },
      { name: "Artistic", score: student.artistic_score },
      { name: "Social", score: student.social_score },
      { name: "Enterprising", score: student.enterprising_score },
      { name: "Conventional", score: student.conventional_score },
    ];
    scores.sort((a, b) => b.score - a.score);
    const topThreeScores = scores.slice(0, 3);
    return {
      ...student,
      topThreeScores,
      topThreeScoresAbbr: topThreeScores.map((s) => s.name.charAt(0)).join(""),
    };
  });
  const totalPages = Math.ceil(filteredByClass.length / studentsPerPage);
  const currentFilteredStudents = filteredStudentsWithScores.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const exportToExcel = async () => {
    try {
      setLoading(true);
      await fetchStudents();

      const exportData = filteredStudentsWithScores.map((student) => ({
        Name: student.name,
        Class: student.class,
        School: student.from,
        Realistic_score: student.realistic_score,
        Investigative_score: student.investigative_score,
        Artistic_score: student.artistic_score,
        Social_score: student.social_score,
        Enterprising_score: student.enterprising_score,
        Conventional_score: student.conventional_score,
        Top_scores: student.topThreeScoresAbbr,
      }));
      const worksheet = XLSX.utils.json_to_sheet(exportData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Students");
      XLSX.writeFile(workbook, "students_data.xlsx");
      toast.success("Data exported successfully");
    } catch (error) {
      toast.error("Error exporting data");
    } finally {
      setLoading(false);
    }
  };
  const handleDownload = async (student: any) => {
    setLoadingStudentId(student.id);
    try {
      setSelectedStudent(student);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    } catch (error) {
      toast.error("Error loading student data");
    } finally {
      setLoadingStudentId(null);
    }
  };
  const handleEdit = (student: any) => {
    setFormData(student);
    setCurrentStudentId(student.id);
    setIsEdit(true);
    setShowModal(true);
  };
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const {
        realistic_score,
        investigative_score,
        artistic_score,
        social_score,
        enterprising_score,
        conventional_score,
        ...formDataToSend
      } = formData;
      const schoolName = localStorage.getItem("schoolName") || "";
      const bodyContent = JSON.stringify({
        ...formDataToSend,
        from: schoolName,
      });

      const reqOptions = {
        url:
          isEdit && currentStudentId !== null
            ? `https://test.careerbuddyclub.com:8080/api/students/studentupdate/${currentStudentId}`
            : "https://test.careerbuddyclub.com:8080/api/students/studentstore",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: bodyContent,
      };
      await axios.request(reqOptions);
      fetchStudents();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding/updating student:", error);
    }
  };

  return (
    <>
      <ToastContainer />
      {loading ? (
        <div
          className="student-table d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <iframe
            src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ) : (
        <>
          <div className="card mb-1 card_1">
            <div className="card-body text-center">
              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.6rem",
                  textAlign: "center",
                  color: "#1f2d3d",
                  letterSpacing: "0.5px",
                  position: "relative",
                  display: "inline-block",
                  margin: "15px auto 20px",
                  paddingBottom: "6px",
                }}
              >
                Insight into Student Performance
                <span style={{ color: "#0d6efd" }}>
                  {" "}
                  : Career Aptitude Test
                </span>
                {/* Elegant underline accent */}
                <span
                  style={{
                    content: "''",
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "3px",
                    background:
                      "linear-gradient(90deg, #0d6efd, #6f42c1, #0dcaf0)",
                    borderRadius: "2px",
                  }}
                ></span>
              </h3>

              <div className="row gap-3 d-flex justify-content-around align-items-center">
                <div className="col-lg-6 d-flex align-items-center">
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="form-control me-2"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                  />
                  <select
                    className="form-select"
                    value={selectedClassCategory}
                    onChange={searchClassData}
                  >
                    <option value="">Search By Class</option>
                    <option value="all">All</option>
                    <option value="8th">8th</option>
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
                </div>
                <div className="col-lg-2 text-end mt-2">
                  <Button
                    variant="outline-success"
                    onClick={exportToExcel}
                    className="mb-4"
                  >
                    Export Data <DownloadIcon />
                  </Button>
                </div>
              </div>
              <div className="table-responsive" style={{ overflow: "auto" }}>
                <table
                  className="table card-table table-vcenter text-nowrap"
                  style={{
                    borderCollapse: "separate",
                    borderSpacing: "0 2px", // 👈 adds spacing between rows
                    width: "100%",
                  }}
                >
                  <thead className="table-light">
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Realistic</th>
                      <th>Investigative</th>
                      <th>Artistic</th>
                      <th>Social</th>
                      <th>Enterprising</th>
                      <th>Conventional</th>
                      <th>Top Scores</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentFilteredStudents.map((student, index) => (
                      <tr key={student.id}>
                        <td>{indexOfFirstStudent + index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.class}</td>
                        <td>{student.realistic_score}</td>
                        <td>{student.investigative_score}</td>
                        <td>{student.artistic_score}</td>
                        <td>{student.social_score}</td>
                        <td>{student.enterprising_score}</td>
                        <td>{student.conventional_score}</td>
                        <td>{student.topThreeScoresAbbr}</td>
                        <td>
                          <div
                            className=""
                            style={{
                              display: "flex",
                              gap: "8px",
                            }}
                          >
                            <button
                              data-bs-toggle="modal"
                              data-bs-target="#editModal"
                              style={{
                                backgroundColor: "#0DCAF0",
                                color: "white",
                                border: "none",
                                padding: "4px 6px",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                studentUpdate(student.id, student.name)
                              }
                            >
                              <img
                                src="https://cdn-icons-png.flaticon.com/512/3597/3597075.png"
                                alt="edit"
                                style={{
                                  width: "21px",
                                  height: "20px",
                                  filter: "brightness(0) invert(1)",
                                }}
                              />
                            </button>
                            <button
                              onClick={() => handleDownload(student)}
                              style={{
                                backgroundColor: "#0DCAF0",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "14px",
                                width: "60px",
                                height: "30px",
                                textAlign: "center",
                                border: "1px solid #0BA5D8",
                                boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "8px",
                              }}
                            >
                              {loadingStudentId === student.id ? (
                                <span
                                  className="spinner-border spinner-border-sm m-auto"
                                  role="status"
                                  aria-hidden="true"
                                  style={{ width: "1.1rem", height: "1.1rem" }}
                                ></span>
                              ) : (
                                "View"
                              )}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div
                className="modal fade"
                id="editModal"
                aria-hidden="true"
                aria-labelledby="editModalLabel"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div
                    className="modal-content"
                    style={{
                      borderRadius: "18px",
                      border: "none",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                    }}
                  >
                    <div
                      className="modal-header"
                      style={{
                        background: "#F4FBFF",
                        borderBottom: "1px solid #E4EEF5",
                        padding: "18px 25px",
                      }}
                    >
                      <h5
                        className="modal-title m-auto"
                        id="editModalLabel"
                        style={{
                          fontWeight: 650,
                          color: "#0E5CA8",
                          fontSize: "18px",
                        }}
                      >
                        Update Student Name
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></button>
                    </div>
                    <div className="modal-body px-4 py-4">
                      <form onSubmit={handleStudentUpdate}>
                        <div className="input-group mb-3">
                          <span className="input-group-text bg-white">
                            <i className="bi bi-person"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter new name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{
                              height: "45px",
                              borderRadius: "8px",
                              border: "1.4px solid #C9D6E2",
                              paddingLeft: "10px",
                            }}
                            onFocus={(e) =>
                              (e.target.style.border = "1.4px solid #0DCAF0")
                            }
                            onBlur={(e) =>
                              (e.target.style.border = "1.4px solid #C9D6E2")
                            }
                          />
                        </div>
                        <div className="input-group">
                          <span className="input-group-text bg-white">
                            <i className="bi bi-lock"></i>
                          </span>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                              height: "45px",
                              borderRadius: "8px",
                              border: "1.4px solid #C9D6E2",
                              paddingLeft: "10px",
                            }}
                            onFocus={(e) =>
                              (e.target.style.border = "1.4px solid #0DCAF0")
                            }
                            onBlur={(e) =>
                              (e.target.style.border = "1.4px solid #C9D6E2")
                            }
                          />
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          className="btn w-100 mt-2"
                          disabled={isUpdating}
                          style={{
                            background:
                              "linear-gradient(135deg, #6AC8F2, #0DCAF0)",
                            color: "white",
                            height: "46px",
                            borderRadius: "10px",
                            fontWeight: 600,
                            letterSpacing: ".4px",
                            transition: "0.3s",
                            border: "none",
                          }}
                        >
                          {isUpdating ? (
                            <div
                              className="spinner-border spinner-border-sm text-light"
                              role="status"
                            ></div>
                          ) : (
                            "Update"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {filteredByClass.length > studentsPerPage && (
                <div
                  style={{
                    width: "100%",
                    backgroundColor: "#f8f9fa",
                    padding: "14px 0",
                    borderTop: "1px solid #dee2e6",
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    borderRadius: "0 0 10px 10px",
                  }}
                >
                  <ul className="pagination mb-0">
                    {/* Prev */}
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                      style={{ margin: "0 4px" }}
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          currentPage > 1 && paginate(currentPage - 1)
                        }
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #dee2e6",
                          color: currentPage === 1 ? "#aaa" : "#0d6efd",
                          background: "white",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#e9f2ff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "white")
                        }
                      >
                        ‹ Prev
                      </button>
                    </li>

                    {/* Page Numbers */}
                    {Array.from({ length: totalPages })
                      .slice(
                        Math.max(0, currentPage - 3),
                        Math.min(totalPages, currentPage + 2)
                      )
                      .map((_, index) => {
                        const startPage = Math.max(1, currentPage - 2);
                        const pageNumber = startPage + index;
                        return (
                          <li
                            key={pageNumber}
                            className={`page-item ${
                              currentPage === pageNumber ? "active" : ""
                            }`}
                            style={{ margin: "0 4px" }}
                          >
                            <button
                              className="page-link"
                              onClick={() => paginate(pageNumber)}
                              style={{
                                backgroundColor:
                                  currentPage === pageNumber
                                    ? "#0d6efd"
                                    : "white",
                                color:
                                  currentPage === pageNumber
                                    ? "white"
                                    : "#0d6efd",
                                border: "1px solid #dee2e6",
                                borderRadius: "8px",
                                transition: "all 0.3s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.background =
                                  currentPage === pageNumber
                                    ? "#0d6efd"
                                    : "#e9f2ff")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.background =
                                  currentPage === pageNumber
                                    ? "#0d6efd"
                                    : "white")
                              }
                            >
                              {pageNumber}
                            </button>
                          </li>
                        );
                      })}

                    {/* Ellipsis + Last Page */}
                    {currentPage < totalPages - 3 && (
                      <>
                        <li
                          className="page-item disabled"
                          style={{ margin: "0 3px" }}
                        >
                          <span className="page-link">...</span>
                        </li>
                        <li className="page-item" style={{ margin: "0 4px" }}>
                          <button
                            className="page-link"
                            onClick={() => paginate(totalPages)}
                            style={{
                              borderRadius: "8px",
                              border: "1px solid #dee2e6",
                              color: "#0d6efd",
                              background: "white",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.background = "#e9f2ff")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.background = "white")
                            }
                          >
                            {totalPages}
                          </button>
                        </li>
                      </>
                    )}

                    {/* Next */}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                      style={{ margin: "0 4px" }}
                    >
                      <button
                        className="page-link"
                        onClick={() =>
                          currentPage < totalPages && paginate(currentPage + 1)
                        }
                        style={{
                          borderRadius: "8px",
                          border: "1px solid #dee2e6",
                          color:
                            currentPage === totalPages ? "#aaa" : "#0d6efd",
                          background: "white",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.background = "#e9f2ff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.background = "white")
                        }
                      >
                        Next ›
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
          {/* Modal */}
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            className="custom-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {isEdit ? "Edit Student" : "Add New Student"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="name" className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email" className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="mobile" className="mb-3">
                  <Form.Label>Mobile:</Form.Label>
                  <Form.Control
                    type="text"
                    value={
                      isEditingMobile
                        ? formData.mobile
                        : formData.mobile.replace(/\d(?=\d{4})/g, "*")
                    }
                    onChange={handleInputChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </Form.Group>
                <Form.Group controlId="class" className="mb-3">
                  <Form.Label>Class:</Form.Label>
                  <Form.Control
                    as="select"
                    value={formData.class || ""}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select Class
                    </option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  {isEdit ? "Update Student" : "Add Student"}
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {selectedStudent &&
            (isLoading ? (
              <div
                className="position-fixed top-0 left-0 w-100 h-100 d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor: "rgba(255,255,255,0.8)",
                  zIndex: 1000,
                }}
              >
                <iframe
                  src="https://lottie.host/embed/2478cb97-84dc-485a-bb0d-bfd5b7566b46/jOw87Lncdm.json"
                  style={{ width: "300px", height: "300px" }}
                />
              </div>
            ) : (
              <StudentScoreModal
                show={!!selectedStudent}
                onClose={() => setSelectedStudent(null)}
                student={selectedStudent}
              />
            ))}
        </>
      )}
    </>
  );
};

export default StudentTable;
