import  express from "express"
import { addStudent } from "../controllers/students.js"
import { allStudents } from "../controllers/students.js"
const Router = express.Router()

Router.post("/students/register", addStudent)
Router.get("/student/all",allStudents)


export default Router 