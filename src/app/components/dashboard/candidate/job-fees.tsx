"use client";
import React from "react";

// props type
type IProps = {
  setIsOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  courses: Array<{
    id: number;
    courseName: string;
    stream: string;
    fees: number;
  }>;
};

const JobFees = ({ setIsOpenSidebar, courses }: IProps) => {
  return (
    <>
      <div className="dashboard-body">
        <div className="position-relative">
          <h2 className="main-title">Job Fees</h2>
          <h3 className="sub-title">UG Courses</h3>
          <table className="table">
            <thead>
              <tr>
                <th>S.NO</th>
                <th>COURSES</th>
                <th>STREAM</th>
                <th>FEES</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course.id}>
                  <td>{index + 1}</td>
                  <td>{course.courseName}</td>
                  <td>{course.stream}</td>
                  <td>{course.fees.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* video modal start */}

      {/* video modal end */}
    </>
  );
};

export default JobFees;
