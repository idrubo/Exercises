/*
 * Sprint 2 Topic 2 (Estructure) Level 2 Exercise (youtube)
 *
 * Youtube
 *
 * Notes:
 *
 * Complete and check the database !!!!
 *
 */

db = connect('mongodb://localhost/youtube' );
db.auth ('ita', 'ita');

db.user.drop ();
db.video.drop ();
db.label.drop ();
db.channel.drop ();
db.chHold.drop ();
db.subscribe.drop ();
db.playlist.drop ();
db.pHold.drop ();
db.feelv.drop ();
db.comment.drop ();
db.writec.drop ();
db.feelc.drop ();

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

// Videos

oidVid1 = ObjectId ();
db.video.insertOne ({
  _id      : oidVid1,
  idviduse : oidUse1,
  title    : 'Star Wars',
  name     : 'SW.jpg',
  descript : 'sciFy',
  size     : 100000,
  length   : '1:30:00',
  thumb    : 'swt.jpg',
  dPublish : '2020-01-01',
  nViews   : 100,
  state    : 'public'
});

oidVid2 = ObjectId ();
db.video.insertOne ({
  _id      : oidVid2,
  idviduse : oidUse1,
  title    : 'Science',
  name     : 'science.jpg',
  descript : 'science',
  size     : 100000,
  length   : '1:00:00',
  thumb    : 'sci.jpg',
  dPublish : '2019-02-02',
  nViews   : 101,
  state    : 'hidden'
});

oidVid3 = ObjectId ();
db.video.insertOne ({
  _id      : oidVid3,
  idviduse : oidUse2,
  title    : 'Nature',
  name     : 'nature.jpg',
  descript : 'nature',
  size     : 100000,
  length   : '0:30:00',
  thumb    : 'nat.jpg',
  dPublish : '2021-03-03',
  nViews   : 102,
  state    : 'private'
});

oidVid4 = ObjectId ();
db.video.insertOne ({
  _id      : oidVid4,
  idviduse : oidUse2,
  title    : 'Dancing',
  name     : 'dance.jpg',
  descript : 'dancing',
  size     : 100000,
  length   : '0:15:00',
  thumb    : 'dan.jpg',
  dPublish : '2018-05-15',
  nViews   : 103,
  state    : 'public'
});

oidVid5 = ObjectId ();
db.video.insertOne ({
  _id      : oidVid5,
  idviduse : oidUse3,
  title    : 'Hobby',
  name     : 'metal.jpg',
  descript : 'solder',
  size     : 100000,
  length   : '0:45:00',
  thumb    : 'sol.jpg',
  dPublish : '2022-07-07',
  nViews   : 104,
  state    : 'hidden'
});

oidVid6 = ObjectId ();
db.video.insertOne ({
  _id      : oidVid6,
  idviduse : oidUse4,
  title    : 'Star Trek',
  name     : 'ST.jpg',
  descript : 'space',
  size     : 100000,
  length   : '2:10:00',
  thumb    : 'spc.jpg',
  dPublish : '2020-02-03',
  nViews   : 104,
  state    : 'private'
});

// Labels

db.label.insertOne ({
  idlabvid: oidVid1,
  name    : 'Star Wars',
});

db.label.insertOne ({
  idlabvid: oidVid1,
  name    : 'movie',
});

db.label.insertOne ({
  idlabvid: oidVid1,
  name    : 'Action'
});

db.label.insertOne ({
  idlabvid: oidVid2,
  name    : 'Documentary'
});

db.label.insertOne ({
  idlabvid: oidVid3,
  name    : 'Documentary',
});

db.label.insertOne ({
  idlabvid: oidVid4,
  name    : 'Entertainment'
});

db.label.insertOne ({
  idlabvid: oidVid5,
  name    : 'Crafts',
});

db.label.insertOne ({
  idlabvid: oidVid5,
  name    : 'Movie',
});

// Channels

oidCha1 = ObjectId ();
db.channel.insertOne ({
  _id      : oidCha1,
  idchause : oidUse1,
  name     : 'sciFy',
  descript : 'scify channel',
  dCreat   : '2020-01-01'
});

oidCha2 = ObjectId ();
db.channel.insertOne ({
  _id      : oidCha2,
  idchause : oidUse2,
  name     : 'science',
  descript : 'science docs',
  dCreat   : '2019-02-02'
});

oidCha3 = ObjectId ();
db.channel.insertOne ({
  _id      : oidCha3,
  idchause : oidUse3,
  name     : 'nature',
  descript : 'nature docs',
  dCreat   : '2022-03-03'
});

