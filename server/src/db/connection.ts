import { Sequelize } from "sequelize";

// El código configura una conexión a una base de datos MySQL llamada 
// logindb usando el usuario root y la contraseña 123456,
//  con el servidor de la base de datos corriendo en localhost. 
//  Sequelize es una instancia que puedes usar posteriormente para realizar 
//  consultas y operaciones sobre la base de datos, como crear, leer, 
//  actualizar y eliminar registros.
const sequelize = new Sequelize('logindb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'

});


export default sequelize;