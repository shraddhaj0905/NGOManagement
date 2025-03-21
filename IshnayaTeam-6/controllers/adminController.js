const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// Import Models
const Admin = require("../models/admin");
const StudentRegistration = require("../models/studentregister"); // New student signups
const ApprovedStudent = require("../models/approvestudent"); // Approved students database

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "babbar";

/** 
 * Admin Login
 */
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find Admin
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ message: "Invalid email or password" });

    // Compare Password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    // Generate Token
    const token = jwt.sign({ id: admin._id, role: "admin" }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/** 
 * Fetch Registered Students (Pending Approval)
 */
exports.getRegisteredStudents = async (req, res) => {
  try {
    const students = await StudentRegistration.find({}); // Fetch all students from the registration database
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};