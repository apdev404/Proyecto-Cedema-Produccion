CREATE DATABASE web_cedema;
USE web_cedema;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    nombre varchar(100) NOT NULL,
    apellido varchar(100) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE courses (
    id INT AUTO_INCREMENT,
	tipo ENUM('Curso', 'Charla') NOT NULL, -- curso/charla
    fecha DATE NOT NULL,
    titulo varchar(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    duracion varchar(100) NOT NULL,
    link_form TEXT,
    link_drive TEXT,
    formato ENUM('Presencial', 'Virtual') NOT NULL,
	direccion varchar(255),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    finishes_at DATE NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE activities (
    id INT AUTO_INCREMENT,
    fecha DATE NOT NULL,
    titulo varchar(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    duracion varchar(100) NOT NULL,
    direccion varchar(255) NOT NULL,
    link_form TEXT NOT NULL,
    formato ENUM('Presencial', 'Virtual') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    finishes_at DATE NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE news (
    id INT AUTO_INCREMENT,
    fecha DATE NOT NULL,
    titulo varchar(100) NOT NULL,
    descripcion TEXT NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entity_type ENUM('courses', 'activities', 'news') NOT NULL, -- Indica a qué tabla pertenece la imagen
    entity_id INT NOT NULL, -- ID del curso, actividad o noticia
    image_path VARCHAR(255) NOT NULL -- Ruta o URL de la imagen
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;


-- --- FUNCIONAMIENTO DE IMAGENES ------------------------
INSERT INTO courses (tipo, fecha, titulo, descripcion, precio, duracion, formato)
VALUES ('Curso','2025-2-13','Curso de React', 'Aprende React desde cero', 150.00, '10 horas', 'Virtual');

INSERT INTO images (entity_type, entity_id, image_path)
VALUES ('courses', 1, 'assets/images/courses/react-course.jpg');

SELECT 
    courses.id,
    courses.titulo,
    courses.descripcion,
    images.image_path
FROM 
    courses
LEFT JOIN 
    images 
ON 
    images.entity_type = 'courses' AND images.entity_id = courses.id;

-- --- INSCRIPCIONES ---------------------------------------
CREATE TABLE inscripciones_cursos (
    id INT AUTO_INCREMENT,
    idCurso INT NOT NULL,
    idUser INT NOT NULL,
    nombre varchar(100) NOT NULL,
    apellido varchar(100) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idCurso) REFERENCES cursos (idCurso),
    FOREIGN KEY (idUser) REFERENCES users (idUser)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE inscripciones_eventos (
    id INT AUTO_INCREMENT,
    idEvento INT NOT NULL,
    idUser INT NOT NULL,
    nombre varchar(100) NOT NULL,
    apellido varchar(100) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (idEvento) REFERENCES eventos (idEvento),
    FOREIGN KEY (idUser) REFERENCES users (idUser)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;