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
INSERT INTO courses (tipo, fecha, titulo, precio, duracion, formato, descripcion)
VALUES ('Curso','2025-2-13','Curso de React', 150.00, '10 horas', 'Virtual', 
'Descripcion del curso: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. 
Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! 
Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, 
repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. 
Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, 
assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?');

SELECT * FROM courses WHERE titulo='Curso de React';
SELECT * FROM images;

INSERT INTO images (entity_type, entity_id, image_path)
VALUES ('courses', 1, '../../public/auriculares-libros.jpg');

INSERT INTO images (entity_type, entity_id, image_path)
VALUES ('courses', 1, '../../public/craneo.jpg');

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
-- LEFT JOIN Si encuentra una imagen que cumple con estas condiciones (del ON), se incluye la ruta de la imagen (image_path) en el resultado.
-- Si no encuentra una imagen, se incluyen los datos del curso y el campo image_path será NULL.
-- Se usa el LEFT JOIN porque queremos listar todos los cursos aunque no tengan una imagen relacionada. Si usáramos un INNER JOIN, solo se incluirían los cursos que tienen una imagen asociada.

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