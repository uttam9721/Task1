import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentTable = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("All");
  const [gradeFilter, setGradeFilter] = useState("Default");

  useEffect(() => {
    axios.get("http://localhost:5000/api/students").then((res) => setStudents(res.data));
  }, []);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex gap-2 mb-3">
        <input
          type="text"
          placeholder="Search by name..."
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="form-control" onChange={(e) => setSubjectFilter(e.target.value)}>
          <option>All subjects</option>
          <option>Math</option>
          <option>Science</option>
          <option>English</option>
        </select>
        <select className="form-control" onChange={(e) => setGradeFilter(e.target.value)}>
          <option>Default</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>Student Name</th>
            <th>Student Roll no.</th>
            <th>Subject</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s) =>
            s.grades.map((g, idx) => (
              <tr key={idx}>
                <td>{s.name}</td>
                <td>{s.rollNo}</td>
                <td>{g.subject}</td>
                <td>{g.grade}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => axios.delete(`http://localhost:5000/api/student/${s._id}`)
                      .then(() => setStudents(students.filter(st => st._id !== s._id)))
                    }
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
