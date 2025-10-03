import express from "express";
import { addStudent, getStudents, addGrade, deleteStudent } from "../controllers/studentController.js";

const router = express.Router();

router.post("/add-student", addStudent);
router.get("/students", getStudents);
router.post("/add-grade/:id", addGrade);
router.delete("/student/:id", deleteStudent);

export default router;
