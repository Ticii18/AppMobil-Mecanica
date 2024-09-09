-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-11-2023 a las 19:48:01
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tienda_online`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(10) NOT NULL,
  `nombre` varchar(50) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(1, 'ACCION'),
(2, 'COMEDIA'),
(3, 'TERROR'),
(4, 'AVENTURA'),
(5, 'ANIMADA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(10) NOT NULL,
  `nombre` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `apellidos` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_spanish_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8_spanish_ci NOT NULL,
  `comentario` varchar(300) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `apellidos`, `email`, `telefono`, `comentario`) VALUES
(1, 'dasdasda', 'dasdasd', 'leoonardoogzz@gmail.com', '161651561', 'afdadsfadfadsfad'),
(2, 'Leonardo Andres', 'Gomez', 'leoonardoogzz@gmail.com', '3704383901', 'LOCOOOOO'),
(3, 'SADASD', 'ASDSAD', 'DASDSA@DASDSA', '65115615', 'ADASDSA'),
(4, 'asi es', 'asdasd', 'asddasd@dsadsa', '3704383901', 'dasfadsfadsfad'),
(5, 'Leonardo Andres', 'leoonardogzz@gmail.com', '516161615616', '1215', 'Barrio Eva Perón Mz44 Cs7'),
(6, 'Leonardo Andres', 'leoonardogzz@gmail.com', '516161615616', '1215', 'Antenor Gauna Mz44 Cs7'),
(7, 'Aixa Dominguez', 'Aixa@gmail.com', '655566564466', '6369', 'alla'),
(8, 'Leonardo Andres', 'leoonardogzz@gmail.com', '348415215', '1232', 'barrio eva peron mz44 c7'),
(9, 'Leonardo Andres', 'leoonardogzz@gmail.com', '4555665533', '5423', 'el mangal'),
(10, 'Leonardo Andres', 'leoonardogzz@gmail.com', '4646464656', '2134', 'barrio el cuchillo mz3 c7'),
(11, 'Sofia', 'leoonardogzz@gmail.com', '516161615616', '088', 'Vicente Posadas 1050');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedidos`
--

CREATE TABLE `detalle_pedidos` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `pelicula_id` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `detalle_pedidos`
--

INSERT INTO `detalle_pedidos` (`id`, `pedido_id`, `pelicula_id`, `precio`, `cantidad`, `estado`) VALUES
(1, 1, 10, '31.00', 2, 1),
(2, 1, 12, '40.00', 1, 1),
(3, 1, 9, '36.00', 1, 1),
(4, 2, 12, '40.00', 4, 1),
(5, 2, 10, '31.00', 1, 1),
(6, 3, 12, '40.00', 7, 1),
(7, 3, 11, '17.00', 1, 1),
(8, 4, 10, '31.00', 1, 1),
(9, 5, 12, '2500.00', 11, 1),
(10, 5, 11, '5000.00', 1, 1),
(11, 6, 11, '5000.00', 1, 1),
(12, 7, 12, '2500.00', 1, 1),
(13, 7, 9, '1500.00', 1, 1),
(14, 7, 3, '2400.00', 1, 1),
(15, 8, 5, '1500.00', 1, 1),
(16, 8, 9, '1500.00', 1, 1),
(17, 9, 10, '3100.00', 1, 1),
(18, 10, 12, '2500.00', 1, 1),
(19, 11, 12, '2500.00', 1, 1),
(20, 11, 10, '3100.00', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(10) NOT NULL,
  `cliente_id` int(11) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `fecha` date NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `cliente_id`, `total`, `fecha`, `estado`) VALUES
(1, 1, '138.00', '2023-11-04', 1),
(2, 2, '191.00', '2023-11-06', 1),
(3, 3, '297.00', '2023-11-06', 1),
(4, 4, '31.00', '2023-11-06', 1),
(5, 5, '32500.00', '2023-11-06', 1),
(6, 6, '5000.00', '2023-11-06', 1),
(7, 7, '6400.00', '2023-11-08', 1),
(8, 8, '3000.00', '2023-11-08', 1),
(9, 9, '3100.00', '2023-11-08', 1),
(10, 10, '2500.00', '2023-11-09', 1),
(11, 11, '5600.00', '2023-11-09', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `id` int(11) NOT NULL,
  `titulo` varchar(80) COLLATE utf8_spanish_ci NOT NULL,
  `descripcion` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `foto` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `categoria_id` int(10) NOT NULL,
  `fecha` date NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id`, `titulo`, `descripcion`, `foto`, `precio`, `categoria_id`, `fecha`, `estado`) VALUES
(1, 'CADENA FIAT', 'FULL ACCION', 'cadena.webp', '5000.00', 1, '2023-11-06', 1),
(2, 'TRICETA', 'FULL ANIMACION', 'Trinceta.webp', '1500.00', 5, '2023-11-06', 1),
(3, 'DISCO DE FRENO', 'FULL AVENTURA', 'DISCO Y PARRILA DE FRENO.webp', '2400.00', 4, '2023-11-06', 1),
(4, 'BOMBA DE FRENO', 'FULL ACCION', 'bomba de freno.webp', '6500.00', 1, '2023-11-06', 1),
(5, 'ALMOADAS PARA CINTURON', 'FULL TERROR', '4.webp', '1500.00', 3, '2023-11-06', 1),
(6, 'ANTIVUELCOS', 'FULL ACCION', '5.jpg', '8000.00', 1, '2023-11-06', 1),
(7, 'ALMOADAS PARA VIAJES', 'FULL ANIMADA', '3.jfif', '2500.00', 5, '2023-11-06', 1),
(8, 'FUNDA PARA VOLANTE', 'FULL ACCION', '2.jfif', '2000.00', 1, '2023-11-06', 1),
(9, 'FUNDA PARA PALANCA DE CAMBIO', 'FULL ACCION', '1.webp', '1500.00', 1, '2023-11-06', 1),
(10, 'CILINDRO RUEDA PARA CITROEN', 'FULL', 'cilindro rueda para citroen.webp', '3100.00', 4, '2023-11-06', 1),
(11, 'CILINDRO RUEDA TRASERA ', 'FULL COMEDIA', 'cilindro rueda trasera.webp', '5000.00', 2, '2023-11-06', 1),
(12, 'SOPORTE DE BATERIA', '...', 'sopote_De_bateria.webp', '2500.00', 1, '2023-11-06', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre_usuario` varchar(100) COLLATE utf8_spanish_ci NOT NULL,
  `clave` varchar(150) COLLATE utf8_spanish_ci NOT NULL,
  `estado` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_usuario`, `clave`, `estado`) VALUES
(1, 'leo', '1234', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `detalle_pedidos`
--
ALTER TABLE `detalle_pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
