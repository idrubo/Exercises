/* univesidad */

USE universidad;

-- 1.1
SELECT apellido1, apellido2, nombre FROM persona
  WHERE tipo = 'alumno'
 	ORDER BY apellido1, apellido2, nombre;

-- 1.2
SELECT nombre, apellido1, apellido2 FROM persona
  WHERE tipo = 'alumno' AND telefono IS NULL;

-- 1.3
SELECT nombre, apellido1, apellido2 FROM persona
  WHERE tipo = 'alumno' AND YEAR (fecha_nacimiento) = 1999;

-- 1.4
SELECT nombre, apellido1, apellido2 FROM persona
  WHERE tipo = 'profesor' AND telefono IS NULL AND RIGHT (nif, 1) = 'K';

-- 1.5
SELECT nombre FROM asignatura WHERE id_grado = 7 AND curso = 3 AND cuatrimestre = 1;

-- 1.6
SELECT persona.apellido1, persona.apellido2, persona.nombre, departamento.nombre
  FROM persona
 	JOIN profesor ON persona.id = profesor.id_profesor
 	JOIN departamento ON profesor.id_departamento = departamento.id
 	ORDER BY persona.apellido1 ASC, persona.nombre ASC;

-- 1.7
SELECT asignatura.nombre, curso_escolar.anyo_inicio, curso_escolar.anyo_fin
  FROM persona
 	JOIN alumno_se_matricula_asignatura ON persona.id = alumno_se_matricula_asignatura.id_alumno
 	JOIN asignatura ON alumno_se_matricula_asignatura.id_asignatura = asignatura.id
 	JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar = curso_escolar.id
 	WHERE nif = '26902806M';

-- 1.8
SELECT DISTINCT departamento.nombre FROM asignatura
  JOIN profesor ON asignatura.id_profesor=profesor.id_profesor
 	JOIN departamento ON profesor.id_departamento=departamento.id
 	WHERE asignatura.id_grado = 4 AND asignatura.id_profesor IS NOT NULL;

-- 1.9
SELECT DISTINCT persona.nombre, persona.apellido1, persona.apellido2
  FROM alumno_se_matricula_asignatura
 	JOIN persona ON alumno_se_matricula_asignatura.id_alumno = persona.id
 	WHERE alumno_se_matricula_asignatura.id_curso_escolar = 5;

-- 2.1
/*
 * NO hay ningún profesor sin asignar a algún departamento.
 * El diseño de la base de datos impide entrar una id_departamento nula o fuera
 * del rango de los departamentos.
 */
INSERT INTO persona  VALUES (25, '99999999Z', 'Pedro', 'Perez', 'Perez', 'Toledo', 'C/ Júpiter', '993332222', '1972/04/11', 'H', 'profesor');
-- INSERT INTO profesor VALUES (25, NULL); Inválido.
-- INSERT INTO profesor VALUES (25, 10);   Inválido.
INSERT INTO profesor VALUES (25, 2); --   Correcto.

SELECT departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre
  FROM persona
 	LEFT JOIN profesor ON persona.id = profesor.id_profesor
 	LEFT JOIN departamento ON profesor.id_departamento = departamento.id
 	WHERE persona.tipo = 'profesor'
 	ORDER BY departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre;

-- 2.2
/*
 * NO hay ningún profesor sin asignar a algún departamento.
 * El diseño de la base de datos impide entrar una id_departamento nula o fuera
 * del rango de los departamentos.
 */
SELECT departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre
  FROM persona
 	LEFT JOIN profesor ON persona.id = profesor.id_profesor
 	LEFT JOIN departamento ON profesor.id_departamento = departamento.id
 	WHERE persona.tipo = 'profesor' AND profesor.id_departamento IS NULL
 	ORDER BY departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre;

-- 2.3
SELECT departamento.nombre
  FROM departamento
 	LEFT JOIN profesor ON departamento.id = profesor.id_departamento
 	WHERE profesor.id_departamento IS NULL;

