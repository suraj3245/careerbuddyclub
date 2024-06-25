import axios from "axios";
import React, { useState, useEffect } from "react";
import { Modal, Button, Spinner } from "react-bootstrap";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import * as XLSX from "xlsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentTable.css";

const StudentTable: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEdit, setIsEdit] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    from: "",
    realistic_score: "",
    investigative_score: "",
    artistic_score: "",
    social_score: "",
    enterprising_score: "",
    conventional_score: "",
  });

  const handleCloseModal = () => {
    setShowModal(false);
    setIsEdit(false);
    setCurrentStudentId(null);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      from: "",
      realistic_score: "",
      investigative_score: "",
      artistic_score: "",
      social_score: "",
      enterprising_score: "",
      conventional_score: "",
    });
  };

  const handleShowModal = () => setShowModal(true);

  const fetchStudents = async () => {
    try {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify({
        place: "dehradun",
      });

      const response = await axios.post(
        "https://test.careerbuddyclub.com:8080/api/students/getstudentsbyplace",
        bodyContent,
        { headers: headersList }
      );

      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
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
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const getPageRange = () => {
    const start = (currentPage - 1) * studentsPerPage + 1;
    const end = Math.min(currentPage * studentsPerPage, students.length);
    return `${start}-${end}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
      };

      const bodyContent = JSON.stringify(formData);
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
      console.log(response.data);

      fetchStudents();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding or updating student:", error);
    }
  };

  const handleEdit = (student: any) => {
    setFormData(student);
    setCurrentStudentId(student.id);
    setIsEdit(true);
    handleShowModal();
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const exportToExcel = async () => {
    try {
      setLoading(true); // Show loading spinner
      await fetchStudents(); // Fetch the latest student data

      // Map through students data to extract only required fields
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
    } catch (error) {
      console.error("Error exporting data:", error);
    } finally {
      setLoading(false); // Hide loading spinner
    }
  };

  return (
    <>
      {loading ? (
        <div
          className=" student-table d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <iframe
            src="https://lottie.host/embed/b6d22d1e-15ca-4192-9664-3c09fea20a16/RsXVJpOBmE.json"
            style={{ width: "300px", height: "300px" }}
          ></iframe>
        </div>
      ) : (
        <>
          <h2 className="mb-4">Student Table</h2>
          <div className="row justify-content-between align-items-center p-4">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center mb-3">
              <input
                type="text"
                placeholder="Search by name"
                className="form-control me-2"
                value={searchTerm}
                onChange={handleSearchInputChange}
              />
              {/* <button className="btn btn-primary">Search</button> */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-lg-end text-md-end text-sm-start">
              <button
                className="btn btn-primary me-2 btn-table"
                onClick={handleShowModal}
              >
                Add New
              </button>
              <button className="btn btn-info btn-table btn-export" onClick={exportToExcel}>
                Export Excel
              </button>
            </div>
          </div>

          <div className="container">
            <div className="table-responsive" style={{ overflow: "auto" }}>
              <table className="table table-bordered">
                <thead className="bg-primary text-white custom-thead text-primary">
                  <tr>
                    <th>NO</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>MOBILE</th>
                    <th>REALISTIC</th>
                    <th>INVESTIGATIVE</th>
                    <th>ARTISTIC</th>
                    <th>SOCIAL</th>
                    <th>ENTERPRISING</th>
                    <th>CONVENTIONAL</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents
                    .slice(indexOfFirstStudent, indexOfLastStudent)
                    .map((student, index) => (
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
                          <button
                            className="btn btn-link"
                            onClick={() => handleEdit(student)}
                          >
                            <BorderColorIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="pagination-container">
              <ul className="pagination justify-content-center">
                <li
                  className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage - 1)}
                  >
                    Previous
                  </button>
                </li>
                {Array.from({
                  length: Math.ceil(students.length / studentsPerPage),
                }).map((_, index) => (
                  <li
                    className={`page-item ${
                      currentPage === index + 1 ? "active" : ""
                    }`}
                    key={index}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li
                  className={`page-item ${
                    currentPage === Math.ceil(students.length / studentsPerPage)
                      ? "disabled"
                      : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(currentPage + 1)}
                  >
                    Next
                  </button>
                </li>
              </ul>
              <div className="pagination-info">
                {students.length > 0 && (
                  <span>
                    Showing {getPageRange()} of {students.length} students
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        className="modal-dialog-scrollable"
      >
        <Modal.Header closeButton>
          <Modal.Title>{isEdit ? "Edit Student" : "Add Student"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="from" className="form-label">
                  From:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="realistic_score" className="form-label">
                  Realistic Score:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="realistic_score"
                  value={formData.realistic_score}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="investigative_score" className="form-label">
                  Investigative Score:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="investigative_score"
                  value={formData.investigative_score}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="artistic_score" className="form-label">
                  Artistic Score:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="artistic_score"
                  value={formData.artistic_score}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="social_score" className="form-label">
                  Social Score:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="social_score"
                  value={formData.social_score}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="enterprising_score" className="form-label">
                  Enterprising Score:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="enterprising_score"
                  value={formData.enterprising_score}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="conventional_score" className="form-label">
                  Conventional Score:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="conventional_score"
                  value={formData.conventional_score}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                {isEdit ? "Update Student" : "Add Student"}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StudentTable;
