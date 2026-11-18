import  express from "express"
import  {numOFstudents,genderCount ,bookCount} from "../controllers/dashBoard.js"


const Router = express.Router()

Router.get("/student/num",numOFstudents)
Router.get("/student/genderCount",genderCount)
Router.get("/books/count",bookCount)



export default Router 
