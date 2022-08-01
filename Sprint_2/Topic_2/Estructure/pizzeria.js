/*
 * Sprint 2 Topic 2 (Estructure) Level 1 Exercise 2
 *
 * Pizzeria restaurant.
 */

db = connect('mongodb://localhost/pizzeria' );

db.purchase.drop ()

db.purchase.insertOne ({
orderH    : 'null',
orderD    : 'null',
customer  : 'null',
employee  : 'null',
restaurant: 'null',
purDT     : '2022-02-01 16:06:00',
delDT     : '2022-02-01 16:26:00',
deliver   : 'atHome',
total     : '10.60' })

db.purchase.updateOne ({orderH: 'null'}, {$set: { orderH: {
	hamburguer: 'null',
	n         : 1
 }}})

db.purchase.updateOne ({'orderH.hamburguer': 'null'},
	{$set: { 'orderH.hamburguer': {
		idham   : 1
		name    : 'Cheese',
		descript: 'null',
		look    : 'null',
		pricing : 2.50 }}})

