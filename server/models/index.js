// Importo la Base de Datos
const database = require("../database/db");
const express = require('express');
const app = express();

// Función que devuelve los cursos y charlas
const courses = (req, res) => {
  const sqlQuery = "SELECT     courses.id, courses.tipo, courses.fecha, courses.titulo, courses.descripcion, courses.precio, courses.duracion, courses.link_form, courses.link_drive, courses.formato, courses.direccion, courses.created_at, courses.finishes_at, courses.image1_path FROM courses;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};


// Función para obtener los últimos dos cursos
const lastCourses = (req, res) => {
  const sqlQuery = "SELECT courses.id, courses.tipo, courses.fecha, courses.titulo, courses.descripcion, courses.precio, courses.duracion, courses.link_form, courses.link_drive, courses.formato, courses.direccion, courses.created_at, courses.finishes_at, courses.image1_path FROM courses ORDER BY id DESC LIMIT 2;";
  
  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};



// Función que devuelve los cursos y charlas
const courseDetail = (req, res) => {
  const { id } = req.params;
  const sqlQuery = "SELECT     courses.id, courses.tipo, courses.fecha, courses.titulo, courses.descripcion, courses.precio, courses.duracion, courses.link_form, courses.link_drive, courses.formato, courses.direccion, courses.created_at, courses.finishes_at, courses.image1_path FROM courses  WHERE courses.id = ?;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};

// Función que devuelve los cursos y charlas
const activities = (req, res) => {
  const sqlQuery = "SELECT     activities.id, activities.tipo, activities.fecha, activities.titulo, activities.descripcion, activities.precio, activities.duracion, activities.direccion, activities.link_form, activities.formato, activities.direccion, activities.created_at, activities.finishes_at, activities.image1_path FROM activities ;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};


const lastActivities = (req, res) => {
  const sqlQuery = "SELECT     activities.id, activities.tipo, activities.fecha, activities.titulo, activities.descripcion, activities.precio, activities.duracion, activities.direccion, activities.link_form, activities.formato, activities.direccion, activities.created_at, activities.finishes_at, activities.image1_path FROM activities ORDER BY id DESC LIMIT 2;";
  
  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};

// Función que devuelve los cursos y charlas
const activityDetail = (req, res) => {
  const { id } = req.params;
  const sqlQuery = "SELECT     activities.id, activities.fecha, activities.titulo, activities.descripcion, activities.precio, activities.duracion, activities.direccion, activities.link_form, activities.formato, activities.direccion, activities.created_at, activities.finishes_at, activities.image1_path FROM activities WHERE activities.id = ?;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};



const news = (req, res) => {
  const sqlQuery = "SELECT     news.id, news.fecha, news.titulo, news.subtitulo, news.texto, news.autor, news.image1_path FROM news;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};

const newsDetail = (req, res) => {
  const { id } = req.params;
  const sqlQuery = "SELECT     news.id, news.fecha, news.titulo, news.subtitulo, news.texto, news.autor, news.image1_path FROM news WHERE news.id = ?;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};

const equipo = (req, res) => {
  const sqlQuery = "SELECT equipo.id, equipo.nombre, equipo.cargo, equipo.titulo, equipo.edad, equipo.image1_path FROM equipo;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};





module.exports = { courses, lastCourses, courseDetail, activities, lastActivities, activityDetail, news, newsDetail, equipo };
