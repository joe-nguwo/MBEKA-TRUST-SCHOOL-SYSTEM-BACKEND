import  express from "express"
import  { loginAdmin,registerAdmin} from "../controllers/admin.js"


const Router = express.Router()

Router.post("/admin/auth/login",loginAdmin)
//Router.post("/admin/register",registerAdmin)


export default Router 

