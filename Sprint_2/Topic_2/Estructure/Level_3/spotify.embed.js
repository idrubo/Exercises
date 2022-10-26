/*
 * Sprint 2 Topic 2 (Estructure) Level 3 Exercise (spotify)
 *
 * Spotify
 *
 */

db = connect('mongodb://localhost/spotify' );

db.user.drop ();
db.artist.drop ();

// First user

db.user.insertOne ({
	subscript : 'null',
	playlist  : 'null',
	artist    : 'null',
	fAlbum    : 'null',
	fSong     : 'null',
	email     : 'usr1@srv.com',
	passwd    : 'xxx',
	name      : 'John',
	country   : 'US',
	zipCode   : '02333',
	dBirth    : '1990-01-01',
	sex       : 'male'
});

db.user.updateOne ({subscript: 'null'},
	{$set: { subscript: {
		cc       : 'null',
		payment  : 'null',
		dStart   : '2022-01-01',
		dRenew   : 'null'
	}}});

db.user.updateMany ({'subscript.cc': 'null'},
	{$set: { 'subscript.cc': [
		{
			ccN   : '3323 4434 5545 6656',
			month : 1,
			year  : 30,
			CVV   : '663',
		}]}});

db.user.updateMany ({'subscript.payment': 'null'},
	{$set: {'subscript.payment': [
		{
			dPay   : '2022-01-01',
			amount : 10.00,
		}]}});

db.user.updateMany ({playlist: 'null'},
	{$set: {playlist: [
		{
			song    : 'null',
			n       : 3,
			title   : 'Pop',
			dCreate : '2022-02-02'
		}, {
			deleted : 'null',
			song    : 'null',
			n       : 2,
			title   : 'Folk',
			dCreate : '2022-06-06'
		}]}});

db.user.updateMany ({'playlist.1.deleted': 'null'},
	{$set: {'playlist.1.deleted': [
		{
			dDelete : '2022-06-07'
		}]}});

db.user.updateMany ({'playlist.0.song': 'null'},
	{$set: {'playlist.0.song': [
		{
			n       : 5,
			title   : 'Singing in the rain',
			tLength : '5:20'
		}, {
			n       : 10,
			title   : 'Moonlight shadow',
			tLength : '3:20'
		}, {
			n       : 500,
			title   : 'Modern dance',
			tLength : '10:20'
		}]}});

db.user.updateMany ({'playlist.1.song': 'null'},
	{$set: {'playlist.1.song': [
		{
			n       : 2,
			title   : 'Salsa',
			tLength : '4:20'
		}, {
			n       : 2,
			title   : 'Mambo',
			tLength : '4:20'
		}]}});

db.user.updateMany ({artist: 'null'},
	{$set: { artist: [
		{
			name:    'Vivaldi',
			picture: 'vivaldi.jpg'
		}]}});

db.user.updateMany ({fAlbum: 'null'},
	{$set: { fAlbum: [
		{
			year:  '1615',
			cover: 'spring.jpg'
		}, {
			year:  '1711',
			cover: 'moonlight.jpg'
		}]}});

db.user.updateMany ({fSong: 'null'},
	{$set: { fSong: [
		{
			n:       10,
			title:   'Moonlight shadow',
			tLength: '3:20'
		}, {
			n:       2,
			title:   'Salsa',
			tLength: '4:20'
		}]}});

// First artist

db.artist.insertOne ({
	album     : 'null',
	relate    : 'null',
	name      : 'Vivaldi',
	picture   : 'vivaldi.jpg'
});

db.artist.updateMany ({album: 'null'},
	{$set: { album: [
		{
			song: 'null',
			year:  '1615',
			cover: 'spring.jpg'
		}, {
			song: 'null',
			year:  '1616',
			cover: 'winter.jpg'
		}]}});

db.artist.updateMany ({'album.0.song': 'null'},
	{$set: { 'album.0.song': [
		{
			n       : 5,
			title   : 'Singing in the rain',
			tLength : '5:20'
		}]}});

db.artist.updateMany ({'album.1.song': 'null'},
	{$set: { 'album.1.song': [
		{
			n       : 9,
			title   : 'Superstar',
			tLength : '4:20'
		}, {
			n       : 2,
			title   : 'Salsa',
			tLength : '4:20'
		}, {
			n       : 2,
			title   : 'Mambo',
			tLength : '4:20'
		}]}});

