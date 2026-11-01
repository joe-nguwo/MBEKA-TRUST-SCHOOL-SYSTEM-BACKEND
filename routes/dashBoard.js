import  express from "express"
import  {numOFstudents,genderCount } from "../controllers/dashBoard.js"


const Router = express.Router()

Router.get("/student/num",numOFstudents)
Router.get("/student/genderCount",genderCount)



export default Router 
