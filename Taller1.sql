CREATE DATABASE Taller_1;

USE Taller_1;

CREATE TABLE Cliente (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    email VARCHAR(100),
    telefono VARCHAR(20)
);

CREATE TABLE Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_pedido DATE,
    total DECIMAL(10, 2),
    estado VARCHAR(50),
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(id)
);

CREATE TABLE Producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    precio DECIMAL(10, 2),
    descripcion TEXT,
    cantidad_disponible INT,
    pedido_id INT,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(id)
);

CREATE TABLE Detalle_Pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cantidad INT,
    subtotal DECIMAL(10, 2),
    pedido_id INT,
    FOREIGN KEY (pedido_id) REFERENCES Pedido(id)
);


