const express = require("express")
const {loginAdmin,loginStudent} = require("../controllers/login")
const  middle =  require( "../middleware/login")

Router = express.Router()

Router.post("/login/admin",middle,loginAdmin)
Router.post("/login/student",loginStudent)

module.exports = Router