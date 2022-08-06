/*
 * Sprint 2 Topic 2 (Queries) Exercise 1
 *
 * Restaurants.
 */

db = connect('mongodb://localhost/restaurants' );

console.clear ();

// 01
console.log (db.restaurants.find ());

// 02
console.log (db.restaurants.find ( {}, {
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));

// 03
console.log (db.restaurants.find ( {}, {_id:0,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));

// 04
console.log (db.restaurants.find ( {}, {_id:0,
	restaurant_id: true,
	name: true,
	borough: true,
	'address.zipcode': true }));

// 05
console.log (db.restaurants.find ({borough: 'Bronx'}));

// 06
console.log (db.restaurants.find ({borough: 'Bronx'}).limit (5));

// 07
console.log (db.restaurants.find ({borough: 'Bronx'}).skip (5).limit (5));

// 08
console.log (db.restaurants.find ({'grades.score': {$gt: 90}}));

// 09
console.log (db.restaurants.find ({'grades': {$elemMatch: {score: {$gt: 80, $lt: 100}}}}));

// 10
console.log (db.restaurants.find({$expr: {$lt: [{"$first": ["$address.coord"]}, -95.754168]}}));

// 11
// db.restaurants.find ({$and: [
//	{"cuisine": {$ne: "American "}},
//	{"grades.score": {$gt: 70}},
//	{$expr: {$lt: [{"$first": ["$address.coord"]}, -65.754168]}} ]})
console.log (db.restaurants.find ({$and: [
	{"cuisine": {$ne: "American "}},
	{"grades.score": {$gt: 70}},
	{"address.coord.0": {$lt: -65.754168}} ]}));

// 12
console.log (db.restaurants.aggregate ([
	{$match: {"grades.score": {$gt:70}}},
	{$match: {cuisine: {$ne: "American "}}},
	{$match: {"address.coord.0": {$lt: -65.754168}}}
]));

// 13
console.log (db.restaurants.find({ $and: [
	{"cuisine": {$ne: "American "}},
	{"grades.grade": 'A'},
	{borough: {$ne: 'Brooklyn'}}]}).sort ({cuisine :+1}));

// 14
console.log (db.restaurants.find ({
	name: {$regex: "^Wil"}}, {
		_id: false,
		restaurant_id: true,
		name: true,
		borough: true,
		cuisine: true }));

// 15
console.log (db.restaurants.find ({
	name: {$regex: "ces$"}}, {
		_id: false,
		restaurant_id: true,
		name: true, borough: true,
		cuisine: true }));

// 16
// console.log (db.restaurants.find ({
// 	name: {$regex: "^.*Reg.*$"}}, {
// 		_id: false,
// 		restaurant_id: true,
// 		name: true,
// 		borough: true,
// 		cuisine: true }));
console.log (db.restaurants.find ({name: /^.*Reg.*$/}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));

// 17
console.log (db.restaurants.find ({$and: [
	{borough: "Bronx"},
	{$or: [
		{cuisine: 'American '},
		{cuisine: 'Chinese'}]}]}));

// 18
console.log (db.restaurants.find ({$or: [
	{borough: "Staten Island"},
	{borough: "Queens"},
	{borough: "Bronx"},
	{borough: "Brooklyn"}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));

// 19
console.log (db.restaurants.find ({$and: [
	{borough: {$ne: "Staten Island"}},
	{borough: {$ne: "Queens"}},
	{borough: {$ne: "Bronx"}},
	{borough: {$ne: "Brooklyn"}}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));

// 20
console.log (db.restaurants.find ({'grades.score': {$lt: 10}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true
}));

// 21
console.log (db.restaurants.find (
	{$and: [
		{cuisine: 'Seafood'},
		{$nor: [
			{name: /^Wil.*$/}]}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true
}));

// 22
console.log (db.restaurants.find ({grades: {
	$all: [
		{$elemMatch: {
			date: ISODate('2014-08-11T00:00:00.000Z'),
			grade: 'A',
			score: 11}}]}}, {
				_id: false,
				restaurant_id: true,
				name: true,
				grades: true }));

// 23
console.log (db.restaurants.find ({$and: [
	{'grades.1.grade': 'A'},
	{'grades.1.score': 9},
	{'grades.1.date': ISODate('2014-08-11T00:00:00Z')}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		grades: true }));

// 24
console.log (db.restaurants.find ({$and: [
	{'address.coord.1': {$gt: 42}},
	{'address.coord.1': {$lt: 52}}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		address: true }));

// 25
console.log (db.restaurants.find ().sort ({name: +1}));

// 26
console.log (db.restaurants.find ().sort ({name: -1}));

// 27
console.log (db.restaurants.find ().sort ({cuisine: +1, borough: -1}));

// 28
console.log (db.restaurants.find ({'address.street': {$eq: ''}}));

// 29
console.log (db.restaurants.find ({$and: [
	{'address.coord.0': {$type: 'double'}},
	{'address.coord.1': {$type: 'double'}}]}));

// 30
console.log (db.restaurants.find ({'grades.score': {$mod: [7, 0]}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	'grades.grade': true}));

// 31
console.log (db.restaurants.find ({name: /^.*mon.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }));

// 32
console.log (db.restaurants.find ({name: /^Mad.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }));

