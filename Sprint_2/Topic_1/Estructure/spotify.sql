--
-- Sprint 2 Topic 1 (estructure) Level 3 Exercise 1
--
-- Spotify.
--

DROP DATABASE IF EXISTS spotify;
CREATE DATABASE spotify CHARACTER SET utf8mb4;
USE spotify;

CREATE TABLE user (
	iduse    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	email    VARCHAR   (50) NOT NULL,
	passwd   VARCHAR   (50) NOT NULL,
	name     VARCHAR  (100) NOT NULL,
	country  VARCHAR   (50) NOT NULL,
	zipCode  VARCHAR   (10) NOT NULL,
	dBirth   DATE           NOT NULL,
	sex      ENUM ('male', 'female') NOT NULL
);

CREATE TABLE subscript (
	idsub    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idsubuse INT UNSIGNED   NOT NULL,
	dStart   DATE           NOT NULL,
	dRenew   DATE           NULL,

	CONSTRAINT idsubUniq UNIQUE (idsubuse),

	CONSTRAINT idsub_iduse FOREIGN KEY (idsubuse)
	REFERENCES user (iduse)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE cc (
	idcc     INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idccsub  INT UNSIGNED   NOT NULL,
	ccN      VARCHAR   (19) NOT NULL,
	month    INT UNSIGNED   NOT NULL,
	year     INT UNSIGNED   NOT NULL,
	CVV      VARCHAR    (3) NOT NULL,

	CONSTRAINT idcc_idsub FOREIGN KEY (idccsub)
	REFERENCES subscript (idsub)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE paypal (
	idpp     INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idppsub  INT UNSIGNED   NOT NULL,
	ppUser   VARCHAR   (16) NOT NULL,

	CONSTRAINT idpp_idppsub FOREIGN KEY (idppsub)
	REFERENCES subscript (idsub)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE payment (
	idpay    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idpaysub INT UNSIGNED   NOT NULL,
	dPay     DATE           NOT NULL,
	amount   FLOAT          NULL,

	CONSTRAINT idpay_idsub FOREIGN KEY (idpaysub)
	REFERENCES subscript (idsub)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE playlist (
	idpla    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idplause INT UNSIGNED   NOT NULL,
	n        INT UNSIGNED   NULL,
	title    VARCHAR  (100) NOT NULL,
	dCreate  DATE           NOT NULL,

	CONSTRAINT idpla_iduse FOREIGN KEY (idplause)
	REFERENCES user (iduse)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE deleted (
	iddel    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	iddelpla INT UNSIGNED   NOT NULL,
	dDelete  DATE           NOT NULL,

	CONSTRAINT iddel_idpla FOREIGN KEY (iddelpla)
	REFERENCES playlist (idpla)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE shared (
	idsha    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idshapla INT UNSIGNED   NOT NULL,

	CONSTRAINT idsha_idpla FOREIGN KEY (idshapla)
	REFERENCES playlist (idpla)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE artist (
	idart    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	name     VARCHAR  (100) NOT NULL,
	picture  VARCHAR (1024) NOT NULL
);

CREATE TABLE album (
	idalb    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idalbart INT UNSIGNED   NOT NULL,
	year     INT UNSIGNED   NOT NULL,
	cover    VARCHAR (1024) NOT NULL,

	CONSTRAINT idalb_idart FOREIGN KEY (idalbart)
	REFERENCES artist (idart)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE song (
	idson    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idsonpla INT UNSIGNED   NULL,
	idsonalb INT UNSIGNED   NULL,
	n        INT UNSIGNED   NULL,
	title    VARCHAR  (100) NOT NULL,
	tLength  TIME           NOT NULL,

	CONSTRAINT idson_idpla FOREIGN KEY (idsonpla)
	REFERENCES playlist (idpla)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idson_idalb FOREIGN KEY (idsonalb)
	REFERENCES album (idalb)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE collect (
	idcolsha INT UNSIGNED   NOT NULL,
	idcolson INT UNSIGNED   NOT NULL,
	idcoluse INT UNSIGNED   NOT NULL,
	dCollect DATE           NOT NULL,

	CONSTRAINT idcol_idsha FOREIGN KEY (idcolsha)
	REFERENCES shared (idsha)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idcol_idson FOREIGN KEY (idcolson)
	REFERENCES song (idson)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	PRIMARY KEY (idcolsha, idcolson),

	CONSTRAINT idcol_iduse FOREIGN KEY (idcoluse)
	REFERENCES user (iduse)
	ON DELETE RESTRICT
	ON UPDATE CASCADE
);

CREATE TABLE follow (
	idfoluse INT UNSIGNED   NOT NULL,
	idfolart INT UNSIGNED   NOT NULL,

	CONSTRAINT idfol_iduse FOREIGN KEY (idfoluse)
	REFERENCES user (iduse)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idfol_idart FOREIGN KEY (idfolart)
	REFERENCES artist (idart)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	PRIMARY KEY (idfoluse, idfolart)
);

CREATE TABLE relate (
idrelart1 INT UNSIGNED   NOT NULL,
idrelart2 INT UNSIGNED   NOT NULL,

CONSTRAINT idrel_idart1 FOREIGN KEY (idrelart1)
REFERENCES artist (idart)
ON DELETE RESTRICT
ON UPDATE CASCADE,

CONSTRAINT idrel_idart2 FOREIGN KEY (idrelart2)
REFERENCES artist (idart)
ON DELETE RESTRICT
ON UPDATE CASCADE,

PRIMARY KEY (idrelart1, idrelart2)
);

CREATE TABLE fAlbum (
	idfal    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idfalalb INT UNSIGNED   NOT NULL,
	idfaluse INT UNSIGNED   NOT NULL,

	CONSTRAINT idfal_idalb FOREIGN KEY (idfalalb)
	REFERENCES album (idalb)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idfal_iduse FOREIGN KEY (idfaluse)
	REFERENCES user (iduse)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idfalalbUniq UNIQUE (idfalalb, idfaluse)
);

CREATE TABLE fSong (
	idfso    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idfsoson INT UNSIGNED   NOT NULL,
	idfsouse INT UNSIGNED   NOT NULL,

	CONSTRAINT idfso_idson FOREIGN KEY (idfsoson)
	REFERENCES song (idson)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idfso_iduse FOREIGN KEY (idfsouse)
	REFERENCES user (iduse)
	ON DELETE RESTRICT
	ON UPDATE CASCADE,

	CONSTRAINT idfsosonUniq UNIQUE (idfsoson, idfsouse)
);

--                     iduse email           passwd  name      country   zipCode  dBirth        sex
INSERT INTO user VALUES (1,  'usr1@srv.com', 'xxx',  'John',   'US',     '02333', '1990-01-01', 'male');
INSERT INTO user VALUES (2,  'usr2@srv.com', 'xxx',  'Mary',   'Canada', 'x1333', '1980-07-07', 'female');
INSERT INTO user VALUES (3,  'usr3@srv.com', 'xxx',  'Robert', 'US',     '80555', '1991-02-02', 'male');
INSERT INTO user VALUES (4,  'usr4@srv.com', 'xxx',  'Ana',    'Mexico', 'ME154', '2000-09-29', 'female');
INSERT INTO user VALUES (5,  'usr5@srv.com', 'xxx',  'Mike',   'US',     '90656', '1999-08-08', 'male');

--                          idsub idsubuse dStart        dRenew
INSERT INTO subscript VALUES (1,     1,    '2022-01-01', NULL);
INSERT INTO subscript VALUES (2,     2,    '2021-01-01', '2022-01-01');
INSERT INTO subscript VALUES (3,     5,    '2019-06-06', '2022-06-06');

--                   idcc idccsub ccN                    month year CVV
INSERT INTO cc VALUES (1,   1,    '3323 4434 5545 6656', 1,    30,  '663');
INSERT INTO cc VALUES (2,   3,    '2213 3323 8878 9989', 3,    25,  '114');

--                       idpp idppsub ppUser
INSERT INTO paypal VALUES (1,   2,    'Mary');

--                        idpay idpaysub dPay          amount
INSERT INTO payment VALUES (1,    1,     '2022-01-01', 10.00);
INSERT INTO payment VALUES (2,    2,     '2021-01-01', 10.00);
INSERT INTO payment VALUES (3,    2,     '2022-01-01', 10.00);
INSERT INTO payment VALUES (4,    3,     '2019-06-06', 10.00);
INSERT INTO payment VALUES (5,    3,     '2020-06-06', 10.00);
INSERT INTO payment VALUES (6,    3,     '2021-06-06', 10.00);
INSERT INTO payment VALUES (7,    3,     '2022-06-06', 10.00);

--                         idpla idplause n   title      dCreate
INSERT INTO playlist VALUES (1,    1,      3, 'Pop',     '2022-02-02');
INSERT INTO playlist VALUES (2,    2,      4, 'Classic', '2021-02-02');
INSERT INTO playlist VALUES (3,    3,      2, 'Rock',    '2022-03-03');
INSERT INTO playlist VALUES (4,    5,      2, 'Folk',    '2022-06-06');
INSERT INTO playlist VALUES (5,    1,      2, 'Folk',    '2022-06-06');
INSERT INTO playlist VALUES (6,    5,      0, 'Rock',    '2022-06-06');

--                        iddel iddelpla dDelete
INSERT INTO deleted VALUES (1,    5,     '2022-06-07');
INSERT INTO deleted VALUES (2,    6,     '2022-06-08');

--                       idsha idshapla
INSERT INTO shared VALUES (1,    2);
INSERT INTO shared VALUES (2,    3);

--                       idart name       picture
INSERT INTO artist VALUES (1,  'Vivaldi',   'vivaldi.jpg');
INSERT INTO artist VALUES (2,  'Mozart',    'mozart.jpg');
INSERT INTO artist VALUES (3,  'Beethoven', 'beethoven.jpg');

--                      idalb idalbart year    cover
INSERT INTO album VALUES (1,    1,     '1615', 'spring.jpg');
INSERT INTO album VALUES (2,    2,     '1711', 'moonlight.jpg');
INSERT INTO album VALUES (3,    3,     '1816', 'friendship.jpg');
INSERT INTO album VALUES (4,    1,     '1616', 'winter.jpg');

--                     idson idsonpla idsonalb n    title                  tLength
INSERT INTO song VALUES (1,    1,       1,       5, 'Singing in the rain',  '5:20');
INSERT INTO song VALUES (2,    1,       2,      10, 'Moonlight shadow',     '3:20');
INSERT INTO song VALUES (3,    1,       2,     500, 'Modern dance',        '10:20');
INSERT INTO song VALUES (4,    4,       3,      15, 'Sunshine',             '4:20');
INSERT INTO song VALUES (5,    4,       4,       9, 'Superstar',            '4:20');
INSERT INTO song VALUES (6,    5,       4,       2, 'Salsa',                '4:20');
INSERT INTO song VALUES (7,    5,       4,       2, 'Mambo',                '4:20');

--                        idcolsha idcolson idcoluse dCollect
INSERT INTO collect VALUES (1,       1,      1,      '2022-01-03');
INSERT INTO collect VALUES (2,       6,      5,      '2022-06-08');
INSERT INTO collect VALUES (1,       2,      4,      '2022-06-09');
INSERT INTO collect VALUES (2,       3,      5,      '2022-06-10');
INSERT INTO collect VALUES (1,       4,      1,      '2022-06-10');
INSERT INTO collect VALUES (1,       5,      4,      '2022-06-08');

--                       idfoluse idfolart
INSERT INTO follow VALUES (1,       1);
INSERT INTO follow VALUES (3,       2);
INSERT INTO follow VALUES (4,       1);
INSERT INTO follow VALUES (2,       2);
INSERT INTO follow VALUES (5,       3);

--                       idrelart1 idrelart2
INSERT INTO relate VALUES (1,        2);
INSERT INTO relate VALUES (2,        3);
INSERT INTO relate VALUES (3,        1);
INSERT INTO relate VALUES (1,        3);

--                       idfal idfalalb idfaluse
INSERT INTO fAlbum VALUES (1,    1,       1);
INSERT INTO fAlbum VALUES (2,    2,       1);
INSERT INTO fAlbum VALUES (3,    3,       5);
INSERT INTO fAlbum VALUES (4,    4,       4);
INSERT INTO fAlbum VALUES (5,    2,       2);
INSERT INTO fAlbum VALUES (6,    1,       3);
INSERT INTO fAlbum VALUES (7,    3,       3);

-- 	                    idfso idfsoson idfsouse
INSERT INTO fSong VALUES (1,    7,       5);
INSERT INTO fSong VALUES (2,    1,       2);
INSERT INTO fSong VALUES (3,    2,       1);
INSERT INTO fSong VALUES (4,    6,       1);
INSERT INTO fSong VALUES (5,    3,       3);
INSERT INTO fSong VALUES (6,    3,       4);

--
-- Checking relations between tables.
-------------------------------------
--
-- List user subscription type.
--
SELECT user.iduse, user.name AS 'name',
IF (subscript.dStart IS NULL, 'free', 'premium') AS 'subscript'
FROM user
LEFT JOIN subscript ON user.iduse = subscript.idsubuse;
--
-- List user subscription along with payment method.
--
SELECT user.name AS 'name',
IF (subscript.dStart IS NULL, 'free', 'premium') AS 'subscript',
IF (cc.idccsub IS NOT NULL, 'credit card',
IF (subscript.dStart IS NULL, 'none', 'PayPal')) AS 'payment'
FROM user
LEFT JOIN subscript ON user.iduse = subscript.idsubuse
LEFT JOIN cc        ON subscript.idsub = cc.idccsub;
--
-- List a total for user payments.
SELECT user.name AS 'name',
IF (SUM(payment.amount) IS NOT NULL, SUM(payment.amount), 0) AS 'total'
FROM user
LEFT JOIN subscript ON user.iduse = subscript.idsubuse
LEFT JOIN payment   ON subscript.idsub = payment.idpaysub
GROUP BY user.name;
--
-- List all playlists including deleted and shared ones.
SELECT DISTINCT user.name AS 'name',
playlist.title AS 'playlist',
IF (playlist.n IS NULL, 0, playlist.n) AS 'songs',
IF (deleted.dDelete IS NULL, 'no', deleted.dDelete) AS 'deleted',
IF (shared.idshapla IS NULL, 'no', 'yes') AS 'shared'
FROM user
LEFT JOIN playlist ON user.iduse = playlist.idplause
LEFT JOIN deleted  ON playlist.idpla = deleted.iddelpla
LEFT JOIN shared   ON playlist.idpla = shared.idshapla;
--
-- List all private playlists along with its songs.
SELECT user.name AS 'name',
playlist.title AS 'playlist',
song.title AS 'song'
FROM user
JOIN playlist ON user.iduse = playlist.idplause
JOIN song     ON playlist.idpla = song.idsonpla;
--
-- List all shared playlists along with its songs.
SELECT user.name AS 'name',
playlist.title AS 'playlist',
IF (shared.idshapla IS NULL, 'no', 'yes') AS 'shared',
song.title AS 'song'
FROM collect
JOIN song     ON collect.idcolson = song.idson
JOIN shared   ON collect.idcolsha = shared.idsha
JOIN playlist ON shared.idshapla = playlist.idpla
JOIN user     ON playlist.idplause = user.iduse;
--
-- List all artist along with theyr publised albums and its songs.
SELECT artist.name AS 'artist',
album.year AS 'year',
album.cover AS 'cover',
song.title AS 'song',
song.tLength AS 'length'
FROM artist
LEFT JOIN album ON artist.idart = album.idalbart
LEFT JOIN song  ON album.idalb = song.idsonalb;
--
-- List an artist's followers.
SELECT artist.name AS 'artist',
user.name AS 'followed by'
FROM artist
JOIN follow ON artist.idart = follow.idfolart
JOIN user   ON follow.idfoluse = user.iduse;
--
-- List an artist's relationships.
SELECT DISTINCT creator.name AS 'artist',
relation.name AS 'relates to'
FROM (artist creator, artist relation)
JOIN relate ON (creator.idart = relate.idrelart1)
WHERE creator.name = 'vivaldi' AND relation.name <> 'vivaldi';
--
-- List a user's favorite albums.
SELECT user.name AS 'user',
album.year AS 'year',
album.cover AS 'cover'
FROM user
JOIN fAlbum ON user.iduse = fAlbum.idfaluse
JOIN album ON fAlbum.idfalalb = album.idalb;
--
-- List a user's favorite songs.
SELECT user.name AS 'user',
song.title AS 'title'
FROM user
JOIN fSong ON user.iduse = fSong.idfsouse
JOIN song ON fSong.idfsoson = song.idson;

