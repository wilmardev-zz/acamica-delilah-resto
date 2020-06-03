CREATE VIEW `VW_CANCIONES` AS
SELECT 
	C.id, 
    C.nombre AS nombre_cancion, 
    C.duracion, 
    B.nombre AS nombre_banda,
    A.nombre AS nombre_album,
    A.fecha_publicacion
FROM cancion C 
JOIN banda B ON C.id_banda = B.id
JOIN album A ON C.id_album = A.id
ORDER BY C.duracion, C.nombre ASC 