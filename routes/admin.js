import  express from "express"
import  { loginAdmin,registerAdmin} from "../controllers/admin.js"


const Router = express.Router()

Router.post("/login/admin",loginAdmin)
Router.post("/admin/register",registerAdmin)


export default Router 

