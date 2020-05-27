SELECT *
FROM persona;

INSERT INTO persona (nombre, apellido, dni, pais, edad, direccion)
VALUES ('santi', 'zapata', 1332, 'argentina', 20, '');

SELECT nombre, apellido
FROM persona;

SELECT nombre, apellido
FROM persona
LIMIT 5;

SELECT count(*) AS Cantidad
FROM persona;

-- Modificar Tabla Persona
ALTER TABLE persona
ADD edad INT NOT NULL;

ALTER TABLE persona
ADD direccion VARCHAR(60) NOT NULL;

-- Eliminar Columna tabla persona
ALTER TABLE persona
DROP edad;

SELECT * 
FROM persona
WHERE dni LIKE '%2' AND edad = 0 AND nombre != 'yulian';


DELETE 
FROM persona
-- WHERE id = 2


-- CREATE, INSERT - UPDATE, ALTER, DELETE, 
-- SELECT, SELECT - WHERE, DELETE - WHERE, 
-- SELECT - COUNT, ALTER - DROP
