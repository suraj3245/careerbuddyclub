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
  const [currentStudentId, setCurrentStudentId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    realistic_score: "N/A",
    investigative_score: "N/A",
    artistic_score: "N/A",
    social_score: "N/A",
    enterprising_score: "N/A",
    conventional_score: "N/A",
  });

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setCurrentStudentId(null);
    setSelectedStudent(null);
    setFormData({
      name: "",
      class: "",
      realistic_score: "N/A",
      investigative_score: "N/A",
      artistic_score: "N/A",
      social_score: "N/A",
      enterprising_score: "N/A",
      conventional_score: "N/A",
    });
  };

  const handleShowModal = () => {
    setShowModal(true);
    setIsEdit(false);
  };

  const fetchStudents = async () => {
    try {
      const headersList = {
        Accept: "/",
        "Content-Type": "application/json",
      };
      const school = localStorage.getItem("schoolName");
      const bodyContent = JSON.stringify({
        place: school,
      });

      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getstudentsbyplace",
        bodyContent,
        { headers: headersList }
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

  const studentsPerPage = 10;
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const headersList = {
        Accept: "/",
        "Content-Type": "application/json",
      };

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
      const updatedFormData = {
        ...formDataToSend,
        from: schoolName,
      };

      const bodyContent = JSON.stringify(updatedFormData);

      let reqOptions;
      if (isEdit && currentStudentId !== null) {
        reqOptions = {
          url: `https://test.careerbuddyclub.com:8080/api/students/studentupdate/${currentStudentId}`,
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };
      } else {
        reqOptions = {
          url: "https://test.careerbuddyclub.com:8080/api/students/studentstore",
          method: "POST",
          headers: headersList,
          data: bodyContent,
        };
      }

      await axios.request(reqOptions);
      fetchStudents();
      handleCloseModal();
      toast.success(`Student ${isEdit ? "updated" : "added"} successfully`);
    } catch (error) {
      console.error("Error adding or updating student:", error);
      toast.error("Error adding or updating student");
    }
  };

  const handleEdit = (student: any) => {
    setFormData(student);
    setCurrentStudentId(student.id);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .map((student) => {
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

      const topThreeScoresAbbr = topThreeScores
        .map((s) => s.name.charAt(0))
        .join("");
      return { ...student, topThreeScores, topThreeScoresAbbr };
    });

  const currentFilteredStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const exportToExcel = async () => {
    try {
      setLoading(true);
      await fetchStudents();

      const filteredStudents = students.map((student) => {
        const scores = [
          { name: "Realistic", score: student.realistic_score },
          { name: "Investigative", score: student.investigative_score },
          { name: "Artistic", score: student.artistic_score },
          { name: "Social", score: student.social_score },
          { name: "Enterprising", score: student.enterprising_score },
          { name: "Conventional", score: student.conventional_score },
        ];

        // Sort scores in descending order and take the top three
        scores.sort((a, b) => b.score - a.score);
        const topThreeScores = scores.slice(0, 3);

        // Get only the first letter of each score name
        const topThreeScoresFormatted = topThreeScores
          .map((s) => s.name.charAt(0))
          .join("");

        return {
          Name: student.name,
          Class: student.class,
          School: student.from,
          Realistic_score: student.realistic_score,
          Investigative_score: student.investigative_score,
          Artistic_score: student.artistic_score,
          Social_score: student.social_score,
          Enterprising_score: student.enterprising_score,
          Conventional_score: student.conventional_score,
          Top_scores: topThreeScoresFormatted,
        };
      });

      const headers = [
        "Name",
        "Class",
        "From",
        "Realistic Score",
        "Investigative Score",
        "Artistic Score",
        "Social Score",
        "Enterprising Score",
        "Conventional Score",
        "Top Scores",
      ];

      // Convert the filtered students to a worksheet
      const worksheet = XLSX.utils.json_to_sheet(filteredStudents);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

      // Write to file
      XLSX.writeFile(workbook, "students_data.xlsx");
      toast.success("Data exported successfully");
    } catch (error) {
      console.error("Error exporting data:", error);
      toast.error("Error exporting data");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (student: any) => {
    setSelectedStudent(student);
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
          ></iframe>
        </div>
      ) : (
        <>
          <div className="card mb-1 card_1">
            <div className="card-body">
              <h3 className="mb-0 heading-table styled-heading ms-4 text-decoration-underline fw-bold">
                Insight into Student Performance:Career Aptitude Test{" "}
              </h3>
              <div className="row justify-content-between align-items-center p-4">
                <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center mb-3">
                  <input
                    type="text"
                    placeholder="Search by name"
                    className="form-control me-2"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end text-md-end text-sm-center align-items-center">
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
                <table className="table card-table table-bordered table-vcenter text-nowrap table-striped">
                  <thead className="table-light">
                    <tr>
                      <th>No.</th>
                      <th>Name</th>
                      {/* <th>Class</th> */}
                      <th>School</th>
                      <th>Realistic</th>
                      <th>Investigative</th>
                      <th>Artistic</th>
                      <th>Social</th>
                      <th>Enterprising</th>
                      <th>Conventional</th>
                      <th>Top Scores</th>
                      <th>Edit</th>
                      <th>Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentFilteredStudents.map((student, index) => (
                      <tr key={student.id}>
                        <td>{indexOfFirstStudent + index + 1}</td>
                        <td>{student.name}</td>
                        {/* <td>{student.class}</td> */}
                        <td>{student.from}</td>
                        <td>{student.realistic_score}</td>
                        <td>{student.investigative_score}</td>
                        <td>{student.artistic_score}</td>
                        <td>{student.social_score}</td>
                        <td>{student.enterprising_score}</td>
                        <td>{student.conventional_score}</td>
                        <td>{student.topThreeScoresAbbr}</td>
                        <td>
                          <Button
                            variant="outline-primary"
                            size="sm"
                            onClick={() => handleEdit(student)}
                          >
                            <BorderColorIcon />
                          </Button>
                        </td>
                        <td>
                          <Button
                            variant="outline-primary me-2"
                            size="sm"
                            onClick={() => handleDownload(student)}
                          >
                            View
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {currentFilteredStudents.length > 0 && (
                <nav>
                  <ul className="pagination justify-content-center">
                    {/* Show the "Previous" button */}
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

                    {currentPage > 3 && (
                      <>
                        <li
                          className={`page-item ${
                            currentPage === 1 ? "active" : ""
                          }`}
                        >
                          <a
                            href="#!"
                            className="page-link"
                            onClick={() => paginate(1)}
                          >
                            1
                          </a>
                        </li>
                        <li className="page-item disabled">
                          <span className="page-link">...</span>
                        </li>
                      </>
                    )}

                    {/* Pages around the current page */}
                    {Array.from({
                      length: Math.min(
                        5,
                        Math.ceil(filteredStudents.length / studentsPerPage)
                      ),
                    }).map((_, index) => {
                      const pageIndex = Math.max(1, currentPage - 2) + index;
                      return (
                        pageIndex <=
                          Math.ceil(
                            filteredStudents.length / studentsPerPage
                          ) && (
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
                        )
                      );
                    })}

                    {/* If the last page isn't in view, show an ellipsis and the last page */}
                    {currentPage <
                      Math.ceil(filteredStudents.length / studentsPerPage) -
                        2 && (
                      <>
                        <li className="page-item disabled">
                          <span className="page-link">...</span>
                        </li>
                        <li
                          className={`page-item ${
                            currentPage ===
                            Math.ceil(filteredStudents.length / studentsPerPage)
                              ? "active"
                              : ""
                          }`}
                        >
                          <a
                            href="#!"
                            className="page-link"
                            onClick={() =>
                              paginate(
                                Math.ceil(
                                  filteredStudents.length / studentsPerPage
                                )
                              )
                            }
                          >
                            {Math.ceil(
                              filteredStudents.length / studentsPerPage
                            )}
                          </a>
                        </li>
                      </>
                    )}

                    {/* Show the "Next" button */}
                    <li
                      className={`page-item ${
                        currentPage ===
                        Math.ceil(filteredStudents.length / studentsPerPage)
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
                              filteredStudents.length / studentsPerPage
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

          {/* Modal to Add / Edit Student */}
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

                <Form.Group controlId="class" className="mb-3">
                  <Form.Label>Class:</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.class}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  {isEdit ? "Update Student" : "Add Student"}
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          {/* Student Score Modal */}
          {selectedStudent && (
            <StudentScoreModal
              show={!!selectedStudent}
              onClose={() => setSelectedStudent(null)}
              student={selectedStudent}
            />
          )}
        </>
      )}
    </>
  );
};

export default StudentTable;
