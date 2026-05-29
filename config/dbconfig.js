import dotenv from "dotenv"
dotenv.config()
import Sequelize from "sequelize";

export const  sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    host:process.env.host,
    port:process.env.port,
    dialect:"postgres",
    logging:false,
});

const connectToDatabase = async () =>{
    try{
        await sequelize.authenticate();
        console.log("Connection to the database has been established successfully.");
    
    }catch(error){
        console.error("Unable to connect to the database:",error);
    }
}

export default connectToDatabase

// contains configuration for connecting to the database,like the hostname,username and password
