import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import  Student from '../models/students.js';
import Admin from '../models/admin.js';
dotenv.config()


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
           const accessToken = jwt.sign({
            name:name,
            email:email
        },
        process.env.ACCESS_TOKEN_KEY,
        {expiresIn:"7d"}
    )
        res.status(201).json({status:1,message: "Admin registered successfully","token":accessToken});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


