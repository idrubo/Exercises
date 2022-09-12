/*
 * Sprint 2 Topic 2 (Estructure) Level 3 Exercise (spotify)
 *
 * Sporify
 */

db = connect('mongodb://localhost/sTest' );

db.user.drop ();

// Second user

db.user.insertOne ({
	playlist  : 'null',
	email     : 'usr2@srv.com',
	name      : 'Mary',
});

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
			by       : 'null',
			dCollect : '2022-01-03'
		}]}});

db.user.updateMany ({'playlist.0.shared.0.by': 'null'},
	{$set: {'playlist.0.shared.0.by': [
		{
			email:   'usr1@srv.com',
			name:    'John'
		}]}});

printjson (db.user.find ());

