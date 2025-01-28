const express = require("express");
const router = express.Router(); // Para rutear los pedidos HTTP
const { courses,lastCourses, courseDetail, activities, lastActivities, activityDetail, news,lastNews, newsDetail, equipo, inscripcion, redaccion} = require('../models/index.js'); // Importar las funciones con los metodos HTTP

// DEFINIMOS RUTAS
router.get('/api/last-courses', lastCourses);

// Maneja el GET de los cursos y charlas
router.get('/courses', courses);
router.get('/courses/:id', courseDetail);


// Maneja el GET de las actividades
router.get('/activities', activities);
router.get('/api/last-activities', lastActivities);
router.get('/activities/:id', activityDetail);

// Maneja el GET de las noticias
router.get('/news', news);
router.get('/api/last-news', lastNews);
router.get('/news/:id', newsDetail);

// Maneja el GET del equipo
router.get('/equipo', equipo);

// Maneja el POST del formulario de inscripcion
router.post('/inscripcion', inscripcion);

// Maneja el GET de redaccion
router.get('/redaccion', redaccion);

// Lo exporto para utilizarlo en server.js
module.exports = router;