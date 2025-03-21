const mongoose = require("mongoose");

const studentRegistrationSchema = new mongoose.Schema({
  parent_name: { type: String, required: true },
  parent_email: { type: String, required: true, unique: true },
  password: { type: String, required: true },  // Hashed password
  contact_number: { type: String, required: true },
  address: { type: String, required: true },

  student_name: { type: String, required: true },
  dob: { type: Date, required: true },
  blood_group: { type: String },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  disability_type: { type: String, required: true },
  disability_description: { type: String },

  special_requirements: { type: String },
  previous_interventions: { type: String },

  appointment_date: { type: Date },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("StudentRegistration", studentRegistrationSchema);
