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
  `titulo` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'Curso','2025-02-13','caquita','Descripcion del curso: lorLorem ipsum dolor sit amet, consectetur adipisicing elit. \nVoluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt dolore aut quia laboriosam obcaecati! \nVelit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt, \nrepellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe. \nAb consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro, \nassumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?',150.00,'10 horas',NULL,NULL,'Virtual',NULL,'2025-01-02 20:52:16',NULL,'../../public/img/craneo.jpg'),(2,'Curso','2025-02-13','Curso de React','Descripcion del curso: lorLorem ipsum dolor sit amet, \nconsectetur adipisicing elit.  Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt \ndolore aut quia laboriosam obcaecati!  Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt,  repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum blanditiis saepe.  Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus impedit porro,  assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente hic temporibus molestias iste ipsa?',150.00,'10 horas',NULL,NULL,'Virtual',NULL,'2025-01-02 21:37:46',NULL,'../../public/img/craneo.jpg'),(3,'Curso','2025-02-13','Curso de React','Descripcion del curso: lorLorem ipsum dolor sit amet, \nconsectetur adipisicing elit.  Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt \ndolore aut quia laboriosam obcaecati!  Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nAdipisci incidunt,  repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum \nblanditiis saepe.  Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nPossimus impedit porro,  assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente \nhic temporibus molestias iste ipsa?',150.00,'10 horas',NULL,NULL,'Virtual',NULL,'2025-01-02 21:39:12',NULL,'../../public/img/pc.jpg'),(4,'Curso','2025-02-13','Curso de React','Descripcion del curso: lorLorem ipsum dolor sit amet, \nconsectetur adipisicing elit.  Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt \ndolore aut quia laboriosam obcaecati!  Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nAdipisci incidunt,  repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum \nblanditiis saepe.  Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nPossimus impedit porro,  assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente \nhic temporibus molestias iste ipsa?',150.00,'10 horas',NULL,NULL,'Virtual',NULL,'2025-01-02 21:40:06',NULL,'../../public/img/pc.jpg'),(5,'Curso','2025-03-12','CASO','Descripcion del curso: lorLorem ipsum dolor sit amet, \nconsectetur adipisicing elit.  Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt \ndolore aut quia laboriosam obcaecati!  Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nAdipisci incidunt,  repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum \nblanditiis saepe.  Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nPossimus impedit porro,  assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente \nhic temporibus molestias iste ipsa?',150.00,'10 horas',NULL,NULL,'Virtual',NULL,'2025-01-02 21:40:07',NULL,'../../public/img/pc.jpg'),(6,'Curso','2025-02-13','Curso de React','Descripcion del curso: lorLorem ipsum dolor sit amet, \nconsectetur adipisicing elit.  Voluptate ratione debitis maiores natus inventore nisi iusto atque officiis, ad non deserunt \ndolore aut quia laboriosam obcaecati!  Velit quibusdam quam pariatur.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nAdipisci incidunt,  repellat impedit corrupti mollitia ipsam similique tempore? Mollitia repudiandae doloribus, delectus nostrum \nblanditiis saepe.  Ab consectetur omnis voluptatem quisquam soluta!lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. \nPossimus impedit porro,  assumenda quaerat ea quo blanditiis, quas debitis suscipit magnam dolor incidunt? Modi libero sapiente \nhic temporibus molestias iste ipsa?',150.00,'10 horas',NULL,NULL,'Virtual',NULL,'2025-01-02 21:40:07',NULL,'../../public/img/auriculares-libros.jpg');
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

-- Dump completed on 2025-01-04 19:20:36
