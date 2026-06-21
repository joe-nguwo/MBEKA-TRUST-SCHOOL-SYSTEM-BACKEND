import { DataTypes } from "sequelize";
import { sequelize } from "../config/dbconfig.js";


const Admin  = sequelize.define("Books",{
    name:{
        type:DataTypes.STRING,
          allowNull:false,
    },
    email:{
         type:DataTypes.STRING,
          allowNull:false,
    },
    password:{
         type:DataTypes.STRING,
          allowNull:false,
    }

})



export default Admin;
