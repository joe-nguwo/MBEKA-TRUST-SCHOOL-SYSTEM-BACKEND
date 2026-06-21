import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/dbconfig.js";

const Student  = sequelize.define("Books",{
    name:{
        type:DataTypes.STRING,
          allowNull:false,
    },
    email:{
         type:DataTypes.STRING,
          allowNull:false,
    },
    age:{
         type:DataTypes.STRING,
          allowNull:false,
    }

})


export default Student;
