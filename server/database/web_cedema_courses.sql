-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: web_cedema
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` enum('Curso','Charla') COLLATE utf8mb4_general_ci NOT NULL,
  `fecha` date NOT NULL,
  `asincronico` enum('Si','No') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `temas` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `region` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `duracion` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `link_form` text COLLATE utf8mb4_general_ci,
  `link_drive` text COLLATE utf8mb4_general_ci,
  `formato` enum('Presencial','Virtual') COLLATE utf8mb4_general_ci NOT NULL,
  `direccion` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `finishes_at` date DEFAULT NULL,
  `image1_path` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Curso','2022-02-15','Si','República Popular China, Nuevo Líder Mundial','Politica','China','Por ahora nada',0.00,'4 Módulos - 8 Clases (16 hs)',NULL,NULL,'Virtual',NULL,'2025-02-06 13:04:08','2022-03-10',NULL),(2,'Curso','2023-09-13','Si','Relaciones entre Europa y América Latina: Oportunidades y Desafíos para el vínculo histórico de ambas regiones','Politica','Europa y América Latina','Por ahora nada',0.00,'4 Módulos - 8 Clases (16 hs)',NULL,NULL,'Virtual',NULL,'2025-02-06 13:05:22','2023-11-18',NULL),(3,'Curso','2024-03-13','Si','De Medio Oriente hacia Pacífico: La región Asiática como centro geopolítico de las Relaciones Internacionales Contemporáneas','Politica','Asia','Por ahora nada',0.00,'10 Módulos - 34 Clases (68 hs)',NULL,NULL,'Virtual',NULL,'2025-02-06 13:07:44','2024-06-15',NULL),(4,'Curso','2024-04-09','Si','Hegemonía en Juego: Elecciones Estados Unidos 2024 y el Futuro de Occidente','Politica','EE.UU y Occidente','Por ahora nada',0.00,'10 Módulos - 26 Clases (52 hs)',NULL,NULL,'Virtual',NULL,'2025-02-06 13:08:59','2024-11-08',NULL),(5,'Curso','2025-03-18','Si','La Era de los Regionalismos: Camino a un Mundo Multipolar','Politica','Internacional','Por ahora nada',0.00,'8 Módulos - 24 Clases (48 hs)',NULL,NULL,'Virtual',NULL,'2025-02-06 13:10:32','2025-05-08',NULL);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-06 11:41:37
