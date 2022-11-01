/*
 * Sprint 2 Topic 2 (Estructure) Level 3 Exercise (spotify)
 *
 * Spotify
 *
 */

db = connect('mongodb://localhost/spotify' );

// db = connect('mongodb://localhost/pizzeria', 'ita', 'ita');

// db.auth ('ita', 'ita');

db.user.drop ();
db.subscript.drop ();
db.cc.drop ();
db.paypal.drop ();
db.payment.drop ();
db.playlist.drop ();
db.deleted.drop ();
db.shared.drop ();
db.artist.drop ();
db.album.drop ();
db.song.drop ();
db.collect.drop ();
db.follow.drop ();
db.relate.drop ();
db.fAlbum.drop ();
db.fSong.drop ();

// First user

oidUse1 = ObjectId ();
db.user.insertOne ({
  _id       : oidUse1,
  email     : 'usr1@srv.com',
  passwd    : 'xxx',
  name      : 'John',
  country   : 'US',
  zipCode   : '02333',
  dBirth    : '1990-01-01',
  gender    : 'male'
});

// Second user

oidUse2 = ObjectId ();
db.user.insertOne ({
  _id       : oidUse2,
  email     : 'usr2@srv.com',
  passwd    : 'xxx',
  name      : 'Mary',
  country   : 'Canada',
  zipCode   : 'x1333',
  dBirth    : '1980-07-07',
  gender    : 'female'
});

// Third user

oidUse3 = ObjectId ();
db.user.insertOne ({
  _id       : oidUse3,
  email     : 'usr3@srv.com',
  passwd    : 'xxx',
  name      : 'Robert',
  country   : 'US',
  zipCode   : '80555',
  dBirth    : '1991-02-02',
  gender    : 'male'
});

// Fourth user

oidUse4 = ObjectId ();
db.user.insertOne ({
  _id       : oidUse4,
  email     : 'usr4@srv.com',
  passwd    : 'xxx',
  name      : 'Ana',
  country   : 'Mexico',
  zipCode   : 'ME154',
  dBirth    : '2000-09-29',
  gender    : 'female'
});

// Fifth user

oidUse5 = ObjectId ();
db.user.insertOne ({
  _id       : oidUse5,
  email     : 'usr5@srv.com',
  passwd    : 'xxx',
  name      : 'Mike',
  country   : 'US',
  zipCode   : '90656',
  dBirth    : '1999-08-08',
  gender    : 'male'
});

// Subscript

oidSub1 = ObjectId ();
db.subscript.insertOne ({
  _id      : oidSub1,
  idsubuse : oidUse1,
  dStart   : '2022-01-01',
  dRenew   : 'null'
});

oidSub2 = ObjectId ();
db.subscript.insertOne ({
  _id      : oidSub2,
  idsubuse : oidUse2,
  dStart   : '2021-01-01',
  dRenew   : '2022-01-01'
});

oidSub3 = ObjectId ();
db.subscript.insertOne ({
  _id      : oidSub3,
  idsubuse : oidUse5,
  dStart   : '2019-06-06',
  dRenew   : '2022-06-06'
});

// cc

db.cc.insertOne ({
  idccsub : oidSub1,
  ccN     : '3323 4434 5545 6656',
  month   : 1,
  year    : 30,
  CVV     : '663',
});

db.cc.insertOne ({
  idccsub : oidSub3,
  ccN     : '2213 3323 8878 9989',
  month   : 3,
  year    : 25,
  CVV     : '114',
});

// paypal

db.paypal.insertOne ({
  idppsub : oidSub2, 
  ppUser: 'Mary'
});

// payment

db.payment.insertOne ({
  idpaysub : oidSub1,
  dPay    : '2022-01-01',
  amount  : 10.00
});

db.payment.insertOne ({
  idpaysub : oidSub2,
  dPay   : '2021-01-01',
  amount : 10.00
});

db.payment.insertOne ({
  idpaysub : oidSub2,
  dPay   : '2022-01-01',
  amount : 10.00
});

db.payment.insertOne ({
  idpaysub : oidSub3,
  dPay   : '2019-06-06',
  amount : 10.00,
});

db.payment.insertOne ({
  idpaysub : oidSub3,
  dPay   : '2020-06-06',
  amount : 10.00,
});