-- 2.4
SELECT persona.apellido1, persona.apellido2, persona.nombre 
  FROM persona 
  JOIN profesor ON persona.id = profesor.id_profesor
  LEFT JOIN asignatura ON profesor.id_profesor = asignatura.id_profesor
  WHERE asignatura.id_profesor IS NULL;

-- 2.5
SELECT asignatura.nombre
  FROM asignatura LEFT
 	JOIN profesor ON asignatura.id_profesor = profesor.id_profesor
 	WHERE asignatura.id_profesor IS NULL;

-- 2.6
SELECT DISTINCT departamento.nombre
  FROM asignatura
 	LEFT JOIN alumno_se_matricula_asignatura ON asignatura.id = alumno_se_matricula_asignatura.id_asignatura
	LEFT JOIN profesor ON asignatura.id_profesor = profesor.id_profesor
	LEFT JOIN departamento ON profesor.id_profesor=departamento.id
	WHERE alumno_se_matricula_asignatura.id_curso_escolar IS NULL
	AND departamento.nombre IS NOT NULL;

-- 3.1
SELECT COUNT(id) FROM persona WHERE tipo = 'alumno';

-- 3.2
SELECT COUNT(id) FROM persona
  WHERE tipo = 'alumno' AND YEAR (fecha_nacimiento) = 1999;

-- 3.3
SELECT departamento.nombre, COUNT(profesor.id_profesor) AS profesores
  FROM profesor
  JOIN departamento ON profesor.id_departamento = departamento.id
  GROUP BY profesor.id_departamento
  ORDER BY profesores;

-- 3.4
SELECT departamento.nombre, COUNT(profesor.id_profesor) AS profesores
  FROM departamento
 	LEFT JOIN profesor ON profesor.id_departamento=departamento.id
 	GROUP BY departamento.id
 	ORDER BY profesores;

-- 3.5
SELECT grado.nombre, COUNT(asignatura.id) AS asignaturas
  FROM asignatura
 	RIGHT JOIN grado ON grado.id = asignatura.id_grado
 	GROUP BY grado.id
 	ORDER BY asignaturas DESC;

-- 3.6
SELECT grado.nombre, COUNT(asignatura.id) AS asignaturas
  FROM asignatura
  RIGHT JOIN grado ON grado.id=asignatura.id_grado
  GROUP BY grado.id HAVING COUNT(asignatura.id) > 40
  ORDER BY asignaturas DESC;

-- 3.7
SELECT grado.nombre, asignatura.tipo, SUM(asignatura.creditos) AS creditos
  FROM asignatura
  RIGHT JOIN grado ON asignatura.id_grado = grado.id
  GROUP BY asignatura.tipo, grado.id;

-- 3.8


-- 3.9
SELECT profesor.id_profesor, persona.nombre, persona.apellido1, persona.apellido2, IF(asignatura.id IS NULL, 0, COUNT(asignatura.id)) AS asignaturas
  FROM asignatura
 	RIGHT JOIN profesor ON asignatura.id_profesor = profesor.id_profesor
 	JOIN persona ON profesor.id_profesor = persona.id
 	GROUP BY profesor.id_profesor
 	ORDER BY asignaturas DESC;

-- 3.10
SELECT * FROM persona WHERE tipo = 'alumno' ORDER BY fecha_nacimiento DESC LIMIT 1;

-- 3.11
SELECT nombre, apellido1, apellido2, departamento FROM (
	SELECT profesor.id_profesor, persona.nombre, persona.apellido1, persona.apellido2, departamento.nombre AS departamento, asignatura.id
 	FROM profesor JOIN departamento ON profesor.id_departamento = departamento.id
 	LEFT JOIN asignatura ON profesor.id_profesor = asignatura.id_profesor
 	JOIN persona ON profesor.id_profesor = persona.id
 	WHERE asignatura.id IS NULL) AS subq;

