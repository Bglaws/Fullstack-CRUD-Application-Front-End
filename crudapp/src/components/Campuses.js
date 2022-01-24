import "../styles/Campuses.css";
import Navbar from "./Navbar";
import AddCampus from "./AddCampus";
import CampusCard from "./CampusCard";
import { useState, useEffect } from "react";

export default function Campuses() {
  const [campus, setCampus] = useState([]);

  const setCampusFromChild = (campusInfo) => {
    if (campus.name === "") {
      setCampus(campusInfo);
    }
    setCampus((prevCampus) => [...prevCampus, { ...campusInfo }]);
  };

  useEffect(() => {
    campus.map((campusEl) => {
      console.log(campusEl);
      console.log("hey");
    });
  }, [campus]);

  return (
    <div>
      <Navbar />
      <header> Campuses </header>
      <CampusCard campus={campus} />
      <AddCampus setCampusFromChild={setCampusFromChild} campus={campus} />
    </div>
  );
}
