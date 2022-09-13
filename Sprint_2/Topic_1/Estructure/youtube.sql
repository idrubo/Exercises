--
-- Sprint 2 Topic 1 (estructure) Level 2 Exercise 1
--
-- Youtube.
--

DROP DATABASE IF EXISTS youtube;
CREATE DATABASE youtube CHARACTER SET utf8mb4;
USE youtube;

CREATE TABLE user (
	iduse   INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	email   VARCHAR  (50) NOT NULL,
	passwd  VARCHAR  (50) NOT NULL,
	name    VARCHAR (100) NOT NULL,
	country VARCHAR  (50) NOT NULL,
	zipCode VARCHAR  (10) NOT NULL,
	dBirth  DATE          NOT NULL,
	gender     ENUM ('male', 'female') NOT NULL
);

CREATE TABLE video (
	idvid    INT UNSIGNED   AUTO_INCREMENT PRIMARY KEY,
	idviduse INT UNSIGNED   NOT NULL,
	title    VARCHAR  (100) NOT NULL,
	name     VARCHAR  (100) NOT NULL,
	descript VARCHAR (1024) NOT NULL,
	size     INT UNSIGNED   NOT NULL,
	tLength  TIME           NOT NULL,
	thumb    VARCHAR (1024) NOT NULL,
	dPublish DATE           NOT NULL,
	nViews   INT UNSIGNED   NULL,
	state    ENUM('public', 'hidden', 'private') NOT NULL,

	CONSTRAINT idvid_iduse FOREIGN KEY (idviduse)
	REFERENCES user (iduse)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE label (
	idlab    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idlabvid INT UNSIGNED   NOT NULL,
	name     VARCHAR  (100) NOT NULL,

	CONSTRAINT idlab_idvid FOREIGN KEY (idlabvid)
	REFERENCES video (idvid)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE channel (
	idcha    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idchause INT UNSIGNED   NOT NULL,
	name     VARCHAR  (100) NOT NULL,
	descript VARCHAR (1024) NOT NULL,
	dCreat   DATE           NOT NULL,

	CONSTRAINT idchaUniq UNIQUE (idchause),

	CONSTRAINT idcha_iduse FOREIGN KEY (idchause)
	REFERENCES user (iduse)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE chHold (
	idchhcha INT UNSIGNED   NOT NULL,
	idchhvid INT UNSIGNED   NOT NULL,

	CONSTRAINT idchh_idcha FOREIGN KEY (idchhcha)
	REFERENCES channel (idcha)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	CONSTRAINT idchh_idvid FOREIGN KEY (idchhvid)
	REFERENCES video (idvid)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	PRIMARY KEY (idchhcha, idchhvid)
);

CREATE TABLE subscribe (
	idsubuse INT UNSIGNED   NOT NULL,
	idsubcha INT UNSIGNED   NOT NULL,

	CONSTRAINT idsub_iduse FOREIGN KEY (idsubuse)
	REFERENCES user (iduse)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	CONSTRAINT idsub_idcha FOREIGN KEY (idsubcha)
	REFERENCES channel (idcha)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	PRIMARY KEY (idsubuse, idsubcha)
);

CREATE TABLE playlist (
	idpla    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idplause INT UNSIGNED   NOT NULL,
	name     VARCHAR  (100) NOT NULL,
	dCreat   DATE           NOT NULL,
	status   ENUM('public', 'private') NOT NULL,

	CONSTRAINT idpla_iduse FOREIGN KEY (idplause)
	REFERENCES user (iduse)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE pHold (
	idholpla INT UNSIGNED   NOT NULL,
	idholvid INT UNSIGNED   NOT NULL,

	CONSTRAINT idhol_idpla FOREIGN KEY (idholpla)
	REFERENCES playlist (idpla)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	CONSTRAINT idhol_idvid FOREIGN KEY (idholvid)
	REFERENCES video (idvid)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	PRIMARY KEY (idholpla, idholvid)
);

CREATE TABLE feelV (
	idfevuse INT UNSIGNED   NOT NULL,
	idfevvid INT UNSIGNED   NOT NULL,
	dFeel    DATE           NOT NULL,
	feel     ENUM ('like', 'dislike') NULL,

	CONSTRAINT idfev_iduse FOREIGN KEY (idfevuse)
	REFERENCES user (iduse)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	CONSTRAINT idfev_idvid FOREIGN KEY (idfevvid)
	REFERENCES video (idvid)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	PRIMARY KEY (idfevuse, idfevvid)
);

CREATE TABLE comment (
	idcom    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idcomvid INT UNSIGNED   NOT NULL,
	text     VARCHAR (1024) NOT NULL,
	dCom     DATE           NOT NULL,

	CONSTRAINT idcom_idvid FOREIGN KEY (idcomvid)
	REFERENCES video (idvid)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE writec (
	idwri    INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	idwriuse INT UNSIGNED   NOT NULL,
	idwricom INT UNSIGNED   NOT NULL,

	CONSTRAINT idwri_iduse FOREIGN KEY (idwriuse)
	REFERENCES user (iduse)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	CONSTRAINT idwri_idcom FOREIGN KEY (idwricom)
	REFERENCES comment (idcom)
	ON DELETE CASCADE
	ON UPDATE CASCADE
);

CREATE TABLE feelC (
	idfecuse INT UNSIGNED   NOT NULL,
	idfeccom INT UNSIGNED   NOT NULL,
	dFeel    DATE           NOT NULL,
	feel     ENUM ('like', 'dislike') NOT NULL,

	CONSTRAINT idfec_iduse FOREIGN KEY (idfecuse)
	REFERENCES user (iduse)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	CONSTRAINT idfec_idcom FOREIGN KEY (idfeccom)
	REFERENCES comment (idcom)
	ON DELETE CASCADE
	ON UPDATE CASCADE,

	PRIMARY KEY (idfecuse, idfeccom)
);

--	                   iduse email            passwd name      country   zipCode  dBirth        gender
INSERT INTO user VALUES (1,  'usr1@srv.com', 'xxx',  'John',   'US',     '02333', '1990-01-01', 'male');
INSERT INTO user VALUES (2,  'usr2@srv.com', 'xxx',  'Mary',   'Canada', 'x1333', '1980-07-07', 'female');
INSERT INTO user VALUES (3,  'usr3@srv.com', 'xxx',  'Robert', 'US',     '80555', '1991-02-02', 'male');
INSERT INTO user VALUES (4,  'usr4@srv.com', 'xxx',  'Ana',    'Mexico', 'ME154', '2000-09-29', 'female');
INSERT INTO user VALUES (5,  'usr5@srv.com', 'xxx',  'Mike',   'US',     '90656', '1999-08-08', 'male');

--	                    idvid idviduse title        name           descript   size    length     thumb      dPublish      nViews state
INSERT INTO video VALUES (1,     1,    'Star Wars', 'SW.jpg',      'sciFy',   100000, '1:30:00', 'swt.jpg', '2020-01-01', 100,   'public');
INSERT INTO video VALUES (2,     1,    'Science',   'science.jpg', 'science', 100000, '1:00:00', 'sci.jpg', '2019-02-02', 101,   'hidden');
INSERT INTO video VALUES (3,     2,    'Nature',    'nature.jpg',  'nature',  100000, '0:30:00', 'nat.jpg', '2021-03-03', 102,   'private');
INSERT INTO video VALUES (4,     2,    'Dancing',   'dance.jpg',   'dancing', 100000, '0:15:00', 'dan.jpg', '2018-05-15', 103,   'public');
INSERT INTO video VALUES (5,     3,    'Hobby',     'metal.jpg',   'solder',  100000, '0:45:00', 'sol.jpg', '2022-07-07', 104,   'hidden');
INSERT INTO video VALUES (6,     4,    'Star Trek', 'ST.jpg',      'space',   100000, '2:10:00', 'spc.jpg', '2020-02-03', 104,   'private');

--	                    idlab idlabvid name
INSERT INTO label VALUES (1,     1,    'Star Wars');
INSERT INTO label VALUES (2,     1,    'Movie');
INSERT INTO label VALUES (3,     1,    'Action');
INSERT INTO label VALUES (4,     2,    'Documentary');
INSERT INTO label VALUES (5,     3,    'Documentary');
INSERT INTO label VALUES (6,     4,    'Entertainment');
INSERT INTO label VALUES (7,     5,    'Crafts');
INSERT INTO label VALUES (8,     5,    'Movie');

--	                      idcha idchause name       descript         dCreat
INSERT INTO channel VALUES (1,     1,    'sciFy',   'scify channel', '2020-01-01');
INSERT INTO channel VALUES (2,     2,    'science', 'science docs',  '2019-02-02');
INSERT INTO channel VALUES (3,     3,    'nature',  'nature docs',   '2022-03-03');
INSERT INTO channel VALUES (4,     4,    'Movies',  'Action movies', '2018-04-04');

--                     idchhcha	idchhvid
INSERT INTO chHold VALUES (1,     1);
INSERT INTO chHold VALUES (1,     2);
INSERT INTO chHold VALUES (1,     6);

INSERT INTO chHold VALUES (2,     1);
INSERT INTO chHold VALUES (2,     2);
INSERT INTO chHold VALUES (2,     6);

INSERT INTO chHold VALUES (3,     2);
INSERT INTO chHold VALUES (3,     3);

INSERT INTO chHold VALUES (4,     1);
INSERT INTO chHold VALUES (4,     6);

--	                       idsubuse idsubcha
INSERT INTO subscribe VALUES (1,       2);
INSERT INTO subscribe VALUES (1,       3);
INSERT INTO subscribe VALUES (2,       1);
INSERT INTO subscribe VALUES (2,       4);
INSERT INTO subscribe VALUES (4,       1);
INSERT INTO subscribe VALUES (5,       1);
INSERT INTO subscribe VALUES (5,       2);
INSERT INTO subscribe VALUES (5,       4);

--	                       idpla	idplause name               dCreat        status
INSERT INTO playlist VALUES (1,      1,    'Space',           '2020-06-05', 'public');
INSERT INTO playlist VALUES (2,      1,    'Fun',             '2019-04-04', 'public');
INSERT INTO playlist VALUES (3,      3,    'Work',            '2018-01-01', 'private');
INSERT INTO playlist VALUES (4,      4,    'Study',           '2021-05-06', 'private');
INSERT INTO playlist VALUES (5,      5,    'Movies and Docs', '2022-12-27', 'public');

--	                  idholpla idholvid
INSERT INTO pHold VALUES (1,       2);
INSERT INTO pHold VALUES (1,       1);
INSERT INTO pHold VALUES (1,       3);
INSERT INTO pHold VALUES (2,       1);
INSERT INTO pHold VALUES (2,       5);
INSERT INTO pHold VALUES (3,       4);
INSERT INTO pHold VALUES (4,       6);
INSERT INTO pHold VALUES (5,       1);
INSERT INTO pHold VALUES (5,       2);
INSERT INTO pHold VALUES (5,       4);

--	                   idfevuse idfevvid	dFeel	        feel
INSERT INTO feelV VALUES (1,       1,     '2020-01-01', 'like');
INSERT INTO feelV VALUES (1,       5,     '2020-01-01', 'like');
INSERT INTO feelV VALUES (2,       4,     '2020-02-01', 'like');
INSERT INTO feelV VALUES (3,       2,     '2020-02-02', 'dislike');
INSERT INTO feelV VALUES (4,       1,     '2020-02-03', 'like');
INSERT INTO feelV VALUES (4,       2,     '2020-05-03', 'like');
INSERT INTO feelV VALUES (4,       3,     '2020-02-04', 'like');
INSERT INTO feelV VALUES (5,       6,     '2020-02-05', 'dislike');
INSERT INTO feelV VALUES (5,       1,     '2020-02-06', 'like');

-- 	                      idcom idcomvid text                       dCom
INSERT INTO comment VALUES (1,     1,    'This is a comment',       '2022-01-01');
INSERT INTO comment VALUES (2,     1,    'This is another comment', '2022-01-02');
INSERT INTO comment VALUES (3,     1,    'Not so nice comment',     '2022-01-03');
INSERT INTO comment VALUES (4,     1,    'It is so nice now',       '2022-01-04');
INSERT INTO comment VALUES (5,     5,    'It is so nice now',       '2022-02-01');
INSERT INTO comment VALUES (6,     5,    'Ugly comment',            '2022-02-02');

-- 	                      idwri idwriuse idwricom
INSERT INTO writec VALUES (1,      1,       1);
INSERT INTO writec VALUES (2,      2,       2);
INSERT INTO writec VALUES (3,      3,       3);
INSERT INTO writec VALUES (4,      1,       4);
INSERT INTO writec VALUES (5,      2,       5);
INSERT INTO writec VALUES (6,      5,       6);

-- 	                   idfecuse idfeccom dFeel         feel
INSERT INTO feelC VALUES (1,       2,    '2022-01-01', 'like');
INSERT INTO feelC VALUES (2,       3,    '2022-01-02', 'dislike');
INSERT INTO feelC VALUES (3,       4,    '2022-01-03', 'like');
INSERT INTO feelC VALUES (1,       3,    '2022-01-04', 'like');
INSERT INTO feelC VALUES (1,       5,    '2022-01-05', 'like');
INSERT INTO feelC VALUES (4,       6,    '2022-01-05', 'dislike');

-- Checking unique and compound keys.
--------------------------------------
--
-- 1.- User can have an only channel:
--
--	                         idcha idchause name        descript           dCreat
-- INSERT INTO channel VALUES (1,     1,    'another',  'another channel', '2020-01-01');
-- The "INSERT" fails.
--
-- 2.- User can add a video to his channel only once:
--
-- User add a video that already is present on his channel:
-- INSERT INTO channel VALUES (1,     1,    'sciFy',   'scify channel', '2020-01-01');
-- INSERT INTO chHold (1,     1);
--               idholcha idholvid
-- INSERT INTO chHold VALUES (1,     1);
-- The "INSERT" fails.
--
--
-- 3.- User can subscribe to as many channels as he wishes:
--
-- User already subscribeb to two channels can subscribe to a third one:
-- INSERT INTO subscribe VALUES (1,       2);
-- INSERT INTO subscribe VALUES (1,       3);
--	                       idsubuse idsubcha
INSERT INTO subscribe VALUES (1,       4);
-- The "INSERT" succeeds.
--
-- 4.- User can list as many videos as he wishes on his playlists:
--
-- User with three videos already listed on his playlist can add another one to it:
-- INSERT INTO pHold VALUES (1,       2);
-- INSERT INTO pHold VALUES (1,       1);
-- INSERT INTO pHold VALUES (1,       3);
--                    idholpla idholvid
INSERT INTO pHold VALUES (1,       4);
-- The "INSERT" succeeds.
--
-- 5.- User can only send a single "like" to a video:
--
-- User who sent a "like" to the video #1 can NOT send another one to it:
-- INSERT INTO feelV VALUES (1,       1,     '2020-01-01', 'like');
--	                   idfevuse idfevvid	dFeel	        feel
-- INSERT INTO feelV VALUES (1,       1,     '2020-01-01', 'like');
-- The "INSERT" fails.
--
-- 6.- User can send as many comments to a video as he wishes:
--
-- User with a comment sent to video #1 can send anothe one to it:
-- INSERT INTO comment VALUES (1,     1,    'This is a comment',       '2022-01-01');
-- INSERT INTO writec VALUES (1,      1,       1);
-- User with a comment sent to video #1 can send anothe one to it:
-- 	                      idcom idcomvid text                       dCom
INSERT INTO comment VALUES (7,     1,    'Second comment',       '2022-01-01');
-- 	                      idwri idwriuse idwricom
INSERT INTO writec VALUES (7,      1,       7);
-- Both "INSERT" succeed.
--
-- 7.- User can only send a single "like" to a comment:
--
-- User who sent a "like" to the comment #2 can NOT send another one to it:
-- INSERT INTO feelC VALUES (1,       2,    '2022-01-01', 'like');
-- 	                   idfecuse idfeccom dFeel         feel
-- INSERT INTO feelC VALUES (1,       2,    '2022-01-01', 'like');
-- The "INSERT" fails.
--
-- Checking relations between tables.
-------------------------------------
--
-- User can check his published videos along with its labels.
SELECT user.name AS 'user', video.title AS 'title',
label.name AS 'label'
FROM user
JOIN video ON user.iduse = video.idviduse
JOIN label ON video.idvid = label.idlabvid
WHERE user.name = 'John';

-- List all videos added to Mary's science channel.
SELECT user.name AS 'user', channel.name AS 'channel',
video.title AS 'video'
FROM user
JOIN channel ON user.iduse = channel.idchause
JOIN chHold ON channel.idcha = chHold.idchhcha
JOIN video ON chHold.idchhvid = video.idvid
WHERE user.name = 'Mary';

-- List all comments and likes on videos addded by Robert.
SELECT user.name AS 'user', video.title AS 'video',
comment.text AS 'comment', feelC.feel AS 'feel'
FROM user
JOIN video ON user.iduse = video.idviduse
JOIN comment ON video.idvid = comment.idcomvid
JOIN feelC ON comment.idcom = feelC.idfeccom
WHERE user.name = 'Robert';

-- Count all likes on a video by title.
SELECT COUNT(feelV.idfevvid) AS 'likes' FROM feelV
JOIN video ON feelV.idfevvid = video.idvid
WHERE video.title = 'Star Wars' AND feelV.feel = 'like';

-- Show comments and likes to a video along with the user who send the likes.
SELECT DISTINCT video.title AS 'title',
feelV.feel AS 'feel', user.name AS 'by'
FROM video
JOIN comment ON video.idvid = comment.idcomvid
JOIN feelV ON video.idvid = feelV.idfevvid
JOIN user ON feelV.idfevuse = user.iduse
WHERE video.title = 'Star Wars' AND feelV.feel = 'like';

-- Show comments and likes to a comment along with the user who send the likes.
SELECT video.title AS 'title', comment.text AS 'comment',
feelC.feel AS 'feel', user.name AS 'by'
FROM video
JOIN comment ON video.idvid = comment.idcomvid
JOIN feelC ON comment.idcom = feelC.idfeccom
JOIN user ON feelC.idfecuse = user.iduse
WHERE video.title = 'Star Wars';

-- User can check his subscriptions along with its videos.
SELECT user.name AS 'user', channel.name AS 'channel',
video.title AS 'title'
FROM user
JOIN subscribe ON user.iduse = subscribe.idsubuse
JOIN channel ON subscribe.idsubcha = channel.idcha
JOIN chHold ON channel.idcha = chHold.idchhcha
JOIN video ON chHold.idchhvid = video.idvid
WHERE user.name = 'Mary';

-- User can check his playlists along with its videos.
SELECT user.name AS 'user', playlist.name AS 'playlist',
video.title AS 'title'
FROM user
JOIN playlist ON user.iduse = playlist.idplause
JOIN pHold ON playlist.idpla = pHold.idholpla
JOIN video ON pHold.idholvid = video.idvid
WHERE user.name ='Mike';

