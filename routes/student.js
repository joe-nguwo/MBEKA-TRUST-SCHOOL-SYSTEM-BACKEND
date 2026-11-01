import  express from "express"
import { addStudent } from "../controllers/student.js"
import { allStudents } from "../controllers/student.js"
import AuthenticateToken from "../middleware/jwt.js"
const Router = express.Router()

Router.post("/students/register", AuthenticateToken,addStudent)
// Router.post("/students/register",addStudent)
Router.get("/student/all", AuthenticateToken,allStudents)
Router.get("student/num", AuthenticateToken,)


export default Router 