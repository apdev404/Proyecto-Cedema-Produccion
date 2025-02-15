const express = require("express");
const router = express.Router(); // Para rutear los pedidos HTTP
const { courses, lastCourses, courseDetail, activities, lastActivities, activityDetail, news, lastNews, newsDetail, equipo, inscripcion, redaccion, sendEmail} = require('../models/index.js'); // Importar las funciones con los métodos HTTP

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

// Maneja el POST del formulario de inscripción
router.post('/inscripcion', inscripcion);

// Maneja el GET de redaccion
router.get('/redaccion', redaccion);

// Maneja el POST para el envío de correos
router.post('/send-email', sendEmail);

// Lo exporto para utilizarlo en server.js
module.exports = router;
