import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import  Student from '../models/students.js';
dotenv.config()

export const addStudent = async(req,res) =>{
    const{Fname,Lname,email,gender,grade} = req.body
    try{
        await Student.create({firstName:Fname,lastName:Lname,email:email,gender:gender,grade:grade})
      res.status(201).json({message: "Student registered successfully"});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

    

export const allStudents = async (req,res) =>{
    try {
        const students = await Student.findAll();
        res.status(200).json({students});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const deleteStudent = async (req,res) =>{
    const {id} = req.params;
    try{
        const student = await Student.destroy({where:{id}});
        if(student){
            res.status(200).json({message: "Student deleted successfully"});
        }
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }

}

export const updateStudent = async (req,res) =>{
    const {id} = req.params;
    const {name,email,age} = req.body;
    try{
        const student = await Student.update({name,email,age},{where:{id}});
        if(student){
            res.status(200).json({message: "Student updated successfully"});
        }
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

