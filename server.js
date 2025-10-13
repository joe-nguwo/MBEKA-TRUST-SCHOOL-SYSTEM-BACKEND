const express = require("express");
const PORT = 9000;

const app = express();


app.get("/",(req,res)=>{
    res.send("wellcome to school system")
})

app.listen(PORT,console.log(`server running on port ${PORT}`))