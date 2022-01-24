import React from "react";
import { useState } from "react";
import AddCampus from "./AddCampus";
import "../styles/Campuses.css";

export default function CampusCard(props) {
  return (
    <div className="campus-card">
      {props.campus &&
        props.campus.map((individualCampus, i) => {
          return (
            <div key={i} className="one-campus">
              <img src={individualCampus.url} />
              <h1>{individualCampus.name}</h1>
              <h1>{individualCampus.address}</h1>
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
