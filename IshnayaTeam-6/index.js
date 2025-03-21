const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
require('dotenv').config();
const PORT = process.env.PORT || 4000;


require("./config/database").connect();




app.use(express.json());

// Routes
app.use("/api/students", studentRoutes);
app.use("/api/employees", employeeRoutes);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})