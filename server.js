import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import connectToDatabase from "./config/dbconfig.js";
import { requestLogger } from "./middleware/login.js";
import adminRouter from "./routes/admin.js"
import studentRouter from "./routes/student.js"
import booksRouter from "./routes/books.js"
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
app.use("/api/v1", adminRouter);
app.use("/api/v1", studentRouter);
app.use("/api/v1", booksRouter)


app.listen(PORT, console.log(`server running on port ${PORT}`))