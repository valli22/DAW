-- MySQL dump 10.13  Distrib 5.7.9, for Win32 (AMD64)
--
-- Host: localhost    Database: bd-daw
-- ------------------------------------------------------
-- Server version	5.7.11-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `juego`
--

DROP TABLE IF EXISTS `juego`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juego` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` float NOT NULL,
  `valoracion` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego`
--

LOCK TABLES `juego` WRITE;
/*!40000 ALTER TABLE `juego` DISABLE KEYS */;
INSERT INTO `juego` VALUES (1,1,' Dark Souls continúa redefiniendo los límites con el nuevo y ambicioso capítulo de esta serie revolucionaria, tan aclamada por la crítica. ¡Prepárate para sumergirte en la oscuridad!','img/DarkSouls III0.jpg','DarkSouls III',39.99,8.5),(2,1,'Apasionante juego con tu personaje favorito, revive la historia que todos querrian vivir!','img/Hello Kitty: The Game0.jpg','Hello Kitty: The Game',9.99,10),(3,1,'The Binding of Isaac: Rebirth is a randomly generated action RPG shooter with heavy Rogue-like elements. ','img/The Binding of Isaac0.jpg','The Binding of Isaac',15,9.5),(4,1,'Compite en carreras épicas para 24 jugadores en 26 emplazamientos de fama mundial. Domina el clima lluvioso y las carreras nocturnas en tu camino a la victoria.','img/Forza Motor Sport0.jpg','Forza Motor Sport',69.99,8),(5,1,' FIFA 19 – Play beautiful in the future.','img/Fifa 190.jpg','Fifa 19',69.99,6),(6,1,'Lucha en Mordor, descubre la verdad del espíritu que te fuerza y el origen de los Anillos de Poder.','img/Shadows of Mordor0.jpg','Shadows of Mordor',19.99,7.5),(7,1,'¿Podrás infectar el mundo? Plague Inc. es una mezcla única de estrategia y simulación terroríficamente realista. ','img/Plague Inc0.jpg','Plague Inc',9.99,7),(8,1,'Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la secuela largamente esperada del galardonado Left 4 Dead, el juego co-op número 1 de 2008.','img/Left 4 Dead 20.jpg','Left 4 Dead 2',12.99,8.5),(9,1,'Minecraft es un juego en mundo abierto, basado en los graficos pixelados.','img/Minecraft0.jpg','Minecraft',19.99,8),(10,1,'El infierno es un experimento en el cual no podras sobrevivir en Outlast, un juego en primera persona survival horror.','img/Outlast0.jpg','Outlast',9.99,7.5),(11,1,'Esta divertida saga vuelve mas fuerte que nunca. Preparate para las mejores aventuras junto con nuestros queridos amigos Ratchet y Clank.','img/Rachet y Clanck0.jpg','Rachet y Clanck',39.99,7.5),(12,1,'BioShock es un shooter distinto a todos los que has jugado antes, lleno de armas y tacticas nunca vistas.','img/Bioshock0.jpg','Bioshock',19.99,8.5);
/*!40000 ALTER TABLE `juego` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego_ofertas`
--

