CREATE database acamica_class49;
USE acamica_class49;

CREATE TABLE persona (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR (60) NOT NULL,
    apellido VARCHAR (60),
    dni INT UNSIGNED NOT NULL,
    pais VARCHAR (60) NOT NULL
)

-- SQL
-- Structured Query Language

SELECT *
FROM persona;

select apellido, nombr
FROM  persona ;

-- numero de elementos
select count(*)
FROM  persona ;

--- alterar la tabla
ALTER TABLE persona ADD fecha_nac date NOT NULL

ALTER TABLE persona DROP fecha_nac

-- ALTER TABLE persona  MODIFY COLUMN dni varchar(10) NOT NULL;


--- agregar registros

INSERT INTO  persona (nombre, apellido,dni, pais) 
VALUES ('Ada', 'Lovelace', 989812, 'Inglaterra');

INSERT INTO  persona (nombre, apellido,dni, pais) 
VALUES ('Lovelace', 'Ada', 989812, 'Inglaterra');


INSERT INTO persona (nombre, apellido,dni, pais) 
VALUES ('juan','sanchez',123423,'Colombia');

----- busqueda
SELECT apellido, nombre from persona
	WHERE pais = 'Inglaterra' and id > 2;


SELECT apellido, nombre from persona
	WHERE pais LIKE 'Ing%'
	
	
---  actualizacion

UPDATE persona 
SET pais = 'Colombia' WHERE id = 2


-- eliminacion

DELETE FROM persona;
DELETE FROM persona WHERE id = 1;
DELETE FROM persona WHERE pais = 'Colombia';

-- limpiar el contenido de la tabla
TRUNCATE persona;