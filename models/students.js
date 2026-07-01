import { sequelize } from "../config/dbconfig.js";
import { DataTypes } from "sequelize";


const Student = sequelize.define("Students", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.STRING, 
        allowNull: false,
    }
});

export default Student;