DROP DATABASE IF EXISTS helpium;
CREATE DATABASE IF NOT EXISTS helpium CHARACTER SET="utf8mb4" COLLATE"utf8mb4_spanish_ci";

USE helpium;

CREATE TABLE IF NOT EXISTS users (
    id INT UNSIGNED AUTO_INCREMENT,
    email VARCHAR(254) NOT NULL,
    role ENUM("user", "admin") NOT NULL DEFAULT "user",
    password VARCHAR(60) NOT NULL,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verification_code VARCHAR(72) NOT NULL,
    topic VARCHAR(254),
    bio VARCHAR(5000),
    image VARCHAR(20) DEFAULT "default.webp",
    hidden TINYINT DEFAULT 0,
        PRIMARY KEY(id),
        CONSTRAINT usuer_email_uq UNIQUE(email)
);

CREATE TABLE IF NOT EXISTS services (
    id INT UNSIGNED AUTO_INCREMENT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category VARCHAR(150) NOT NULL,
    title VARCHAR(150) NOT NULL,
    explication VARCHAR(5000) NOT NULL,
    file_name VARCHAR(150) NOT NULL,
    email_notification TINYINT DEFAULT 0,
    id_user INT UNSIGNED NOT NULL,
    hidden TINYINT DEFAULT 0,
        PRIMARY KEY(id),
        CONSTRAINT service_title_uq UNIQUE(title),
        CONSTRAINT service_id_user_fk1
            FOREIGN KEY(id_user) REFERENCES users(id) ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS solutions (
    id INT UNSIGNED AUTO_INCREMENT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    comment VARCHAR(5000) NOT NULL,
    file_name VARCHAR(150),
    choosen_solution TINYINT DEFAULT 0,
    id_user INT UNSIGNED NOT NULL,
    id_service INT UNSIGNED NOT NULL,
    hidden TINYINT DEFAULT 0,
        PRIMARY KEY(id),
        CONSTRAINT solution_id_user_fk1
            FOREIGN KEY(id_user) REFERENCES users(id) ON DELETE NO ACTION,
        CONSTRAINT solution_id_service_fk2
            FOREIGN KEY(id_service) REFERENCES services(id) ON DELETE NO ACTION
);
