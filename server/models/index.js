// Importo la Base de Datos
const database = require("../database/db");
const nodemailer = require('nodemailer');
// Función para enviar correos
const sendEmail = async (req, res) => {
  const { nombre, email, curso, image_cursoPath, fecha, modalidad, precio } = req.body; // Datos enviados desde el frontend

  // Verifica que los datos estén siendo recibidos correctamente
  console.log("Datos recibidos:", req.body);

  function transformImgPath(ruta) {
    // Verifica si la ruta contiene 'public' y realiza el reemplazo
    if (ruta.includes('/public/')) {
      return ruta.replace('/public/', '/client/public/');
    }
    return ruta;
  }


  try {
    // Configura el transporte
    const config = {
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,      
      auth: {
        user: 'agustoromillo@gmail.com', // Tu correo
        pass: 'hred vtng mttb llvx', // Tu contraseña de aplicación
      },
    };

    // Configura el contenido del correo
    const mailOptions = {
      from: 'agustoromillo@gmail.com',
      to: email, // Dirección del destinatario
      subject: `PRE-INSCRIPCION A: ${curso}`,
      html: `
        <html>
           <style>
              h1 { color: #333; font-size: 24px; }
              p { font-size: 16px; }
          </style>
          <link href="https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Encode+Sans:wght@100..900&display=swap" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

      </head>
      <body style="margin: 0; padding: 0; font-family: 'Encode Sans Condensed', sans-serif; background-color: #edf2f4ff; color: #323032ff;">
            <table width="100%" cellspacing="0" cellpadding="0" style="background-color: #edf2f4ff; padding: 20px 0;">
                <tr>
                    <td align="center">
                        <!-- Header -->
                        <table width="600px" cellspacing="0" cellpadding="0" style="background-color: #2e6cb3ff; color: white; border-radius: 8px; text-align: center;">
                            <tr>
                                <td style="padding: 20px;">
                                    <h2 style="margin: 0; font-size: 28px;">PRE-INSCRIPCIÓN A: ${curso}</h2>
                                </td>
                            </tr>
                        </table>

                        <!-- Course Info -->
                        <table width="600px" cellspacing="0" cellpadding="0" style="background-color: #ffffff; margin-top: 20px; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 15px rgba(85, 100, 106, 0.2);">
                            <tr>
                                <td style="text-align: center;">
                                    <h3 style="color: #2e6cb3ff; font-size: 28px; margin-bottom: 10px; border-bottom: 3px solid #f4ae2dff;">DATOS DEL CURSO</h3>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <ul style="list-style: none; padding: 0; margin: 0; font-size: 22px; color: #323032ff;">
                                        <li style="margin-bottom: 10px;"><strong>FECHA:</strong> ${fecha}</li>
                                        <li style="margin-bottom: 10px;"><strong>MODALIDAD:</strong> ${modalidad}</li>
                                        <li><strong>PRECIO:</strong> $${precio}</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>

                        <!-- Payment Options -->
                        <table width="600px" cellspacing="0" cellpadding="0" style="background-color: #ffffff; margin-top: 20px; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 15px rgba(85, 100, 106, 0.2);">
                            <tr>
                                <td style="text-align: center;">
                                    <h4 style="color: #2e6cb3ff; font-size: 28px; margin-bottom: 10px; border-bottom: 3px solid #f4ae2dff;">OPCIONES DE PAGO</h4>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center;">
                                    <button style="background-color: #2e6cb3ff; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 16px; width: 100%;">
                                        PAGAR CON MercadoPago
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; margin-top: 15px; font-size: 20px; padding-top: 20px;">
                                    <strong>Datos bancarios:</strong>
                                    <ul style="list-style: none; padding: 0; margin: 0; color: #323032ff;">
                                        <li>Titular:</li>
                                        <li>Banco:</li>
                                        <li>Número de cuenta:</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>

                        <!-- Footer -->
                        <table width="600px" cellspacing="0" cellpadding="0" style="margin-top: 20px; border-top: 3px solid #f4ae2dff; text-align: center;">
                            <tr>
                                <td>
                                    <img src="https://tarpan.cl/wp-content/uploads/2024/09/Logopit_1704692715756-1-1024x1024.png" alt="Logo" style="width: 40%; margin-top: 20px;">
                                </td>
                            </tr>
                        </table>
                        <table width="600px" cellspacing="0" cellpadding="0" style="background-color: #2e6cb3ff; color: white; text-align: center; margin-top: 20px; border-radius: 8px;">
                            <tr>
                                <td style="padding: 20px;">
                                    <p style="margin: 0; font-size: 16px;">NUESTRAS REDES</p>
                                    <ul style="display: inline-flex; justify-content: center; gap: 40px; padding: 0; list-style: none; margin: 10px 0;">
                                        <li><a href="https://www.facebook.com/cedema.arg/" style="color: white; font-size: 24px; text-decoration: none;"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li><a href="https://chat.whatsapp.com/IDauAcD6Pmv5pzYhmyGvRP" style="color: white; font-size: 24px; text-decoration: none;"><i class="fa-brands fa-whatsapp"></i></a></li>
                                        <li><a href="https://www.youtube.com/@cedemaarg1850" style="color: white; font-size: 24px; text-decoration: none;"><i class="fa-brands fa-youtube"></i></a></li>
                                        <li><a href="https://www.instagram.com/cedema.arg/" style="color: white; font-size: 24px; text-decoration: none;"><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a href="https://www.linkedin.com/in/cedema-arg-ab61ab206/" style="color: white; font-size: 24px; text-decoration: none;"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                    <p style="font-size: 14px; margin-top: 10px;">&copy; 2024 CEDEMA. Todos los derechos reservados.</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
      `,
    };

    // Verifica que la configuración y los datos del correo sean correctos
    console.log("Configuración del correo:", config);
    console.log("Opciones del correo:", mailOptions);

    const transport = nodemailer.createTransport(config);

    // Verifica si el transporte se crea correctamente
    console.log("Transportador Nodemailer creado.");

    // Envía el correo
    const info = await transport.sendMail(mailOptions);

    // Si se envió correctamente, muestra la información
    console.log("Correo enviado:", info);

    // Responde al frontend con un mensaje de éxito
    res.status(200).send({ message: 'Correo enviado con éxito' });
  } catch (error) {
    // Muestra el error si algo salió mal
    console.error('Error al enviar correo:', error);
    res.status(500).send({ error: 'Error al enviar el correo' });
  }
};


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

