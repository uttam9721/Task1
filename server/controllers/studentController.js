import { Student } from "../models/student.js";

// Add new student
export const addStudent = async (req, res) => {
    const {name,rollNo,grades}=req.body;
  try {
    const student=Student.create({
        name,
        rollNo,
        grades,

    })
    res.status(201).json({message:'Student added',student});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add grade
export const addGrade = async (req, res) => {
  try {
    const { subject, grade } = req.body;
    const student = await Student.findById(req.params.id);
    student.grades.push({ subject, grade });
    await student.save();
    res.json(student);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete student
export const deleteStudent = async (req, res) => {
    const id =req.params.id
  try {
    await Student.findByIdAndDelete(id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
