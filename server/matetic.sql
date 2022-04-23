-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql:3306
-- Tiempo de generación: 23-04-2022 a las 09:41:41
-- Versión del servidor: 8.0.28
-- Versión de PHP: 8.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `matetic`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `apartado`
--

CREATE TABLE `apartado` (
  `nombre_apartado` varchar(50) NOT NULL,
  `tema` varchar(50) NOT NULL,
  `contenido` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `apartado`
--

INSERT INTO `apartado` (`nombre_apartado`, `tema`, `contenido`) VALUES
('Funciones polinomicas', 'Funciones Elementales', '<h3 className=\"title\">¿QUÉ ES UNA FUNCIÓN?</h3>\r\n                    <p>Una función es una correspondencia entre dos puntos tal que cada elemento del conjunto incial le correponde como máximo <b>un único valor</b> del conjunto final.</p>\r\n                    <p>La <b>variables independiente, x,</b> la forman los valores del conjunto inicial que se fijan previamente.</p>\r\n                    <p>La <b>variables dependiente, y,</b> la forman los valores del conjunto final que se obtienen al aplicar la función a la variable dependiente.</p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aporte`
--

CREATE TABLE `aporte` (
  `id_aporte` int NOT NULL,
  `mensaje` text NOT NULL,
  `id_discusion` int NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `aporte`
--

INSERT INTO `aporte` (`id_aporte`, `mensaje`, `id_discusion`, `correo`) VALUES
(1, 'HEY BRO TRABAJA UN POCO', 18, 'joelbraortiz@gmail.com'),
(2, 'HOLAAAAAAA', 18, 'joelbraortiz@gmail.com'),
(3, 'LOLXDQUETROL', 2, 'joelbraortiz@gmail.com'),
(4, 'DE PUTA MADRE', 2, 'joelbraortiz@gmail.com');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignatura`
--

CREATE TABLE `asignatura` (
  `nombre_asig` varchar(50) NOT NULL,
  `num_bloques` int NOT NULL,
  `curso` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `asignatura`
--

INSERT INTO `asignatura` (`nombre_asig`, `num_bloques`, `curso`) VALUES
('mate', 4, 'dbh4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `bloque`
--

CREATE TABLE `bloque` (
  `nombre_bloque` varchar(50) NOT NULL,
  `nombre_asig` varchar(50) NOT NULL,
  `num_temas` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `bloque`
--

INSERT INTO `bloque` (`nombre_bloque`, `nombre_asig`, `num_temas`) VALUES
('Funciones', 'mate', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `discusion`
--

CREATE TABLE `discusion` (
  `id_discusion` int NOT NULL,
  `titulo` text NOT NULL,
  `mensaje` text NOT NULL,
  `correo` varchar(50) NOT NULL,
  `foro` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `discusion`
--

INSERT INTO `discusion` (`id_discusion`, `titulo`, `mensaje`, `correo`, `foro`) VALUES
(2, 'DSAFDASF', 'BXBVCNCDFG', 'HOLA', 1),
(16, 'DASSDSAADS', 'DADS', 'HOLA', 1),
(18, 'EY WEY', 'WEY', 'joelbraortiz@gmail.com', 1),
(19, 'Contenido lol xd lol', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', 'joelbraortiz@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio`
--

CREATE TABLE `ejercicio` (
  `id_ejercicio` int NOT NULL,
  `contenido` text NOT NULL,
  `nom_tema` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `id_foro` int NOT NULL,
  `titulo` text NOT NULL,
  `tema` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `foro`
--

INSERT INTO `foro` (`id_foro`, `titulo`, `tema`) VALUES
(1, 'Foro General', NULL),
(3, 'Foro Funciones', 'Funciones'),
(4, 'Foro Funciones Elementales', 'Funciones Elementales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `realizacion_ejercicio`
--

CREATE TABLE `realizacion_ejercicio` (
  `id_intento` int NOT NULL,
  `nota` decimal(10,0) NOT NULL,
  `intento` int NOT NULL,
  `correo` varchar(50) NOT NULL,
  `id_ejercicio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tema`
--

CREATE TABLE `tema` (
  `nom_tema` varchar(50) NOT NULL,
  `nom_bloque` varchar(50) NOT NULL,
  `contenido` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `tema`
--

INSERT INTO `tema` (`nom_tema`, `nom_bloque`, `contenido`) VALUES
('Funciones', 'Funciones', 'gdfgdfgf'),
('Funciones Elementales', 'Funciones', 'fgsgdsgs');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `correo` varchar(50) NOT NULL,
  `nomb_ap` text NOT NULL,
  `contra` text NOT NULL,
  `colegio` text NOT NULL,
  `rol` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`correo`, `nomb_ap`, `contra`, `colegio`, `rol`) VALUES
('HOLA', 'HOLAA', 'ADIOS', 'HOLADIOS', 0),
('joelbraortiz@gmail.com', 'jbra001', '$2b$04$kEeIq3OSocAEP42wDH1ae..XPtrKTn4h/w7w3vXVQydt.4tCCGS5a', 'Colegio San Vicente de Paúl', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `apartado`
--
ALTER TABLE `apartado`
  ADD PRIMARY KEY (`nombre_apartado`,`tema`),
  ADD KEY `claveTema` (`tema`);

--
-- Indices de la tabla `aporte`
--
ALTER TABLE `aporte`
  ADD PRIMARY KEY (`id_aporte`),
  ADD KEY `discusion` (`id_discusion`),
  ADD KEY `usuario_participante` (`correo`);

--
-- Indices de la tabla `asignatura`
--
ALTER TABLE `asignatura`
  ADD PRIMARY KEY (`nombre_asig`);

--
-- Indices de la tabla `bloque`
--
ALTER TABLE `bloque`
  ADD PRIMARY KEY (`nombre_bloque`,`nombre_asig`),
  ADD KEY `asignatura` (`nombre_asig`);

--
-- Indices de la tabla `discusion`
--
ALTER TABLE `discusion`
  ADD PRIMARY KEY (`id_discusion`),
  ADD KEY `usuario` (`correo`),
  ADD KEY `foro` (`foro`);

--
-- Indices de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD PRIMARY KEY (`id_ejercicio`),
  ADD KEY `pertenece_a` (`nom_tema`);

--
-- Indices de la tabla `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`id_foro`),
  ADD KEY `tema` (`tema`);

--
-- Indices de la tabla `realizacion_ejercicio`
--
ALTER TABLE `realizacion_ejercicio`
  ADD PRIMARY KEY (`id_intento`),
  ADD KEY `id_ej` (`id_ejercicio`),
  ADD KEY `correo_usuario` (`correo`);

--
-- Indices de la tabla `tema`
--
ALTER TABLE `tema`
  ADD PRIMARY KEY (`nom_tema`,`nom_bloque`),
  ADD KEY `bloque` (`nom_bloque`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `aporte`
--
ALTER TABLE `aporte`
  MODIFY `id_aporte` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `discusion`
--
ALTER TABLE `discusion`
  MODIFY `id_discusion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  MODIFY `id_ejercicio` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `foro`
--
ALTER TABLE `foro`
  MODIFY `id_foro` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `realizacion_ejercicio`
--
ALTER TABLE `realizacion_ejercicio`
  MODIFY `id_intento` int NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `apartado`
--
ALTER TABLE `apartado`
  ADD CONSTRAINT `claveTema` FOREIGN KEY (`tema`) REFERENCES `tema` (`nom_tema`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `aporte`
--
ALTER TABLE `aporte`
  ADD CONSTRAINT `discusion` FOREIGN KEY (`id_discusion`) REFERENCES `discusion` (`id_discusion`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario_participante` FOREIGN KEY (`correo`) REFERENCES `usuario` (`correo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `bloque`
--
ALTER TABLE `bloque`
  ADD CONSTRAINT `asignatura` FOREIGN KEY (`nombre_asig`) REFERENCES `asignatura` (`nombre_asig`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `discusion`
--
ALTER TABLE `discusion`
  ADD CONSTRAINT `foro` FOREIGN KEY (`foro`) REFERENCES `foro` (`id_foro`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `usuario` FOREIGN KEY (`correo`) REFERENCES `usuario` (`correo`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  ADD CONSTRAINT `pertenece_a` FOREIGN KEY (`nom_tema`) REFERENCES `tema` (`nom_tema`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `foro`
--
ALTER TABLE `foro`
  ADD CONSTRAINT `tema` FOREIGN KEY (`tema`) REFERENCES `tema` (`nom_tema`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `realizacion_ejercicio`
--
ALTER TABLE `realizacion_ejercicio`
  ADD CONSTRAINT `correo_usuario` FOREIGN KEY (`correo`) REFERENCES `usuario` (`correo`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `id_ej` FOREIGN KEY (`id_ejercicio`) REFERENCES `ejercicio` (`id_ejercicio`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Filtros para la tabla `tema`
--
ALTER TABLE `tema`
  ADD CONSTRAINT `bloque` FOREIGN KEY (`nom_bloque`) REFERENCES `bloque` (`nombre_bloque`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
