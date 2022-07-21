-- Sprint 2 Topic 1 (estructure) Level 1 Exercise 2
--
-- Pizza Restaurant.
--

DROP DATABASE IF EXISTS pizzeria;
CREATE DATABASE pizzeria CHARACTER SET utf8mb4;
USE pizzeria;

CREATE TABLE department (
  iddep INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR (50) NOT NULL
);

CREATE TABLE locality (
  idloc    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idlocdep INT UNSIGNED NOT NULL,
  name     VARCHAR (50) NOT NULL,

	CONSTRAINT idloc_iddep FOREIGN KEY (idlocdep)
	REFERENCES department (iddep)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE customer (
  idcus    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idcusloc INT UNSIGNED  NOT NULL,
  fName    VARCHAR (50)  NOT NULL,
  lName    VARCHAR (50)  NOT NULL,
  mName    VARCHAR (50)  NOT NULL,
  address  VARCHAR (100) NOT NULL,
  zipC     VARCHAR (5)   NOT NULL,
  phone    VARCHAR (9)   NOT NULL,

  CONSTRAINT idcus_idloc FOREIGN KEY (idcusloc)
  REFERENCES locality (idloc)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
);

CREATE TABLE employee (
  idemp INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  fName VARCHAR (50) NOT NULL,
  lName VARCHAR (50) NOT NULL,
  mName VARCHAR (50) NOT NULL,
  NIF   VARCHAR (9)  NOT NULL,
  phone VARCHAR (9)  NOT NULL,
  task  ENUM ('delivery', 'cook') NOT NULL
);

CREATE TABLE restaurant (
  idres    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idresloc INT UNSIGNED  NOT NULL,
  address  VARCHAR (100) NOT NULL,
  zipC     VARCHAR (5)   NOT NULL,

  CONSTRAINT idres_idloc FOREIGN KEY (idresloc)
  REFERENCES locality (idloc)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
);

CREATE TABLE works (
  idworemp INT UNSIGNED NOT NULL,
  idworres INT UNSIGNED NOT NULL,

  CONSTRAINT idwor_idemp FOREIGN KEY (idworemp)
  REFERENCES employee (idemp)
  ON DELETE CASCADE
  ON UPDATE CASCADE,

  CONSTRAINT idwor_idres FOREIGN KEY (idworres)
  REFERENCES restaurant (idres)
  ON DELETE CASCADE
  ON UPDATE CASCADE,

  CONSTRAINT idworemp_idworres_uniq PRIMARY KEY (idworemp)
);

CREATE TABLE category (
  idcat INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR (50) NOT NULL,
  catD  DATE         NOT NULL
);

CREATE TABLE pizza (
  idpiz    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idpizcat INT UNSIGNED NOT NULL,
  name     VARCHAR (50) NOT NULL,
  descript TEXT         NULL,
  look     BLOB         NULL,
  pricing  FLOAT        NULL,

  CONSTRAINT idpiz_idcat FOREIGN KEY (idpizcat)
  REFERENCES category (idcat)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
);

CREATE TABLE drink (
  iddri    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR (50) NOT NULL,
  descript TEXT         NULL,
  look     BLOB         NULL,
  pricing  FLOAT        NULL
);

CREATE TABLE hamburguer (
  idham    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR (50) NOT NULL,
  descript TEXT         NULL,
  look     BLOB         NULL,
  pricing  FLOAT        NULL
);

CREATE TABLE purchase (
  idpur    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idpurcus INT UNSIGNED NOT NULL,
  idpuremp INT UNSIGNED NULL,
  idpurres INT UNSIGNED NOT NULL,

  purDT    DATETIME     NOT NULL,
  delDT    DATETIME     NULL,
  deliver  ENUM ('atHome', 'onRest'),
  total    FLOAT        NOT NULL,

  CONSTRAINT idpur_idcus FOREIGN KEY (idpurcus)
  REFERENCES customer (idcus)
  ON DELETE RESTRICT
  ON UPDATE CASCADE,

  CONSTRAINT idpur_idemp FOREIGN KEY (idpuremp)
  REFERENCES employee (idemp)
  ON DELETE SET NULL
  ON UPDATE CASCADE,

  CONSTRAINT idpur_idres FOREIGN KEY (idpurres)
  REFERENCES restaurant (idres)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
);

CREATE TABLE orderH (
  idorh    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idorhpur INT UNSIGNED NULL,
  idorhham INT UNSIGNED NULL,
  n        INT UNSIGNED NOT NULL,

  CONSTRAINT idorh_idpur FOREIGN KEY (idorhpur)
  REFERENCES purchase (idpur)
  ON DELETE RESTRICT
  ON UPDATE CASCADE,

  CONSTRAINT idorh_idham FOREIGN KEY (idorhham)
  REFERENCES hamburguer (idham)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
);

CREATE TABLE orderD (
  idord    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idordpur INT UNSIGNED NULL,
  idorddri INT UNSIGNED NULL,
  n        INT UNSIGNED NOT NULL,

  CONSTRAINT idord_idpur FOREIGN KEY (idordpur)
  REFERENCES purchase (idpur)
  ON DELETE RESTRICT
  ON UPDATE CASCADE,

  CONSTRAINT idord_iddri FOREIGN KEY (idorddri)
  REFERENCES drink (iddri)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
);

CREATE TABLE orderP (
  idorp    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  idorppur INT UNSIGNED NULL,
  idorppiz INT UNSIGNED NULL,
  n        INT UNSIGNED NOT NULL,

  CONSTRAINT idorp_idpur FOREIGN KEY (idorppur)
  REFERENCES purchase (idpur)
  ON DELETE RESTRICT
  ON UPDATE CASCADE,

  CONSTRAINT idpor_idpiz FOREIGN KEY (idorppiz)
  REFERENCES pizza (idpiz)
  ON DELETE RESTRICT
  ON UPDATE CASCADE
);

-- INSERT INTO department VALUES (1, 'Barcelona');
INSERT INTO department VALUES (2, 'La coruña');
INSERT INTO department VALUES (3, 'Valencia');
INSERT INTO department VALUES (4, 'Toledo');

INSERT INTO locality VALUES (1, 1, 'Barcelona');
INSERT INTO locality VALUES (2, 2, 'La Coruña');
INSERT INTO locality VALUES (3, 3, 'Almusafes');
INSERT INTO locality VALUES (4, 4, 'Toledo');

INSERT INTO customer VALUES (1, 1, 'John', 'Smith', 'Rogers', 'El Prat St. 21', '08100', '699333555');
INSERT INTO customer VALUES (2, 2, 'Mike', 'Stanton', 'Smith', 'Mountain St. 100', '09001', '699444555');
INSERT INTO customer VALUES (3, 1, 'Ann', 'OReilly', 'Stark', 'River St. 1101', '20203', '699555555');
INSERT INTO customer VALUES (4, 2, 'Sarah', 'Connor', 'Michaels', 'Lake St. 12', '50602', '699666555');

INSERT INTO employee VALUES (1, 'Pedro', 'Pérez', 'López', '22333444F', '665222333', 'cook');
INSERT INTO employee VALUES (2, 'Ana', 'Miró', 'Adrian', '33111444G', '661999333', 'delivery');
INSERT INTO employee VALUES (3, 'Juan', 'Pérez', 'Lozano', '88333444J', '965111777', 'cook');
INSERT INTO employee VALUES (4, 'Pilar', 'Domínguez', 'Lobo', '11888111Z', '663222111', 'delivery');

INSERT INTO restaurant VALUES (1, 1, 'Valley St. 300', '33200');
INSERT INTO restaurant VALUES (2, 2, 'Sea Av. 501', '99301');
-- INSERT INTO restaurant VALUES (3, 3, 'Hill St. 35', '44202');
-- INSERT INTO restaurant VALUES (4, 4, 'Cliff St. 101', '11111');

INSERT INTO works VALUES (1, 1);
INSERT INTO works VALUES (2, 1);
INSERT INTO works VALUES (3, 2);
INSERT INTO works VALUES (4, 2);

INSERT INTO category VALUES (1, 'Vegetable', '2021-7-12');
INSERT INTO category VALUES (2, 'Cheese', '2022-2-25');
INSERT INTO category VALUES (3, 'Ham', '2020-1-10');

INSERT INTO pizza VALUES (1, 1, 'Olive and carrots', NULL, NULL, 5.25);
INSERT INTO pizza VALUES (2, 2, 'Four cheese', NULL, NULL, 7.75);
INSERT INTO pizza VALUES (3, 3, 'Classic', NULL, NULL, 4.10);

INSERT INTO drink VALUES (1, 'CocaCola', NULL, NULL, 0.75);
INSERT INTO drink VALUES (2, 'Orange juice', NULL, NULL, 1.25);
INSERT INTO drink VALUES (3, 'Beer', NULL, NULL, 1.05);

INSERT INTO hamburguer VALUES (1, 'Cheese', NULL, NULL, 2.50);
INSERT INTO hamburguer VALUES (2, 'Double', NULL, NULL, 3.25);
INSERT INTO hamburguer VALUES (3, 'Max', NULL, NULL, 4.50);


--                             pur purcus puremp purres          purDT              delDT             deliver   total
-- INSERT INTO purchase VALUES (1,   1,     2,     1,   '2022-02-01 16:06:00', '2022-02-01 16:26:00', 'atHome', 10.60);
--                           orh orhpur orhham n
-- INSERT INTO orderH VALUES (1,    1,     2,  1);
--                           ord ordpur orddri n
-- INSERT INTO orderD VALUES (2,    1,       ,  );
--                           orp orppur orppiz n
-- INSERT INTO orderP VALUES (3,    ,       ,  );

-- INSERT INTO purchase VALUES (2, 2, 3, 3, NULL, 2, 4, '2022-03-10 09:10:00', '2022-03-10 09:23:00', 'atHome', 1, 1, 0, 12.30);

-- INSERT INTO purchase VALUES (3, 3, 1, 1, NULL, 1, NULL, '2022-03-10 09:10:00', NULL, 'onRest', 2, 2, 0, 25.30);
-- INSERT INTO purchase VALUES (4, 4, NULL, 2, 1, 1, NULL, '2022-03-10 09:10:00', NULL, 'onRest', 0, 1, 1, 10.20);

-- INSERT INTO purchase VALUES (5, 1, 1, 3, NULL, 1, 2, '2022-04-11 10:10:00', '2022-04-11 10:15:00', 'atHome', 1, 1, 0,  9.75);
-- INSERT INTO purchase VALUES (6, 1, 1, 1, NULL, 1, 2, '2022-05-12 11:20:00', '2022-05-12 11:30:00', 'atHome', 1, 1, 0, 10.20);

-- INSERT INTO purchase VALUES (7, 4, NULL, 3, 2, 2, 4, '2022-06-22 16:50:00', '2022-06-22 17:01:00', 'atHome', 0, 1, 1,  9.75);
-- INSERT INTO purchase VALUES (8, 4, NULL, 2, 1, 2, 4, '2022-07-23 17:20:00', '2022-07-23 17:28:00', 'atHome', 0, 1, 1, 10.20);

-- /* Llista quants productes de categoria 'Begudes' s'han venut en una determinada localitat. */
-- SELECT COUNT(purchase.idpurdri) AS drinks FROM purchase
--   JOIN restaurant ON purchase.idpurres = restaurant.idres
--  	JOIN locality ON restaurant.idresloc = locality.idloc
--  	WHERE locality.name = 'Barcelona';
-- 
-- /* Llista quantes comandes ha efectuat un determinat empleat/da. */
-- SELECT COUNT(purchase.idpuremp) AS employees FROM purchase
--   JOIN employee ON purchase.idpuremp = employee.idemp
--  	WHERE employee.fName = 'Ana' AND employee.lName = 'Miró' AND employee.mName = 'Adrian';

