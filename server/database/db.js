const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const database = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT // Railway a veces usa puertos distintos
});

database.connect((error) => {
  if (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
    return;
  }
  console.log("✅ Conectado a la base de datos en Railway");
});

module.exports = database;


/* --------------CREDENCIALES DATABASE DE PRODUCCION------------------

mysql://root:tXqEBOZcdfZRmBCprojmLMSFiDnVXvIa@autorack.proxy.rlwy.net:19571/railway

mysql://root:tXqEBOZcdfZRmBCprojmLMSFiDnVXvIa@autorack.proxy.rlwy.net:19571/railway


USER: root
PASSWORD: tXqEBOZcdfZRmBCprojmLMSFiDnVXvIa
HOST: autorack.proxy.rlwy.net
PORT: 19571
 */


