DROP DATABASE IF EXISTS web_cedema;
CREATE DATABASE web_cedema;
USE web_cedema;

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

CREATE TABLE courses (
    id INT AUTO_INCREMENT,
	-- tipo ENUM('Curso', 'Charla') NOT NULL, -- curso/charla
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

CREATE TABLE news (
    id INT AUTO_INCREMENT,
    fecha DATE NOT NULL,
    titulo varchar(100) NOT NULL,
    subtitulo varchar(100) NOT NULL,
    texto TEXT NOT NULL,
    autor varchar(100) NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;

CREATE TABLE images (
    id INT AUTO_INCREMENT PRIMARY KEY,
    entity_type ENUM('courses', 'activities', 'news') NOT NULL, -- Indica a qué tabla pertenece la imagen
    entity_id INT NOT NULL, -- ID del curso, actividad o noticia
    image_path VARCHAR(255) NOT NULL -- Ruta o URL de la imagen
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;




