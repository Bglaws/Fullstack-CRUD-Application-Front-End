import "../styles/Home.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  const navigateToCampuses = () => {
    navigate("./Campuses");
  };

  const navigateToStudents = (event) => {
    navigate("./Students");
  };

  return (
    <div className="home">
      <Navbar />
      <h1 id="welcome">Welcome to UniSearch</h1>

      <div id="divs">
        <div className="college-div" onClick={navigateToCampuses}>
          <img
            src="https://www.pngall.com/wp-content/uploads/5/University-PNG-Free-Image.png"
            className="home-college-img"
          />
          <h3 className="home-subheading">
            View all the campuses in the database
          </h3>
        </div>

        <div className="students-div" onClick={navigateToStudents}>
          <img
            src="https://www.freepnglogos.com/uploads/student-png/student-png-algebra-nation-30.png"
            className="home-students-img"
          />
          <h3 className="home-subheading">
            View all the students in the database
          </h3>
        </div>
      </div>
    </div>
  );
}
