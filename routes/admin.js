const express = require("express")
const {loginAdmin,loginStudent} = require("../controllers/login.js")
const adminRegister = require("../controllers/register.js")

const  middle =  require( "../middleware/login.js")

Router = express.Router()

Router.post("/login/admin",middle,loginAdmin)
Router.post("/admin/register",adminRegister.registerAdmin)
Router.post("/login/student",loginStudent)

module.exports = Router

