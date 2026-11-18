import Books from '../models/books.js';
import  Student from '../models/students.js';
import {fn,col} from "sequelize";
export const numOFstudents = async (req,res) =>{
    try {
        const students = await Student.count();
        res.status(200).json({
            status:1,
            message:"ok",
            data:students});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}
export const genderCount = async (req,res) =>{
    try {
        const students = await Student.findAll({
            attributes:[
                'gender',
                [fn('Count',col('gender')),'count']
            ],
            group:['gender']

        })
        console.log(students.values)

        res.status(200).json({
            status:1,
            message:"ok",
            data:students});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

export const bookCount = async (req,res) =>{
    try {
        const books = await Books.count();
        res.status(200).json({
            status:1,
            message:"ok",
            data:books});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}