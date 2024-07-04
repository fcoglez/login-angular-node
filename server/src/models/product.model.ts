import { DataTypes } from "sequelize";
import sequelize from "../db/connection"

// el primer parametro es el modelo y el segundo parametro los atrubutos
export const Product = sequelize.define('product',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
});
