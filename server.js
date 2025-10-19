require("dotenv").config()
const express = require("express");
const seqo = require("./config/dbconfig.js")

const PORT = process.env._PORT  

const app = express();
seqo()

app.get("/",(req,res)=>{
    res.send("wellcome to school system")
})

app.listen(PORT,console.log(`server running on port ${PORT}`))