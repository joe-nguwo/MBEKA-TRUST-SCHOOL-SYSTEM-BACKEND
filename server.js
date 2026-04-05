require("dotenv").config()
const express = require("express");
const {connectToDatabase} = require("./config/dbconfig.js")
const adminRouter = require("./routes/admin.js")
const studentRouter = require("./routes/student.js")
const Admin = require("./models/admin.js");
const Student = require("./models/students.js");

connectToDatabase()
Admin.sync()
Student.sync()


const PORT = process.env.SERVER_PORT


const app = express();

app.use("/api/v1", adminRouter);
app.use("/api/v1", studentRouter);


app.listen(PORT,console.log(`server running on port ${PORT}`))