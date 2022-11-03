import useStudents from "./services/useStudents.js";
import "./App.css";
import { Students } from "./Students";
import { Routes, Route, NavLink } from "react-router-dom";
import { StudentDetail } from "./StudentDetail";
import { Results } from "./Results";

const App = () => {
  const students = useStudents();
  const subjects = ["React", "HTML", "CSS", "JS"];
  // console.log(students);

  return (
    <div className="App">
      <nav>
        <NavLink className="link" to="/students">
          Students
        </NavLink>
        <NavLink className="link" to="/results">
          Student Results
        </NavLink>
      </nav>
      <div className="Instructions">
        <div className="block">
          <Routes>
            <Route
              path="/students"
              element={<Students students={students} />}
            />
            <Route
              path="/results"
              element={<Results students={students} subjects={subjects} />}
            />
            <Route
              path="/students/:someId"
              element={<StudentDetail students={students} />}
            />
            <Route index element={<div>Homepage</div>} />
            <Route path="*" element={<div>My own 404 page!</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
