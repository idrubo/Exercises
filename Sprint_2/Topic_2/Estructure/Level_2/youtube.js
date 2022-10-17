/*
 * Sprint 2 Topic 2 (Estructure) Level 2 Exercise (youtube)
 *
 * Youtube
 */

db = connect('mongodb://localhost/youtube' );

db.user.drop ();

// First user

db.user.insertOne ({
	video     : 'null',
	channel   : 'null',
	subscribe : 'null',
	playlist  : 'null',
	comment   : 'null',
	feelV     : 'null',
	feelC     : 'null',
	email     : 'usr1@srv.com',
	passwd    : 'xxx',
	name      : 'John',
	country   : 'US',
	zipCode   : '02333',
	dBirth    : '1990-01-01',
	sex       : 'male'
});

db.user.updateMany ({video: 'null'},
	{$set: { video: [
		{
			label    : 'null',
			title    : 'Star Wars',
			name     : 'SW.jpg',
			descript : 'sciFy',
			size     : 100000,
			length   : '1:30:00',
			thumb    : 'swt.jpg',
			dPublish : '2020-01-01',
			nViews   : 100,
			state    : 'public'
		}, {
			label    : 'null',
			title    : 'Science',
			name     : 'science.jpg',
			descript : 'science',
			size     : 100000,
			length   : '1:00:00',
			thumb    : 'sci.jpg',
			dPublish : '2019-02-02',
			nViews   : 101,
			state    : 'hidden'
		}]}});

db.user.updateMany ({'video.0.label': 'null'},
	{$set: { 'video.0.label': [
		{
			name    : 'Star Wars',
		}, {
			name    : 'movie',
		}, {
			name    : 'Action'
		}]}});

db.user.updateMany ({'video.1.label': 'null'},
	{$set: { 'video.1.label': [
		{
			name    : 'Documentary'
		}]}});

db.user.updateOne ({'channel': 'null'},
	{$set: { 'channel': {
		video    : 'null',
		name     : 'sciFy',
		descript : 'scify channel',
		dCreat   : '2020-01-01'
	}}});

db.user.updateMany ({'channel.video': 'null'},
	{$set: {'channel.video': [
		{
			title    : 'Star Wars',
			name     : 'SW.jpg',
			descript : 'sciFy',
			size     : 100000,
			length   : '1:30:00',
			thumb    : 'swt.jpg',
			dPublish : '2020-01-01',
			nViews   : 100,
			state    : 'public'
		}, {
			title    : 'Science',
			name     : 'science.jpg',
			descript : 'science',
			size     : 100000,
			length   : '1:00:00',
			thumb    : 'sci.jpg',
			dPublish : '2019-02-02',
			nViews   : 101,
			state    : 'hidden'
		}, {
			title    : 'Star Trek',
			name     : 'ST.jpg',
			descript : 'space',
			size     : 100000,
			length   : '2:10:00',
			thumb    : 'spc.jpg',
			dPublish : '2020-02-03',
			nViews   : 104,
			state    : 'private'
		}]}});

db.user.updateMany ({'subscribe': 'null'},
	{$set: { 'subscribe': [
		{
			science  : 'science',
			descript : 'science docs',
			dCreat   : '2019-02-02'
		}, {
			science  : 'nature',
			descript : 'nature docs',
			dCreat   : '2022-03-03'
		}]}});

db.user.updateMany ({'playlist': 'null'},
	{$set: { 'playlist': [
		{
			video   : 'null',
			name    : 'Space',
			dCreate : '2020-06-05',
			status  : 'public'
		}, {
			video   : 'null',
			name    : 'Fun',
			dCreate : '2019-04-04',
			status  : 'public'
		}]}});

db.user.updateMany ({'playlist.0.video': 'null'},
	{$set: { 'playlist.0.video': [
		{
			title    : 'Star Wars',
			name     : 'SW.jpg',
			descript : 'sciFy',
			size     : 100000,
			length   : '1:30:00',
			thumb    : 'swt.jpg',
			dPublish : '2020-01-01',
			nViews   : 100,
			state    : 'public'
		}, {
			title    : 'Science',
			name     : 'science.jpg',
			descript : 'science',
			size     : 100000,
			length   : '1:00:00',
			thumb    : 'sci.jpg',
			dPublish : '2019-02-02',
			nViews   : 101,
			state    : 'hidden'
		}, {
			title    : 'Nature',
			name     : 'nature.jpg',
			descript : 'nature',
			size     : 100000,
			length   : '0:30:00',
			thumb    : 'nat.jpg',
			dPublish : '2021-03-03',
			nViews   : 102,
			state    : 'private'
		}]}});

