import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import  connectToDatabase  from "./config/dbconfig.js";
import { requestLogger } from "./middleware/login.js";
import adminRouter from "./routes/admin.js"
import studentRouter from "./routes/student.js"
import Admin from "./models/admin.js"
import Student from "./models/students.js";
import Books from "./models/books.js";

dotenv.config()
connectToDatabase()
Admin.sync()
Student.sync()
Books.sync()

const PORT = process.env.SERVER_PORT

const app = express();
app.use(cors())
app.use(requestLogger)
app.use(express.json())
app.use("/api/v1", adminRouter);
app.use("/api/v1", studentRouter);


app.listen(PORT,console.log(`server running on port ${PORT}`))