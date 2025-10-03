import React, { useEffect, useState } from "react";
import axios from "axios";

const Report = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/students").then((res) => setStudents(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Student Report</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Subjects & Grades</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.rollNo}</td>
              <td>
                {s.grades.length > 0 ? (
                  <ul>
                    {s.grades.map((g, idx) => (
                      <li key={idx}>
                        {g.subject}: <strong>{g.grade}</strong>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <span>No grades yet</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
