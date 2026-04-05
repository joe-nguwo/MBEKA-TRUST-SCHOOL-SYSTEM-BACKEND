require("dotenv").config()
const express = require("express");
const {connectToDatabase} = require("./config/dbconfig.js")
const adminRouter = require("./routes/admin")
connectToDatabase()


const PORT = process.env.SERVER_PORT


const app = express();

app.use(adminRouter)


app.listen(PORT,console.log(`server running on port ${PORT}`))