DROP TABLE IF EXISTS `juego_ofertas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juego_ofertas` (
  `juegos_id` bigint(20) NOT NULL,
  `ofertas_id` bigint(20) NOT NULL,
  KEY `FK_owx8r1egltiirorq395d9m0hq` (`ofertas_id`),
  KEY `FK_84nosmq0jpi1wbr0pb3yeih3b` (`juegos_id`),
  CONSTRAINT `FK_84nosmq0jpi1wbr0pb3yeih3b` FOREIGN KEY (`juegos_id`) REFERENCES `juego` (`id`),
  CONSTRAINT `FK_owx8r1egltiirorq395d9m0hq` FOREIGN KEY (`ofertas_id`) REFERENCES `oferta` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego_ofertas`
--

LOCK TABLES `juego_ofertas` WRITE;
/*!40000 ALTER TABLE `juego_ofertas` DISABLE KEYS */;
INSERT INTO `juego_ofertas` VALUES (12,3),(11,3),(6,2),(9,1),(10,4),(5,5),(2,7),(4,5),(4,8),(1,6),(1,10),(3,9),(3,10);
/*!40000 ALTER TABLE `juego_ofertas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego_plataforma`
--

DROP TABLE IF EXISTS `juego_plataforma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juego_plataforma` (
  `juego_id` bigint(20) NOT NULL,
  `plataforma_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_o94h4tud43mo2f0vbff8s746x` (`plataforma_id`),
  KEY `FK_9rwscs92750fqy0wk9ol3u6xb` (`juego_id`),
  CONSTRAINT `FK_9rwscs92750fqy0wk9ol3u6xb` FOREIGN KEY (`juego_id`) REFERENCES `juego` (`id`),
  CONSTRAINT `FK_o94h4tud43mo2f0vbff8s746x` FOREIGN KEY (`plataforma_id`) REFERENCES `plataforma` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego_plataforma`
--

LOCK TABLES `juego_plataforma` WRITE;
/*!40000 ALTER TABLE `juego_plataforma` DISABLE KEYS */;
INSERT INTO `juego_plataforma` VALUES (1,12),(2,13),(3,14),(4,15),(5,16),(6,17),(7,21),(8,18),(9,19),(10,20),(11,23),(12,28),(12,29);
/*!40000 ALTER TABLE `juego_plataforma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego_recomendacion`
--

DROP TABLE IF EXISTS `juego_recomendacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juego_recomendacion` (
  `juego_id` bigint(20) NOT NULL,
  `recomendacion_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_aywog9q9ohe41m3pwb61cmjtg` (`recomendacion_id`),
  KEY `FK_402dyc5xtbm5mqhxjwwuqvbu2` (`juego_id`),
  CONSTRAINT `FK_402dyc5xtbm5mqhxjwwuqvbu2` FOREIGN KEY (`juego_id`) REFERENCES `juego` (`id`),
  CONSTRAINT `FK_aywog9q9ohe41m3pwb61cmjtg` FOREIGN KEY (`recomendacion_id`) REFERENCES `recomendacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego_recomendacion`
--

LOCK TABLES `juego_recomendacion` WRITE;
/*!40000 ALTER TABLE `juego_recomendacion` DISABLE KEYS */;
INSERT INTO `juego_recomendacion` VALUES (1,2),(2,4),(3,10),(5,12),(6,8),(8,6),(11,14);
/*!40000 ALTER TABLE `juego_recomendacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `juego_tags`
--

DROP TABLE IF EXISTS `juego_tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `juego_tags` (
  `juego_id` bigint(20) NOT NULL,
  `tags_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_9l7wgvcwv57ice9jl7lkhryal` (`tags_id`),
  KEY `FK_aawnlo16jtqkjv7gmkel5oyjp` (`juego_id`),
  CONSTRAINT `FK_9l7wgvcwv57ice9jl7lkhryal` FOREIGN KEY (`tags_id`) REFERENCES `tag` (`id`),
  CONSTRAINT `FK_aawnlo16jtqkjv7gmkel5oyjp` FOREIGN KEY (`juego_id`) REFERENCES `juego` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `juego_tags`
--

LOCK TABLES `juego_tags` WRITE;
/*!40000 ALTER TABLE `juego_tags` DISABLE KEYS */;
INSERT INTO `juego_tags` VALUES (1,12),(1,13),(1,14),(2,15),(2,16),(2,17),(3,18),(3,19),(4,20),(4,21),(4,22),(5,23),(5,24),(5,25),(6,26),(6,27),(6,28),(7,38),(7,39),(7,40),(8,29),(8,30),(8,31),(9,32),(9,33),(9,34),(10,35),(10,36),(10,37),(11,43),(11,44),(12,51),(12,52),(12,53);
/*!40000 ALTER TABLE `juego_tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oferta`
--

DROP TABLE IF EXISTS `oferta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oferta` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `descuento` float NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` float NOT NULL,
  `precio_inicial` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oferta`
--

LOCK TABLES `oferta` WRITE;
/*!40000 ALTER TABLE `oferta` DISABLE KEYS */;
INSERT INTO `oferta` VALUES (1,1,'Disfruta de miles de horas de juego, supervivencia, crafteos, construccion, lucha... y un largo numero de caracteristicas que hacen a este juego uno de los inolvidables de esta epoca.',5,'../img/minecraft.jpg','Minecraft ',19,20),(2,1,'En esta oferta podras obtener el ultimo juego de la saga Assesins Creed de ubisoft. Disfruta de la etapa medieval-moderna en francia gracias a este fantastico juego.',60,'../img/unity.jpg','Ubisoft regala juego',23.98,59.95),(3,1,'Quieres disfrutar de juegos unos de los juegos mas legendarios que se han creado? Con esta oferta podras disfrutar de ellos si es que todavia no lo habias hecho.',50,'../img/legendarios.png','LEGENDARIOS',40.97,81.97),(4,1,'Quieres tener miedo? Estar en tension? Tener la adrenalina por las nubes? Esta es tu oportunidad de conseguir uno de los mejores juegos de miedo que se han creado: Outlast',10,'../img/outlast.jpg','Es la hora del miedo Outlast',17.99,19.99),(5,1,'En este pack de juegos tenemos dos de los mejores juegos deportivos que han salido este año. Gracias a esta oferta podra disfrutar de Forza 6 y Fifa 16 con un gran descuento del 20%.',20,'../img/ofertaDeportiva.png','Doble deportive doble diversion',79.56,99.46),(6,1,'Vas a poder disfrutar de este juego en su reciente salida gracias a esta gran oferta. El tercer juego de la saga conocida por su dificultad.',10,'../img/darkSouls.png','Oferta de salida Dark Souls III',36.89,40.99),(7,1,'Disfrutaras del mejor juego online gracias a esta oferta. Hello Kitty online estara al precio de cualquiera que tenga ganas de jugar esto.',99,'../img/helloKitty.jpg','El mejor juego online ya en oferta',0.99,99.99),(8,1,'En esta oferta tendras los mejores juegos exclusivos de xbox hasta el momento. Te arrepentiras de no comprarla.',25,'../img/exclusivos.png','Plan XBOX',59.98,79.98),(9,1,'Disfruta del mejor juego del estilo rogue-like que se ha creado jamas. En este rework del juego se podra disfrutar de mejores graficos y mayor cantidad de objetos disponibles en el tambien probablemente mejor juego indie de la historia.',6,'../img/tboi.jpg','Best roguelike in history',140.9,14.99),(10,1,'while(jugar){morir();revivir();} Quieres intentar pasarte dos de los juegos mas dificiles creados hasta el momento? Si tu intencion es conseguir el 100% de estos juegos tardaras horas y horas jugando y divirtiendote para conseguirlo.',30,'../img/imposible.png','Imposible is nothing',39.18,55.98);
/*!40000 ALTER TABLE `oferta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plataforma`
--

DROP TABLE IF EXISTS `plataforma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plataforma` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plataforma`
--

LOCK TABLES `plataforma` WRITE;
/*!40000 ALTER TABLE `plataforma` DISABLE KEYS */;
INSERT INTO `plataforma` VALUES (1,'PC'),(2,'PS4'),(3,'PC'),(4,'PS4'),(5,'XBOX ONE'),(6,'PS4'),(7,'PS4'),(8,'XBOX ONE'),(9,'PS4'),(10,'PC'),(11,'PS4'),(12,'XBOX ONE'),(13,'PS4'),(14,'PC'),(15,'PS4'),(16,'XBOX ONE'),(17,'PS4'),(18,'XBOX ONE'),(19,'PS4'),(20,'PC'),(21,'PS4'),(22,'PS4'),(23,'PS4'),(24,'PC'),(25,'PS4'),(26,'PC'),(27,'PS4'),(28,'PC'),(29,'PS4');
/*!40000 ALTER TABLE `plataforma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recomendacion`
--

DROP TABLE IF EXISTS `recomendacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recomendacion` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `me_gusta` int(11) NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `juego_id` bigint(20) DEFAULT NULL,
  `mentor_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ace321byuh6mop4bnsj2vi3sb` (`juego_id`),
  KEY `FK_lhoph92rtdyjy7e898vf6h0b2` (`mentor_id`),
  CONSTRAINT `FK_ace321byuh6mop4bnsj2vi3sb` FOREIGN KEY (`juego_id`) REFERENCES `juego` (`id`),
  CONSTRAINT `FK_lhoph92rtdyjy7e898vf6h0b2` FOREIGN KEY (`mentor_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recomendacion`
--

LOCK TABLES `recomendacion` WRITE;
/*!40000 ALTER TABLE `recomendacion` DISABLE KEYS */;
INSERT INTO `recomendacion` VALUES (1,'Pero es muy dificil',1,'Esto mola',1,2),(2,'Pero es muy dificil',0,'Esto mola',1,2),(3,'Estais tardando en comprarlo, es lo mejor que he probado en mi vida',0,'BEST GAME LIFE',2,2),(4,'Estais tardando en comprarlo, es lo mejor que he probado en mi vida',0,'BEST GAME LIFE',2,2),(5,'Juego que con amigos nunca te aburres',3,'Best Coop',8,1),(6,'Juego que con amigos nunca te aburres',0,'Best Coop',8,1),(7,'Mejor persona',1,'Gran mundo abierto',6,1),(8,'Mejor persona',0,'Gran mundo abierto',6,1),(9,'Mejor juego del mundo pasado al 1001%',1,'Tha best',3,3),(10,'Mejor juego del mundo pasado al 1001%',0,'Tha best',3,3),(11,'Sigue siendo lo mismo de siempre, pero yo me lo compro',0,'No se porque lo juego',5,6),(12,'Sigue siendo lo mismo de siempre, pero yo me lo compro',0,'No se porque lo juego',5,6),(13,'Reviviendo mis años de mozo',0,'Infancia',11,6),(14,'Reviviendo mis años de mozo',0,'Infancia',11,6);
/*!40000 ALTER TABLE `recomendacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tag` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'divertido'),(2,'divertido'),(3,'divertido'),(4,'divertido'),(5,'divertido'),(6,'divertido'),(7,'divertido'),(8,'divertido'),(9,'divertido'),(10,'divertido'),(11,'Dificil'),(12,'Dificil'),(13,'Historia'),(14,'Rol'),(15,'Online'),(16,'Accion'),(17,'Drogas'),(18,'Rogue-like'),(19,'Dificil'),(20,'Deportes'),(21,'Coches'),(22,'Realista'),(23,'Deporte'),(24,'Soccer'),(25,'2019'),(26,'Accion'),(27,'Mundo abierto'),(28,'Fantasia'),(29,'Cooperativo'),(30,'FPS'),(31,'Accion'),(32,'Mundo abierto'),(33,'Crafteos'),(34,'Survival'),(35,'Terror'),(36,'Aventura'),(37,'Primera persona'),(38,'Estrategia'),(39,'Simuladores'),(40,'2D'),(41,'Historia'),(42,'Divertido'),(43,'Historia'),(44,'Divertido'),(45,'FPS'),(46,'Accion'),(47,'Terror'),(48,'FPS'),(49,'Accion'),(50,'Terror'),(51,'FPS'),(52,'Accion'),(53,'Terror');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `bnet` varchar(255) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `descripcion_mentor` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` varchar(255) DEFAULT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  `seguidores` int(11) DEFAULT NULL,
  `steam` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'useeeerrrrrrrrr','prueba@gmail.com','mis padres eran informaticos','tampoco tengo ni idea','1995-05-19','img/useruser0.jpg','user','$2a$10$q38eNlMOHZD8s3AdaenHqOi17TjLRhCuwB0iU4nf2UI04wQG0RWFq',3,'user'),(2,'reshuad','prueba@gmail.com','soy el que manda en todo esto','eso si como mentor no tengo ni idea','1995-05-19','img/useradmin0.jpg','admin','$2a$10$BeGoscaZxPVBpN38a0RoJe03RgXNVifo1NH7AxH.RGani5HyxxEbO',2,'adminchulo'),(3,'valli22','prueba@gmail.com','hola me llamo valli y estoy haciendo GII+GIS','Pues me gusta jugar mucho','1222-12-12','../../img/logo.png','valli22','$2a$10$JGjTckYbeME.ZQ.kuIflD.5Zh5RKjcwaqxoD5ozj7.HRicUDMilvm',3,'valli22'),(4,'excen','prueba2@gmail.com','Soy un noobie pero juego igual','SC2 <3','1975-05-22','../../img/logo.png','excen','$2a$10$wQPIMuR2wNNEldxJgruEoOr5kr5KySeCqcqxz/yXAENBrN3HXeZWy',2,'excen'),(5,'zigic','prueba3@gmail.com','Pues asi soy yo','Me gusta jugar a veces demasiado','3222-04-12','../../img/logo.png','zigic','$2a$10$EibBIkzUl2fZKXR8XbkCluEq49NCGSMvDm8sRMpRKIs28kSJfYIgW',2,'zigic'),(6,'drope','prueba@gmail.com','Pues ya no se que poner la verdad','Lo mismo digo','1995-05-19','../../img/logo.png','drope','$2a$10$9RQnTxdSNe7yQyuLlHlBSegSMJl1NNUziZXIIQLXflsPqEUBB2Qlu',2,'drope');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_mentores_siguiendo`
--

DROP TABLE IF EXISTS `user_mentores_siguiendo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_mentores_siguiendo` (
  `mentores_seguidos_id` bigint(20) NOT NULL,
  `mentores_siguiendo_id` bigint(20) NOT NULL,
  KEY `FK_15nef656uyjndw1leoafgalyd` (`mentores_siguiendo_id`),
  KEY `FK_t65n66fe4b68crl7bkbr4f9qd` (`mentores_seguidos_id`),
  CONSTRAINT `FK_15nef656uyjndw1leoafgalyd` FOREIGN KEY (`mentores_siguiendo_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_t65n66fe4b68crl7bkbr4f9qd` FOREIGN KEY (`mentores_seguidos_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_mentores_siguiendo`
--

LOCK TABLES `user_mentores_siguiendo` WRITE;
/*!40000 ALTER TABLE `user_mentores_siguiendo` DISABLE KEYS */;
INSERT INTO `user_mentores_siguiendo` VALUES (2,1),(1,2),(1,3),(1,4),(3,1),(3,6),(3,5),(6,5),(6,4),(6,3),(6,2),(6,1),(5,6),(5,3);
/*!40000 ALTER TABLE `user_mentores_siguiendo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_recomendaciones`
--

DROP TABLE IF EXISTS `user_recomendaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_recomendaciones` (
  `user_id` bigint(20) NOT NULL,
  `recomendaciones_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_r26pjyiq7debt4e4qfojtrnjn` (`recomendaciones_id`),
  KEY `FK_3g70kpde27d0kkjldrcu1r18e` (`user_id`),
  CONSTRAINT `FK_3g70kpde27d0kkjldrcu1r18e` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK_r26pjyiq7debt4e4qfojtrnjn` FOREIGN KEY (`recomendaciones_id`) REFERENCES `recomendacion` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_recomendaciones`
--

LOCK TABLES `user_recomendaciones` WRITE;
/*!40000 ALTER TABLE `user_recomendaciones` DISABLE KEYS */;
INSERT INTO `user_recomendaciones` VALUES (1,5),(1,7),(2,1),(2,3),(3,9),(6,11),(6,13);
/*!40000 ALTER TABLE `user_recomendaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_recomendaciones_me_gusta`
--

DROP TABLE IF EXISTS `user_recomendaciones_me_gusta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_recomendaciones_me_gusta` (
  `user_id` bigint(20) NOT NULL,
  `recomendaciones_me_gusta_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_46pwfefr0g8rwwh6at4q4m9dv` (`recomendaciones_me_gusta_id`),
  KEY `FK_52scxw0b262bjxd9gaqtu5kw8` (`user_id`),
  CONSTRAINT `FK_46pwfefr0g8rwwh6at4q4m9dv` FOREIGN KEY (`recomendaciones_me_gusta_id`) REFERENCES `recomendacion` (`id`),
  CONSTRAINT `FK_52scxw0b262bjxd9gaqtu5kw8` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_recomendaciones_me_gusta`
--

LOCK TABLES `user_recomendaciones_me_gusta` WRITE;
/*!40000 ALTER TABLE `user_recomendaciones_me_gusta` DISABLE KEYS */;
INSERT INTO `user_recomendaciones_me_gusta` VALUES (2,7),(6,1),(6,5),(6,9);
/*!40000 ALTER TABLE `user_recomendaciones_me_gusta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `roles` varchar(255) DEFAULT NULL,
  KEY `FK_g1uebn6mqk9qiaw45vnacmyo2` (`user_id`),
  CONSTRAINT `FK_g1uebn6mqk9qiaw45vnacmyo2` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (3,'ROLE_USER'),(4,'ROLE_USER'),(5,'ROLE_USER'),(6,'ROLE_USER'),(1,'ROLE_USER'),(2,'ROLE_USER'),(2,'ROLE_ADMIN');
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-05-25  9:59:58
