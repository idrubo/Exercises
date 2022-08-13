/*
 * Sprint 2 Topic 2 (Queries) Exercise 1
 *
 * Restaurants.
 */

// To analyze queries performance:
let xpl;

function stepWP (wp)
{
	let st;

	if (wp.stage == 'FETCH') st = stepWP (wp.inputStage);
	else st = wp.stage;

	return st;
}

function showExplain (xpl)
{
	console.log ("queryPlanner.winningPlan          : " + stepWP (xpl.queryPlanner.winningPlan));
	console.log ("executionStats.nReturned          : " + xpl.executionStats.nReturned);
	console.log ("executionStats.executionTimeMillis: " + xpl.executionStats.executionTimeMillis);
	console.log ("executionStats.totalKeysExamined  : " + xpl.executionStats.totalKeysExamined);
	console.log ("executionStats.totalDocsExamined  : " + xpl.executionStats.totalDocsExamined);
}

// Connecting.
db = connect ('mongodb://localhost/restaurants');

console.clear ();

// 01
console.log ("\n01 --");
console.log (db.restaurants.find ());

console.log ("\n01 - No index: ");
xpl = db.restaurants.find ().explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"name\" defined: ");
db.restaurants.createIndex ({name: 1});
xpl = db.restaurants.find ().explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('name_1');
console.log ("\nAn index by \"name\" seem to have no effect.\n");

