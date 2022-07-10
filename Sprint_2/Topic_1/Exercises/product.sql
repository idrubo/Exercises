/* tienda */

/* DEBUG */
/* DEBUG */
/* DEBUG */

/* Las ordenaciones tendrán el orden inverso ??? */

/* DEBUG */
/* DEBUG */
/* DEBUG */
-- 1
SELECT * FROM producto;

-- 2
SELECT nombre, precio FROM producto;

-- 3
SHOW COLUMNS FROM producto;

-- 4
SELECT nombre, precio, FORMAT ((precio * 1.02), 2) FROM producto;

-- 5 
SELECT nombre AS name, precio AS "euros", FORMAT ((precio * 1.02), 2) AS "american dolars" FROM producto;

-- 6
SELECT UPPER (nombre) AS name, precio AS "euros" FROM producto;

-- 7
SELECT LOWER (nombre) AS name, precio AS "euros" FROM producto;

-- 8
SELECT nombre AS name, LEFT(UPPER (NOMBRE), 2) AS code FROM fabricante;

-- 9
SELECT nombre AS name, ROUND(PRECIO) AS price FROM producto;

-- 10
SELECT nombre AS name, TRUNCATE (precio, 0) AS price FROM producto;

-- 11
SELECT fabricante.codigo FROM fabricante, producto WHERE fabricante.codigo=producto.codigo_fabricante;

-- 12
SELECT DISTINCT fabricante.codigo FROM fabricante, producto WHERE fabricante.codigo=producto.codigo_fabricante;

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
SELECT nombre, precio FROM producto ORDER BY precio ASC LIMIT 1;

-- 19
SELECT nombre, precio FROM producto ORDER BY precio DESC LIMIT 1;

-- 20
SELECT nombre precio FROM producto WHERE codigo_fabricante = 2;

-- 21
SELECT DISTINCT producto.nombre, producto.precio, fabricante.nombre FROM producto, fabricante WHERE producto.codigo_fabricante=fabricante.codigo;

-- 22
SELECT DISTINCT producto.nombre, producto.precio, fabricante.nombre FROM producto, fabricante WHERE producto.codigo_fabricante=fabricante.codigo ORDER BY fabricante.nombre;

-- 23
SELECT producto.nombre, producto.precio, fabricante.nombre FROM producto, fabricante WHERE producto.codigo_fabricante=fabricante.codigo;

-- 24
SELECT producto.nombre, producto.precio, fabricante.nombre FROM producto, fabricante WHERE producto.codigo_fabricante=fabricante.codigo ORDER BY precio ASC LIMIT 1;

-- 25
SELECT producto.nombre, producto.precio, fabricante.nombre FROM producto, fabricante WHERE producto.codigo_fabricante=fabricante.codigo ORDER BY precio DESC LIMIT 1;

-- 26
SELECT producto.nombre, producto.precio FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Lenovo';

-- 27
SELECT producto.nombre, producto.precio FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Crucial' AND producto.precio>200;

-- 28
SELECT producto.nombre, producto.precio FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Lenovo' UNION
SELECT producto.nombre, producto.precio FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Hewlett-Packard' UNION 
SELECT producto.nombre, producto.precio FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Seagate';

-- 30
SELECT producto.nombre, producto.precio FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE RIGHT(fabricante.nombre, 1)='e';

-- 31
SELECT producto.nombre, producto.precio FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE LOCATE ('w', fabricante.nombre)<>0;

-- 32
SELECT producto.nombre, producto.precio, fabricante.nombre FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE producto.precio>180 ORDER BY producto.precio DESC, producto.nombre;

-- 33
SELECT DISTINCT fabricante.nombre FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo;

-- 34
SELECT DISTINCT fabricante.nombre, producto.nombre FROM producto RIGHT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo;

-- 35
SELECT DISTINCT fabricante.nombre FROM producto RIGHT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE producto.nombre IS NULL;

-- 36
SELECT DISTINCT fabricante.nombre, producto.nombre FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Lenovo';

-- 37
SELECT nombre, codigo, precio, codigo_fabricante FROM producto WHERE precio=(SELECT producto.precio FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Lenovo' ORDER BY producto.precio DESC LIMIT 1);

-- 38
SELECT producto.nombre FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Lenovo' ORDER BY producto.precio DESC LIMIT 1;

-- 39
SELECT producto.nombre FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Hewlett-Packard' ORDER BY producto.precio ASC LIMIT 1;

-- 40
SELECT nombre, codigo, precio, codigo_fabricante FROM producto WHERE precio>=(SELECT producto.precio FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Lenovo' ORDER BY producto.precio DESC LIMIT 1);

-- 41
SELECT DISTINCT fabricante.nombre, producto.nombre FROM producto LEFT JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Asus' AND producto.precio>(SELECT ROUND(AVG(producto.precio), 2) FROM producto JOIN fabricante ON producto.codigo_fabricante=fabricante.codigo WHERE fabricante.nombre='Asus');

