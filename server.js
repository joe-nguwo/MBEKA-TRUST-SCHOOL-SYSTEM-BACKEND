import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import  connectToDatabase  from "./config/dbconfig.js";
import { requestLogger } from "./middleware/login.js";
import adminRouter from "./routes/admin.js"
import studentRouter from "./routes/student.js"
import booksRouter from "./routes/books.js"
import Admin from "./models/admin.js"
import Student from "./models/students.js";
import Books from "./models/books.js";

dotenv.config()
connectToDatabase()
Admin.sync()
Student.sync()
Books.sync()

// await Admin.sync({ alter: true });
// await Student.sync({ alter: true });
// await Books.sync({ alter: true });

// console.log("Database tables synchronized and updated successfully!");

const PORT = process.env.SERVER_PORT

const app = express();
app.use(cors())
app.use(requestLogger)
app.use(express.json())
app.use("/api/v1", adminRouter);
app.use("/api/v1", studentRouter);
app.use("/api/vi",booksRouter)


app.listen(PORT,console.log(`server running on port ${PORT}`))