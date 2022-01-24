import React from "react";
import "../styles/Campuses.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCampus(props) {
  useEffect(() => {
    console.log(props.campus.name);
  }, [props.campus.name, props.campus.address, props.campus.url]);

  const [updatedCampus, setUpdatedCampus] = useState({
    name: "",
    address: "",
    url: "",
  });

  const handleChange = (event) => {
    const inputField = event.target.name;
    const inputValue = event.target.value;
    setUpdatedCampus((previousUpdatedCampus) => ({
      ...previousUpdatedCampus,
      [inputField]: inputValue,
    }));
    console.log(updatedCampus);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setCampusFromChild(updatedCampus);
  };

  return (
    <div className="addCampus">
      <form className="createCampusForm" onSubmit={handleSubmit}>
        <div>
          <label className="campus-name">Campus Name </label>
          <input
            type="text"
            name="name"
            className="campus-input"
            value={updatedCampus.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="campus-address">Address </label>
          <input
            type="text"
            name="address"
            className="campus-input"
            value={updatedCampus.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="campus-url">Image Url </label>
          <input
            type="text"
            name="url"
            className="campus-input"
            value={updatedCampus.url}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="submitButton"
            type="submit"
            value="Add Campus"
            className="submit"
          />
        </div>
      </form>
    </div>
  );
}