db.artist.updateMany ({relate: 'null'},
	{$set: { relate: [
		{
			name:    'Mozart',
			picture: 'mozart.jpg'
		}, {
			name:    'Beethoven',
			picture: 'beethoven.jpg'
		}]}});

// Second user

db.user.insertOne ({
	subscript : 'null',
	playlist  : 'null',
	artist    : 'null',
	fAlbum    : 'null',
	fSong     : 'null',
	email     : 'usr2@srv.com',
	passwd    : 'xxx',
	name      : 'Mary',
	country   : 'Canada',
	zipCode   : 'x1333',
	dBirth    : '1980-07-07',
	sex       : 'female'
});

db.user.updateOne ({subscript: 'null'},
	{$set: { subscript: {
		paypal   : 'null',
		payment  : 'null',
		dStart   : '2021-01-01',
		dRenew   : '2022-01-01'
	}}});

db.user.updateMany ({'subscript.paypal': 'null'},
	{$set: { 'subscript.paypal': [
		{
			ppUser: 'Mary'
		}]}});

db.user.updateMany ({'subscript.payment': 'null'},
	{$set: {'subscript.payment': [
		{
			dPay   : '2021-01-01',
			amount : 10.00
		}, {
			dPay   : '2022-01-01',
			amount : 10.00
		}]}});

db.user.updateMany ({playlist: 'null'},
	{$set: {playlist: [
		{
			shared  : 'null',
			n       : 4,
			title   : 'Classic',
			dCreate : '2021-02-02'
		}]}});

db.user.updateMany ({'playlist.0.shared': 'null'},
	{$set: {'playlist.0.shared': [
		{
			song     : 'null',
			user     : 'null',
			dCollect : '2022-01-03'
		}, {
			song     : 'null',
			user     : 'null',
			dCollect : '2022-06-09'
		}, {
			song     : 'null',
			user     : 'null',
			dCollect : '2022-06-10'
		}, {
			song     : 'null',
			user     : 'null',
			dCollect : '2022-06-08'
		}]}});

db.user.updateOne ({'playlist.0.shared.0.song': 'null'},
	{$set: {'playlist.0.shared.0.song':
		{
			n       : 5,
			title   : 'Singing in the rain',
			tLength : '5:20'
		}}});

db.user.updateOne ({'playlist.0.shared.1.song': 'null'},
	{$set: {'playlist.0.shared.1.song':
		{
			n       : 10,
			title   : 'Moonlight shadow',
			tLength : '3:20'
		}}});

db.user.updateOne ({'playlist.0.shared.2.song': 'null'},
	{$set: {'playlist.0.shared.2.song':
		{
			n       : 15,
			title   : 'Sunshine',
			tLength : '4:20'
		}}});

db.user.updateOne ({'playlist.0.shared.3.song': 'null'},
	{$set: {'playlist.0.shared.3.song':
		{
			n       : 9,
			title   : 'Superstar',
			tLength : '4:20'
		}}});

db.user.updateOne ({'playlist.0.shared.0.user': 'null'},
	{$set: {'playlist.0.shared.0.user':
		{
			email:   'usr1@srv.com',
			passwd:  'xxx',
			name:    'John',
			country: 'US',
			zipCode: '02333',
			dBirth:  '1990-01-01',
			sex:     'male'
		}}});

db.user.updateOne ({'playlist.0.shared.1.user': 'null'},
	{$set: {'playlist.0.shared.1.user':
		{
			email:   'usr4@srv.com',
			passwd:  'xxx',
			name:    'Ana',
			country: 'Mexico',
			zipCode: 'ME154',
			dBirth:  '2000-09-29',
			sex:     'female'
		}}});

db.user.updateOne ({'playlist.0.shared.2.user': 'null'},
	{$set: {'playlist.0.shared.2.user':
		{
			email:   'usr1@srv.com',
			passwd:  'xxx',
			name:    'John',
			country: 'US',
			zipCode: '02333',
			dBirth:  '1990-01-01',
			sex:     'male'
		}}});

