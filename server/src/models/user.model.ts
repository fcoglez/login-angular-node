import { DataTypes } from "sequelize";
import sequelize from "../db/connection"

// el primer parametro es el modelo y el segundo parametro los atrubutos
export const User = sequelize.define('user',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false
    }
    
});