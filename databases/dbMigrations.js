import Admin from "../models/admin.js"
import Student from "../models/students.js";
import Books from "../models/books.js";


async function dbMigrations(){
    try {
    await Admin.sync({ alter: true });
    await Student.sync({ alter: true });
    await Books.sync({ alter: true });
    console.log("models synched tables in the db")
    
// await Admin.sync()
// await Student.sync()
// await Books.sync()
    
} catch (error) {
    console.log(`Error occured during migrations ${error}`)
    
}

}

export default dbMigrations



