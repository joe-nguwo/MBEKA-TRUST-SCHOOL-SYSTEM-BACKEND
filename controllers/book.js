import dotenv from "dotenv";
import Books from '../models/books.js';
dotenv.config()

export const registerBooks = async (req,res) =>{
    const {Title,Author,Description} = req.body;

    try {
        const books = await Books.create({title:Title,author:Author,description:Description});
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

export const allBooks = async (req,res) =>{
    try {
        const books = await Books.findAll();
        res.status(200).json({
            status:1,
            message:"ok",
            data:books});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}
