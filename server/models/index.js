// Importo la Base de Datos
const database = require("../database/db");

// Función que devuelve los cursos y charlas
const courses = (req, res) => {
  const sqlQuery = "SELECT     courses.id, courses.tipo, courses.fecha, courses.titulo, courses.descripcion, courses.precio, courses.duracion, courses.link_form, courses.link_drive, courses.formato, courses.direccion, courses.created_at, courses.finishes_at, images.image_path FROM courses LEFT JOIN images ON images.entity_type = 'courses' AND images.entity_id = courses.id;"; // Consulta/Sentencia de SQL

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
  const sqlQuery = "SELECT     courses.id, courses.tipo, courses.fecha, courses.titulo, courses.descripcion, courses.precio, courses.duracion, courses.link_form, courses.link_drive, courses.formato, courses.direccion, courses.created_at, courses.finishes_at, images.image_path FROM courses LEFT JOIN images ON images.entity_type = 'courses' AND images.entity_id = courses.id WHERE course.id = ?;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, [id], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};


module.exports = { courses, courseDetail };