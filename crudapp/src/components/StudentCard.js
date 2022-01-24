import React from "react";
import { useState } from "react";
import AddCampus from "./AddStudent";
import "../styles/Students.css";

export default function StudentCard(props) {
  return (
    <div className="student-card">
      {props.student &&
        props.student.map((individualStudent, i) => {
          return (
            <div key={i} className="one-student">
              <img src={individualStudent.name} />
              <h1>{individualStudent.email}</h1>
              <h1>{individualStudent.gpa}</h1>
              <h1>{individualStudent.url}</h1>
            </div>
          );
        })}

      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}
