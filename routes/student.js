import  express from "express"
import  { registerStudent} from "../controllers/register.js"
const Router = express.Router()

Router.post("/student/register", registerStudent)

export default Router 