db.user.updateMany ({'playlist.1.video': 'null'},
	{$set: { 'playlist.1.video': [
		{
			title    : 'Star Wars',
			name     : 'SW.jpg',
			descript : 'sciFy',
			size     : 100000,
			length   : '1:30:00',
			thumb    : 'swt.jpg',
			dPublish : '2020-01-01',
			nViews   : 100,
			state    : 'public'
		}, {
			title    : 'Hobby',
			name     : 'metal.jpg',
			descript : 'solder',
			size     : 100000,
			length   : '0:45:00',
			thumb    : 'sol.jpg',
			dPublish : '2022-07-07',
			nViews   : 104,
			state    : 'hidden'
		}]}});

db.user.updateMany ({comment: 'null'},
	{$set: { comment: [
		{
			video : 'null',
			text  : 'This is a comment',
			dCom  : '2022-01-01'
		}, {
			video : 'null',
			text  : 'It is so nice now',
			dCom  : '2022-01-04'
		}]}});

db.user.updateOne ({'comment.0.video': 'null'},
	{$set: { 'comment.0.video': {
		title    : 'Star Wars',
		name     : 'SW.jpg',
		descript : 'sciFy',
		size     : 100000,
		length   : '1:30:00',
		thumb    : 'swt.jpg',
		dPublish : '2020-01-01',
		nViews   : 100,
		state    : 'public'
	}}});

db.user.updateOne ({'comment.1.video': 'null'},
	{$set: { 'comment.1.video': {
		title    : 'Star Wars',
		name     : 'SW.jpg',
		descript : 'sciFy',
		size     : 100000,
		length   : '1:30:00',
		thumb    : 'swt.jpg',
		dPublish : '2020-01-01',
		nViews   : 100,
		state    : 'public'
	}}});

db.user.updateMany ({feelV: 'null'},
	{$set: { feelV: [
		{
			video : 'null',
			dFeel : '2020-01-01',
			feel  : 'like'
		}, {
			video : 'null',
			dFeel : '2020-01-01',
			feel  : 'like'
		}]}});

db.user.updateOne ({'feelV.0.video': 'null'},
	{$set: { 'feelV.0.video': {
		title    : 'Star Wars',
		name     : 'SW.jpg',
		descript : 'sciFy',
		size     : 100000,
		length   : '1:30:00',
		thumb    : 'swt.jpg',
		dPublish : '2020-01-01',
		nViews   : 100,
		state    : 'public'
	}}});

db.user.updateOne ({'feelV.1.video': 'null'},
	{$set: { 'feelV.1.video': {
		title    : 'Hobby',
		name     : 'metal.jpg',
		descript : 'solder',
		size     : 100000,
		length   : '0:45:00',
		thumb    : 'sol.jpg',
		dPublish : '2022-07-07',
		nViews   : 104,
		state    : 'hidden'
	}}});

db.user.updateMany ({feelC: 'null'},
	{$set: {feelC: [
		{
			comment : 'null',
			dFeel   : '2022-01-01',
			feel    : 'like'
		}, {
			comment : 'null',
			dFeel   : '2022-01-04',
			feel    : 'like'
		}, {
			comment : 'null',
			dFeel   : '2022-01-05',
			feel    : 'like'
		}]}});

db.user.updateOne ({'feelC.0.comment': 'null'},
	{$set: { 'feelC.0.comment': {
		text: 'This is another comment',
		dCom: '2022-01-02'
	}}});

db.user.updateOne ({'feelC.1.comment': 'null'},
	{$set: { 'feelC.1.comment': {
		text: 'Not so nice comment',
		dCom: '2022-01-03'
	}}});

db.user.updateOne ({'feelC.2.comment': 'null'},
	{$set: { 'feelC.2.comment': {
		text: 'It is so nice now',
		dCom: '2022-02-01'
	}}});

// Second user

db.user.insertOne ({
	video     : 'null',
	channel   : 'null',
	subscribe : 'null',
	playlist  : 'null',
	comment   : 'null',
	feelV     : 'null',
	feelC     : 'null',
	email     : 'usr2@srv.com',
	passwd    : 'xxx',
	name      : 'Mary',
	country   : 'Canada',
	zipCode   : 'x1333',
	dBirth    : '1980-07-07',
	sex       : 'female'
});

