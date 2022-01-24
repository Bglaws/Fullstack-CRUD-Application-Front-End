import React from "react";
import "../styles/Students.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddStudent(props) {
  useEffect(() => {
    console.log(props.student.name);
  }, [
    props.student.name,
    props.student.email,
    props.student.gpa,
    props.student.url,
  ]);

  const [updatedStudent, setUpdatedStudent] = useState({
    name: "",
    email: "",
    gpa: "",
    url: "",
  });

  const handleChange = (event) => {
    const inputField = event.target.name;
    const inputValue = event.target.value;
    setUpdatedStudent((previousUpdatedStudent) => ({
      ...previousUpdatedStudent,
      [inputField]: inputValue,
    }));
    console.log(updatedStudent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setStudentFromChild(updatedStudent);
  };

  return (
    <div className="addStudent">
      <form className="createStudentForm" onSubmit={handleSubmit}>
        <div>
          <label className="student-label">Student Name </label>
          <input
            type="text"
            name="name"
            className="student-input"
            value={updatedStudent.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="student-label">Email </label>
          <input
            type="text"
            name="email"
            className="student-input"
            value={updatedStudent.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="student-label">GPA</label>
          <input
            type="text"
            name="gpa"
            className="student-input"
            value={updatedStudent.gpa}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="student-label">URl</label>
          <input
            type="text"
            name="url"
            className="student-input"
            value={updatedStudent.url}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="submitButton"
            type="submit"
            value="Add student"
            className="submit"
          />
        </div>
      </form>
    </div>
  );
}
