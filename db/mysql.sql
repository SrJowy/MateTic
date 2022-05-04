-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql:3306
-- Tiempo de generación: 04-05-2022 a las 17:06:24
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
-- Base de datos: `default_schema`
--
DROP DATABASE IF EXISTS `default_schema`;
CREATE DATABASE IF NOT EXISTS `default_schema` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `default_schema`;
--
-- Base de datos: `matetic`
--
DROP DATABASE IF EXISTS `matetic`;
CREATE DATABASE IF NOT EXISTS `matetic` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `matetic`;

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
('Acotacion y asintotas', 'Funciones', '<h3 className=\"title\">ACOTACIÓN Y ASÍNTOTAS</h3>\r\n		    <p>Una función f está acotada superiormente si existe un número real k que verifica\r\nf(x) ≤ k para todo x del dominio de f. El número k es una cota superior.</p>\r\n                    <p>Una función f está acotada inferiormente si existe un número real k\' que verifica\r\nf(x) ≥ k\' para todo x del dominio de f. El número k\' es una cota inferior.</p>\r\n		    <p>Una asíntota es una recta hacia la que se va aproximando la función, cuando la variable independiente se va acercando a determinados valores.</p>                    \r\n		    <p>Hay tres tipos de asíntotas:</p>\r\n                    <p>Las asíntotas verticales son rectas de la forma x =a.</p>\r\n                    <p>Las asíntotas horizontales son rectas de la forma y =a.</p>\r\n                    <p>Las asíntotas oblicuas son rectas de la forma y= ax + b.</p>\r\n<iframe width=\"480\" height=\"320\" src=\"https://www.youtube.com/embed/laOYgguNMe0\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'),
('Composicion de funciones', 'Funciones', '<h3 className=\"title\">COMPOSICIÓN DE FUNCIONES</h3>\r\n                    <p>Dadas dos funciones f y g, se define la función f compuesta con g como:</p>\r\n                        <p>( g ∘ f )(x)= g[f(x)]</p>\r\n                    <p>Si f(x)=2x-1 y g(x) = x<sup>2</sup></p>\r\n                        <p>(g ∘ f)(x)= g[f(x)]=g(2x-1)=(2x-1)<sup>2</sup>=4x<sup>2</sup>-4x+1</p>\r\n                    <p>El dominio de g o f está formado por todos los valores x que pertenecen al dominio de f, tales que f(x) pertenece al dominio de g.</p>'),
('Continuidad', 'Funciones', '<h3 className=\"title\">CONTINUIDAD DE UNA FUNCIÓN</h3>\r\n                    <p>Una función es continua en un punto si en ese punto la gráfica de la función no presenta saltos o interrupciones.</p>\r\n                    <p>Una función es discontinua en un punto si en ese punto la gráfica de la función presenta saltos o interrupciones.</p>\r\n                    <p>Una función es continua en un intervalo (a, b) si es continua en todos los puntos del intervalo.</p>\r\n                    <p>Una función solo puede ser continua en los puntos de su dominio.</p>\r\n<iframe width=\"480\" height=\"320\" src=\"https://www.youtube.com/embed/c-X-jcmhsXc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'),
('Correspondencias y funciones', 'Funciones', '<h3 className=\"title\">¿QUÉ ES UNA FUNCIÓN?</h3>\r\n                    <p>Una función es una correspondencia entre dos puntos tal que cada elemento del conjunto incial le correponde como máximo <b>un único valor</b> del conjunto final.</p>\r\n                    <p>La <b>variables independiente, x,</b> la forman los valores del conjunto inicial que se fijan previamente.</p>\r\n                    <p>La <b>variables dependiente, y,</b> la forman los valores del conjunto final que se obtienen al aplicar la función a la variable dependiente.</p>\r\n<h3 className=\"title\">CORRESPONDENCIAS</h3>\r\n                    <p>Cuando los conjuntos inicial y final son números reales, se dice que es una función real de variable real.</p>\r\n                    <p>Una función es inyectiva cuando a elementos distintos del conjunto inicial les corresponden elementos diferentes en el conjunto final.</p>'),
('Crecimiento y decrecimiento', 'Funciones', '<h3 className=\"title\">CRECIMIENTO Y DECRECIMIENTO. MÁXIMOS Y MÍNIMOS</h3>\r\n                    <p>Excepto las funciones constantes, las demás funciones varían cuando la variable independiente toma diferentes valores. Para analizar cómo varía la función en cada intervalo,se utiliza la tasa de variación media.</p>'),
('Dominio y recorrido', 'Funciones', '<h3 className=\"title\">DOMINIO Y RECORRIDO</h3>\r\n                    <p>El dominio de una función es el conjunto de todos los valores que puede tomar la variable independiente. Se representa por D().</p>\r\n                    <p>El recorrido o imagen de una función es el conjunto de todos los valores que toma la variable dependiente. Se representa por R(A) o Im(A).</p>'),
('Funcion inversa', 'Funciones', '<h3 className=\"title\">FUNCIÓN INVERSA</h3>\r\n                    <p>Si f es una función inyectiva definida en R, tal que a cada valor de x le hace corresponder un valor único de y, la función inversa f-1 transforma cada valor de y en x, para todo y ∈ R(A).</p>'),
('Funciones exponenciales y logaritmicas', 'Funciones Elementales', '<h3 className=\"title\">FUNCIONES EXPONENCIALES Y LOGARÍTMICAS</h3>\r\n		    <p>Funciones exponenciales</p>\r\n                    <p>Las funciones de tipo f(x)=ax en las que a≠0, se llaman funciones exponenciales.</p>\r\n                    <p>Su dominio es R y son continuas en él.</p>\r\n                    <p>Los puntos (0,1) y (1,a) pertenecen a la gráfica.</p>\r\n                    <p>Es creciente si a>1 y decreciente si 0&lt;a&lt;1</p>\r\n                    <p>Funciones logarítmicas</p>\r\n                    <p>La función logarítmica es la función inversa de la exponencial.</p>\r\n                    <p>Una función logarítmica está formada por un logaritmo de base a, y es de la forma:  f(x)=logax siendo a un real positivo, a > 0, y a ≠ 1.</p>\r\n                    <p>Cuando 0 < a < 1, entonces la función logarítmica es una función decreciente y cuando a > 1, entonces es una función creciente.</p>'),
('Funciones polinomicas', 'Funciones Elementales', '<h3 className=\"title\">FUNCIONES POLINÓMICAS</h3>\r\n                    <p>Las funciones cuya expresión es f(x) = a0+ a1x + a2x2 + .. + anxn, se llaman funciones polinómicas, con n ∈ N y los coeficientes a0 ,  a1, ... an ∈ R.</p>\r\n                    <p>Ejemplo:</p>\r\n                    <p>La función f(x) = 5 - 3x + x3 - 2x4 es una función polinómica de cuarto grado, su variable independiente es x, y sus coeficientes, 5, -3, 0, 1 y -2.</p>\r\n                    <p>Funciones lineales</p>\r\n                    <p>Las funciones lineales son funciones polinómicas de grado menor o igual que 1, es\r\ndecir, de la forma f(x) = ax + b, con a, b ∈ R. Su gráfica es una recta</p>\r\n		    <p>El término a es la pendiente de la recta. Si a <0, la función es decreciente. Si a > O la función es creciente.</p>\r\n		    <p>El coeficiente b, o término independiente del polinomio, es la ordenada en el origen,\r\npuesto que la gráfica de la función corta al eje Y en el punto (0, b)</p>\r\n		    <p>Funciones cuadráticas</p>\r\n		    <p>Si a <0, las ramas de la parábola se abren hacia abajo y la función es creciente hasta alcanzar la abscisa del vértice y decreciente a partir de él.</p>\r\n		    <p>Si a > O, las ramas se abren hacia arriba y la función es decreciente hasta alcanzar la abscisa del vértice y creciente a partir de él.</p>\r\n		    <p>Tiene un eje de simetría que contiene al vértice de la parábola.</p>\r\n		    <p>El vértice de la parábola se encuentra en el punto (-b/2a,f(-b/2a)).</p>\r\n<iframe width=\"480\" height=\"320\" src=\"https://www.youtube.com/embed/IP4JIZZPLdc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n<iframe width=\"480\" height=\"320\" src=\"https://www.youtube.com/embed/BadCfsSNmAo\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'),
('Funciones racionales', 'Funciones Elementales', '<h3 className=\"title\">FUNCIONES RACIONALES</h3>\r\n                    <p>Los números racionales son aquellos números que se pueden escribir de la forma a/b, con \r\na y b ∈ Z y b ≠ 0. Así, las funciones que tienen una expresión de la forma f(x) = A(x)/B(x)\' , \r\nson polinomios con B(x)’ ≠ 0. Se llaman funciones racionales.</p>\r\n                    <p>El dominio de las funciones racionales está formado por todos los números reales\r\nexcepto los que anulan el polinomio del denominador.</p>\r\n                    <p>Funciones de proporcionalidad inversa</p>\r\n                    <p>Las funciones de proporcionalidad inversa son funciones racionales resultantes del cociente entre una constante y la variable independiente x.</p>\r\n		    <p>Son funciones de la forma f(x)=k/x con k ≠ 0 , su gráfica es llamada hipérbola.\r\nPresentan simetría impar: f(x) = f(-x)</p>\r\n		    <p>El dominio de las funciones de este tipo es: D = R - {0}.</p>\r\n 		    <p>Sí k> 0, las ramas de la hipérbola están en el 1er y 3er cuadrante y es decreciente en todo su dominio.</p>\r\n		    <p>Si k<0, las ramas de la hipérbola están en el 2º y  4º cuadrante y es creciente en todo su dominio.</p>\r\n<iframe width=\"480\" height=\"320\" src=\"https://www.youtube.com/embed/iNwlJlDuW3A\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'),
('Funciones trigonometricas', 'Funciones Elementales', '<h3 className=\"title\">FUNCIONES TRIGONOMÉTRICAS</h3>\r\n		    <p>Funciones seno y coseno</p>\r\n                    <p>Si x es la medida, en radianes, de un ángulo α, se definen las funciones seno y coseno como:</p>\r\n		    <p>f(x)= sen x</p>                    <p>f(x)= cos x</p>\r\n                    <p>Las funciones seno y coseno tienen las siguientes características:</p>\r\n                    <p>Su dominio es todo el conjunto de los números reales.</p>\r\n                    <p>Son continuas en su dominio.</p>\r\n                    <p>Están acotadas ya que para cualquier ángulo a se verifica que -1 ≤ sen α ≤1 y -1 ≤ cos α ≤ 1, por tanto, su recorrido es [-1,1].</p>\r\n                    <p>Son funciones periódicas con periodo T = 2π porque sen (×+2π) = senx\r\ncos (x+2π) = cosx. Por ese motivo, se estudian en el intervalo [0, 2).</p>\r\n                    <p>Función tangente</p>\r\n                    <p>Si x es la medida, en radianes, de un ángulo α, se define la función tangente como:</p>\r\n                    <p>f(x) = tgx = senx/cosx</p>\r\n                    <p>La función tangente presenta las siguientes características:</p>\r\n                    <p>Por ser un cociente de dos funciones cuyo dominio es R, su dominio serán todos los números reales excepto los valores que anulan el denominador</p>\r\n<iframe width=\"480\" height=\"320\" src=\"https://www.youtube.com/embed/dk2wkbfM2Rc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'),
('Operaciones con funciones', 'Funciones', '<h3 className=\"title\">OPERACIONES CON FUNCIONES</h3>\r\n                    <p>La suma o diferencia de dos funciones f y g es otra función que a cada elemento x del dominio común a ambas funciones le hace corresponder la suma o diferencia de f(x) y g(x).</p>\r\n                        <p>(f ± g)(x)= f(x)±g(x) con x ∈ D(f) ∩ D(g)</p>\r\n                    <p>El producto de dos funciones f y g es otra función que a cada elemento x del dominio común a ambas funciones le hace corresponder el producto de f(x) y g(x).</p>\r\n                        <p>(f * g)(x)= f(x) * g(x) con x ∈ D(f) ∩ D(g)</p>\r\n                    <p>El cociente de dos funciones f y g es otra función que a cada elemento x del dominio común a ambas funciones le hace corresponder el cociente de f(x) y g(x) siempre que g(x) ≠ 0. </p>\r\n                        <p>(f :g)(x)= f(x):g(x)</p>\r\n<iframe width=\"480\" height=\"320\" src=\"https://www.youtube.com/embed/DlYPHE1-_2s\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>'),
('Periodicidad de una funcion', 'Funciones', '<h3 className=\"title\">PERIODICIDAD DE UNA FUNCIÓN</h3>\r\n                    <p>Ciertas funciones repiten sus valores de manera cíclica, es decir,  se va repitiendo cada cierto intervalo(periodo). Estas funciones se llaman funciones periódicas.Matemáticamente se las define así:</p>\r\n                    <p>f(x)=f(x+T) para cualquier valor de la variable independiente x, siendo T el periodo.</p>'),
('Puntos de corte con los ejes', 'Funciones', '<h3 className=\"title\">PUNTOS DE CORTE CON LOS EJES.SIGNO DE UNA FUNCIÓN</h3>\r\n                    <p>Para poder realizar el boceto de la gráfica de una función a partir de su fórmula, necesitamos conocer entre otras características, los puntos de corte con los ejes.</p>\r\n                    <p>-Puntos de corte con el eje X: son de la forma (x=0, y=f(0))</p>\r\n                    <p>-Puntos de corte con el eje Y: son de la forma (x,y=0).</p>\r\n                    <p>La gráfica de una función es positiva cuando se encuentra por  encima del eje X y negativa en el caso contrario.</p>\r\n                    <p>Para conocer el signo de la función hay que resolver las siguientes inecuaciones: f(x)<0 y f(x)>0, teniendo en cuenta los puntos que no están en el dominio.</p>'),
('Simetria de una funcion', 'Funciones', '<h3 className=\"title\">SIMETRÍA DE UNA FUNCIÓN</h3>\r\n                    <p>Las simetrías que tienen más interés y son más útiles para la representación gráfica de  una función son: la simetría axial respecto del eje Y y la simetría central respecto del origen de coordenadas O.</p>\r\n                    <p>Simetría axial respecto del eje Y: una función f es simétrica respecto del eje de ordenadas(y), cuando F(x)=F(-x) para todo el dominio.Estas funciones son llamadas funciones pares.</p>\r\n                    <p>Simetría central: Una función es simétrica respecto al origen (0,0), si para cada valor x se tiene que f(-x)=-f(x). A estas funciones se les llama funciones impares.</p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `aporte`
--

CREATE TABLE `aporte` (
  `mensaje` text NOT NULL,
  `fecha_hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_discusion` int NOT NULL,
  `correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `aporte`
--

INSERT INTO `aporte` (`mensaje`, `fecha_hora`, `id_discusion`, `correo`) VALUES
('PRUEBA2', '2022-05-04 15:24:30', 21, 'joelbraortiz@gmail.com'),
('Nueva respuesta', '2022-05-04 15:51:21', 21, 'boscoaran@gmail.com');

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
(21, 'PRUEBA', 'PRUEBA', 'joelbraortiz@gmail.com', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ejercicio`
--

CREATE TABLE `ejercicio` (
  `id_ejercicio` int NOT NULL,
  `contenido` text NOT NULL,
  `apartado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `ejercicio`
--

INSERT INTO `ejercicio` (`id_ejercicio`, `contenido`, `apartado`) VALUES
(1, '<div id = \"p1\" className = \"pregunta\">\r\n                                <p>1. Indica la pendiente de la siguiente función: y = 3x+2</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o11\" value=\"-2\" /> -2</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o12\" value=\"3\" /> 3</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o13\" value=\"1/2\" /> 1/2</div>\r\n                            </div>\r\n                            <div id = \"p2\" className = \"pregunta\">\r\n                                <p>2. La función f(x) = 3x<sup>2</sup>+2 es:</p>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o21\" value=\"lineal\" /> Lineal</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o22\" value=\"cuadratica\" /> Cuadrática completa</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o23\" value=\"cuadraticaNoX\" /> Cuadrática sin el término x</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o24\" value=\"no\" /> Ninguna de las anteriores</div>\r\n                                \r\n                            </div>\r\n                            <div id = \"p3\" className = \"pregunta\">\r\n                                <p>3. ¿Dónde está el vértice en la función 3x<sup>2</sup> -3? </p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o31\" value=\"02\" /> (0,2)</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o32\" value=\"20\" /> (2,0)</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o33\" value=\"00\" /> (0,0)</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o34\" value=\"no\" /> Ninguna de las anteriores</div>\r\n                            </div>\r\n                            <div id = \"p4\" className = \"pregunta\">\r\n                                <p>4. Encuentra el/los punto(s) de corte de la función 5x<sup>3</sup>-5x<sup>2</sup> (Pueden ser más de uno)</p> \r\n                                <div class =\"option\"><input type =\"checkbox\" name=\"o41\" id=\"o41\" value=\"00\" /> (0,0)</div>\r\n                                <div class =\"option\"><input type =\"checkbox\" name=\"o42\" id=\"o42\" value=\"-10\" /> (-1,0)</div>\r\n                                <div class =\"option\"><input type =\"checkbox\" name=\"o43\" id=\"o43\" value=\"10\" /> (1,0)</div>\r\n                                <div class =\"option\"><input type =\"checkbox\" name=\"o44\" id=\"o44\" value=\"0-1\" /> (0,-1)</div>\r\n                            </div>\r\n                            <div id = \"p5\" className = \"pregunta\">\r\n                                <p>5. Halla una función cuadrática que contenga los puntos:</p>\r\n                                <p>A = (2,0)</p>\r\n                                <p>B = (4,0)</p>\r\n                                <div className=\"respuestas\">\r\n                                    <div class =\"option\"><input type =\"radio\" name=\"o5\" id=\"o51\" value=\"f1\" /> f(x) = x<sup>2</sup>-6x+8</div>\r\n                                    <div class =\"option\"><input type =\"radio\" name=\"o5\" id=\"o52\" value=\"f2\" /> f(x) = x<sup>2</sup>-12+4</div>\r\n                                    <div class =\"option\"><input type =\"radio\" name=\"o5\" id=\"o53\" value=\"f3\" /> f(x) = x<sup>3</sup>+4x<sup>2</sup>+x+2</div>\r\n                                    <div class =\"option\"><input type =\"radio\" name=\"o5\" id=\"o54\" value=\"f4\" /> Ninguna de las anteriores</div>\r\n                                </div>\r\n                            </div>\r\n                            <div id = \"p6\" className = \"pregunta\">\r\n                                <p>6. ¿Qué función polinomial tiene como raíces -2, 3, -1, 4, 6?</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o6\" id=\"o61\" value=\"f1\" /> f(x) = (x-2)(x-3)(x-1)(x-4)(x-6)</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o6\" id=\"o62\" value=\"f2\" /> f(x) = 2(x+2)(x+3)(x+1)(x+4)(x+6)</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o6\" id=\"o63\" value=\"f3\" /> f(x) = (x-2)(x+3)(x-1)(x+4)(x+6)</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o6\" id=\"o64\" value=\"f4\" /> f(x) = 2(x+2)(x-3)(x+1)(x-4)(x-6)</div>\r\n                            </div>', 'Funciones polinomicas'),
(2, '<div id = \"p1\" className = \"pregunta\">\r\n                                <p>1. ¿Cuál es el Dominio de la siguiente función: (2x+3)/(x+3)?</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o11\" value=\"R\" /> R</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o12\" value=\"R-3\" /> R-{3}</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o13\" value=\"R--3\" /> R-{-3}</div>\r\n                            </div>\r\n                            <div id = \"p2\" className = \"pregunta\">\r\n                                <p>2. Halla el Dominio de la siguiente función: 2x + 3 </p>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o21\" value=\"R\" /> R</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o22\" value=\"-INF,0\" /> (-∞,0)</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o23\" value=\"R-3,+3\" /> R-{-3,+3}</div>\r\n                                \r\n                            </div>\r\n                            <div id = \"p3\" className = \"pregunta\">\r\n                                <p>3. Indica qué punto  no pertenece al dominio de la función &radic;2x </p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o31\" value=\"0\" /> 0</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o32\" value=\"5\" /> 5</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o33\" value=\"-1\" /> -1</div>\r\n                            </div>', 'Dominio y recorrido'),
(3, '			   <p>Dadas las siguientes funciones:</p>\r\n			   <p>f(x)=x²+x-2 </p>\r\n			   <p>g(x)=x-1</p>\r\n			   <div id = \"p1\" className = \"pregunta\">\r\n                                <p>1. Calcula g(x)+f(x)</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o11\" value=\"x2+3\" />  x²+3</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o12\" value=\"x2+2x+3\" /> x²+2x+3</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o13\" value=\"x2+2x-3\" />  x²+2x-3</div>\r\n                            </div>\r\n                            <div id = \"p2\" className = \"pregunta\">\r\n                                <p>2. Calcula g(x)-f(x) </p>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o21\" value=\"x2+1\" /> x²+1</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o22\" value=\"-x2+1\" /> -x²+1</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o23\" value=\"-x2-1\" /> -x²-1</div>\r\n                                \r\n                            </div>\r\n                            <div id = \"p3\" className = \"pregunta\">\r\n                                <p>3. Resuelve f(x) * g(x)</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o31\" value=\"x3+x2-2x-1\" /> x³+x²-2x-1</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o32\" value=\"x2-3x+6\" /> x² -3x+6</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o33\" value=\"x4+2\" /> x⁴+2</div>\r\n                            </div>\r\n                            <div id = \"p4\" className = \"pregunta\">\r\n                                <p>4. Calcula f(x)/g(x)</p> \r\n                                <div class =\"option\"><input type =\"checkbox\" name=\"o41\" id=\"o41\" value=\"x+3\" /> x+3</div>\r\n                                <div class =\"option\"><input type =\"checkbox\" name=\"o42\" id=\"o42\" value=\"x+2\" /> x+2</div>\r\n                                <div class =\"option\"><input type =\"checkbox\" name=\"o43\" id=\"o43\" value=\"x-5\" /> x-5</div>\r\n                            </div>\r\n                            <div id = \"p5\" className = \"pregunta\">\r\n                                <p>5. Calcula la función inversa de g(x):</p>\r\n                                <div className=\"respuestas\">\r\n                                    <div class =\"option\"><input type =\"radio\" name=\"o5\" id=\"o51\" value=\"x+1\" /> x+1</div>\r\n                                    <div class =\"option\"><input type =\"radio\" name=\"o5\" id=\"o52\" value=\"x+6\" /> x+6</div>\r\n                                    <div class =\"option\"><input type =\"radio\" name=\"o5\" id=\"o53\" value=\"x-1\" /> x-1</div>\r\n                                </div>\r\n                            </div>\r\n                            <div id = \"p6\" className = \"pregunta\">\r\n                                <p>6. Calcula f o g</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o6\" id=\"o61\" value=\"x2-x-2\" /> x2-x-2</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o6\" id=\"o62\" value=\"x-2\" /> x-2</div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o6\" id=\"o63\" value=\"x2+x+3\" /> x²+x+3 </div>\r\n                            </div>', 'Operaciones con funciones'),
(4, '<div id = \"p1\" className = \"pregunta\">\r\n                                <p>1. ¿Cuál de las siguientes gráficas presenta continuidad?</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o11\" value=\"a\" /> <img className=\"img-form\" src={img1} alt=\"i1\"/></div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o12\" value=\"b\" /> <img className=\"img-form\" src={img2} alt=\"i2\"/></div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o1\" id=\"o13\" value=\"c\" /> <img className=\"img-form\" src={img3} alt=\"i3\"/></div>\r\n                            </div>\r\n                            <div id = \"p2\" className = \"pregunta\">\r\n                                <p>2. ¿Qué función NO es continua?</p>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o21\" value=\"a\" /> <img className=\"img-form\" src={img4} alt=\"i4\"/></div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o22\" value=\"b\" /> <img className=\"img-form\" src={img5} alt=\"i5\"/></div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o2\" id=\"o23\" value=\"c\" /> <img className=\"img-form\" src={img6} alt=\"i6\"/></div>\r\n                                \r\n                            </div>\r\n                            <div id = \"p3\" className = \"pregunta\">\r\n                                <p>3. ¿Qué función tiene un máximo?</p> \r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o31\" value=\"a\" /> <img className=\"img-form\" src={img7} alt=\"i7\"/></div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o32\" value=\"b\" /> <img className=\"img-form\" src={img8} alt=\"i8\"/></div>\r\n                                <div class =\"option\"><input type =\"radio\" name=\"o3\" id=\"o33\" value=\"c\" /> <img className=\"img-form\" src={img9} alt=\"i9\"/></div>\r\n                            </div>', 'Continuidad');

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
  `correcto` bit(1) NOT NULL DEFAULT b'0',
  `fecha_hora` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `correo` varchar(50) NOT NULL,
  `id_ejercicio` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `realizacion_ejercicio`
--

INSERT INTO `realizacion_ejercicio` (`correcto`, `fecha_hora`, `correo`, `id_ejercicio`) VALUES
(b'0', '2022-05-02 08:05:37', 'joelbraortiz@gmail.com', 1),
(b'1', '2022-05-02 08:05:44', 'joelbraortiz@gmail.com', 1),
(b'1', '2022-05-04 15:45:22', 'joelbraortiz@gmail.com', 4),
(b'0', '2022-05-04 15:45:26', 'joelbraortiz@gmail.com', 4),
(b'0', '2022-05-04 16:48:19', 'admin@admin.com', 3),
(b'0', '2022-05-04 16:48:25', 'admin@admin.com', 3);

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
('admin@admin.com', 'administrador', '$2b$04$lSojpD0EOrwzyoTLpNGS2uPVgBoa05Ck4O9Pg8rMsH3XLFWf7Q42W', 'Colegio admin', 0),
('boscoaran@gmail.com', 'Bosco Aranguren Saíz', '$2b$04$pFCMeb8BY/g58zJ7t9sWN.QfpfkmvX/FSPSZCuaWiFO4Cv3KgrJ0a', 'Colegio San Vicente de Paúl', 1),
('joelbraortiz@gmail.com', 'Joel Bra Ortiz', '$2b$04$XnlEC9MhxZ50xGFxw2WYf.Fh46o4uYou.MbO5TX91kG4ZqwJs0JBO', 'Colegio San Vicente de Paúl', 0);

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
  ADD PRIMARY KEY (`fecha_hora`,`id_discusion`,`correo`),
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
  ADD KEY `pertenece_a` (`apartado`);

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
  ADD PRIMARY KEY (`fecha_hora`,`correo`,`id_ejercicio`),
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
-- AUTO_INCREMENT de la tabla `discusion`
--
ALTER TABLE `discusion`
  MODIFY `id_discusion` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `ejercicio`
--
ALTER TABLE `ejercicio`
  MODIFY `id_ejercicio` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `foro`
--
ALTER TABLE `foro`
  MODIFY `id_foro` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
  ADD CONSTRAINT `pertenece_a` FOREIGN KEY (`apartado`) REFERENCES `apartado` (`nombre_apartado`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
