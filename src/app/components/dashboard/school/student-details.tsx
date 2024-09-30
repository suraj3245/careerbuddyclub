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
    email: "",
    mobile: "",
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
      console.log("Response data:", response.data);
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

      // Dynamically add the 'from' property
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

      const response = await axios.request(reqOptions);
      console.log("Response Data:", response.data);

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
    setShowModal(true); // Show the modal immediately when editing
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentFilteredStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const exportToExcel = async () => {
    try {
      setLoading(true);
      await fetchStudents();

      const filteredStudents = students.map((student) => ({
        name: student.name,
        email: student.email,
        mobile: student.mobile,
        from: student.from,
        realistic_score: student.realistic_score,
        investigative_score: student.investigative_score,
        artistic_score: student.artistic_score,
        social_score: student.social_score,
        enterprising_score: student.enterprising_score,
        conventional_score: student.conventional_score,
      }));

      const worksheet = XLSX.utils.json_to_sheet(filteredStudents);
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

  const handleDownload = (student: any) => {
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

    setSelectedStudent({ ...student, topThreeScores });
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
          <h3 className="mb-0 heading-table styled-heading ms-4">Students Test Result </h3>
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
            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end text-md-end text-sm-start">
              <button
                className="btn btn-primary me-2 btn-table"
                onClick={handleShowModal}
              >
                Add New
              </button>
              <button
                className="btn btn-info btn-table btn-export"
                onClick={exportToExcel}
              >
                Export Excel
              </button>
            </div>
          </div>
          </div>
          </div>

          <div className="card mb-4 card_2">
          <div className="card-body">
            <div className="table-responsive"
              style={{ overflow: "auto", fontSize: "13px !important" }}
            >
              <table className="table card-table table-bordered table-vcenter text-nowrap table-striped">
                <thead className="bg-primary text-white custom-thead text-primary">
                  <tr>
                    <th className="bg-primary text-white">NO</th>
                    <th className="bg-primary text-white">NAME</th>
                    <th className="bg-primary text-white">EMAIL</th>
                    <th className="bg-primary text-white">MOBILE</th>
                    <th className="bg-primary text-white">REALISTIC</th>
                    <th className="bg-primary text-white">INVESTIGATIVE</th>
                    <th className="bg-primary text-white">ARTISTIC</th>
                    <th className="bg-primary text-white">SOCIAL</th>
                    <th className="bg-primary text-white">ENTERPRISING</th>
                    <th className="bg-primary text-white">CONVENTIONAL</th>
                    <th className="bg-primary text-white">Edit</th>
                    <th className="bg-primary text-white">Results</th>
                  </tr>
                </thead>
                <tbody>
                  {currentFilteredStudents.map((student, index) => (
                    <tr key={student.id}>
                      <td>{indexOfFirstStudent + index + 1}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.mobile}</td>
                      <td>{student.realistic_score}</td>
                      <td>{student.investigative_score}</td>
                      <td>{student.artistic_score}</td>
                      <td>{student.social_score}</td>
                      <td>{student.enterprising_score}</td>
                      <td>{student.conventional_score}</td>
                      <td>
                        <BorderColorIcon
                          onClick={() => handleEdit(student)}
                          style={{ cursor: "pointer" }}
                          color="primary"
                        />
                      </td>
                      <td>
                        <DownloadIcon
                          onClick={() => handleDownload(student)}
                          style={{ cursor: "pointer" }}
                          color="primary"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
            <div className="pagination justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  {Array.from(
                    {
                      length: Math.ceil(
                        filteredStudents.length / studentsPerPage
                      ),
                    },
                    (_, i) => (
                      <li
                        key={i}
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                      >
                        <a
                          className="page-link"
                          href="#"
                          onClick={() => paginate(i + 1)}
                        >
                          {i + 1}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </nav>
            </div>
          </div>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <div className="container d-flex  f align-items-center">
              <Modal.Title>
                {isEdit ? "Edit Student" : "Add New Student"}
              </Modal.Title>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="mobile">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                {/* { <Form.Group controlId="from">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="text"
                    value={formData.from}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group> } */}
                <Button variant="primary" type="submit" className="mt-3 col-lg-12">
                  {isEdit ? "Update" : "Add"}
                </Button>
              </Form>
            </Modal.Body>
          </Modal>

          <StudentScoreModal
            show={Boolean(selectedStudent)}
            student={selectedStudent}
            onClose={() => setSelectedStudent(null)}
          />
        </>
      )}
    </>
  );
};

export default StudentTable;