db.user.updateOne ({'playlist.0.shared.3.user': 'null'},
	{$set: {'playlist.0.shared.3.user':
		{
			email:   'usr4@srv.com',
			passwd:  'xxx',
			name:    'Ana',
			country: 'Mexico',
			zipCode: 'ME154',
			dBirth:  '2000-09-29',
			sex:     'female'
		}}});

db.user.updateMany ({artist: 'null'},
	{$set: { artist: [
		{
			name:    'Mozart',
			picture: 'mozart.jpg'
		}]}});

db.user.updateMany ({fAlbum: 'null'},
	{$set: { fAlbum: [
		{
			year:  '1711',
			cover: 'moonlight.jpg'
		}]}});

db.user.updateMany ({fSong: 'null'},
	{$set: { fSong: [
		{
			n:       10,
			title:   'Singing in the rain',
			tLength: '5:20'
		}]}});

// Second artist

db.artist.insertOne ({
	album     : 'null',
	relate    : 'null',
	name      : 'Mozart',
	picture   : 'mozart.jpg'
});

db.artist.updateMany ({album: 'null'},
	{$set: { album: [
		{
			song:  'null',
			year:  '1711',
			cover: 'moonlight.jpg'
		}]}});

db.artist.updateMany ({'album.0.song': 'null'},
	{$set: { 'album.0.song': [
		{
			n       : 10,
			title   : 'Moonlight shadow',
			tLength : '3:20'
		}, {
			n       : 500,
			title   : 'Modern dance',
			tLength : '10:20'
		}]}});

db.artist.updateMany ({relate: 'null'},
	{$set: { relate: [
		{
			name:    'Beethoven',
			picture: 'beethoven.jpg'
		}]}});

// Third user

db.user.insertOne ({
	subscript : 'null',
	playlist  : 'null',
	artist    : 'null',
	fAlbum    : 'null',
	fSong     : 'null',
	email     : 'usr3@srv.com',
	passwd    : 'xxx',
	name      : 'Robert',
	country   : 'US',
	zipCode   : '80555',
	dBirth    : '1991-02-02',
	sex       : 'male'
});

db.user.updateMany ({playlist: 'null'},
	{$set: {playlist: [
		{
			shared  : 'null',
			n       : 2,
			title   : 'Rock',
			dCreate : '2022-03-03'
		}]}});

db.user.updateMany ({'playlist.0.shared': 'null'},
	{$set: {'playlist.0.shared': [
		{
			song     : 'null',
			user     : 'null',
			dCollect : ''
		}, {
			song     : 'null',
			user     : 'null',
			dCollect : ''
		}]}});

db.user.updateOne ({'playlist.0.shared.0.song': 'null'},
	{$set: {'playlist.0.shared.0.song':
		{
			n       : 500,
			title   : 'Modern dance',
			tLength : '10:20'
		}}});

db.user.updateOne ({'playlist.0.shared.1.song': 'null'},
	{$set: {'playlist.0.shared.1.song':
		{
			n       : 2,
			title   : 'Salsa',
			tLength : '4:20'
		}}});

db.user.updateOne ({'playlist.0.shared.0.user': 'null'},
	{$set: {'playlist.0.shared.0.user':
		{
			email:   'usr5@srv.com',
			passwd:  'xxx',
			name:    'Mike',
			country: 'US',
			zipCode: '90656',
			dBirth:  '1999-08-08',
			sex:     'male'
		}}});

db.user.updateOne ({'playlist.0.shared.1.user': 'null'},
	{$set: {'playlist.0.shared.1.user':
		{
			email:   'usr5@srv.com',
			passwd:  'xxx',
			name:    'Mike',
			country: 'US',
			zipCode: '90656',
			dBirth:  '1999-08-08',
			sex:     'male'
		}}});

db.user.updateMany ({artist: 'null'},
	{$set: { artist: [
		{
			name:    'Mozart',
			picture: 'mozart.jpg'
		}]}});

db.user.updateMany ({fAlbum: 'null'},
	{$set: { fAlbum: [
		{
			year:  '1615',
			cover: 'spring.jpg'
		}, {
			year:  '1816',
			cover: 'friendship.jpg'
		}]}});

db.user.updateMany ({fSong: 'null'},
	{$set: { fSong: [
		{
			n:       500,
			title:   'Modern dance',
			tLength: '10:20'
		}]}});

// Third artist

