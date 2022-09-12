/*
 * Sprint 2 Topic 2 (Estructure) Level 1 Exercise 2
 *
 * Pizzeria restaurant.
 */

db = connect('mongodb://localhost/pizzeria' );

db.purchase.drop ();

db.purchase.insertOne ({
orderH    : 'null',
orderD    : 'null',
customer  : 'null',
employee  : 'null',
restaurant: 'null',
purDT     : '2022-02-01 16:06:00',
delDT     : '2022-02-01 16:26:00',
deliver   : 'atHome',
total     : '10.60' });

db.purchase.updateMany ({orderH: 'null'},
	{$set: { orderH: [{
		hamburguer: 'null',
		n         : 1
 }]}});

db.purchase.updateOne ({'orderH.0.hamburguer': 'null'},
	{$set: { 'orderH.0.hamburguer': {
		idham   : 1,
		name    : 'Cheese',
		descript: 'null',
		look    : 'null',
		pricing : 2.50 }}});

db.purchase.updateMany ({orderD: 'null'},
	{$set: {orderD: [{
		drink: 'null',
		n    : 2 }]}});

db.purchase.updateOne ({'orderD.0.drink': 'null'},
	{$set: { 'orderD.0.drink': {
		iddri   : 1,
		name    : 'CocaCola',
		descript: 'null',
		look    : 'null',
		pricing : 0.75 }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 1,
		locality: 'null',
		fName   : 'John',
		lName   : 'Smith',
		mName   : 'Rogers',
		address : 'El Prat St. 21',
		zipC    : '08100',
		phone   : '699333555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 1,
		department: 'null',
		name      : 'Barcelona' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 1,
		name: 'Barcelona' }}});

db.purchase.updateOne ({employee: 'null'},
	{$set: { employee: {
		idemp: 2,
		fName  : 'Ana',
		lName  : 'Miró',
		mName  : 'Adrian',
		NIF    : '33111444G',
		phone  : '661999333',
		task   : 'delivery' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres: 1,
		locality: 'null',
		address:'Valley St. 300',
		zipC:'33200'
	}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 1,
		department: 'null',
		name      : 'Barcelona' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 1,
		name: 'Barcelona' }}});

// Second purchase.

db.purchase.insertOne ({
orderD    : 'null',
orderP    : 'null',
customer  : 'null',
employee  : 'null',
restaurant: 'null',
purDT     : '2022-03-10 09:10:00',
delDT     : '2022-03-10 09:23:00',
deliver   : 'atHome',
total     : '12.30' });

db.purchase.updateMany ({orderD: 'null'},
	{$set: {orderD: [{
		drink: 'null',
		n    : 2 }]}});

db.purchase.updateOne ({'orderD.0.drink': 'null'},
	{$set: { 'orderD.0.drink': {
		iddri   : 2,
		name    : 'Beer',
		descript: 'null',
		look    : 'null',
		pricing : 1.05 }}});

db.purchase.updateMany ({orderP: 'null'},
	{$set: {orderP: [{
		pizza: 'null',
		n: 2 }]}});

db.purchase.updateOne ({'orderP.0.pizza': 'null'},
	{$set: { 'orderP.0.pizza': {
		idpiz   : 1,
		category: 'null',
		name    : 'Olive and carrots',
		descript: 'null',
		look    : 'null',
		pricing : 5.25
	}}});

