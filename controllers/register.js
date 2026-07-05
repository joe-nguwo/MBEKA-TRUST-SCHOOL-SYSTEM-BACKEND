import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import  Student from '../models/students.js';
import Admin from '../models/admin.js';
dotenv.config()


export const registerStudent = async (req,res) =>{
    const {name,email,age} = req.body;
    try {
        const student = await Student.create({name,email,age});
        res.status(201).json({message: "Student registered successfully"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const registerAdmin = async (req,res) =>{
    const {name,email,password} = req.body;
    try {
        
        const admin = await Admin.create({name,email,password});

          const refreshToken = jwt.sign({
            name:name,
            role:"admin"

          },process.env.REFRESH_TOKEN_KEY,{expiresIn:"7d"})

           const accessToken = jwt.sign({
            name:name,
            email:email}, process.env.ACCESS_TOKEN_KEY, {expiresIn:"1d"}

    )
        res.status(201).json({status:1,message: "Admin registered successfully","token":accessToken});
        res.cookie("jwt",refreshToken,{maxAge:9000,secure:true,sameSite:'lax'

        })
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


