--
-- Database: `appdocente_db`
--

CREATE DATABASE IF NOT EXISTS `appdocente_db`;
USE `appdocente_db`;


-- ENTITIES

--
-- Struttura della tabella `encuesta`
--

CREATE TABLE IF NOT EXISTS `encuesta` (
	`id_materia` int ,
	`periodo` date ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `estudiante`
--

CREATE TABLE IF NOT EXISTS `estudiante` (
	`apellidos` varchar(130) ,
	`email` varchar(130) ,
	`nombres` varchar(130) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `materia`
--

CREATE TABLE IF NOT EXISTS `materia` (
	`creditos` int ,
	`id_profesor` int ,
	`nombre` varchar(130) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `pregunta`
--

CREATE TABLE IF NOT EXISTS `pregunta` (
	`id_encuesta` int  NOT NULL,
	`valor_pregunta` varchar(130)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `profesor`
--

CREATE TABLE IF NOT EXISTS `profesor` (
	`apellidos` varchar(130) ,
	`nombres` varchar(130) ,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `respuesta`
--

CREATE TABLE IF NOT EXISTS `respuesta` (
	`id_estudiante` int ,
	`id_pregunta` int ,
	`valor_respuesta` varchar(130)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);





--
-- Struttura della tabella `user`
--

CREATE TABLE IF NOT EXISTS `user` (
	`id_estudiante` int ,
	`password` varchar(130)  NOT NULL,
	`role` varchar(130)  NOT NULL,
	`username` varchar(130)  NOT NULL,
	
	-- RELAZIONI

	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);


-- Security

INSERT INTO `appdocente_db`.`user` (`username`, `password`, `_id`) VALUES ('admin', '62f264d7ad826f02a8af714c0a54b197935b717656b80461686d450f7b3abde4c553541515de2052b9af70f710f0cd8a1a2d3f4d60aa72608d71a63a9a93c0f5', 1);

CREATE TABLE IF NOT EXISTS `roles` (
	`role` varchar(30) ,
	
	-- RELAZIONI

	`_user` int(11)  NOT NULL REFERENCES user(_id),
	`_id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT 

);
INSERT INTO `appdocente_db`.`roles` (`role`, `_user`, `_id`) VALUES ('ADMIN', '1', 1);