db.payment.insertOne ({
  idpaysub : oidSub3,
  dPay   : '2021-06-06',
  amount : 10.00,
});

db.payment.insertOne ({
  idpaysub : oidSub3,
  dPay   : '2022-06-06',
  amount : 10.00,
});

// playlist

oidPla1 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla1,
  idplause : oidUse1, 
  n        : 3,
  title    : 'Pop',
  dCreate  : '2022-02-02'
});

oidPla2 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla2,
  idplause : oidUse2, 
  n        : 4,
  title    : 'Classic',
  dCreate  : '2021-02-02'
});

oidPla3 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla3,
  idplause : oidUse3, 
  n        : 2,
  title    : 'Rock',
  dCreate  : '2022-03-03'
});

oidPla4 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla4,
  idplause : oidUse5, 
  n        : 2,
  title    : 'Folk',
  dCreate  : '2022-06-06'
});

oidPla5 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla5,
  idplause : oidUse1, 
  n        : 2,
  title    : 'Folk',
  dCreate  : '2022-06-06'
});

oidPla6 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla6,
  idplause : oidUse5, 
  n        : 0,
  title    : 'Rock',
  dCreate  : '2022-06-06'
});

// deleted

db.deleted.insertOne ({
  iddelpla : oidPla5,
  dDelete : '2022-06-07'
});

db.deleted.insertOne ({
  iddelpla : oidPla6,
  dDelete : '2022-06-08'
});

// shared

oidSha1 = ObjectId ();
db.shared.insertOne ({
  _id      : oidSha1,
  idshapla : oidPla2,
});

oidSha2 = ObjectId ();
db.shared.insertOne ({
  _id      : oidSha2,
  idshapla : oidPla3,
});

// First artist

oidArt1 = ObjectId ();
db.artist.insertOne ({
  _id     : oidArt1,
  name    : 'Vivaldi',
  picture : 'vivaldi.jpg'
});

// Second artist

oidArt2 = ObjectId ();
db.artist.insertOne ({
  _id     : oidArt2,
  name    : 'Mozart',
  picture : 'mozart.jpg'
});

// Third artist

oidArt3 = ObjectId ();
db.artist.insertOne ({
  _id     : oidArt3,
  name    : 'Beethoven',
  picture : 'beethoven.jpg'
});

// Album

oidAlb1 = ObjectId ();
db.album.insertOne ({
  _id      : oidAlb1,
  idalbart : oidArt1,
  year     :  '1615',
  cover    : 'spring.jpg'
});

oidAlb2 = ObjectId ();
db.album.insertOne ({
  _id      : oidAlb2,
  idalbart : oidArt2,
  year     :  '1711',
  cover    : 'moonlight.jpg'
});

oidAlb3 = ObjectId ();
db.album.insertOne ({
  _id      : oidAlb3,
  idalbart : oidArt3,
  year     :  '1816',
  cover    : 'friendship.jpg'
});

oidAlb4 = ObjectId ();
db.album.insertOne ({
  _id      : oidAlb4,
  idalbart : oidArt1,
  year:  '1616',
  cover: 'winter.jpg'
});

// song

oidSon1 = ObjectId ();
db.song.insertOne ({
  _id      : oidSon1,
  idsonpla : oidPla1,
  idsonalb : oidAlb1,
  n        : 5,
  title    : 'Singing in the rain',
  tLength  : '5:20'
});

oidSon2 = ObjectId ();
db.song.insertOne ({
  _id      : oidSon2,
  idsonpla : oidPla1,
  idsonalb : oidAlb2,
  n       : 10,
  title   : 'Moonlight shadow',
  tLength : '3:20'
});

oidSon3 = ObjectId ();
db.song.insertOne ({
  _id      : oidSon3,
  idsonpla : oidPla1,
  idsonalb : oidAlb2,
  n        : 500,
  title    : 'Modern dance',
  tLength  : '10:20'
});

oidSon4 = ObjectId ();
db.song.insertOne ({
  _id      : oidSon4,
  idsonpla : oidPla4,
  idsonalb : oidAlb3,
  n        : 15,
  title    : 'Sunshine',
  tLength  : '4:20'
});

