const express = require("express")
const student = require("../controllers/register.js")
const Router = express.Router()

Router.post("/student/register",student.registerStudent)

module.exports = Router