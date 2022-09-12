/* tienda */

USE tienda;

-- 1
SELECT nombre FROM producto;

-- 2
SELECT nombre, precio FROM producto;

-- 3
SHOW COLUMNS FROM producto;

-- 4
SELECT nombre, precio, FORMAT ((precio * 1.02), 2) FROM producto;

-- 5 
SELECT nombre AS name, FORMAT (precio, 2) AS "euros",
  FORMAT ((precio * 1.02), 2) AS "american dolars"
 	FROM producto;

-- 6
SELECT UPPER (nombre) AS name, precio AS "euros" FROM producto;

-- 7
SELECT LOWER (nombre) AS name, precio AS "euros" FROM producto;

-- 8
SELECT nombre AS name, LEFT(UPPER (NOMBRE), 2) AS "code" FROM fabricante;

-- 9
SELECT nombre AS name, ROUND(PRECIO, 1) AS "price" FROM producto;

-- 10
SELECT nombre AS name, TRUNCATE (precio, 0) AS "price" FROM producto;

-- 11
SELECT codigo_fabricante FROM producto;

-- 12
SELECT DISTINCT codigo_fabricante FROM producto;

-- 13
SELECT nombre FROM fabricante ORDER BY nombre;

-- 14
SELECT nombre FROM fabricante ORDER BY nombre DESC;

-- 15
SELECT nombre, precio FROM producto ORDER BY nombre ASC, precio DESC;

-- 16
SELECT * FROM fabricante LIMIT 5;

-- 17
SELECT * FROM fabricante LIMIT 3, 2;

-- 18
SELECT nombre, precio FROM producto ORDER BY precio LIMIT 1;

-- 19
SELECT nombre, precio FROM producto ORDER BY precio DESC LIMIT 1;

-- 20
SELECT nombre FROM producto WHERE codigo_fabricante = 2;

-- 21
SELECT producto.nombre, producto.precio, fabricante.nombre AS "fabricante"
  FROM producto, fabricante
 	WHERE producto.codigo_fabricante = fabricante.codigo;

-- 22
SELECT producto.nombre, producto.precio, fabricante.nombre AS "fabricante"
  FROM producto, fabricante
 	WHERE producto.codigo_fabricante = fabricante.codigo
 	ORDER BY fabricante.nombre;

-- 23
SELECT producto.codigo, producto.nombre, producto.codigo_fabricante AS "C_F", fabricante.nombre AS "fabricante"
  FROM producto, fabricante
 	WHERE producto.codigo_fabricante=fabricante.codigo;

-- 24
SELECT producto.nombre, producto.precio, fabricante.nombre AS "fabricante"
  FROM producto, fabricante 
	WHERE producto.codigo_fabricante = fabricante.codigo
 	ORDER BY precio LIMIT 1;

-- 25
SELECT producto.nombre, producto.precio, fabricante.nombre AS "fabricante"
  FROM producto, fabricante
 	WHERE producto.codigo_fabricante = fabricante.codigo
 	ORDER BY precio DESC LIMIT 1;

-- 26
SELECT * FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE fabricante.nombre='Lenovo';

-- 27
SELECT * FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE fabricante.nombre = 'Crucial' AND producto.precio > 200;

-- 28
SELECT * FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE fabricante.nombre='Lenovo'
 	OR fabricante.nombre='Hewlett-Packard'
 	OR fabricante.nombre = 'Seagate';

-- 29
SELECT * FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
	WHERE fabricante.nombre IN ('Lenovo', 'Hewlett-Packard', 'Seagate');

-- 30
SELECT producto.nombre, producto.precio FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE RIGHT (fabricante.nombre, 1) = 'e';

-- 31
SELECT producto.nombre, producto.precio FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE LOCATE ('w', fabricante.nombre) <> 0;

-- 32
SELECT producto.nombre, producto.precio, fabricante.nombre AS fabricante
  FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
  WHERE producto.precio > 180
  ORDER BY producto.precio DESC, producto.nombre;

-- 33
SELECT DISTINCT fabricante.codigo, fabricante.nombre AS fabricante 
  FROM producto JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

-- 34
SELECT fabricante.nombre AS fabricante, producto.nombre FROM producto
  RIGHT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo;

-- 35
SELECT fabricante.nombre FROM producto
  RIGHT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
  WHERE producto.nombre IS NULL;

-- 36
SELECT DISTINCT * FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE fabricante.nombre='Lenovo';

-- 37
SELECT * FROM producto
  WHERE precio = (
		SELECT MAX(precio) FROM producto, fabricante
		WHERE producto.codigo_fabricante = fabricante.codigo
		AND fabricante.nombre="Lenovo");

-- 38
SELECT producto.nombre FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE fabricante.nombre = 'Lenovo'
 	ORDER BY producto.precio DESC LIMIT 1;

-- 39
SELECT producto.nombre FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE fabricante.nombre='Hewlett-Packard'
 	ORDER BY producto.precio LIMIT 1;

-- 40
SELECT * FROM producto
  WHERE precio >= (
		SELECT MAX(precio) FROM producto, fabricante
		WHERE producto.codigo_fabricante = fabricante.codigo
		AND fabricante.nombre="Lenovo");

-- 41
SELECT DISTINCT * FROM producto
  LEFT JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
 	WHERE fabricante.nombre = 'Asus' AND producto.precio > (
		SELECT ROUND (AVG (producto.precio), 2) FROM producto
	 	JOIN fabricante ON producto.codigo_fabricante = fabricante.codigo
	 	WHERE fabricante.nombre='Asus');

