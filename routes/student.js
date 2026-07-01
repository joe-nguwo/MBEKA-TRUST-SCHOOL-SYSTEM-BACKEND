import  express from "express"
import  { registerStudent} from "../controllers/register.js"
import { allStudents } from "../controllers/students.js"
const Router = express.Router()

Router.post("/student/register", registerStudent)
Router.get("/student/all",allStudents)
Router.post("/books/register", registerStudent)

export default Router 