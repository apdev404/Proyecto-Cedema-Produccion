const mysql = require('mysql');
const database = mysql.createConnection({
  host: "mysql.railway.internal",
  user: "root",
  password: "tXqEBOZcdfZRmBCprojmLMSFiDnVXvIa",
  database: "web_cedema_database",
});

database.connect((error) => {
  if (error) {
    console.log("Error al conectar con la base de datos: " + error);
    return;
  }
  console.log("Conectado a la base de datos");
})

module.exports = database;


/* --------------CREDENCIALES DATABASE DE PRODUCCION------------------

mysql://root:tXqEBOZcdfZRmBCprojmLMSFiDnVXvIa@autorack.proxy.rlwy.net:19571/railway


USER: root
PASSWORD: tXqEBOZcdfZRmBCprojmLMSFiDnVXvIa
HOST: autorack.proxy.rlwy.net
PORT: 19571
 */