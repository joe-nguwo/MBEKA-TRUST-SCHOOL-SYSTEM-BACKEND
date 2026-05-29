import  Student from '../models/students.js';
import  sequelize from '../config/dbconfig.js';
import Admin from '../models/admin.js';


export const registerStudent = async (req,res) =>{
    const {name,email,password} = req.body;
    try {
        const student = await Student.create({name,email,password});
        res.status(201).json({message: "Student registered successfully"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const registerAdmin = async (req,res) =>{
    const {name,email,password} = req.body;
    try {
        const admin = await Admin.create({name,email,password});
        res.status(201).json({message: "Admin registered successfully"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


