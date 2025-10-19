const {DataTypes} = require("sequelize")

const sequeliza = require("../databases/postgress")

const User = sequeliza.define("User",{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
         type:DataTypes.STRING,
         allowNull:false,
    }
})

module.exports = User;

// code for connecting to  posgress