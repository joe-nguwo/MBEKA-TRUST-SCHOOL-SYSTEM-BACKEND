import  express from "express"
import { allStudents,numStudents, addStudent } from "../controllers/student.js"
import AuthenticateToken from "../middleware/jwt.js"
const Router = express.Router()

// Router.post("/students/register", AuthenticateToken,addStudent)
 Router.post("/admin/auth/register", AuthenticateToken,addStudent)
Router.get("/admin/auth/student", AuthenticateToken,allStudents)
Router.get("/student/num",numStudents)


export default Router 