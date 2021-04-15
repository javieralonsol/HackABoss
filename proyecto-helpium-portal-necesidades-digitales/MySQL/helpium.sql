-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 13-04-2021 a las 19:13:43
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.3.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `helpium`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `services`
--

CREATE TABLE `services` (
  `id` int(10) UNSIGNED NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `category` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `title` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `explication` varchar(5000) COLLATE utf8mb4_spanish_ci NOT NULL,
  `file_name` varchar(150) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email_notification` tinyint(4) DEFAULT '0',
  `id_user` int(10) UNSIGNED NOT NULL,
  `hidden` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `services`
--

INSERT INTO `services` (`id`, `timestamp`, `category`, `title`, `explication`, `file_name`, `email_notification`, `id_user`, `hidden`) VALUES
(1, '2021-03-17 14:53:51', 'Css', 'No me funciona el CSS/responsive de una página web en ciertos navegadores', 'Estoy desarrollando ésta página: http://miau.estudioinclusivo.com/.\n\nEs una página orientada a la accesibilidad universal y, al menos, en Chrome, Opera y el navegador Android me ejecuta correctamente (o en ciertas medidas) el CSS/responsive de dicha página, pero entro en Firefox o IE y en el primero me descoloca el menú de la página de inicio y en IE me lo desconfigura.\n\nQuisiera saber en qué parte estoy fallando para solucionar ésto y en todos los navegadores haga efecto el CSS.', 'http://localhost:3020/files/8/24e4b03b_css.jpeg', 0, 8, 0),
(2, '2021-03-17 14:54:39', 'Css', 'Como puedo definir el zoom con css?', 'Como puedo definir para que el zoom que se cargue una página se ha el que yo defina con CSS, por ejemplo si el navegador del usuario actualmente tiene el 100%, yo con css decir que se cargue con 80%, ¿Se puede hacer esto?', 'http://localhost:3020/files/8/dda53a17_css.jpeg', 0, 8, 0),
(3, '2021-03-17 14:56:03', 'iOS', '¿Se pueden importar los datos de LinkedIn a otro formulario web?', 'He visto que en algunas webs de empleo en vez de pedirte que rellenes el formulario con tus datos, te dan la posibilidad de importar tus datos de LinkedIn, a través de una aplicación a la que tienes que dar permiso para ello. Quiero que me hagan una web para mi negocio y me gustaría que tuviera esta función.\n\n¿Es muy difícil hacer esta aplicación? Yo no soy programadora, tendré que hacerla con un desarrollador freelance o empresa de diseño web. Quiero saber cómo de complicado es hacer esta aplicación, el tiempo que llevaría (aproximado, claro) y qué lenguajes de programación o tecnologías tendría que dominar la persona que la programe.', 'http://localhost:3020/files/9/70813f4c_fran.jpeg', 0, 9, 0),
(4, '2021-03-17 15:09:34', 'Python', 'Ejemplos de Programaciones Didácticas', 'Me estoy preparando las oposiciones 2006, para profesor de Informática (tanto de Secundaria como Profesor Técnico).\nEstoy buscando ejemplos de Programaciones Didácticas.\nEn concreto, de los siguientes módulos de FP:\n- Programación en lenguajes estructurados\n- Mantenimiento de portales de información\n¿Puedes orientarme sobre donde puedo conseguir ejemplos de Programaciones Didácticas (sobre todo de mi especialidad)?', 'http://localhost:3020/files/7/30f122dc_zoe.jpeg', 0, 7, 0),
(5, '2021-03-17 15:13:42', 'Node.js', 'Instalación programa Access en Red Local', 'Tengo muchga urgencia parapoder instalr un programa en red local, os agradeceria muchisimo si puedieseis ayudarme.\n\nTengo particionado las tabla y los formularios a través de Back-End y Front-End.\n\nEl Back-End, esta colocado en uin ordenador que hace de servidor y en cada uno de los otros ordenadores esta instalado los Front-End.\n\nLa carpeta donde esta el Back-End, esta compartida y con los permisos correspondientes de accesibilidad.\n\n¿Cómo he de indicar a cada Front-End instalados que busque los datos en el Servidor?\n\nLe doy la ruta de la dirección dentro de access en \"Carpeta de bases de datos Predeterminada\", pero no los encuentra.\n\n¿He de hacer algo más para que los pueda alcanzar?', 'http://localhost:3020/files/6/a855439e_davidsouto.jpeg', 0, 6, 0),
(6, '2021-03-17 15:20:52', 'Mysql', 'Tamaño de .mdb superior a 2 Gb', 'Me gustaría saber si existe alguna versión de Access que soporte una tamaño de archivo superior a 2 Gb. Tengo una bbdd en access 2000 que tras una serie de procesos de actualización de archivos, supera los 2 Gb y peta. Nos estamos planteando la posibilidad de cambiar todo a SQL Server, pero de momento no es posible, por lo que nos sería de gran ayuda si conoce alguna versión que no sea la de Office 2000, XP o 2003(estas versiones ya he comprobado con no lo soportan), que soporte trabajar con archivos superiores a ese tamaño.', 'http://localhost:3020/files/5/e2a7ed9d_berto.jpeg', 0, 5, 0),
(7, '2021-03-17 15:24:10', 'Javascript', 'Diferencia Javascript y Ajax', '¿Cuál es la diferecnai de Ajax y javascript? ¿Se podría decir que Ajax es una evolución del mismo? Y si es así posees url de interés sobre Ajax y si no es así posees url de interés sobre JavaScript.', 'http://localhost:3020/files/4/9870a723_ivan.jpeg', 0, 4, 0),
(8, '2021-03-17 15:27:17', 'Php', 'Como incorporar código PHP dentro de JavaScript', 'Requiero incorporar código PHP dentro de JavaScript pero no me ha sido posible.\n¿Qué alternativas se pueden tratar?\nEs posible me indique un ejemplo simple.', 'http://localhost:3020/files/2/ea8c9d09_pablo.jpeg', 0, 2, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solutions`
--

CREATE TABLE `solutions` (
  `id` int(10) UNSIGNED NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `comment` varchar(5000) COLLATE utf8mb4_spanish_ci NOT NULL,
  `file_name` varchar(150) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `choosen_solution` tinyint(4) DEFAULT '0',
  `id_user` int(10) UNSIGNED NOT NULL,
  `id_service` int(10) UNSIGNED NOT NULL,
  `hidden` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `solutions`
--

INSERT INTO `solutions` (`id`, `timestamp`, `comment`, `file_name`, `choosen_solution`, `id_user`, `id_service`, `hidden`) VALUES
(1, '2021-03-17 15:04:24', 'Claro que si\n\nDefines eso por css ejemplo:\n\n#logo{\ndisplay: block;\nfloat: left;\nline-height: 110px;\nwidth: 80%;\n}\n\nY puedes usar media-queries para hacerlo responsive', 'http://localhost:3020/files/9/56f86830_fran.jpeg', 0, 9, 2, 0),
(2, '2021-03-17 15:05:30', 'Yo te recomiendo que busques sobre la compatibilidad de las funciones de CSS con los navegadores.\n\nHasta donde tengo entendido no todas las funciones son compatibles entre los navegadores, te dejo este articulo, puede servirte para darte más idea:\n\nhttp://fuasocialweb.com/2014/01/como-hacer-funcionar-tu-web-en-todos-los-navegadores/', '', 0, 9, 1, 0),
(3, '2021-03-17 15:10:08', 'No es demasiado complicado, de echo si el CMS (gestor de contenidos) con el que se hace la web ya tiene el modulo que lo hace... es simplemente utilizarlo y ya esta.\n\nNo es mucho mas complicado que hacer lo mismo pero con Facebook, Twitter u otras redes sociales...\n\nAl final todo funciona con la API y simplemente hay que saber usarla.\n\nAhora, en caso de que no tuviera desarrollo, todo dependería del programador que lo haga, su habilidad y su experiencia...\n\nSiento no poder darte datos mas concretos en tiempo, ya que todo dependería de la empresa o persona, lo mejor, pedir presupuesto.\n\nSi necesitas algo mas me comentas.', '', 0, 7, 3, 0),
(4, '2021-03-17 15:10:56', 'No es algo que se pueda enseñar en una respuesta, pero no es complicado ir aprendiendo.\n\nTendrías en principio que usar \"em\" por ejemplo en lugar de \"px\". Para un tamaño de fuente del 100% 1 em=16 px. Tienes que tener algunos conocimientos más avanzados pero no complicados de como se comporta. Puedes buscar información sobre las distintas medidas en que puedes expresar las fuentes.\n\nAsí todo en tu hoja de estilos (no necesitas hacer más de una) puedes hacer distyintas especificaciones según la resuloción de la pantalla. Para ello necesitas conocimientos más avanzados, y tampoco excesivamente complicados, de CSS3 y saber manejar. Prueba esto y verás como cambia si ensanchas o disminuyes el ancho de la ventana del navegador (pon cualquier imagen como logotipo.png). Con un ancho de la ventana del navegador mayor de 700 px estará alineada a la izquierda, con un ancho entre 600 y 700 px a la derecha y para uno menor de 600px en el centro:', 'http://localhost:3020/files/7/8afc1330_zoe.jpeg', 0, 7, 2, 0),
(5, '2021-03-17 15:11:17', 'Hasta donde tengo entendido en IE CSS/responsive no funcionan o no funcionan correctamente. Edge (que es el nuevo navegador de Microsoft) pareciera que si lo acepta. En Firefox funciona sin embargo a veces hay que indicar en el CSS que comportamiento debe tener si el navegador es Firefox', '', 0, 7, 1, 0),
(6, '2021-03-17 15:12:04', 'En el google hay un montón de información porque muchos profesores ponen sus programaciones en internet. Además, en valencia hay una asociación de profes de informática que supongo que hay en más Comunidades.\nTambién puedes intentar conseguir las programaciones de las editoriales de los libros de tus asignaturas. Si estás haciendo el CAP pídelas en el Centro Educativo', '', 0, 6, 4, 0),
(7, '2021-03-17 15:12:33', 'En el google hay un montón de información porque muchos profesores ponen sus programaciones en internet. Además, en valencia hay una asociación de profes de informática que supongo que hay en más Comunidades.\nTambién puedes intentar conseguir las programaciones de las editoriales de los libros de tus asignaturas. Si estás haciendo el CAP pídelas en el Centro Educativo', 'http://localhost:3020/files/6/a36c9671_davidsouto.jpeg', 0, 6, 1, 0),
(8, '2021-03-17 15:12:51', 'En el google hay un montón de información porque muchos profesores ponen sus programaciones en internet. Además, en valencia hay una asociación de profes de informática que supongo que hay en más Comunidades.\nTambién puedes intentar conseguir las programaciones de las editoriales de los libros de tus asignaturas. Si estás haciendo el CAP pídelas en el Centro Educativo', '', 0, 6, 3, 0),
(9, '2021-03-17 15:18:02', 'La carpeta de base de datos Predeterminada es el lugar donde guardas tu front-end. Para vincular el front con el back debes ir a la ficha Datos Externos > Administrador de tablas vinculadas, ahí verás todas tus tablas. Marca la opción \"Preguntar siempre por la nueva ubicación\", haz clic en el botón Seleccionar todo, y a continuación en Aceptar. Ahora si debes buscar el back end en la red y listo.', 'http://localhost:3020/files/5/fd7d187b_berto.jpeg', 0, 5, 5, 0),
(10, '2021-03-17 15:18:28', 'Prueben en Serasdocente hay algunas programaciones\nhttp://serasdocente.es.mn', '', 0, 5, 4, 0),
(11, '2021-03-17 15:19:01', 'Hasta donde tengo entendido en IE CSS/responsive no funcionan o no funcionan correctamente. Edge (que es el nuevo navegador de Microsoft) pareciera que si lo acepta. En Firefox funciona sin embargo a veces hay que indicar en el CSS que comportamiento debe tener si el navegador es Firefox', '', 0, 5, 3, 0),
(12, '2021-03-17 15:19:21', 'Hasta donde tengo entendido en IE CSS/responsive no funcionan o no funcionan correctamente. Edge (que es el nuevo navegador de Microsoft) pareciera que si lo acepta. En Firefox funciona sin embargo a veces hay que indicar en el CSS que comportamiento debe tener si el navegador es Firefox', '', 0, 5, 2, 0),
(13, '2021-03-17 15:19:36', 'Hasta donde tengo entendido en IE CSS/responsive no funcionan o no funcionan correctamente. Edge (que es el nuevo navegador de Microsoft) pareciera que si lo acepta. En Firefox funciona sin embargo a veces hay que indicar en el CSS que comportamiento debe tener si el navegador es Firefox', '', 0, 5, 1, 0),
(14, '2021-03-17 15:21:39', 'Pues me temo que con ese tamaño, tendrás que pasar a SQL server si quieres que funcione, no obstante existe la posibilidad de pasar con el mismo Access a un SQl \"intermedio\" (MSDE) que viene como opción en el Access. Con esto, una vez que conviertas tu base de datos a SQL Server (Utiliza el asistente, Herramientas-Utilidades de la base de Datos-Convertir a SQL Server) te funcionará, pero ATENCIÓN perderás las consultas que tengas en tu base de datos actual, pero siempre será más fácil que empezar de nuevo. Esto no es un proceso fácil, te recomiendo que lo hagas con cautela y por supuesto con una copia de tu base de datos.\nTe remito a la ayuda:\n\"Instalar y configurar el motor de SQL Server 2000 Desktop\"\nAunque Microsoft SQL Server 2000 Desktop Engine no forme parte de una instalación estándar de Microsoft Office 2003, puede instalar SQL Server 2000 Desktop Engine desde el CD-ROM de Office 2003. Esto se aplica a equipos que ejecutan Windows 2000 o posterior.', 'http://localhost:3020/files/4/b1a22f03_ivan.jpeg', 0, 4, 6, 0),
(15, '2021-03-17 15:22:13', 'El problema no es con la BD misma, es con la limitación que tiene el Sistema Operativo en cuanto a tamaño máximo de archivo, Access almacena toda la BD en un solo archivo, por tanto estamos sujetos a la capacidad máxima de almacenamiento del SO.', '', 0, 4, 5, 0),
(16, '2021-03-17 15:22:32', 'La mejor manera de encontrar ejemplos de programaciones didácticas es en las páginas de las editoriales (sobre todo oxford, mcgraw-hill y sm, entre otras), ya que gran parte de las programaciones que se hacen en muchos centron son basadas en dichas editoriales.', '', 0, 4, 4, 0),
(17, '2021-03-17 15:22:55', 'La mejor manera de encontrar ejemplos de programaciones didácticas es en las páginas de las editoriales (sobre todo oxford, mcgraw-hill y sm, entre otras), ya que gran parte de las programaciones que se hacen en muchos centron son basadas en dichas editoriales.', '', 0, 4, 1, 0),
(18, '2021-03-17 15:23:08', 'La mejor manera de encontrar ejemplos de programaciones didácticas es en las páginas de las editoriales (sobre todo oxford, mcgraw-hill y sm, entre otras), ya que gran parte de las programaciones que se hacen en muchos centron son basadas en dichas editoriales.', '', 0, 4, 2, 0),
(19, '2021-03-17 15:24:48', 'AJAX no es una evolución de javascript.\nLa metodología Ajax consiste generalmente en objetos web tratados con el método httpRequest. Definición más exacta: http://www.elmundo.es/navegante/2005/10/21/esociedad/1129904478.html\nBueno, generalmente, una de las tecnologías favoritas para trabajar con Ajax es javascript, y es con javascript una de las mejores formas para trabajar con objetos xml y xsl, a parte de acceder fácilmente a una css para cambiarla dinámicamente.', 'http://localhost:3020/files/3/776f3671_david losas.jpeg', 0, 3, 7, 0),
(20, '2021-03-17 15:25:14', 'Lamento comentarte que no conozco una versión del access que permita un tamaño para un archivo .mdb superior a 2Gb, además lo que te puedo recomendar es que si tu información ya está de ese tamaño, lo mejor es que trabajes con otro motor más potente. ¿Y por cierto compactas frecuentemente tu bd? Esto hace disminuir el tamaño del archivo.\nÉxitos!', '', 0, 3, 6, 0),
(21, '2021-03-17 15:25:41', 'Lamento comentarte que no conozco una versión del access que permita un tamaño para un archivo .mdb superior a 2Gb, además lo que te puedo recomendar es que si tu información ya está de ese tamaño, lo mejor es que trabajes con otro motor más potente. ¿Y por cierto compactas frecuentemente tu bd? Esto hace disminuir el tamaño del archivo.\nÉxitos!', '', 0, 3, 4, 0),
(22, '2021-03-17 15:26:23', 'Lamento comentarte que no conozco una versión del access que permita un tamaño para un archivo .mdb superior a 2Gb, además lo que te puedo recomendar es que si tu información ya está de ese tamaño, lo mejor es que trabajes con otro motor más potente. ¿Y por cierto compactas frecuentemente tu bd? Esto hace disminuir el tamaño del archivo.\nÉxitos!', '', 0, 3, 1, 0),
(23, '2021-03-17 15:27:58', 'Ajax es simplemente una técnica para el desarrollo interactivas, es decir, permite la comunicación bidireccional entre el cliente y el servidor. Utiliza como lenguaje principal Javascript pero no es exclusivo para este, se puede aplicar para cualquier otro tipo de lenguaje y el protocolo por defecto con el cuál trabaja es Http.', 'http://localhost:3020/files/2/adaa9f48_pablo.jpeg', 0, 2, 7, 0),
(24, '2021-03-17 15:28:22', 'Access no está diseñado para soportar bases de datos tan grandes. Su fin principal, es que te enamores de su facilidad y adquieras SQL Server; además, de ser muy bueno para trabajar aplicaciones con poca cantidad de datos. Si me envías más información, como SO, cantidad de clientes, cantidad de tablas, etc., te puedo hacer una recomendación de algún otro motor de base de datos que no sea tan costoso y que sea bueno.', '', 0, 2, 6, 0),
(25, '2021-03-17 15:29:21', 'De antemano decirte que es imposible, pero no te asustes pues hay otras soluciones.\nEl problema esta que php siempre se ejecuta antes que javascript aunque este este como RUNAT=SERVER. Una solución puede ser que php genere el código de javascript, o sea que lo escriba.\nEjemplo\nQuieres meter en una variable de javascript el valor de una variable en php.\n<?\n$valor_php = \"Cadena en PHP\";\n?>\nAhora lo queremos meter en un valor de javascript, como php se ejecuta primero hacemos que imprima la variable dentro del código de javascript por ejemplo\n<script>\nvariable_javascript = \"<?=valor_php?>\";\n</script>\nCon lo que el escript quedaria\n<script>\nvariable_javascript=\"Cadena en PHP\";\n</script>', 'http://localhost:3020/files/1/625261db_irene.png', 0, 1, 8, 0),
(26, '2021-03-17 15:29:46', 'El caso es que utilizamos Access como Front End y SQL Server es el que alimenta a ese Access, son las tablas temporales las que ocupan tanto espacio, con la información que se genera de las consultas. Tenemos previsto pasarlo todo a SQL Server, pero muchas gracias de nuevo.', '', 0, 1, 6, 0),
(27, '2021-04-13 10:46:00', 'Hala, ora respuesta más\nHala, ora respuesta más\nHala, ora respuesta más\nHala, ora respuesta más', '', 0, 1, 8, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(254) COLLATE utf8mb4_spanish_ci NOT NULL,
  `role` enum('user','admin') COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'user',
  `password` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `surname` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `timestamp` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `verification_code` varchar(72) COLLATE utf8mb4_spanish_ci NOT NULL,
  `topic` varchar(254) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `bio` varchar(5000) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `image` varchar(20) COLLATE utf8mb4_spanish_ci DEFAULT 'default.webp',
  `hidden` tinyint(4) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `email`, `role`, `password`, `name`, `surname`, `timestamp`, `verification_code`, `topic`, `bio`, `image`, `hidden`) VALUES
(1, 'irene@gmail.com', 'user', '$2a$12$9OhPzTJAutZe2br9hD7liexM8zEi.fmlyfIknIkuWsXB68GJfDrJe', 'Irene', 'Medían Blanco', '2021-03-17 13:24:46', 'verified', 'Be loved my friend.', NULL, '1.webp', 0),
(2, 'pablo@gmail.com', 'user', '$2a$12$e2kW5VzureBSbHTarPo5wugxIcGmtURGqvq.rg9JbGB4.H580JbP2', 'Pablo', 'Rodríguez González', '2021-03-17 13:28:06', 'verified', NULL, NULL, '2.webp', 0),
(3, 'david@gmail.com', 'user', '$2a$12$3uMcBznJAZ8CKvakLCdAvuYaFRvbc1QdAHXjADdJzMg6Y3otjzdJG', 'David', 'Losas', '2021-03-17 13:29:18', 'verified', NULL, NULL, '3.webp', 0),
(4, 'ivan@gmail.com', 'user', '$2a$12$iRvO4XP65TePTS9Z2uclDe.GpsRUgeTZJBHjCJWWOIi5HfB27yvna', 'Iván', 'Palleiro Pérez', '2021-03-17 13:29:59', 'verified', NULL, NULL, '4.webp', 0),
(5, 'berto@gmail.com', 'user', '$2a$12$ko8uW0V4PC8C888pO4HwYeoivFYngKMdD4UAl8K55JwN9dNV7kmHS', 'Berto', 'Yáñez', '2021-03-17 13:31:11', 'verified', NULL, NULL, '5.webp', 0),
(6, 'davids@gmail.com', 'user', '$2a$12$BK0vKVfgIh9DVpKn.qQoA.md7UxpyIKO97aGFIXd2mvqkXyIWALmO', 'David', 'Souto Caramés', '2021-03-17 13:33:50', 'verified', NULL, NULL, '6.webp', 0),
(7, 'zoe@gmail.com', 'user', '$2a$12$F./91g1ojNoJcS1nWTo48.XiVdJ6sFy6yokDhbaAyHxeOBqSiOFIi', 'Zoe', 'Porta', '2021-03-17 13:34:38', 'verified', NULL, NULL, '7.webp', 0),
(8, 'dani@gmail.com', 'user', '$2a$12$jev3MPU4tT.CYz0luufj5.iRz6eYHZreI8OTsblnb7n0j9NHQCWkS', 'Daniel', 'Somoza Paletta', '2021-03-17 13:35:28', 'verified', NULL, NULL, '8.webp', 0),
(9, 'fran@gmail.com', 'user', '$2a$12$IXwa1lSjKRShZccaEqwRvu4enb.VwzHwytnDVGP813iGs1OWLCdV2', 'Fran', 'Landeira Otero', '2021-03-17 13:38:19', 'verified', NULL, NULL, '9.webp', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `service_title_uq` (`title`),
  ADD KEY `service_id_user_fk1` (`id_user`);

--
-- Indices de la tabla `solutions`
--
ALTER TABLE `solutions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `solution_id_user_fk1` (`id_user`),
  ADD KEY `solution_id_service_fk2` (`id_service`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuer_email_uq` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `services`
--
ALTER TABLE `services`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `solutions`
--
ALTER TABLE `solutions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `services`
--
ALTER TABLE `services`
  ADD CONSTRAINT `service_id_user_fk1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `solutions`
--
ALTER TABLE `solutions`
  ADD CONSTRAINT `solution_id_service_fk2` FOREIGN KEY (`id_service`) REFERENCES `services` (`id`),
  ADD CONSTRAINT `solution_id_user_fk1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
