import "../styles/Students.css";
import Navbar from "./Navbar";
import AddStudent from "./AddStudent";
import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

export default function Students() {
  const [student, setStudent] = useState([]);

  const setStudentFromChild = (studentInfo) => {
    if (student.name === "") {
      setStudent(studentInfo);
    }
    setStudent((prevStudent) => [...prevStudent, { ...studentInfo }]);
  };

  useEffect(() => {
    student.map((studentEl) => {
      console.log(studentEl);
      console.log("hey");
    });
  }, [student]);

  return (
    <div>
      <Navbar />
      <header> Students </header>
      <StudentCard student={student} />
      <AddStudent setStudentFromChild={setStudentFromChild} student={student} />
    </div>
  );
}
