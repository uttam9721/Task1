import React, { useState, useEffect } from "react";
import axios from "axios";

const AddGrade = () => {
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/students").then((res) => setStudents(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5000/api/add-grade/${studentId}`, { subject, grade });
      alert("✅ Grade Added Successfully!");
      setStudentId("");
      setSubject("");
      setGrade("");
    } catch (error) {
      alert("❌ Error adding grade: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Grade</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <div className="mb-3">
          <label className="form-label">Select Student</label>
          <select
            className="form-control"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            {students.map((s) => (
              <option key={s._id} value={s._id}>
                {s.name} ({s.rollNo})
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Grade</label>
          <select
            className="form-control"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success">Add Grade</button>
      </form>
    </div>
  );
};

export default AddGrade;
