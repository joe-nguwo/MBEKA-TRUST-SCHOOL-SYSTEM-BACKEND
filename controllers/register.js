const Student = require('../models/Student.js');
const sequelize = require('../config/dbconfig.js');


const registerStudent = async (req,res) =>{
    const {name,email,age} = req.body;
    try {
        const student = await Student.create({name,email,age});
        res.status(201).json({message: "Student registered successfully"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { registerStudent };