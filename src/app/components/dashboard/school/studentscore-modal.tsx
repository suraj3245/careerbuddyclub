import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Modal, Button, Row, Col, Card } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import './studentscore-modal.css'; 

interface StudentScore {
  name: string;
  score: number;
}

interface Student {
  name: string;
  realistic_score: number | "N/A";
  investigative_score: number;
  artistic_score: number;
  social_score: number;
  enterprising_score: number;
  conventional_score: number;
  topThreeScores?: StudentScore[];
}

interface StudentScoreModalProps {
  show: boolean;
  student: Student | null;
  onClose: () => void;
}

const StudentScoreModal: React.FC<StudentScoreModalProps> = ({
  show,
  student,
  onClose,
}) => {
  const modalContentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [skills, setSkills] = useState<string[]>([]);

  const fetchSkills = async (letters: string) => {
    const token = localStorage.getItem("token");
    const headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    const bodyContent = JSON.stringify({ letters });

    const reqOptions = {
      url: "https://test.careerbuddyclub.com:8080/api/students/getskillsbyletters",
      method: "POST",
      headers: headersList,
      data: bodyContent,
    };

    try {
      const response = await axios.request(reqOptions);
      console.log("Skills response:", response.data);
      if (response.data && Array.isArray(response.data)) {
        return response.data;
      } else {
        console.error("No skills found in response or response format is incorrect");
        return [];
      }
    } catch (error: any) {
      console.error("Error fetching skills:", error.message);
      return [];
    }
  };

  const fetchTopSkills = async () => {
    if (student?.topThreeScores) {
      const topLetters = student.topThreeScores
        .map((score: StudentScore) => score.name[0])
        .join("");
      console.log("Top letters for API call:", topLetters);

      const skills = await fetchSkills(topLetters);
      console.log("Fetched skills:", skills); // Debug statement
      setSkills(skills.slice(0, 12)); // Limit to 12 skills
    } else {
      console.error("No top three scores available.");
    }
  };

  useEffect(() => {
    if (show && student?.realistic_score !== "N/A" && student?.topThreeScores) {
      fetchTopSkills();
    }
  }, [show, student]);

  const downloadChartAsPDF = () => {
    if (modalContentRef.current) {
      // Hide the button before capturing
      if (buttonRef.current) buttonRef.current.style.display = "none";

      html2canvas(modalContentRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, "PNG", 0, 0, width, height);
        pdf.save("student_scores.pdf");

        // Show the button after capturing
        if (buttonRef.current) buttonRef.current.style.display = "block";
      });
    }
  };

  return (
    <Modal show={show} onHide={onClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="text-center text-primary w-100">Career Aptitude Test Results</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div ref={modalContentRef}>
          {student ? (
            student.realistic_score !== "N/A" ? (
              <>
                <Card className="mb-4 general-card">
                  <Card.Body>
                    <Card.Title className="text-center text-primary">{student.name}'s Scores</Card.Title>
                    <ReactApexChart
                      options={{
                        chart: {
                          type: "bar",
                        },
                        xaxis: {
                          categories: [
                            "Realistic",
                            "Investigative",
                            "Artistic",
                            "Social",
                            "Enterprising",
                            "Conventional",
                          ],
                        },
                        plotOptions: {
                          bar: {
                            distributed: true,
                          },
                        },
                        colors: [
                          "#FF5733", // Realistic
                          "#33FF57", // Investigative
                          "#3357FF", // Artistic
                          "#FF33A1", // Social
                          "#FF8C33", // Enterprising
                          "#8C33FF", // Conventional
                        ],
                      }}
                      series={[
                        {
                          name: "Score",
                          data: [
                            student.realistic_score,
                            student.investigative_score,
                            student.artistic_score,
                            student.social_score,
                            student.enterprising_score,
                            student.conventional_score,
                          ],
                        },
                      ]}
                      type="bar"
                      height={350}
                    />
                  </Card.Body>
                </Card>

                {student.topThreeScores && (
                  <Card className="mb-4 general-card">
                    <Card.Body>
                      <Card.Title className="text-center text-primary">Top 3 Scores</Card.Title>
                      <ul className="list-unstyled text-center">
                        {student.topThreeScores.map((score, index) => (
                          <li key={index}>
                            {score.name}: {score.score}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                )}

                <Card className="mb-4">
                  <Card.Body>
                    <Card.Title className="text-center text-primary mt-2 mb-2">Popular Career Choices</Card.Title>
                    <Row>
                      {skills.map((item, index) => (
                        <Col key={index} lg={3} md={4} sm={6} className="mb-3">
                          <Card className="text-center popular-career-choices-card shadow-sm">
                            <Card.Body>{item}</Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>

                <div className="text-center">
                  <Button ref={buttonRef} onClick={downloadChartAsPDF} variant="primary" className="col-lg-12">
                    Download as PDF
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center text-primary">Haven't Applied for the CAT Exam Yet?</div>
            )
          ) : (
            <div className="text-center text-primary">No student data available</div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default StudentScoreModal;
