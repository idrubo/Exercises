-- Sprint 2 Topic 1 (Estructure) Level 1 Exercise 1
--
-- Optician workshop.
--

DROP DATABASE IF EXISTS opticians;
CREATE DATABASE opticians CHARACTER SET utf8mb4;
USE opticians;

CREATE TABLE provider (
	idpr    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name    VARCHAR (100) NOT NULL,
	street  VARCHAR (100) NOT NULL,
	nbr     INT UNSIGNED NOT NULL,
	flr     INT UNSIGNED,
	door    INT UNSIGNED,
	city    VARCHAR (50)  NOT NULL,
	zipCode VARCHAR (5)   NOT NULL,
	country VARCHAR (50)  NOT NULL,
	phone   VARCHAR (9)   NOT NULL,
	fax     VARCHAR (9)   NOT NULL,
	NIF     VARCHAR (9)   NOT NULL,
	UNIQUE(NIF)
);

CREATE TABLE brand (
	idbr   INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idbrpr INT UNSIGNED NOT NULL,
	name   VARCHAR(50),

	CONSTRAINT idbr_idpr FOREIGN KEY (idbrpr)
	REFERENCES provider (idpr)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idbr_idbrpr_uniq UNIQUE (idbr, idbrpr)
);

CREATE TABLE glasses (
	idgl     INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idglbr   INT UNSIGNED NOT NULL,
	lPower   FLOAT        NOT NULL,
	rPower   FLOAT        NOT NULL,
	mounting ENUM('float', 'polymer', 'metallic') NOT NULL,
	mColor   VARCHAR (25)  NOT NULL,
	rColor   VARCHAR (25)  NOT NULL,
	lcolor   VARCHAR (25)  NOT NULL,
	pricing  FLOAT         NOT NULL,

	CONSTRAINT idgl_idbr FOREIGN KEY (idglbr)
	REFERENCES brand (idbr)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE employee (
	idem INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE customer (
	idcu    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name    VARCHAR (100) NOT NULL,
	address VARCHAR (150) NOT NULL,
	phone   VARCHAR (9)   NOT NULL,
	email   VARCHAR (50)  NOT NULL,
	rDate   DATE          NOT NULL,
	referer INT UNSIGNED,

	CONSTRAINT ref_idcu FOREIGN KEY (referer)
	REFERENCES customer (idcu)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE buy (
	idbu   INT UNSIGNED NOT NULL,
	idbucu INT UNSIGNED NOT NULL,
	idbugl INT UNSIGNED NOT NULL,
	idbuem INT UNSIGNED NOT NULL,
	rDate  DATE         NOT NULL,

	CONSTRAINT idbu_idcu FOREIGN KEY (idbucu)
	REFERENCES customer (idcu)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idbu_idgl FOREIGN KEY (idbugl)
	REFERENCES glasses (idgl)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idbu_idem FOREIGN KEY (idbuem)
	REFERENCES employee (idem)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

INSERT INTO provider VALUES(1, 'Perfect Glasses', 'First St.', 100, 10, NULL, 'London', '01231', 'UK', '32555666', '32555667', '11222222F');
INSERT INTO provider VALUES(2, 'Shiny Eye Works', 'Second Av.', 23, NULL, NULL, 'New York', '11555', 'US', '32555666', '32555667', '99222242R');
INSERT INTO provider VALUES(3, 'Healthy Eye', 'Fifth Av.', 500, NULL, NULL, 'New York', '11555', 'US', '32999111', '32999112', '98444686Q');

INSERT INTO brand VALUES(1, 1, 'SunJoy');
INSERT INTO brand VALUES(2, 1, 'SunBeauty');
INSERT INTO brand VALUES(3, 2, 'EyeCorrect');
INSERT INTO brand VALUES(4, 3, 'hEye');

INSERT INTO glasses VALUES(1, 1, 1.0, 1.5, 'metallic', 'Gold', 'Dark Shade', 'Dark Shade', 35.12);
INSERT INTO glasses VALUES(2, 2, 0.5, 0.5, 'metallic', 'Silver', 'Green', 'Green', 22.85);
INSERT INTO glasses VALUES(3, 3, 2.0, 2.5, 'polymer', 'Black', 'Black', 'Black', 38.99);
INSERT INTO glasses VALUES(4, 4, 1.0, 1.0, 'polymer', 'Red', 'Transparent', 'Transparent', 49.99);

INSERT INTO employee VALUES(1, 'Pedro Lara');
INSERT INTO employee VALUES(2, 'Ana Santos');

INSERT INTO customer VALUES(1, 'Manuel Perez', 'C/ de los Manzanos', '666333222', 'mp@mp.com', '1980-03-03', NULL);
INSERT INTO customer VALUES(2, 'Sara Pizarro', 'C/ de los Naranjos', '999444111', 'sp@prv.net', '1991-07-25', 1);
INSERT INTO customer VALUES(3, 'Ana Gonzalez', 'C/ de los Nísperos', '996112111', 'ag@prv.net', '1971-08-10', 2);
INSERT INTO customer VALUES(4, 'Sara Pizarro', 'C/ de los Perales', '966774332', 'sp@spv.net', '1951-07-22', NULL);

INSERT INTO buy VALUES(1, 1, 1, 1, '2022-01-10');
INSERT INTO buy VALUES(2, 1, 2, 2, '2022-06-05');
INSERT INTO buy VALUES(3, 2, 3, 1, '2022-03-28');
INSERT INTO buy VALUES(4, 3, 3, 2, '2021-04-10');
INSERT INTO buy VALUES(5, 1, 1, 1, '2021-11-01');

/* Llista el total de factures d'un client/a en un període determinat. */
SELECT buy.idbu, customer.name, brand.name, glasses.pricing, buy.rDate FROM buy
RIGHT JOIN customer ON buy.idbucu = customer.idcu
JOIN glasses ON buy.idbugl = glasses.idgl
JOIN brand ON glasses.idglbr = brand.idbr
WHERE customer.name = 'Manuel Perez' AND YEAR(buy.rDate) = '2022';

SELECT buy.idbu, customer.name, brand.name, glasses.pricing, buy.rDate FROM buy
RIGHT JOIN customer ON buy.idbucu = customer.idcu
JOIN glasses ON buy.idbugl = glasses.idgl
JOIN brand ON glasses.idglbr = brand.idbr
WHERE customer.name = 'Sara Pizarro' AND YEAR(buy.rDate) = '2022';

/* Llista els diferents models d'ulleres que ha venut un empleat/da durant un any. */
SELECT buy.idbugl, brand.name, glasses.mounting, glasses.mColor, employee.name FROM buy
JOIN glasses ON buy.idbugl = glasses.idgl
JOIN brand ON glasses.idglbr = brand.idbr
JOIN employee ON buy.idbuem = employee.idem
WHERE employee.name = 'Ana Santos' AND YEAR(buy.rDate) = '2022';

SELECT buy.idbugl, brand.name, glasses.mounting, glasses.mColor, employee.name FROM buy
JOIN glasses ON buy.idbugl = glasses.idgl
JOIN brand ON glasses.idglbr = brand.idbr
JOIN employee ON buy.idbuem = employee.idem
WHERE employee.name = 'Pedro Lara' AND YEAR(buy.rDate) = '2022';

/* Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica. */
SELECT provider.name FROM provider
RIGHT JOIN brand ON provider.idpr = brand.idbrpr
RIGHT JOIN glasses ON brand.idbr = glasses.idglbr
RIGHT JOIN buy ON glasses.idgl = buy.idbugl
GROUP BY provider.name;