oidCha4 = ObjectId ();
db.channel.insertOne ({
  _id      : oidCha4,
  idchause : oidUse4,
  name     : 'Movies',
  descript : 'Action movies',
  dCreat   : '2018-04-04'
});

// chHold

db.chHold.insertOne ({
  idchhcha : oidCha1,
  idchhvid : oidVid1,
});

db.chHold.insertOne ({
  idchhcha : oidCha1,
  idchhvid : oidVid2,
});

db.chHold.insertOne ({
  idchhcha : oidCha1,
  idchhvid : oidVid6,
});

db.chHold.insertOne ({
  idchhcha : oidCha2,
  idchhvid : oidVid1,
});

db.chHold.insertOne ({
  idchhcha : oidCha2,
  idchhvid : oidVid2,
});

db.chHold.insertOne ({
  idchhcha : oidCha2,
  idchhvid : oidVid6,
});

db.chHold.insertOne ({
  idchhcha : oidCha3,
  idchhvid : oidVid2,
});

db.chHold.insertOne ({
  idchhcha : oidCha3,
  idchhvid : oidVid3,
});

db.chHold.insertOne ({
  idchhcha : oidCha4,
  idchhvid : oidVid1,
});

db.chHold.insertOne ({
  idchhcha : oidCha4,
  idchhvid : oidVid6,
});

// Subscribe

db.subscribe.insertOne ({
  idsubuse: oidUse1, 
  idsubcha: oidCha2
});

db.subscribe.insertOne ({
  idsubuse: oidUse1, 
  idsubcha: oidCha3 
});

db.subscribe.insertOne ({
  idsubuse: oidUse2, 
  idsubcha: oidCha1 
});

db.subscribe.insertOne ({
  idsubuse: oidUse2, 
  idsubcha: oidCha4
});

db.subscribe.insertOne ({
  idsubuse: oidUse4, 
  idsubcha: oidCha1 
});

db.subscribe.insertOne ({
  idsubuse: oidUse5, 
  idsubcha: oidCha1 
});

db.subscribe.insertOne ({
  idsubuse: oidUse5, 
  idsubcha: oidCha2
});

db.subscribe.insertOne ({
  idsubuse: oidUse5, 
  idsubcha: oidCha4 
});

// Playlist

oidPla1 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla1, 
  idplause : oidUse1,
  name     : 'Space',
  dCreate  : '2020-06-05',
  status   : 'public'
});

oidPla2 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla2,
  idplause : oidUse1,
  name     : 'Fun',
  dCreate  : '2019-04-04',
  status   : 'public'
});

oidPla3 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla3,
  idplause : oidUse3,
  name     : 'Work',
  dCreate  : '2018-01-01',
  status   : 'private'
});

oidPla4 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla4,
  idplause : oidUse4,
  name     : 'Study',
  dCreate  : '2021-05-06',
  status   : 'private'
});

oidPla5 = ObjectId ();
db.playlist.insertOne ({
  _id      : oidPla5,
  idplause : oidUse5,
  name     : 'Movies and Docs',
  dCreate  : '2022-12-27',
  status   : 'public'
});

// pHold

db.pHold.insertOne ({
  idholpla: oidPla1,
  idholvid: oidVid2
});

db.pHold.insertOne ({
  idholpla: oidPla1,
  idholvid: oidVid1
});

db.pHold.insertOne ({
  idholpla: oidPla1,
  idholvid: oidVid3
});

db.pHold.insertOne ({
  idholpla: oidPla2,
  idholvid: oidVid1
});

db.pHold.insertOne ({
  idholpla: oidPla2,
  idholvid: oidVid5
});

db.pHold.insertOne ({
  idholpla: oidPla3,
  idholvid: oidVid4
});

db.pHold.insertOne ({
  idholpla: oidPla4,
  idholvid: oidVid6
});

db.pHold.insertOne ({
  idholpla: oidPla5,
  idholvid: oidVid1
});

db.pHold.insertOne ({
  idholpla: oidPla5,
  idholvid: oidVid2
});

db.pHold.insertOne ({
  idholpla: oidPla5,
  idholvid: oidVid4
});

// FeelV

db.feelv.insertOne ({
  idfevuse : oidUse1,
  idfevvid : oidVid1,
  dFeel    : '2020-01-01',
  feel     : 'like'
});

