import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import express from "express"
import connectToDatabase from "./config/dbconfig.js";
import { requestLogger } from "./middleware/login.js";
import adminRouter from "./routes/admin.js"
import studentRouter from "./routes/student.js"
import booksRouter from "./routes/books.js"
import  dashBaordRouter  from "./routes/dashBoard.js";
import dbMigrations from "./databases/dbMigrations.js";

dotenv.config()
connectToDatabase()
dbMigrations()

// console.log("Database tables synchronized and updated successfully!");

const PORT = process.env.SERVER_PORT

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(requestLogger)
app.use(express.json())
app.use(cookieParser())
app.use("/api/v1", dashBaordRouter);
app.use("/api/v1", adminRouter);
app.use("/api/v1", studentRouter);
app.use("/api/v1", booksRouter)


app.listen(PORT, console.log(`server running on port ${PORT}`))