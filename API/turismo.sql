-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-08-2023 a las 16:57:57
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `turismo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

CREATE TABLE `admin` (
  `name` varchar(20) NOT NULL,
  `correo` varchar(30) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `admin`
--

INSERT INTO `admin` (`name`, `correo`, `password`) VALUES
('Juan', 'usu@gmail.com', '123');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles`
--

CREATE TABLE `hoteles` (
  `nombre_hotel` varchar(30) NOT NULL,
  `id` int(15) NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `Valoracion` int(5) DEFAULT NULL,
  `Descripcion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hoteles`
--

INSERT INTO `hoteles` (`nombre_hotel`, `id`, `direccion`, `Valoracion`, `Descripcion`) VALUES
('GHL Hotel', 10, 'Calle 107 # 50 - 69', 5, 'El Sonesta Barranquilla es un hotel moderno que ofrece alojamientos decorados con elegancia. También cuenta con spa y gimnasio.'),
('Ibis budget', 11, 'Carrera 50 No. 84 - 82', 3, 'El ibis Budget Barranquilla se encuentra en la parte norte de la ciudad. Ofrece terraza, salón común y WiFi gratuita. El establecimiento se encuentra en                                 el distrito comercial, médico y financiero.'),
('Wyndham Garden', 12, 'Cl. 87 #47-88, Riomar', 4, 'Es un destino de lujo en el corazón de la ciudad. El hotel te ofrece habitaciones y suites elegantes y modernas, perfectamente equipadas para tu comodidad.  Con instalaciones para eventos y una ubicación estratégica, es la elección ideal para viajeros de negocios y placer.'),
('Hampton by Hilton', 13, 'Calle 85 50-25', 4, 'Este establecimiento ofrece habitaciones elegantes con WiFi gratuita y gimnasio en Barranquilla.'),
('GHL Collection', 14, 'Calle 107 # 50 - 69', 5, 'El GHL Collection Hotel Barranquilla se encuentra en Barranquilla y ofrece WiFi gratuita en todas las instalaciones. El hotel cuenta con restaurante y solárium con vistas a la ciudad.'),
('Hotel Windsor', 15, 'Calle 84 No.46 - 07', 4, 'El Hotel Windsor Barranquilla está situado en la zona de Norte-Centro Histórico, a 30 minutos en coche del centro de Barranquilla, y ofrece piscina al aire libre, spa, centro de bienestar y conexión wifi.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel_turista`
--

CREATE TABLE `hotel_turista` (
  `Nombre_turista` varchar(30) NOT NULL,
  `Nombre_hotel` varchar(30) NOT NULL,
  `Fecha_entrada` date NOT NULL,
  `Fecha_salida` date NOT NULL,
  `Cantidad_persona` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `hotel_turista`
--

INSERT INTO `hotel_turista` (`Nombre_turista`, `Nombre_hotel`, `Fecha_entrada`, `Fecha_salida`, `Cantidad_persona`) VALUES
('JUAN DAVID CHARRIS B', 'GHL Hotel', '2023-08-16', '2023-08-24', 3),
('JUAN DAVID CHARRIS B', 'Wyndham Garden', '2023-08-15', '2023-08-23', 4),
('JUAN DAVID CHARRIS B', 'GHL Hotel', '2023-08-14', '2023-08-31', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sitio_turistico`
--

CREATE TABLE `sitio_turistico` (
  `descripcion` text NOT NULL,
  `direccion` varchar(30) NOT NULL,
  `Nombre_sitioT` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sitio_turistico`
--

INSERT INTO `sitio_turistico` (`descripcion`, `direccion`, `Nombre_sitioT`) VALUES
('La Plaza San Nicolás en Barranquilla es un lugar con una atmósfera encantadora y llena de historia. Rodeada de hermosos edificios y casas coloniales, esta plaza es una ventana al pasado de la ciudad. Con su arquitectura pintoresca y su ambiente tradicional, te invita a dar un paseo relajado mientras admiras la belleza de su entorno. Es un rincón especial para aquellos que desean sumergirse en la rica cultura y la esencia de Barranquilla.', 'a 41-76,, Cl. 33 #4128, Barran', 'La Plaza San Nicolás'),
('El Malecón de Barranquilla es un pintoresco paseo marítimo ubicado a lo largo del Río Magdalena. Ofrece hermosas vistas panorámicas, áreas verdes y espacios para caminar y relajarse. Es el lugar perfecto para disfrutar de atardeceres mágicos y sumergirse en la esencia caribeña de la ciudad.', 'Av. del Rio, Barranquilla, Atl', 'El Gran Malecón'),
('La Ventana de Campeones de Barranquilla es un monumento emblemático que celebra los logros deportivos de la ciudad. Este arco conmemorativo honra a los atletas locales y ofrece una vista inspiradora del Río Magdalena y sus alrededores. Es un lugar especial para conectar con el espíritu deportivo y disfrutar de la belleza de Barranquilla.', 'Calle 85 Nº 18-32', 'Ventana de Campeones'),
('La Plaza de la Paz en Barranquilla es un espacio tranquilo y acogedor en el corazón de la ciudad. Esta plaza ofrece un ambiente relajante y es un lugar popular para descansar, disfrutar del paisaje urbano y compartir momentos en un entorno pacífico. Es un oasis de calma en medio del bullicio de la ciudad, perfecto para tomar un respiro y disfrutar de la serenidad de Barranquilla.', 'Cl. 53 #46-07, Nte. Centro His', 'Plaza de la Paz'),
('El Zoológico de Barranquilla ofrece una experiencia encantadora con animales exóticos y jardines botánicos. Disfruta de la biodiversidad del Caribe colombiano y aprende sobre la conservación en este lugar fascinante.', 'Cl. 77 #68 - 40, Nte. Centro H', 'Zoológico de Barranquilla'),
('El monumento del Joe Arroyo en Barranquilla es una conmemoración al legendario cantante y compositor de música caribeña. Esta estatua rinde homenaje al legado musical del Joe Arroyo y su impacto en la cultura de la ciudad. Es un lugar significativo para los amantes de la música y una muestra del cariño que Barranquilla tiene por su talento local.', 'Cra. 46 #72, Nte. Centro Histo', 'Monumento Joe Arroyo'),
('El Museo del Carnaval de Barranquilla es un espacio interactivo que celebra la historia y la magia del famoso Carnaval. Disfruta de disfraces impresionantes y aprende sobre las tradiciones y la cultura festiva de la región. Un lugar imperdible para sumergirse en la alegría caribeña.', 'Cra. 54 #49B-39, Nte. Centro H', 'La Casa del Carnaval'),
('La Ventana al Mundo de Barranquilla es un impresionante arco arquitectónico que ofrece vistas panorámicas del Río Magdalena y la ciudad. Es un lugar popular para los visitantes que desean apreciar la belleza del entorno y capturar momentos especiales. Este símbolo emblemático es perfecto para disfrutar de momentos inolvidables en Barranquilla.', 'Rotonda, Cl. 110, Barranquilla', 'La Ventana del Mundo'),
('El Puente Pumarejo en Barranquilla es una impresionante obra de ingeniería que conecta la ciudad con la otra orilla del Río Magdalena. Con su estructura majestuosa y moderna, es uno de los puentes más emblemáticos de Colombia. Ofreciendo vistas panorámicas del río y la ciudad, es un símbolo de conexión y progreso para Barranquilla. El Puente Pumarejo es una maravilla arquitectónica que refleja el espíritu dinámico de esta vibrante ciudad caribeña.', 'Sitionuevo, Barranquilla, Atlá', 'Puente Pumarejo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `Correo_turista` varchar(30) NOT NULL,
  `Solicitud` mediumtext NOT NULL,
  `id_solicitud` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turista`
--

CREATE TABLE `turista` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `turista`
--

INSERT INTO `turista` (`id`, `name`, `email`, `password`) VALUES
(3, 'JUAN DAVID CHARRIS B', 'usu@gmail.com', '123'),
(4, 'Henry', 'Henry@gmail.com', '00'),
(5, 'Habib', 'Hmorales@gmail.com', '000');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `visita_sitioturistico`
--

CREATE TABLE `visita_sitioturistico` (
  `Nombre_turista` varchar(30) NOT NULL,
  `Nombre_sitioT` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `visita_sitioturistico`
--

INSERT INTO `visita_sitioturistico` (`Nombre_turista`, `Nombre_sitioT`) VALUES
('JUAN DAVID CHARRIS B', 'El Gran Malecón'),
('JUAN DAVID CHARRIS B', 'La Casa del Carnaval'),
('JUAN DAVID CHARRIS B', 'Ventana de Campeones'),
('JUAN DAVID CHARRIS B', 'Monumento Joe Arroyo'),
('Henry', 'Puente Pumarejo'),
('Henry', 'El Gran Malecón'),
('Henry', 'La Plaza San Nicolás'),
('Henry', 'La Ventana del Mundo'),
('Henry', 'La Casa del Carnaval'),
('Henry', 'Monumento Joe Arroyo'),
('Henry', 'Zoológico de Barranquilla'),
('Henry', 'Plaza de la Paz'),
('Henry', 'Ventana de Campeones'),
('Henry', 'El Gran Malecón');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nombre_hotel` (`nombre_hotel`);

--
-- Indices de la tabla `hotel_turista`
--
ALTER TABLE `hotel_turista`
  ADD KEY `Nombre_turista` (`Nombre_turista`),
  ADD KEY `Nombre_hotel` (`Nombre_hotel`);

--
-- Indices de la tabla `sitio_turistico`
--
ALTER TABLE `sitio_turistico`
  ADD PRIMARY KEY (`direccion`),
  ADD KEY `Nombre_sitioT` (`Nombre_sitioT`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id_solicitud`),
  ADD KEY `Correo_turista` (`Correo_turista`);

--
-- Indices de la tabla `turista`
--
ALTER TABLE `turista`
  ADD PRIMARY KEY (`id`),
  ADD KEY `name` (`name`),
  ADD KEY `email` (`email`);

--
-- Indices de la tabla `visita_sitioturistico`
--
ALTER TABLE `visita_sitioturistico`
  ADD KEY `Nombre_turista` (`Nombre_turista`),
  ADD KEY `Nombre_sitioT` (`Nombre_sitioT`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `turista`
--
ALTER TABLE `turista`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `hotel_turista`
--
ALTER TABLE `hotel_turista`
  ADD CONSTRAINT `hotel_turista_ibfk_1` FOREIGN KEY (`Nombre_turista`) REFERENCES `turista` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hotel_turista_ibfk_2` FOREIGN KEY (`Nombre_hotel`) REFERENCES `hoteles` (`nombre_hotel`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`Correo_turista`) REFERENCES `turista` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `visita_sitioturistico`
--
ALTER TABLE `visita_sitioturistico`
  ADD CONSTRAINT `visita_sitioturistico_ibfk_2` FOREIGN KEY (`Nombre_turista`) REFERENCES `turista` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `visita_sitioturistico_ibfk_3` FOREIGN KEY (`Nombre_sitioT`) REFERENCES `sitio_turistico` (`Nombre_sitioT`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
