import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary text-white px-4 py-2 d-flex justify-content-between">
      <h3>Student Grade Management System</h3>
      <div>
        <Link className="btn btn-primary mx-1" to="/">Home</Link>
        <Link className="btn btn-primary mx-1" to="/add-student">Add Student</Link>
        <Link className="btn btn-primary mx-1" to="/add-grade">Add Grade</Link>
        <Link className="btn btn-primary mx-1" to="/report">Report</Link>
      </div>
    </nav>
  );
};

export default Navbar;
