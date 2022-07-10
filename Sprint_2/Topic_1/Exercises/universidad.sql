/* univesidad */

/* DEBUG */
/* DEBUG */
/* DEBUG */

/* Las ordenaciones tendrán el orden inverso ??? */

/* DEBUG */
/* DEBUG */
/* DEBUG */

-- 1.1
SELECT apellido1, apellido2, nombre FROM persona WHERE tipo='alumno' ORDER BY apellido1, apellido2, nombre;

-- 1.2
SELECT nombre, apellido1, apellido2 FROM persona WHERE tipo='alumno' AND telefono IS NULL;

-- 1.3
SELECT nombre, apellido1, apellido2 FROM persona WHERE tipo='alumno' AND YEAR(fecha_nacimiento)=1999;

-- 1.4
SELECT nombre, apellido1, apellido2 FROM persona WHERE tipo='profesor' AND telefono IS NULL AND RIGHT(nif, 1)='K';

-- 1.5
SELECT nombre FROM asignatura WHERE id_grado=7 AND curso=3 AND cuatrimestre=1;

-- 1.6
SELECT persona.apellido1, persona.apellido2, persona.nombre, departamento.nombre FROM persona JOIN profesor ON persona.id=profesor.id_profesor JOIN departamento ON profesor.id_departamento=departamento.id ORDER BY persona.apellido1 ASC, persona.nombre ASC;

-- 1.7
SELECT persona.apellido1, persona.apellido2, persona.nombre, asignatura.nombre, curso_escolar.anyo_inicio, curso_escolar.anyo_fin FROM persona JOIN alumno_se_matricula_asignatura ON persona.id=alumno_se_matricula_asignatura.id_alumno JOIN asignatura ON alumno_se_matricula_asignatura.id_asignatura=asignatura.id JOIN curso_escolar ON alumno_se_matricula_asignatura.id_curso_escolar=curso_escolar.id WHERE nif='26902806M';

-- 1.8
SELECT DISTINCT departamento.nombre FROM asignatura JOIN profesor ON asignatura.id_profesor=profesor.id_profesor JOIN departamento ON profesor.id_departamento=departamento.id WHERE asignatura.id_grado = 4 AND asignatura.id_profesor IS NOT NULL;

-- 1.9
SELECT DISTINCT persona.nombre, persona.apellido1, persona.apellido2 FROM alumno_se_matricula_asignatura JOIN persona ON alumno_se_matricula_asignatura.id_alumno=persona.id WHERE alumno_se_matricula_asignatura.id_curso_escolar=5;

-- 2.1
/* NO hay ningún profesor sin asignar a algún departamento. */
SELECT departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre FROM persona LEFT JOIN profesor ON persona.id=profesor.id_profesor LEFT JOIN departamento ON profesor.id_departamento=departamento.id WHERE persona.tipo='profesor' ORDER BY departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre;

-- 2.2
SELECT departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre FROM persona LEFT JOIN profesor ON persona.id=profesor.id_profesor LEFT JOIN departamento ON profesor.id_departamento=departamento.id WHERE persona.tipo='profesor' AND profesor.id_departamento IS NULL ORDER BY departamento.nombre, persona.apellido1, persona.apellido2, persona.nombre;

-- 2.3
SELECT departamento.nombre FROM departamento LEFT JOIN profesor ON departamento.id=profesor.id_departamento WHERE profesor.id_departamento IS NULL;

