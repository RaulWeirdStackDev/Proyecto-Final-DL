-- Active: 1737596334296@@127.0.0.1@5432@proy001
CREATE DATABASE proy001;
\c proy001;
CREATE TABLE rol (
    id_rol SERIAL PRIMARY KEY,
    descripcion VARCHAR(50) UNIQUE NOT NULL,
    estado INT DEFAULT 1 NOT NULL
);
INSERT INTO rol (descripcion) 
VALUES 
        ('Administrador'),
        ('Estandar') ;

CREATE TABLE usuario (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_rol INT NOT NULL DEFAULT 2,
    FOREIGN KEY (id_rol) REFERENCES rol(id_rol)
);


CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE producto (
    id_producto SERIAL PRIMARY KEY,
    id_categoria INT NOT NULL, 
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio_venta NUMERIC(10, 0) NOT NULL,
    descuento NUMERIC(10, 0) NOT NULL DEFAULT 0,
    url VARCHAR(150) NOT NULL,
    estado INT NOT NULL DEFAULT 1,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria)
);

CREATE TABLE inventario(
    id_inventario SERIAL PRIMARY KEY,
    id_producto INT NOT NULL,
    precio_compra NUMERIC(10, 0) NOT NULL,
    cantidad INT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES producto(id_producto)
);