import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentTable from "./components/StudentTable";
import AddStudent from "./components/AddStudent";
import AddGrade from "./components/AddGrade";
import Report from "./components/Report";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<StudentTable />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-grade" element={<AddGrade />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
