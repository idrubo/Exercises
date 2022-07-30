/*
 * Sprint 2 Topic 2 (Estructure) Level 1 Exercise 1
 *
 * Optician workshop.
 */

db = connect('mongodb://localhost/opticians' );

db.buy.drop()

/* First buy */

db.buy.insertMany ([{
	customer:'null',
	glasses :'null',
	employee:'null',
	rDate   :'2022-01-10' }])

db.buy.updateOne ({customer: 'null'}, {$set: { customer: {
	idcus  : 1,
	name   : 'Manuel Perez',
	address: 'C/ de los Manzanos',
	phone  : '666333222',
	email  : 'mp@mp.com',
	rDate  : '1980-03-03',
	referer: 'null' }}})

db.buy.updateOne ({glasses: 'null'}, {$set: { glasses: {
	idgla   : 1,
	brand   : 'null',
	lPower  : '1.0',
	rPower  : '1.5',
	mounting: 'metallic',
	mColor  : 'gold',
	rColor  : 'Dark Shade',
	lcolor  : 'Dark Shade',
	pricing : '35.12' }}})

db.buy.updateOne ({'glasses.brand': 'null'},
	{$set: { 'glasses.brand': {
		idbra   : 1,
		provider: 'null',
		name    : 'SunJoy'
	}}})

db.buy.updateOne ({'glasses.brand.provider': 'null'},
	{$set: { 'glasses.brand.provider': {
		idpro  : 1,
		name   : 'Perfect Glasses',
		street : 'First St.',
		nbr    : '100',
		flr    : '10',
		door   : 'NULL',
		city   : 'London',
		zipCode: '01231',
		country: 'UK',
		phone  : '32555666',
		fax    : '32555667',
		NIF    : '11222222F'
	}}})

db.buy.updateOne ({employee: 'null'}, {$set: { employee: {
	idemp: 1,
	name : 'Pedro Lara'
}}})

/* Second buy */

db.buy.insertMany ([{
	customer:'null',
	glasses :'null',
	employee:'null',
	rDate   :'2022-06-05' }])

db.buy.updateOne ({customer: 'null'}, {$set: { customer: {
	idcus  : 1 }}})

db.buy.updateOne ({glasses: 'null'}, {$set: { glasses: {
	idgla   : 2,
	brand   : 'null',
	lPower  : '0.5',
	rPower  : '0.5',
	mounting: 'metallic',
	mColor  : 'Silver',
	rColor  : 'Green',
	lcolor  : 'Green',
	pricing : '22.85' }}})

db.buy.updateOne ({'glasses.brand': 'null'},
	{$set: { 'glasses.brand': {
		idbra   : 2,
		provider: 'null',
		name    : 'SunBeauty' }}})

db.buy.updateOne ({'glasses.brand.provider': 'null'},
	{$set: { 'glasses.brand.provider': {
		idpro: 1 }}})

db.buy.updateOne ({employee: 'null'}, {$set: { employee: {
	idemp: 2,
	name : 'Ana Santos' }}})

/* Third buy */

db.buy.insertMany ([{
	customer:'null',
	glasses :'null',
	employee:'null',
	rDate   :'2022-03-28' }])

db.buy.updateOne ({customer: 'null'}, {$set: { customer: {
	idcus  : 2,
	name   : 'Sara Pizarro',
	address: 'C/ de los Naranjos',
	phone  : '999444111',
	email  : 'sp@prv.net',
	rDate  : '1991-07-25',
	referer: 1 }}})

db.buy.updateOne ({glasses: 'null'}, {$set: { glasses: {
	idgla   : 3,
	brand   : 'null',
	lPower  : '2.0',
	rPower  : '2.5',
	mounting: 'polymer',
	mColor  : 'Black',
	rColor  : 'Black',
	lcolor  : 'Black',
	pricing : '38.99' }}})

db.buy.updateOne ({'glasses.brand': 'null'},
	{$set: { 'glasses.brand': {
		idbra   : 3,
		provider: 'null',
		name    : 'EyeCorrect' }}})

db.buy.updateOne ({'glasses.brand.provider': 'null'},
	{$set: { 'glasses.brand.provider': {
		idpro  : 2,
		name   : 'Shiny Eye Works',
		street : 'Second Av.',
		nbr    : '23',
		flr    : 'NULL',
		door   : 'NULL',
		city   : 'New York',
		zipCode: '11555',
		country: 'US',
		phone  : '32555666',
		fax    : '32555667',
		NIF    : '99222242R' }}})

db.buy.updateOne ({employee: 'null'}, {$set: { employee: {
	idemp: 1 }}})

/* Fourth buy */

db.buy.insertMany ([{
	customer:'null',
	glasses :'null',
	employee:'null',
	rDate   :'2021-04-10' }])

db.buy.updateOne ({customer: 'null'}, {$set: { customer: {
	idcus  : 3,
	name   : 'Ana Gonzalez',
	address: 'C/ de los Nísperos',
	phone  : '996112111',
	email  : 'ag@prv.net',
	rDate  : '1971-08-10',
	referer: 2 }}})

db.buy.updateOne ({glasses: 'null'}, {$set: { glasses: {
	idgla: 3,
	brand: 'null' }}})

db.buy.updateOne ({'glasses.brand': 'null'},
	{$set: { 'glasses.brand': {
		idbra   : 3,
	  provider: 'null' }}})

db.buy.updateOne ({'glasses.brand.provider': 'null'},
	{$set: { 'glasses.brand.provider': {
		idpro  : 3,
		name   : 'Healthy Eye',
		street : 'Fifth Av.',
		nbr    : '500',
		flr    : 'NULL',
		door   : 'NULL',
		city   : 'New York',
		zipCode: '11555',
		country: 'US',
		phone  : '32999111',
		fax    : '32999112',
		NIF    : '98444686Q' }}})

db.buy.updateOne ({employee: 'null'}, {$set: { employee: {
	idemp: 2 }}})

/* Fifth buy */

db.buy.insertMany ([{
	customer:'null',
	glasses :'null',
	employee:'null',
	rDate   :'2021-11-01' }])

db.buy.updateOne ({customer: 'null'}, {$set: { customer: {
	idcus  : 1, }}})

db.buy.updateOne ({glasses: 'null'}, {$set: { glasses: {
	idgla: 1,
	brand: 'null' }}})

db.buy.updateOne ({'glasses.brand': 'null'},
	{$set: { 'glasses.brand': {
		idbra   : 1,
	  provider: 'null' }}})

db.buy.updateOne ({'glasses.brand.provider': 'null'},
	{$set: { 'glasses.brand.provider': {
		idpro  : 1 }}})

db.buy.updateOne ({employee: 'null'}, {$set: { employee: {
	idemp: 1 }}})

