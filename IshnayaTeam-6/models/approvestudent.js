const mongoose = require("mongoose");

const approvedStudentSchema = new mongoose.Schema({
    parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "StudentRegistration", required: true },
    student_name: { type: String, required: true },
    dob: { type: Date, required: true },
    blood_group: { type: String },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    disability_type: { type: String, required: true },
    disability_description: { type: String },
  
    special_requirements: { type: String },
    previous_interventions: { type: String },
    recommended_programs: { type: String },
  
    teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: "ApprovedEmployee" }, // Assigned teacher
    join_date: { type: Date, required: true, default: Date.now }, // Date student joins school
    approved_at: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("ApprovedStudent", approvedStudentSchema);
  