db.feelv.insertOne ({
  idfevuse : oidUse1,
  idfevvid : oidVid5,
  dFeel    : '2020-01-01',
  feel     : 'like'
});

db.feelv.insertOne ({
  idfevuse : oidUse2,
  idfevvid : oidVid4,
  dFeel    : '2020-02-01',
  feel     : 'like'
});

db.feelv.insertOne ({
  idfevuse : oidUse3,
  idfevvid : oidVid2,
  dFeel : '2020-02-02',
  feel  : 'dislike'
});

db.feelv.insertOne ({
  idfevuse : oidUse4,
  idfevvid : oidVid1,
  dFeel    : '2020-05-03',
  feel     : 'like'
});

db.feelv.insertOne ({
  idfevuse : oidUse4,
  idfevvid : oidVid2,
  dFeel    : '2020-05-03',
  feel     : 'like'
});

db.feelv.insertOne ({
  idfevuse : oidUse4,
  idfevvid : oidVid3,
  dFeel    : '2020-02-04',
  feel     : 'like'
});

db.feelv.insertOne ({
  idfevuse : oidUse5,
  idfevvid : oidVid6,
  dFeel : '2020-02-05',
  feel  : 'dislike'
});

db.feelv.insertOne ({
  idfevuse : oidUse5,
  idfevvid : oidVid1,
  dFeel : '2020-02-06',
  feel  : 'like'
});

// Comment

oidCom1 = ObjectId ();
db.comment.insertOne ({
  _id      : oidCom1,
  idcomvid : oidVid1, 
  text     : 'This is a comment',
  dCom     : '2022-01-01'
});

oidCom2 = ObjectId ();
db.comment.insertOne ({
  _id      : oidCom2,
  idcomvid : oidVid1, 
  text     : 'This is another comment',
  dCom     : '2022-01-02'
});

oidCom3 = ObjectId ();
db.comment.insertOne ({
  _id      : oidCom3,
  idcomvid : oidVid1, 
  text  : 'Not so nice comment',
  dCom  : '2022-01-03'
});

oidCom4 = ObjectId ();
db.comment.insertOne ({
  _id      : oidCom4,
  idcomvid : oidVid1,
  text     : 'It is so nice now',
  dCom     : '2022-01-04'
});

oidCom5 = ObjectId ();
db.comment.insertOne ({
  _id      : oidCom5,
  idcomvid : oidVid5, 
  text     : 'It is so nice now',
  dCom     : '2022-02-01'
});

oidCom6 = ObjectId ();
db.comment.insertOne ({
  _id      : oidCom6,
  idcomvid : oidVid1, 
  text  : 'Ugly comment',
  dCom  : '2022-02-02'
});

// Writec

db.writec.insertOne ({
  idwriuse : oidUse1,
  idwricom : oidCom1
});

db.writec.insertOne ({
  idwriuse : oidUse2,
  idwricom : oidCom2
});

db.writec.insertOne ({
  idwriuse : oidUse3,
  idwricom : oidCom3
});

db.writec.insertOne ({
  idwriuse : oidUse1,
  idwricom : oidCom4
});

db.writec.insertOne ({
  idwriuse : oidUse2,
  idwricom : oidCom5
});

db.writec.insertOne ({
  idwriuse : oidUse5,
  idwricom : oidCom6
});

// FeelC

db.feelc.insertOne ({
  idfecuse : oidUse1,
  idfeccom : oidCom2,
  dFeel    : '2022-01-01',
  feel     : 'like'
});

db.feelc.insertOne ({
  idfecuse : oidUse2,
  idfeccom : oidCom3,
  dFeel   : '2022-01-02',
  feel    : 'dislike'
});

db.feelc.insertOne ({
  idfecuse : oidUse3,
  idfeccom : oidCom4,
  comment : 'null',
  dFeel   : '2022-01-03',
  feel    : 'like'
});

db.feelc.insertOne ({
  idfecuse : oidUse1,
  idfeccom : oidCom3,
  dFeel    : '2022-01-04',
  feel     : 'like'
});

db.feelc.insertOne ({
  idfecuse : oidUse1,
  idfeccom : oidCom5,
  dFeel    : '2022-01-05',
  feel     : 'like'
});

db.feelc.insertOne ({
  idfecuse : oidUse4,
  idfeccom : oidCom6,
  comment : 'null',
  dFeel   : '2022-01-05',
  feel    : 'dislike'
});

//
// Checking relations between tables.
// -------------------------------------
//
// User can check his published videos along with its labels.