db.user.updateMany ({video: 'null'},
	{$set: { video: [
		{
			label    : 'null',
			title    : 'Nature',
			name     : 'nature.jpg',
			descript : 'nature',
			size     : 100000,
			length   : '0:30:00',
			thumb    : 'nat.jpg',
			dPublish : '2021-03-03',
			nViews   : 102,
			state    : 'private'
		}, {
			label    : 'null',
			title    : 'Dancing',
			name     : 'dance.jpg',
			descript : 'dancing',
			size     : 100000,
			length   : '0:15:00',
			thumb    : 'dan.jpg',
			dPublish : '2018-05-15',
			nViews   : 103,
			state    : 'public'
		}]}});

db.user.updateMany ({'video.0.label': 'null'},
	{$set: { 'video.0.label': [
		{
			name    : 'Documentary',
		}]}});

db.user.updateMany ({'video.1.label': 'null'},
	{$set: { 'video.1.label': [
		{
			name    : 'Entertainment'
		}]}});

db.user.updateOne ({'channel': 'null'},
	{$set: { 'channel': {
		video    : 'null',
		name     : 'science',
		descript : 'science docs',
		dCreat   : '2019-02-02'
	}}});

db.user.updateMany ({'channel.video': 'null'},
	{$set: {'channel.video': [
		{
			title    : 'Star Wars',
			name     : 'SW.jpg',
			descript : 'sciFy',
			size     : 100000,
			length   : '1:30:00',
			thumb    : 'swt.jpg',
			dPublish : '2020-01-01',
			nViews   : 100,
			state    : 'public'
		}, {
			title    : 'Science',
			name     : 'science.jpg',
			descript : 'science',
			size     : 100000,
			length   : '1:00:00',
			thumb    : 'sci.jpg',
			dPublish : '2019-02-02',
			nViews   : 101,
			state    : 'hidden'
		}, {
			title    : 'Star Trek',
			name     : 'ST.jpg',
			descript : 'space',
			size     : 100000,
			length   : '2:10:00',
			thumb    : 'spc.jpg',
			dPublish : '2020-02-03',
			nViews   : 104,
			state    : 'private'
		}]}});

db.user.updateMany ({'subscribe': 'null'},
	{$set: { 'subscribe': [
		{
			science  : 'sciFy',
			descript : 'scify channel',
			dCreat   : '2020-01-01'
		}, {
			science  : 'Movies',
			descript : 'Action movies',
			dCreat   : '2018-04-04'
		}]}});

db.user.updateMany ({comment: 'null'},
	{$set: { comment: [
		{
			video : 'null',
			text  : 'This is another comment',
			dCom  : '2022-01-02'
		}, {
			video : 'null',
			text  : 'It is so nice now',
			dCom  : '2022-02-01'
		}]}});

db.user.updateOne ({'comment.0.video': 'null'},
	{$set: { 'comment.0.video': {
		title    : 'Star Wars',
		name     : 'SW.jpg',
		descript : 'sciFy',
		size     : 100000,
		length   : '1:30:00',
		thumb    : 'swt.jpg',
		dPublish : '2020-01-01',
		nViews   : 100,
		state    : 'public'
	}}});

db.user.updateOne ({'comment.1.video': 'null'},
	{$set: { 'comment.1.video': {
		title    : 'Hobby',
		name     : 'metal.jpg',
		descript : 'solder',
		size     : 100000,
		length   : '0:45:00',
		thumb    : 'sol.jpg',
		dPublish : '2022-07-07',
		nViews   : 104,
		state    : 'hidden'
	}}});

db.user.updateMany ({feelV: 'null'},
	{$set: { feelV: [
		{
			video : 'null',
			dFeel : '2020-02-01',
			feel  : 'like'
		}]}});

db.user.updateOne ({'feelV.0.video': 'null'},
	{$set: { 'feelV.0.video': {
		title    : 'Dancing',
		name     : 'dance.jpg',
		descript : 'dancing',
		size     : 100000,
		length   : '0:15:00',
		thumb    : 'dan.jpg',
		dPublish : '2018-05-15',
		nViews   : 103,
		state    : 'public'
	}}});

