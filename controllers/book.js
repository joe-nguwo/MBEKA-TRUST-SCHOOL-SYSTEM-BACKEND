import dotenv from "dotenv";
import Books from '../models/students.js';
dotenv.config()

export const registerBooks = async (req,res) =>{
    const {name,author,bookType} = req.body;
    try {
        const books = await Books.create({name,author,bookType});
        res.status(201).json({message: "Books registered successfully"});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }

}

export const deleteBooks = async (req,res) =>{
    const {id} = req.params;
    try {
        const book = await Books.destroy({where:{id}});
        if(book){
            res.status(200).json({message: "Book deleted successfully"});
        }
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}