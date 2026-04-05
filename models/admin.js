const {DataTypes} = require("sequelize")

const {sequelize} = require("../config/dbconfig.js")

const User = sequelize.define("User",{
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