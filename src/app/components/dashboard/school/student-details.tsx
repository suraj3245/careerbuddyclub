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
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      toast.error("Error fetching students");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchStudents();
  }, []);

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
      console.error("Error exporting data:", error);
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
            <div className="card-body">
              <h3 className="heading-table text-decoration-underline fw-bold text-center">
                Insight into Student Performance:Career Aptitude Test
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
                    <option value="9th">9th</option>
                    <option value="10th">10th</option>
                    <option value="11th">11th</option>
                    <option value="12th">12th</option>
                  </select>
                </div>
                <div className="col-lg-2 text-end mt-3">
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
                <table className="table card-table table-vcenter text-nowrap">
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
                    {currentFilteredStudents
                      .slice(0, 250)
                      .map((student, index) => (
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
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              {currentFilteredStudents.length > 0 && (
                <nav>
                  <ul className="pagination justify-content-center">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <a
                        href="#!"
                        className="page-link"
                        onClick={() =>
                          currentPage > 1 && paginate(currentPage - 1)
                        }
                      >
                        Previous
                      </a>
                    </li>
                    {Array.from({
                      length: Math.ceil(
                        filteredByClass.length / studentsPerPage
                      ),
                    }).map((_, index) => {
                      const pageIndex = index + 1;
                      return (
                        <li
                          key={pageIndex}
                          className={`page-item ${
                            currentPage === pageIndex ? "active" : ""
                          }`}
                        >
                          <a
                            href="#!"
                            className="page-link"
                            onClick={() => paginate(pageIndex)}
                          >
                            {pageIndex}
                          </a>
                        </li>
                      );
                    })}
                    <li
                      className={`page-item ${
                        currentPage ===
                        Math.ceil(filteredByClass.length / studentsPerPage)
                          ? "disabled"
                          : ""
                      }`}
                    >
                      <a
                        href="#!"
                        className="page-link"
                        onClick={() =>
                          currentPage <
                            Math.ceil(
                              filteredByClass.length / studentsPerPage
                            ) && paginate(currentPage + 1)
                        }
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </nav>
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
