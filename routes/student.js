import  express from "express"
import { allStudents,deleteStudent,addStudent } from "../controllers/student.js"
import AuthenticateToken from "../middleware/jwt.js"
const Router = express.Router()

Router.post("/students/register", AuthenticateToken,addStudent)
// Router.post("/students/register",addStudent)
Router.get("/students/all", AuthenticateToken,allStudents)
Router.get("student/num", AuthenticateToken,)
Router.delete("/students/delete/:id",AuthenticateToken,deleteStudent)


export default Router 