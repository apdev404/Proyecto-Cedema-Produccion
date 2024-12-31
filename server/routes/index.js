const express = require("express");
const router = express.Router(); // Para rutear los pedidos HTTP
const { courses, courseDetail } = require('../models/index.js'); // Importar las funciones con los metodos HTTP

// DEFINIMOS RUTAS

// Maneja el GET de los cursos y charlas
router.get('/courses', courses);
router.get('/courses/:id', courseDetail);

// Lo exporto para utilizarlo en server.js
module.exports = router;