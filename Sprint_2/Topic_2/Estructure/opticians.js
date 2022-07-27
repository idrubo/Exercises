/*
 * Sprint 2 Topic 1 (Estructure) Level 1 Exercise 1
 *
 * Optician workshop.
 */

db = connect( 'mongodb://localhost/opticians' );

db.buy.drop()

db.buy.insertOne({
	customer:'null',
	glasses:'null',
	employee:'null',
	rDate:'2022-1-10'});

db.buy.updateOne ({customer: 'null'}, {$set: {customer: {name: 'Manuel Perez'}}});

