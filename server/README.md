# PARTE DE NODE (BACKEND)


1. creamos un directorio donde vamos a crear una api con node. Una vez
dentro del directorio, lanzamos el comando npm init -y que se usa para crear rápidamente un archivo package.json con valores predeterminados en un proyecto Node.js.

2. Intalamos las dependencias de: 

express -> es un framework de node para crear apis
bcrypt -> con esto nos permite encriptar la contraseña en la base de datos
cors -> para poder ejecutar el front y el backend en diferentes puertos
dotenv -> para poder configurar las variables de entornos
jsonwebtoken -> un paquete para crear tokens
sequelize -> paquete para poder usar base de datos en el proyecto.
mysql2 -> la base de datos que vamos a usar en este proyecto.
typescript --save-dev -> instalamos typescript en desarrollo solamente.
nodemon --save-dev -> se usa para refrescar todos el rato los cambios.


3. Inicializamos typescript en nuestro proyecto. Lanzamos el comando
npx tsc --init

