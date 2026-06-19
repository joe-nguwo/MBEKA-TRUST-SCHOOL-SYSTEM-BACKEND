import {sequelize} from "../config/dbconfig.js"
import  {DataTypes} from 'sequelize';
const Books  = sequelize.define("Books",{
    name:{
        type:DataTypes.STRING,
          allowNull:false,
    },
    author:{
         type:DataTypes.STRING,
          allowNull:false,
    },
    type:{
         type:DataTypes.STRING,
          allowNull:false,
    }

})

export default Books