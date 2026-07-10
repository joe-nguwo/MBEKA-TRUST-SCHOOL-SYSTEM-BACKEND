import  express from "express"
import { addStudent } from "../controllers/student.js"
import { allStudents } from "../controllers/student.js"
const Router = express.Router()

Router.post("/students/register", addStudent)
Router.get("/student/all",allStudents)


export default Router 