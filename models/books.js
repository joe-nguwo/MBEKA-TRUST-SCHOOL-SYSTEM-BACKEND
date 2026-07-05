import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/dbconfig.js";

class Books extends Model {}

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
  },
},
  {
    sequelize,
    modelName: "Books",
     timestamps: true,
  }
);

export default Books;