db.user.updateMany ({feelC: 'null'},
	{$set: {feelC: [
		{
			comment : 'null',
			dFeel   : '2022-01-02',
			feel    : 'dislike'
		}]}});

db.user.updateOne ({'feelC.0.comment': 'null'},
	{$set: { 'feelC.0.comment': {
		text: 'Not so nice comment',
		dCom: '2022-01-03'
	}}});

// Third user

db.user.insertOne ({
	video     : 'null',
	channel   : 'null',
	subscribe : 'null',
	playlist  : 'null',
	comment   : 'null',
	feelV     : 'null',
	feelC     : 'null',
	email     : 'usr3@srv.com',
	passwd    : 'xxx',
	name      : 'Robert',
	country   : 'US',
	zipCode   : '80555',
	dBirth    : '1991-02-02',
	sex       : 'male'
});

db.user.updateMany ({video: 'null'},
	{$set: { video: [
		{
			label    : 'null',
			title    : 'Hobby',
			name     : 'metal.jpg',
			descript : 'solder',
			size     : 100000,
			length   : '0:45:00',
			thumb    : 'sol.jpg',
			dPublish : '2022-07-07',
			nViews   : 104,
			state    : 'hidden'
		}]}});

db.user.updateMany ({'video.0.label': 'null'},
	{$set: { 'video.0.label': [
		{
			name    : 'Crafts',
		}, {
			name    : 'Movie',
		}]}});

db.user.updateOne ({'channel': 'null'},
	{$set: { 'channel': {
		video    : 'null',
		name     : 'nature',
		descript : 'nature docs',
		dCreat   : '2022-03-03'
	}}});

db.user.updateMany ({'channel.video': 'null'},
	{$set: {'channel.video': [
		{
			title    : 'Science',
			name     : 'science.jpg',
			descript : 'science',
			size     : 100000,
			length   : '1:00:00',
			thumb    : 'sci.jpg',
			dPublish : '2019-02-02',
			nViews   : 101,
			state    : 'hidden'
		}, {
			title    : 'Nature',
			name     : 'nature.jpg',
			descript : 'nature',
			size     : 100000,
			length   : '0:30:00',
			thumb    : 'nat.jpg',
			dPublish : '2021-03-03',
			nViews   : 102,
			state    : 'private'
		}]}});

db.user.updateMany ({'playlist': 'null'},
	{$set: { 'playlist': [
		{
			video   : 'null',
			name    : 'Work',
			dCreate : '2018-01-01',
			status  : 'private'
		}]}});

db.user.updateMany ({'playlist.0.video': 'null'},
	{$set: { 'playlist.0.video': [
		{
			title    : 'Dancing',
			name     : 'dance.jpg',
			descript : 'dancing',
			size     : 100000,
			length   : '0:15:00',
			thumb    : 'dan.jpg',
			dPublish : '2018-05-15',
			nViews   : 103,
			state    : 'public'
		}]}});

db.user.updateMany ({comment: 'null'},
	{$set: { comment: [
		{
			video : 'null',
			text  : 'Not so nice comment',
			dCom  : '2022-01-03'
		}]}});

db.user.updateOne ({'comment.0.video': 'null'},
	{$set: { 'comment.0.video': {
		title    : 'Star Wars',
		name     : 'SW.jpg',
		descript : 'sciFy',
		size     : 100000,
		length   : '1:30:00',
		thumb    : 'swt.jpg',
		dPublish : '2020-01-01',
		nViews   : 100,
		state    : 'public'
	}}});

db.user.updateMany ({feelV: 'null'},
	{$set: { feelV: [
		{
			video : 'null',
			dFeel : '2020-02-02',
			feel  : 'dislike'
		}]}});

db.user.updateOne ({'feelV.0.video': 'null'},
	{$set: { 'feelV.0.video': {
		title    : 'Science',
		name     : 'science.jpg',
		descript : 'science',
		size     : 100000,
		length   : '1:00:00',
		thumb    : 'sci.jpg',
		dPublish : '2019-02-02',
		nViews   : 101,
		state    : 'hidden'
	}}});

db.user.updateMany ({feelC: 'null'},
	{$set: {feelC: [
		{
			comment : 'null',
			dFeel   : '2022-01-03',
			feel    : 'like'
		}]}});

db.user.updateOne ({'feelC.0.comment': 'null'},
	{$set: { 'feelC.0.comment': {
		text: 'It is so nice now',
		dCom: '2022-01-04'
	}}});

