import  {DataTypes} from 'sequelize';

import  {sequelize} from "../config/dbconfig.js";

 const Student  = sequelize.define("Student",{
    name:{
        type:DataTypes.STRING,
        allowNull:false},
    email:{
        type:DataTypes.STRING,
        allowNull:false},
    age:{
        type:DataTypes.INTEGER,
        allowNull:false}
    }
    )

    export default Student



