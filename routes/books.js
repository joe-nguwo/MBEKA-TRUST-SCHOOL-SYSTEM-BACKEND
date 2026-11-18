import  express from "express"
import { registerBooks,deleteBooks,allBooks} from "../controllers/book.js"
const Router = express.Router()


Router.post("/books/register", registerBooks)
Router.delete("/books/delete/:id",deleteBooks)
Router.get("/books/all",allBooks)

export default Router 