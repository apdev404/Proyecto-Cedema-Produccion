const mysql = require('mysql');
const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "apdev404",
  database: "web_cedema",
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

 */