db.purchase.updateOne ({'orderP.0.pizza.category': 'null'},
	{$set: { 'orderP.0.pizza.category': {
		idcat: 1,
		name: 'Vegetable',
		catD: '2021-7-12' }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 2,
		locality: 'null',
		fName   : 'Mike',
		lName   : 'Stanton',
		mName   : 'Smith',
		address : 'Mountain St. 100',
		zipC    : '09001',
		phone   : '699444555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

db.purchase.updateOne ({employee: 'null'},
	{$set: { employee: {
		idemp: 4,
		fName  : 'Pilar',
		lName  : 'Domínguez',
		mName  : 'Lobo',
		NIF    : '11888111Z',
		phone  : '663222111',
		task   : 'delivery' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres   : 2,
		locality: 'null',
		address : 'Sea Av. 501',
		zipC    : '99301'
		}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

// Third purchase.

db.purchase.insertOne ({
orderH    : 'null',
orderD    : 'null',
orderP    : 'null',
customer  : 'null',
employee  : 'null',
restaurant: 'null',
purDT     : '2022-03-10 09:10:00',
delDT     : 'null',
deliver   : 'onRest',
total     : '25.30' });

db.purchase.updateMany ({orderH: 'null'},
	{$set: { orderH: [{
		hamburguer: 'null',
		n         : 1
 }]}});

db.purchase.updateOne ({'orderH.0.hamburguer': 'null'},
	{$set: { 'orderH.0.hamburguer': {
		idham   : 1,
		name    : 'Cheese',
		descript: 'null',
		look    : 'null',
		pricing : 2.50 }}});

db.purchase.updateMany ({orderD: 'null'},
	{$set: { orderD: [{
		drink: 'null',
		n    : 1 }, {
		drink: 'null',
		n    : 1 }]}});

db.purchase.updateOne ({'orderD.0.drink': 'null'},
	{$set: { 'orderD.0.drink': {
		iddri   : 1,
		name    : 'CocaCola',
		descript: 'null',
		look    : 'null',
		pricing : 0.75
	}}});

db.purchase.updateOne ({'orderD.1.drink': 'null'},
	{$set: { 'orderD.1.drink': {
		iddri   : 2,
		name    : 'Beer',
		descript: 'null',
		look    : 'null',
		pricing : 1.05 }}});

db.purchase.updateMany ({orderP: 'null'},
	{$set: { orderP: [{
		pizza: 'null',
		n    : 1 }, {
		pizza: 'null',
		n    : 1 }]}});

db.purchase.updateOne ({'orderP.0.pizza': 'null'},
	{$set: { 'orderP.0.pizza': {
		idpiz   : 2,
		category: 'null',
		name    : 'Four cheese',
		descript: 'null',
		look    : 'null',
		pricing : 7.75
	}}});

db.purchase.updateOne ({'orderP.0.pizza.category': 'null'},
	{$set: { 'orderP.0.pizza.category': {
		idcat: 2,
		name: 'Cheese',
		catD: '2022-2-25' }}});

db.purchase.updateOne ({'orderP.1.pizza': 'null'},
	{$set: { 'orderP.1.pizza': {
		idpiz   : 3,
		category: 'null',
		name    : 'Classic',
		descript: 'null',
		look    : 'null',
		pricing : 4.10
	}}});

db.purchase.updateOne ({'orderP.1.pizza.category': 'null'},
	{$set: { 'orderP.1.pizza.category': {
		idcat: 3,
		name: 'Ham',
		catD: '2020-1-10' }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 3,
		locality: 'null',
		fName   : 'Ann',
		lName   : 'OReilly',
		mName   : 'Stark',
		address : 'River St. 1101',
		zipC    : '20203',
		phone   : '699555555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 1,
		department: 'null',
		name      : 'Barcelona' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 1,
		name: 'Barcelona' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres   : 1,
		locality: 'null',
		address : 'Valley St. 300',
		zipC    : '33200'
		}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 1,
		department: 'null',
		name      : 'Barcelona' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 1,
		name: 'Barcelona' }}});

// Fourth purchase.

db.purchase.insertOne ({
orderH    : 'null',
orderD    : 'null',
customer  : 'null',
employee  : 'null',
restaurant: 'null',
purDT     : '2022-03-10 09:20:00',
delDT     : 'null',
deliver   : 'onRest',
total     : '10.20' });

db.purchase.updateMany ({orderH: 'null'},
	{$set: { orderH: [{
		hamburguer: 'null',
		n         : 2
 }]}});

db.purchase.updateOne ({'orderH.0.hamburguer': 'null'},
	{$set: { 'orderH.0.hamburguer': {
		idham   : 1,
		name    : 'Cheese',
		descript: 'null',
		look    : 'null',
		pricing : 2.50 }}});

db.purchase.updateMany ({orderD: 'null'},
	{$set: { orderD: [{
		drink: 'null',
		n    : 1 }, {
		drink: 'null',
		n    : 1 }]}});

db.purchase.updateOne ({'orderD.0.drink': 'null'},
	{$set: { 'orderD.0.drink': {
		iddri   : 3,
		name    : 'Beer',
		descript: 'null',
		look    : 'null',
		pricing : 1.05
	}}});

db.purchase.updateOne ({'orderD.1.drink': 'null'},
	{$set: { 'orderD.1.drink': {
		iddri   : 2,
		name    : 'Orange juice',
		descript: 'null',
		look    : 'null',
		pricing : 1.25 }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 4,
		locality: 'null',
		fName   : 'Sarah',
		lName   : 'Connor',
		mName   : 'Michaels',
		address : 'Lake St. 12',
		zipC    : '50602',
		phone   : '699666555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres   : 2,
		locality: 'null',
		address : 'Sea Av. 501',
		zipC    : '99301'
		}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

// Fifth purchase.

db.purchase.insertOne ({
orderH    : 'null',
orderD    : 'null',
orderP    : 'null',
customer  : 'null',
employee  : 'notNull',
restaurant: 'null',
purDT     : '2022-04-11 10:10:00',
delDT     : '2022-04-11 10:15:00',
deliver   : 'atHome',
total     : '30.75' });

db.purchase.updateMany ({orderH: 'null'},
	{$set: { orderH: [{
		hamburguer: 'null',
		n         : 1}, {
		hamburguer: 'null',
		n         : 2 }]}});

db.purchase.updateMany ({orderD: 'null'},
	{$set: { orderD: [{
 		drink     : 'null',
		n         : 4 }]}});

db.purchase.updateMany ({orderP: 'null'},
	{$set: { orderP: [{
		pizza     : 'null',
		n         : 2 }]}});

db.purchase.updateOne ({'orderH.0.hamburguer': 'null'},
	{$set: { 'orderH.0.hamburguer': {
		idham   : 2,
		name    : 'Double',
		descript: 'null',
		look    : 'null',
		pricing : 3.25 }}});

db.purchase.updateOne ({'orderH.1.hamburguer': 'null'},
	{$set: { 'orderH.1.hamburguer': {
		idham   : 3,
		name    : 'Max',
		descript: 'null',
		look    : 'null',
		pricing : 4.50 }}});

db.purchase.updateOne ({'orderD.0.drink': 'null'},
	{$set: { 'orderD.0.drink': {
		iddri   : 3,
		name    : 'Beer',
		descript: 'null',
		look    : 'null',
		pricing : 1.05 }}});

db.purchase.updateOne ({'orderP.0.pizza': 'null'},
	{$set: { 'orderP.0.pizza': {
		idpiz   : 1,
		category: 'null',
		name    : 'Olive and carrots',
		descript: 'null',
		look    : 'null',
		pricing : 5.25
	}}});

db.purchase.updateOne ({'orderP.0.pizza.category': 'null'},
	{$set: { 'orderP.0.pizza.category': {
		idcat: 1,
		name: 'Vegetable',
		catD: '2021-7-12' }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 1,
		locality: 'null',
		fName   : 'John',
		lName   : 'Smith',
		mName   : 'Rogers',
		address : 'El Prat St. 21',
		zipC    : '08100',
		phone   : '699333555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 1,
		department: 'null',
		name      : 'Barcelona' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 1,
		name: 'Barcelona' }}});

db.purchase.updateOne ({employee: 'notNull'},
	{$set: { employee: {
		idemp: 4,
		fName  : 'Pilar',
		lName  : 'Domínguez',
		mName  : 'Lobo',
		NIF    : '11888111Z',
		phone  : '663222111',
		task   : 'delivery' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres   : 2,
		locality: 'null',
		address : 'Sea Av. 501',
		zipC    : '99301'
		}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

// Sixth purchase.

db.purchase.insertOne ({
orderH    : 'null',
orderD    : 'null',
orderP    : 'null',
customer  : 'null',
employee  : 'notNull',
restaurant: 'null',
purDT     : '2022-05-12 11:20:00',
delDT     : '2022-05-12 11:30:00',
deliver   : 'atHome',
total     : '10.20' });

db.purchase.updateMany ({orderH: 'null'},
	{$set: { orderH: [{
		hamburguer: 'null',
		n         : 1
 }]}});

db.purchase.updateOne ({'orderH.0.hamburguer': 'null'},
	{$set: { 'orderH.0.hamburguer': {
		idham   : 1,
		name    : 'Cheese',
		descript: 'null',
		look    : 'null',
		pricing : 2.50 }}});

db.purchase.updateMany ({orderD: 'null'},
	{$set: {orderD: [{
		drink: 'null',
		n    : 2 }]}});

db.purchase.updateOne ({'orderD.0.drink': 'null'},
	{$set: { 'orderD.0.drink': {
		iddri   : 1,
		name    : 'CocaCola',
		descript: 'null',
		look    : 'null',
		pricing : 0.75 }}});

db.purchase.updateOne ({orderP: 'null'},
	{$set: {orderP: [{
		pizza: 'null',
		n: 1 }]}});

db.purchase.updateOne ({'orderP.0.pizza': 'null'},
	{$set: { 'orderP.0.pizza': {
		idpiz   : 1,
		category: 'null',
		name    : 'Olive and carrots',
		descript: 'null',
		look    : 'null',
		pricing : 5.25
	}}});

db.purchase.updateOne ({'orderP.0.pizza.category': 'null'},
	{$set: { 'orderP.0.pizza.category': {
		idcat: 1,
		name: 'Vegetable',
		catD: '2021-7-12' }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 2,
		locality: 'null',
		fName   : 'Mike',
		lName   : 'Stanton',
		mName   : 'Smith',
		address : 'Mountain St. 100',
		zipC    : '09001',
		phone   : '699444555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

db.purchase.updateOne ({employee: 'notNull'},
	{$set: { employee: {
		idemp: 2,
		fName  : 'Ana',
		lName  : 'Miró',
		mName  : 'Adrian',
		NIF    : '33111444G',
		phone  : '661999333',
		task   : 'delivery' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres   : 1,
		locality: 'null',
		address : 'Valley St. 300',
		zipC    : '33200'
		}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 1,
		department: 'null',
		name      : 'Barcelona' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 1,
		name: 'Barcelona' }}});

// Seventh purchase.

db.purchase.insertOne ({
orderP    : 'null',
customer  : 'null',
employee  : 'notNull',
restaurant: 'null',
purDT     : '2022-06-22 16:50:00',
delDT     : '2022-06-22 17:01:00',
deliver   : 'atHome',
total     : '2.75' });

db.purchase.updateMany ({orderP: 'null'},
	{$set: {orderP: [{
		pizza: 'null',
		n: 1 }]}});

db.purchase.updateOne ({'orderP.0.pizza': 'null'},
	{$set: { 'orderP.0.pizza': {
		idpiz   : 1,
		category: 'null',
		name    : 'Olive and carrots',
		descript: 'null',
		look    : 'null',
		pricing : 5.25
	}}});

db.purchase.updateOne ({'orderP.0.pizza.category': 'null'},
	{$set: { 'orderP.0.pizza.category': {
		idcat: 1,
		name: 'Vegetable',
		catD: '2021-7-12' }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 4,
		locality: 'null',
		fName   : 'Sarah',
		lName   : 'Connor',
		mName   : 'Michaels',
		address : 'Lake St. 12',
		zipC    : '50602',
		phone   : '699666555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

db.purchase.updateOne ({employee: 'notNull'},
	{$set: { employee: {
		idemp: 2,
		fName  : 'Ana',
		lName  : 'Miró',
		mName  : 'Adrian',
		NIF    : '33111444G',
		phone  : '661999333',
		task   : 'delivery' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres   : 1,
		locality: 'null',
		address : 'Valley St. 300',
		zipC    : '33200'
		}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 1,
		department: 'null',
		name      : 'Barcelona' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 1,
		name: 'Barcelona' }}});

// Eigth purchase.

db.purchase.insertOne ({
orderH    : 'null',
orderD    : 'null',
orderP    : 'null',
customer  : 'null',
employee  : 'notNull',
restaurant: 'null',
purDT     : '2022-07-23 17:20:00',
delDT     : '2022-07-23 17:28:00',
deliver   : 'atHome',
total     : '45.20' });

db.purchase.updateMany ({orderH: 'null'},
	{$set: { orderH: [{
		hamburguer: 'null',
		n         : 2}, {
		hamburguer: 'null',
		n         : 2 }]}});

db.purchase.updateOne ({'orderH.0.hamburguer': 'null'},
	{$set: { 'orderH.0.hamburguer': {
		idham   : 2,
		name    : 'Double',
		descript: 'null',
		look    : 'null',
		pricing : 3.25 }}});

db.purchase.updateOne ({'orderH.1.hamburguer': 'null'},
	{$set: { 'orderH.1.hamburguer': {
		idham   : 1,
		name    : 'Cheese',
		descript: 'null',
		look    : 'null',
		pricing : 2.50 }}});

db.purchase.updateMany ({orderD: 'null'},
	{$set: { orderD: [{
		drink: 'null',
		n    : 2 }, {
		drink: 'null',
		n    : 2 }, {
		drink: 'null',
		n    : 1 }]}});

db.purchase.updateOne ({'orderD.0.drink': 'null'},
	{$set: { 'orderD.0.drink': {
		iddri   : 1,
		name    : 'CocaCola',
		descript: 'null',
		look    : 'null',
		pricing : 0.75 }}});

db.purchase.updateOne ({'orderD.1.drink': 'null'},
	{$set: { 'orderD.1.drink': {
		iddri   : 2,
		name    : 'Orange juice',
		descript: 'null',
		look    : 'null',
		pricing : 1.25 }}});

db.purchase.updateOne ({'orderD.2.drink': 'null'},
	{$set: { 'orderD.2.drink': {
		iddri   : 3,
		name    : 'Beer',
		descript: 'null',
		look    : 'null',
		pricing : 1.05
	}}});

db.purchase.updateMany ({orderP: 'null'},
	{$set: { orderP: [{
		pizza: 'null',
		n    : 1 }, {
		pizza: 'null',
		n    : 1 }, {
		pizza: 'null',
		n    : 2 }]}});

db.purchase.updateOne ({'orderP.0.pizza': 'null'},
	{$set: { 'orderP.0.pizza': {
		idpiz   : 1,
		category: 'null',
		name    : 'Olive and carrots',
		descript: 'null',
		look    : 'null',
		pricing : 5.25
	}}});

db.purchase.updateOne ({'orderP.0.pizza.category': 'null'},
	{$set: { 'orderP.0.pizza.category': {
		idcat: 1,
		name: 'Vegetable',
		catD: '2021-7-12' }}});

db.purchase.updateOne ({'orderP.1.pizza': 'null'},
	{$set: { 'orderP.1.pizza': {
		idpiz   : 2,
		category: 'null',
		name    : 'Four cheese',
		descript: 'null',
		look    : 'null',
		pricing : 7.75
	}}});

db.purchase.updateOne ({'orderP.1.pizza.category': 'null'},
	{$set: { 'orderP.1.pizza.category': {
		idcat: 2,
		name: 'Cheese',
		catD: '2022-2-25' }}});

db.purchase.updateOne ({'orderP.2.pizza': 'null'},
	{$set: { 'orderP.2.pizza': {
		idpiz   : 3,
		category: 'null',
		name    : 'Classic',
		descript: 'null',
		look    : 'null',
		pricing : 4.10
	}}});

db.purchase.updateOne ({'orderP.2.pizza.category': 'null'},
	{$set: { 'orderP.2.pizza.category': {
		idcat: 3,
		name: 'Ham',
		catD: '2020-1-10' }}});

db.purchase.updateOne ({customer: 'null'},
	{$set: { customer: {
		idcus   : 4,
		locality: 'null',
		fName   : 'Sarah',
		lName   : 'Connor',
		mName   : 'Michaels',
		address : 'Lake St. 12',
		zipC    : '50602',
		phone   : '699666555' }}});

db.purchase.updateOne ({'customer.locality': 'null'},
	{$set: { 'customer.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'customer.locality.department': 'null'},
	{$set: { 'customer.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

db.purchase.updateOne ({employee: 'notNull'},
	{$set: { employee: {
		idemp: 4,
		fName  : 'Pilar',
		lName  : 'Domínguez',
		mName  : 'Lobo',
		NIF    : '11888111Z',
		phone  : '663222111',
		task   : 'delivery' }}});

db.purchase.updateOne ({restaurant: 'null'},
	{$set: { restaurant: {
		idres   : 2,
		locality: 'null',
		address : 'Sea Av. 501',
		zipC    : '99301'
		}}});

db.purchase.updateOne ({'restaurant.locality': 'null'},
	{$set: { 'restaurant.locality': {
		idloc     : 2,
		department: 'null',
		name      : 'La Coruña' }}});

db.purchase.updateOne ({'restaurant.locality.department': 'null'},
	{$set: { 'restaurant.locality.department': {
		iddep: 2,
		name: 'La coruña' }}});

