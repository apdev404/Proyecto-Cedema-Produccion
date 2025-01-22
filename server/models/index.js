// Importo la Base de Datos
const database = require("../database/db");
const express = require('express');
const app = express();

// Función que devuelve los cursos y charlas
const courses = (req, res) => {
  const sqlQuery = "SELECT * FROM courses;"; // Consulta/Sentencia de SQL

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
  const sqlQuery = "SELECT * FROM courses ORDER BY id DESC LIMIT 2;";
  
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
  const sqlQuery = "SELECT * FROM courses WHERE courses.id = ?;"; // Consulta/Sentencia de SQL

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
  const sqlQuery = "SELECT * FROM activities ;"; // Consulta/Sentencia de SQL

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
  const sqlQuery = "SELECT * FROM activities ORDER BY id DESC LIMIT 2;";
  
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
  const sqlQuery = "SELECT * FROM activities WHERE activities.id = ?;"; // Consulta/Sentencia de SQL

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
  const sqlQuery = "SELECT * FROM news;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};

const lastNews = (req, res) => {
  const sqlQuery = "SELECT  * FROM news ORDER BY id DESC LIMIT 2;"; // Consulta/Sentencia de SQL

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
  const sqlQuery = "SELECT * FROM news WHERE news.id = ?;"; // Consulta/Sentencia de SQL

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
  const sqlQuery = "SELECT * FROM equipo;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};





module.exports = { courses, lastCourses, courseDetail, activities, lastActivities, activityDetail, news, lastNews, newsDetail, equipo };