oidSon5 = ObjectId ();
db.song.insertOne ({
  _id      : oidSon5,
  idsonpla : oidPla4,
  idsonalb : oidAlb4,
  n        : 9,
  title    : 'Superstar',
  tLength  : '4:20'
});

oidSon6 = ObjectId ();
db.song.insertOne ({
  _id      : oidSon6,
  idsonpla : oidPla5,
  idsonalb : oidAlb4,
  n        : 2,
  title    : 'Salsa',
  tLength  : '4:20'
});

oidSon7 = ObjectId ();
db.song.insertOne ({
  _id      : oidSon7,
  idsonpla : oidPla5,
  idsonalb : oidAlb4,
  n        : 2,
  title    : 'Mambo',
  tLength  : '4:20'
});

// collect

db.collect.insertOne ({
  idcolsha : oidSha1,
  idcolson : oidSon1,
  idcoluse : oidUse1,
  dCollect : '2022-01-03'
});

db.collect.insertOne ({
  idcolsha : oidSha2,
  idcolson : oidSon6,
  idcoluse : oidUse5,
  dCollect : '2022-06-08'
});

db.collect.insertOne ({
  idcolsha : oidSha1,
  idcolson : oidSon2,
  idcoluse : oidUse4,
  dCollect : '2022-06-09'
});

db.collect.insertOne ({
  idcolsha : oidSha2,
  idcolson : oidSon3,
  idcoluse : oidUse5,
  dCollect : '2022-06-10'
});

db.collect.insertOne ({
  idcolsha : oidSha1,
  idcolson : oidSon4,
  idcoluse : oidUse1,
  dCollect : '2022-06-10'
});

db.collect.insertOne ({
  idcolsha : oidSha1,
  idcolson : oidSon5,
  idcoluse : oidUse4,
  dCollect : '2022-06-08'
});

// follow

db.follow.insertOne ({
  idfoluse : oidUse1,
  idfolart : oidArt1,
});

db.follow.insertOne ({
  idfoluse : oidUse3,
  idfolart : oidArt2,
});

db.follow.insertOne ({
  idfoluse : oidUse4,
  idfolart : oidArt1,
});

db.follow.insertOne ({
  idfoluse : oidUse2,
  idfolart : oidArt2,
});

db.follow.insertOne ({
  idfoluse : oidUse5,
  idfolart : oidArt3,
});

// relate

db.relate.insertOne ({
  idrelart1 : oidArt1,
  idrelart2 : oidArt2
});

db.relate.insertOne ({
  idrelart1 : oidArt2,
  idrelart2 : oidArt3
});

db.relate.insertOne ({
  idrelart1 : oidArt3,
  idrelart2 : oidArt1
});

db.relate.insertOne ({
  idrelart1 : oidArt1,
  idrelart2 : oidArt3
});

// fAlbum

db.fAlbum.insertOne ({
  idfalalb: oidAlb1,
  idfaluse: oidUse1
});

db.fAlbum.insertOne ({
  idfalalb: oidAlb2,
  idfaluse: oidUse1
});

db.fAlbum.insertOne ({
  idfalalb: oidAlb3,
  idfaluse: oidUse5
});

db.fAlbum.insertOne ({
  idfalalb: oidAlb4,
  idfaluse: oidUse4
});

db.fAlbum.insertOne ({
  idfalalb: oidAlb2,
  idfaluse: oidUse2
});

db.fAlbum.insertOne ({
  idfalalb: oidAlb1,
  idfaluse: oidUse3
});

db.fAlbum.insertOne ({
  idfalalb: oidAlb3,
  idfaluse: oidUse3
});

// fSong

db.fSong.insertOne ({
  idfsoson: oidSon7,
  idfsouse: oidUse5
});

db.fSong.insertOne ({
  idfsoson: oidSon1,
  idfsouse: oidUse2
});

db.fSong.insertOne ({
  idfsoson: oidSon2,
  idfsouse: oidUse1
});

db.fSong.insertOne ({
  idfsoson: oidSon6,
  idfsouse: oidUse1
});

db.fSong.insertOne ({
  idfsoson: oidSon3,
  idfsouse: oidUse3
});

db.fSong.insertOne ({
  idfsoson: oidSon3,
  idfsouse: oidUse4
});

