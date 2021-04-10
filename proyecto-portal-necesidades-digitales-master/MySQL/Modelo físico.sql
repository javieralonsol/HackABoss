DROP DATABASE IF EXISTS helpium;
CREATE DATABASE IF NOT EXISTS helpium CHARACTER SET="utf8mb4" COLLATE"utf8mb4_spanish_ci";

USE helpium;

CREATE TABLE IF NOT EXISTS usuario (
    id INT UNSIGNED AUTO_INCREMENT,
    email VARCHAR(254) NOT NULL,
    rol ENUM("normal", "admin") NOT NULL DEFAULT "normal",
    contrasena VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    apellido_1 VARCHAR(50) NOT NULL,
    apellido_2 VARCHAR(50) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bio VARCHAR(254),
    imagen TINYINT DEFAULT 0,
        PRIMARY KEY(id),
        CONSTRAINT usuario_email_uq UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS servicio (
    id INT UNSIGNED AUTO_INCREMENT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    categoria INT UNSIGNED NOT NULL,
    titulo VARCHAR(150) NOT NULL,
    explicacion VARCHAR(5000) NOT NULL,
    nombre_de_fichero VARCHAR(150) NOT NULL,
    id_usuario INT UNSIGNED,
        PRIMARY KEY(id),
        CONSTRAINT servicio_titulo_uq UNIQUE(titulo),
        CONSTRAINT servicio_id_usuario_fk1
            FOREIGN KEY(id_usuario) REFERENCES usuario(id) ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS solucion (
    id INT UNSIGNED AUTO_INCREMENT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comentario VARCHAR(5000) NOT NULL,
    nombre_de_fichero VARCHAR(150),
    solucion_elegida TINYINT DEFAULT 0,
    id_usuario INT UNSIGNED,
    id_servicio INT UNSIGNED,
        PRIMARY KEY(id),
        CONSTRAINT solucion_id_usuario_fk1
            FOREIGN KEY(id_usuario) REFERENCES usuario(id) ON DELETE NO ACTION,
        CONSTRAINT solucion_id_servicio_fk2
            FOREIGN KEY(id_servicio) REFERENCES servicio(id) ON DELETE NO ACTION
);