// 02
console.log ("\n02 --");
console.log (db.restaurants.find ( {}, {
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));
console.log ("\nAs before an index by \"name\" seem to have no effect.\n");

// 03
console.log ("\n03 --");
console.log (db.restaurants.find ( {}, {_id:0,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));
console.log ("\nAs before an index by \"name\" seem to have no effect.\n");

// 04
console.log ("\n04 --");
console.log (db.restaurants.find ( {}, {_id:0,
	restaurant_id: true,
	name: true,
	borough: true,
	'address.zipcode': true }));
console.log ("\nAn index by \"address.zipcode_1\" seem to have no effect.\n");

// 05
console.log ("\n05 --");
console.log (db.restaurants.find ({borough: 'Bronx'}));

console.log ("\n05 - No index: ");
xpl = db.restaurants.find ({borough: 'Bronx'}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"borough\" defined: ");
db.restaurants.createIndex ({borough: 1});
xpl = db.restaurants.find ({borough: 'Bronx'}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('borough_1');

// 06
console.log ("\n06 --");
console.log (db.restaurants.find ({borough: 'Bronx'}).limit (5));

console.log ("\n06 - No index: ");
xpl = db.restaurants.find ({borough: 'Bronx'}).limit (5).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"borough\" defined: ");
db.restaurants.createIndex ({borough: 1});
xpl = db.restaurants.find ({borough: 'Bronx'}).limit (5).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('borough_1');

// 07
console.log ("\n07 --");
console.log (db.restaurants.find ({borough: 'Bronx'}).skip (5).limit (5));

console.log ("\n07 - No index: ");
xpl = db.restaurants.find ({borough: 'Bronx'}).skip (5).limit (5).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"borough\" defined: ");
db.restaurants.createIndex ({borough: 1})
xpl = db.restaurants.find ({borough: 'Bronx'}).limit (5).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('borough_1');

// 08
console.log ("\n08 --");
console.log (db.restaurants.find ({'grades.score': {$gt: 90}}));

console.log ("\n08 - No index: ");
xpl = db.restaurants.find ({'grades.score': {$gt: 90}}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"grades.score\" defined: ");
db.restaurants.createIndex ({'grades.score': 1})
xpl = db.restaurants.find ({'grades.score': {$gt: 90}}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('grades.score_1');

// 09
console.log ("\n09 --");
console.log (db.restaurants.find ({'grades': {$elemMatch: {score: {$gt: 80, $lt: 100}}}}));

console.log ("\n09 - No index: ");
xpl = db.restaurants.find ({'grades': {$elemMatch: {score: {$gt: 80, $lt: 100}}}}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"grades.score\" defined: ");
db.restaurants.createIndex ({'grades.score': 1})
xpl = db.restaurants.find ({'grades': {$elemMatch: {score: {$gt: 80, $lt: 100}}}}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('grades.score_1');

// 10
// console.log (db.restaurants.find({$expr: {$lt: [{"$first": ["$address.coord"]}, -95.754168]}}));
console.log ("\n10 --");
console.log (db.restaurants.find({'address.coord.0': {$lt: -95.754168}}));

console.log ("\n10 - No index: ");
xpl = db.restaurants.find ({'address.coord.0': {$lt: -95.754168}}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"address.coord\" defined: ");
db.restaurants.createIndex ({"address.coord.0": 1});
xpl = db.restaurants.find ({'address.coord.0': {$lt: -95.754168}}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('address.coord.0_1');

// 11
// db.restaurants.find ({$and: [
//	{"cuisine": {$ne: "American "}},
//	{"grades.score": {$gt: 70}},
//	{$expr: {$lt: [{"$first": ["$address.coord"]}, -65.754168]}} ]})

console.log ("\n11 --");
console.log (db.restaurants.find ({$and: [
{"cuisine": {$ne: "American "}},
{"grades.score": {$gt: 70}},
{"address.coord.0": {$lt: -65.754168}} ]}));

console.log ("\n11 - No index: ");
xpl = db.restaurants.find ({$and: [
	{"cuisine": {$ne: "American "}},
	{"grades.score": {$gt: 70}},
	{"address.coord.0": {$lt: -65.754168}} ]}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"cuisine\" and \"grades.score\" defined: ");
db.restaurants.createIndex ({"cuisine": 1, "grades.score": 1});
// db.restaurants.createIndex ({"address.coord.0": 1});
xpl = db.restaurants.find ({$and: [
	{"cuisine": {$ne: "American "}},
	{"grades.score": {$gt: 70}},
	{"address.coord.0": {$lt: -65.754168}} ]}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('cuisine_1_grades.score_1');
// db.restaurants.dropIndex ('address.coord.0_1');

// 12
console.log ("\n12 --");
console.log (db.restaurants.aggregate ([
	{$match: {"grades.score": {$gt:70}}},
	{$match: {cuisine: {$ne: "American "}}},
	{$match: {"address.coord.0": {$lt: -65.754168}}}]));

console.log ("\n12 - No index: ");
xpl = db.restaurants.aggregate ([
	{$match: {"grades.score": {$gt:70}}},
	{$match: {cuisine: {$ne: "American "}}},
	{$match: {"address.coord.0": {$lt: -65.754168}}}]).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"cuisine\" and \"grades.score\" defined: ");
db.restaurants.createIndex ({"cuisine": 1, "grades.score": 1});
// db.restaurants.createIndex ({"address.coord.0": 1});
xpl = db.restaurants.aggregate ([
	{$match: {"grades.score": {$gt:70}}},
	{$match: {cuisine: {$ne: "American "}}},
	{$match: {"address.coord.0": {$lt: -65.754168}}}]).explain ("executionStats");
showExplain (xpl);

db.restaurants.dropIndex ('cuisine_1_grades.score_1');
// db.restaurants.dropIndex ('address.coord.0_1');

// 13
console.log ("\n13 --");
console.log (db.restaurants.find({ $and: [
	{"cuisine": {$ne: "American "}},
	{"grades.grade": 'A'},
	{borough: {$ne: 'Brooklyn'}}]}).sort ({cuisine :+1}));

console.log ("\n13 - No index: ");
xpl = db.restaurants.find({ $and: [
	{"cuisine": {$ne: "American "}},
	{"grades.grade": 'A'},
	{borough: {$ne: 'Brooklyn'}}]}).sort ({cuisine :+1}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"cuisine\" and \"borough\" defined: ");
// db.restaurants.createIndex ({"cuisine": 1, "borough": 1, "grades.grade": 1});
db.restaurants.createIndex ({"cuisine": 1, "borough": 1});
xpl = db.restaurants.find({ $and: [
	{"cuisine": {$ne: "American "}},
	{"grades.grade": 'A'},
	{borough: {$ne: 'Brooklyn'}}]}).sort ({cuisine :+1}).explain ("executionStats");
showExplain (xpl);
// db.restaurants.dropIndex ('cuisine_1_borough_1_grades.grade_1');
db.restaurants.dropIndex ('cuisine_1_borough_1');

// 14
console.log ("\n14 --");
console.log (db.restaurants.find ({
	name: {$regex: "^Wil"}}, {
		_id: false,
		restaurant_id: true,
		name: true,
		borough: true,
		cuisine: true }));

console.log ("\n14 - No index: ");
xpl = db.restaurants.find ({
	name: {$regex: "^Wil"}}, {
		_id: false,
		restaurant_id: true,
		name: true,
		borough: true,
		cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"name\" defined: ");
db.restaurants.createIndex ({"name": 1});
xpl = db.restaurants.find ({
	name: {$regex: "^Wil"}}, {
		_id: false,
		restaurant_id: true,
		name: true,
		borough: true,
		cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("name_1");

// 15
console.log ("\n15 --");
console.log (db.restaurants.find ({
	name: {$regex: "ces$"}}, {
		_id: false,
		restaurant_id: true,
		name: true, borough: true,
		cuisine: true }));

console.log ("\n15 - No index: ");
xpl = db.restaurants.find ({
	name: {$regex: "ces$"}}, {
		_id: false,
		restaurant_id: true,
		name: true, borough: true,
		cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"name\" defined: ");
db.restaurants.createIndex ({"name": 1});
xpl = db.restaurants.find ({
	name: {$regex: "ces$"}}, {
		_id: false,
		restaurant_id: true,
		name: true, borough: true,
		cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("name_1");

// 16
// console.log (db.restaurants.find ({
// 	name: {$regex: "^.*Reg.*$"}}, {
// 		_id: false,
// 		restaurant_id: true,
// 		name: true,
// 		borough: true,
// 		cuisine: true }));

console.log ("\n16 --");
console.log (db.restaurants.find ({name: /^.*Reg.*$/}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }));

console.log ("\n16 - No index: ");
xpl = db.restaurants.find ({name: /^.*Reg.*$/}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);

db.restaurants.createIndex ({"name": 1});
console.log ("\nIndex for \"name\" defined: ");
xpl = db.restaurants.find ({name: /^.*Reg.*$/}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("name_1");

// 17
console.log ("\n17 --");
console.log (db.restaurants.find ({$and: [
	{borough: "Bronx"},
	{$or: [
		{cuisine: 'American '},
		{cuisine: 'Chinese'}]}]}));

console.log ("\n17 - No index: ");
xpl = db.restaurants.find ({$and: [
	{borough: "Bronx"},
	{$or: [
		{cuisine: 'American '},
		{cuisine: 'Chinese'}]}]}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"borough\" and \"cuisine\" defined: ");
db.restaurants.createIndex ({"borough": 1, "cuisine": 1});
xpl = db.restaurants.find ({$and: [
	{borough: "Bronx"},
	{$or: [
		{cuisine: 'American '},
		{cuisine: 'Chinese'}]}]}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("borough_1_cuisine_1");

// 18
console.log ("\n18 --");
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

console.log ("\n18 - No index: ");
xpl = db.restaurants.find ({$or: [
	{borough: "Staten Island"},
	{borough: "Queens"},
	{borough: "Bronx"},
	{borough: "Brooklyn"}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"borough\" defined: ");
db.restaurants.createIndex ({"borough": 1});
xpl = db.restaurants.find ({$or: [
	{borough: "Staten Island"},
	{borough: "Queens"},
	{borough: "Bronx"},
	{borough: "Brooklyn"}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("borough_1");

// 19
console.log ("\n19 --");
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

console.log ("\n19 - No index: ");
xpl = db.restaurants.find ({$and: [
	{borough: {$ne: "Staten Island"}},
	{borough: {$ne: "Queens"}},
	{borough: {$ne: "Bronx"}},
	{borough: {$ne: "Brooklyn"}}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"borough\" defined: ");
db.restaurants.createIndex ({"borough": 1});
xpl = db.restaurants.find ({$and: [
	{borough: {$ne: "Staten Island"}},
	{borough: {$ne: "Queens"}},
	{borough: {$ne: "Bronx"}},
	{borough: {$ne: "Brooklyn"}}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("borough_1");

// 20
console.log ("\n20 --");
console.log (db.restaurants.find ({'grades.score': {$lt: 10}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true
}));

console.log ("\n20 - No index: ");
xpl = db.restaurants.find ({'grades.score': {$lt: 10}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"grades.score\" defined: ");
db.restaurants.createIndex ({'grades.score': 1})
xpl = db.restaurants.find ({'grades.score': {$lt: 10}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('grades.score_1');

// 21
console.log ("\n21 --");
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

console.log ("\n21 - No index: ");
xpl = db.restaurants.find (
	{$and: [
		{cuisine: 'Seafood'},
		{$nor: [
			{name: /^Wil.*$/}]}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"cuisine\" and \"name\" defined: ");
db.restaurants.createIndex ({"cuisine": 1, "name": 1});
xpl = db.restaurants.find (
	{$and: [
		{cuisine: 'Seafood'},
		{$nor: [
			{name: /^Wil.*$/}]}]}, {
	_id: false,
	restaurant_id: true,
	name: true,
	borough: true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("cuisine_1_name_1");

// 22
console.log ("\n22 --");
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

console.log ("\n22 - No index: ");
xpl = db.restaurants.find ({grades: {
	$all: [
		{$elemMatch: {
			date: ISODate('2014-08-11T00:00:00.000Z'),
			grade: 'A',
			score: 11}}]}}, {
				_id: false,
				restaurant_id: true,
				name: true,
				grades: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"grades.date\" defined: ");
db.restaurants.createIndex ({"grades.date": 1});
xpl = db.restaurants.find ({grades: {
	$all: [
		{$elemMatch: {
			date: ISODate('2014-08-11T00:00:00.000Z'),
			grade: 'A',
			score: 11}}]}}, {
				_id: false,
				restaurant_id: true,
				name: true,
				grades: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ("grades.date_1");

// 23
console.log ("\n23 --");
console.log (db.restaurants.find ({$and: [
	{'grades.1.grade': 'A'},
	{'grades.1.score': 9},
	{'grades.1.date': ISODate('2014-08-11T00:00:00Z')}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		grades: true }));

console.log ("\n23 - No index: ");
xpl = db.restaurants.find ({$and: [
	{'grades.1.grade': 'A'},
	{'grades.1.score': 9},
	{'grades.1.date': ISODate('2014-08-11T00:00:00Z')}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		grades: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"grades.date\" defined: ");
// db.restaurants.createIndex ({'grades.1.grade': 1, 'grades.1.score': 1, 'grades.1.date': 1});
db.restaurants.createIndex ({'grades.1.date': 1});
xpl = db.restaurants.find ({$and: [
	{'grades.1.grade': 'A'},
	{'grades.1.score': 9},
	{'grades.1.date': ISODate('2014-08-11T00:00:00Z')}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		grades: true }).explain ("executionStats");
showExplain (xpl);
// db.restaurants.dropIndex ('grades.1.grade_1_grades.1.score_1_grades.1.date_1');
db.restaurants.dropIndex ('grades.1.date_1');

// 24
console.log ("\n24 --");
console.log (db.restaurants.find ({$and: [
	{'address.coord.1': {$gt: 42}},
	{'address.coord.1': {$lt: 52}}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		address: true }));

console.log ("\n24 - No index: ");
xpl = db.restaurants.find ({$and: [
	{'address.coord.1': {$gt: 42}},
	{'address.coord.1': {$lt: 52}}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		address: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"address.coord.1\" defined: ");
db.restaurants.createIndex ({'address.coord.1': 1});
xpl = db.restaurants.find ({$and: [
	{'address.coord.1': {$gt: 42}},
	{'address.coord.1': {$lt: 52}}]}, {
		_id: false,
		restaurant_id: true,
		name: true,
		address: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('address.coord.1_1');

// 25
console.log ("\n25 --");
console.log (db.restaurants.find ().sort ({name: +1}));

console.log ("\n25 - No index: ");
xpl = db.restaurants.find ().sort ({name: +1}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"name\" defined: ");
db.restaurants.createIndex ({'name': 1});
xpl = db.restaurants.find ().sort ({name: +1}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ({'name': 1});
console.log ("\nAn index by \"name\" seem to have no effect.\n");

// 26
console.log ("\n26 -- ");
console.log (db.restaurants.find ().sort ({name: -1}));
console.log ("\nAs before, an index by \"name\" seem to have no effect.\n");

// 27
console.log ("\n27 -- ");
console.log (db.restaurants.find ().sort ({cuisine: +1, borough: -1}));

console.log ("\n27 - No index: ");
xpl = db.restaurants.find ().sort ({cuisine: +1, borough: -1}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"cuisine\" and \"borough\" defined: ");
db.restaurants.createIndex ({'name': 1, borough: -1});
xpl = db.restaurants.find ().sort ({cuisine: +1, borough: -1}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('name_1_borough_-1');
console.log ("\nAn index by \"cuisine\" and \"borough\" seem to have no effect.\n");

// 28
console.log ("\n28 -- ");
console.log (db.restaurants.find ({'address.street': {$eq: ''}}));

console.log ("\n28 - No index: ");
xpl = db.restaurants.find ({'address.street': {$eq: ''}}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"address.street\" defined: ");
db.restaurants.createIndex ({'address.street': 1});
xpl = db.restaurants.find ({'address.street': {$eq: ''}}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('address.street_1');

// 29
console.log ("\n29 -- ");
console.log (db.restaurants.find ({$and: [
	{'address.coord.0': {$type: 'double'}},
	{'address.coord.1': {$type: 'double'}}]}));

console.log ("\n29 - No index: ");
xpl = db.restaurants.find ({$and: [
	{'address.coord.0': {$type: 'double'}},
	{'address.coord.1': {$type: 'double'}}]}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"address.coord\" defined: ");
db.restaurants.createIndex ({'address.coord': 1});
xpl = db.restaurants.find ({$and: [
	{'address.coord.0': {$type: 'double'}},
	{'address.coord.1': {$type: 'double'}}]}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('address.coord_1');
console.log ("\nAn index by \"address.coord\" seem to have no effect.\n");

// 30
console.log ("\n30 -- ");
console.log (db.restaurants.find ({'grades.score': {$mod: [7, 0]}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	'grades.grade': true}));

console.log ("\n30 - No index: ");
xpl = db.restaurants.find ({'grades.score': {$mod: [7, 0]}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	'grades.grade': true}).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"grades.score\" defined: ");
db.restaurants.createIndex ({'grades.score': 1});
xpl = db.restaurants.find ({'grades.score': {$mod: [7, 0]}}, {
	_id: false,
	restaurant_id: true,
	name: true,
	'grades.grade': true}).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('grade.score');
console.log ("\nAn index by \"grades.score\" seem worsen calculation time !!!\n");

// 31
console.log ("\n31 -- ");
console.log (db.restaurants.find ({name: /^.*mon.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }));

console.log ("\n31 - No index: ");
xpl = db.restaurants.find ({name: /^.*mon.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"name\" defined: ");
db.restaurants.createIndex ({'name': 1});
xpl = db.restaurants.find ({name: /^.*mon.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('name_1');

// 32
console.log ("\n32 -- ");
console.log (db.restaurants.find ({name: /^Mad.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }));

console.log ("\n32 - No index: ");
xpl = db.restaurants.find ({name: /^Mad.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);

console.log ("\nIndex for \"name\" defined: ");
db.restaurants.createIndex ({'name': 1});
xpl = db.restaurants.find ({name: /^Mad.*$/}, {
	_id: false,
	name: true,
	borough: true,
	'address.coord': true,
	cuisine: true }).explain ("executionStats");
showExplain (xpl);
db.restaurants.dropIndex ('name_1');

