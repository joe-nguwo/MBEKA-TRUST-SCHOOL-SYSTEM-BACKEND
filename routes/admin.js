import  express from "express"
import {loginAdmin,loginStudent} from "../controllers/login.js"
import  { registerAdmin} from "../controllers/register.js"


const Router = express.Router()

Router.post("/login/admin",loginAdmin)
Router.post("/admin/register",registerAdmin)
Router.post("/login/student",loginStudent)

export default Router 

