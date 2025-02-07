const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from '../config';

const database = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT // Railway a veces usa puertos distintos
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


