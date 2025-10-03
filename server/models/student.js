// models/Student.js
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: String, required: true, unique: true },
  grades: [
    {
      subject: String,
      grade: String
    }
  ]
});

export const Student= mongoose.model("Student", studentSchema);