// Función que devuelve los detalles de un curso
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

// Función que devuelve las actividades
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

// Función que devuelve las últimas actividades
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

// Función que devuelve los detalles de una actividad
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

// Función que devuelve las noticias
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

// Función que devuelve las últimas noticias
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

// Función que devuelve los detalles de una noticia
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

// Función que devuelve el equipo
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

// Función para manejar las inscripciones
const inscripcion = (req, res) => {
  const { nombre, email, origen, ocupacion, comentario, tipo, titulo, linkDrive, fecha, precio } = req.body;
  console.log(req.body);

  const sqlQuery = "INSERT INTO inscripciones (nombre, email, origen, ocupacion, comentario, curso_tipo, curso_titulo, link_drive, curso_fecha, precio) values ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, [nombre, email, origen, ocupacion, comentario, tipo, titulo, linkDrive, fecha, precio], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error al insertar los datos" });
      console.error("Error en la consulta:", err);
    } else {
      res.json({
        message: "Pre-inscripcion realizada.",
      }); // Devuelvo un mensaje de éxito
    }
  });
};

module.exports = { courses, lastCourses, courseDetail, activities, lastActivities, activityDetail, news, lastNews, newsDetail, equipo, inscripcion, sendEmail };
const redaccion = (req, res) => {
  const sqlQuery = "SELECT * FROM redaccion;"; // Consulta/Sentencia de SQL

  database.query(sqlQuery, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error en la consulta" });
      console.error("Error en la consulta:", err);
    } else {
      res.json(results); // Devuelvo los resultados de la consulta
    }
  });
};

module.exports = { courses, lastCourses, courseDetail, activities, lastActivities, activityDetail, news, lastNews, newsDetail, equipo, inscripcion, redaccion, sendEmail };
