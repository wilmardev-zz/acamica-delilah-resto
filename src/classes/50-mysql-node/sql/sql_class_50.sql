-- Tabla Bandas
CREATE TABLE Banda (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    integrantes INT NOT NULL,
    fecha_inicio DATE NOT NULL,
    fehca_separacion DATE NULL,
    pais VARCHAR(60) NOT NULL
);

-- Tabla Album
CREATE TABLE Album (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    id_banda DATE NULL,
    fecha_publicacion DATE NOT NULL
);

-- Tabla Canciones
CREATE TABLE Cancion (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    duracion INT NOT NULL,
    id_album INT NOT NULL,
    id_banda DATE NULL,
    fecha_publicacion DATE NOT NULL
);

-- Llave foránea desde album hacia banda
ALTER TABLE Album
ADD CONSTRAINT FK_ALBUM_BANDA
FOREIGN KEY (id_banda) REFERENCES Banda(id);

-- Llave foránea desde cancion hacia album
ALTER TABLE Cancion
ADD CONSTRAINT FK_CANCION_ALBUM
FOREIGN KEY (id_album) REFERENCES Album(id);

-- Llave foránea desde cancion hacia banda
ALTER TABLE Cancion
ADD CONSTRAINT FK_CANCION_BANDA
FOREIGN KEY (id_banda) REFERENCES Banda(id);