db.artist.insertOne ({
	album     : 'null',
	relate    : 'null',
	name      : 'Beethoven',
	picture   : 'beethoven.jpg'
});

db.artist.updateMany ({album: 'null'},
	{$set: { album: [
		{
			song:  'null',
			year:  '1816',
			cover: 'friendship.jpg'
		}]}});

db.artist.updateMany ({'album.0.song': 'null'},
	{$set: { 'album.0.song': [
		{
			n       : 15,
			title   : 'Sunshine',
			tLength : '4:20'
		}]}});

db.artist.updateMany ({relate: 'null'},
	{$set: { relate: [
		{
			name:    'Vivaldi',
			picture: 'vivaldi.jpg'
		}]}});

// Fourth user

db.user.insertOne ({
	subscript : 'null',
	playlist  : 'null',
	artist    : 'null',
	fAlbum    : 'null',
	fSong     : 'null',
	email     : 'usr4@srv.com',
	passwd    : 'xxx',
	name      : 'Ana',
	country   : 'Mexico',
	zipCode   : 'ME154',
	dBirth    : '2000-09-29',
	sex       : 'female'
});

db.user.updateMany ({artist: 'null'},
	{$set: { artist: [
		{
			name:    'Vivaldi',
			picture: 'vivaldi.jpg'
		}]}});

db.user.updateMany ({fAlbum: 'null'},
	{$set: { fAlbum: [
		{
			year:  '1616',
			cover: 'winter.jpg'
		}]}});

db.user.updateMany ({fSong: 'null'},
	{$set: { fSong: [
		{
			n:       500,
			title:   'Modern dance',
			tLength: '10:20'
		}]}});

// Fifth user

db.user.insertOne ({
	subscript : 'null5',
	playlist  : 'null5',
	artist    : 'null5',
	fAlbum    : 'null5',
	fSong     : 'null5',
	email     : 'usr5@srv.com',
	passwd    : 'xxx',
	name      : 'Mike',
	country   : 'US',
	zipCode   : '90656',
	dBirth    : '1999-08-08',
	sex       : 'male'
});

db.user.updateOne ({subscript: 'null5'},
	{$set: { subscript: {
		cc       : 'null5',
		payment  : 'null5',
		dStart   : '2019-06-06',
		dRenew   : '2022-06-06'
	}}});

db.user.updateMany ({'subscript.cc': 'null5'},
	{$set: { 'subscript.cc': [
		{
			ccN   : '2213 3323 8878 9989',
			month : 3,
			year  : 25,
			CVV   : '114',
		}]}});

db.user.updateMany ({'subscript.payment': 'null5'},
	{$set: {'subscript.payment': [
		{
			dPay   : '2019-06-06',
			amount : 10.00,
		}, {
			dPay   : '2020-06-06',
			amount : 10.00,
		}, {
			dPay   : '2021-06-06',
			amount : 10.00,
		}, {
			dPay   : '2022-06-06',
			amount : 10.00,
		}]}});

db.user.updateMany ({playlist: 'null5'},
	{$set: {playlist: [
		{
			song    : 'null5',
			n       : 2,
			title   : 'Folk',
			dCreate : '2022-06-06'
		}, {
			deleted : 'null5',
			song    : 'null',
			n       : 0,
			title   : 'Rock',
			dCreate : '2022-06-06'
		}]}});

db.user.updateMany ({'playlist.1.deleted': 'null5'},
	{$set: {'playlist.1.deleted': [
		{
			dDelete : '2022-06-08'
		}]}});

db.user.updateMany ({'playlist.0.song': 'null5'},
	{$set: {'playlist.0.song': [
		{
			n       : 15,
			title   : 'Sunshine',
			tLength : '4:20'
		}, {
			n       : 9,
			title   : 'Superstar',
			tLength : '4:20'
		}]}});

db.user.updateMany ({artist: 'null5'},
	{$set: { artist: [
		{
			name:    'Beethoven',
			picture: 'beethoven.jpg'
		}]}});

db.user.updateMany ({fAlbum: 'null5'},
	{$set: { fAlbum: [
		{
			year:  '1816',
			cover: 'friendship.jpg'
		}]}});

db.user.updateMany ({fSong: 'null5'},
	{$set: { fSong: [
		{
			n:       2,
			title:   'Mambo',
			tLength: '4:20'
		}]}});

