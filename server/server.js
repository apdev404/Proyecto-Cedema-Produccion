const express = require('express'); // importar express
const cors = require('cors'); // importa CORS
const routes = require('./routes'); // importa las rutas de la API
const server = express(); // inicializar la app
import { PORT } from './config.js';

/* Intercambio de Recursos de Origen Cruzado (CORS) */ 
/* Es una característica de seguridad del navegador que restringe las solicitudes HTTP de origen cruzado que se inician desde secuencias de comandos que se ejecutan en el navegador. */
server.use(cors());
server.use(express.json()); // Middleware para parsear JSON
server.use('/', routes); // Usar las rutas definidas en routes.js

// Configuracion del puerto y ejecucion del servidor
server.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});