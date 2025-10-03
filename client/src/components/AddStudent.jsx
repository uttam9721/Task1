import React, { useState } from "react";
import axios from "axios";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/add-student", { name, rollNo });
      alert(" Student Added Successfully!");
      setName("");
      setRollNo("");
    } catch (error) {
      alert(" Error adding student: " + error.message);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit} className="p-3 border rounded">
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Roll Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter roll number"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
