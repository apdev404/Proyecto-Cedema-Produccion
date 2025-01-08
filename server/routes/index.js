const express = require("express");
const router = express.Router(); // Para rutear los pedidos HTTP
const { courses, courseDetail, activities, activityDetail, news, newsDetail, equipo } = require('../models/index.js'); // Importar las funciones con los metodos HTTP

// DEFINIMOS RUTAS

// Maneja el GET de los cursos y charlas
router.get('/courses', courses);
router.get('/courses/:id', courseDetail);

// Maneja el GET de las actividades
router.get('/activities', activities);
router.get('/activities/:id', activityDetail);

// Maneja el GET de las noticias
router.get('/news', news);
router.get('/news/:id', newsDetail);

// Maneja el GET del equipo
router.get('/equipo', equipo);


// Lo exporto para utilizarlo en server.js
module.exports = router;