import  express from "express"
import { registerBooks,deleteBooks } from "../controllers/book.js"
const Router = express.Router()


Router.post("/books/register", registerBooks)
Router.delete("/books/delete/:id",deleteBooks)

export default Router 