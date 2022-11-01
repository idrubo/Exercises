/*
 * Sprint 2 Topic 2 (Estructure) Level 1 Exercise 2
 *
 * Pizzeria restaurant.
 *
 */

db = connect('mongodb://localhost/pizzeria');
// db = connect('mongodb://localhost/pizzeria', 'ita', 'ita');

db.auth ('ita', 'ita');

db.purchase.drop ();
db.orderP.drop ();
db.orderH.drop ();
db.orderD.drop ();
db.pizza.drop ();
db.category.drop ();
db.hamburguer.drop ();
db.drink.drop ();
db.customer.drop ();
db.locality.drop ();
db.department.drop ();
db.employee.drop ();
db.restaurant.drop ();

// Purchases

oidOrhham1 = ObjectId ();
oidOrddri1 = ObjectId ();

oidPur1 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur1,
  idpurcus: oidPurcus1,
  idpuremp: oidPuremp2,
  idpurres: oidPurres1,
  purDT   : '2022-02-01 16:06:00',
  delDT   : '2022-02-01 16:26:00',
  deliver : 'atHome',
  total   : '10.60'
});

// Second purchase.

oidOrddri3 = ObjectId ();
oidOrppiz1 = ObjectId ();

oidPur2 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur2,
  idpurcus: oidPurcus2,
  idpuremp: oidPuremp4,
  idpurres: oidPurres2,
  purDT   : '2022-03-10 09:10:00',
  delDT   : '2022-03-10 09:23:00',
  deliver : 'atHome',
  total   : '12.30'
});

// Third purchase.

oidOrddri2 = ObjectId ();
oidOrppiz2 = ObjectId ();

oidPur3 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur3,
  idpurcus: oidPurcus3,
  employee: 'null',
  idpurres: oidPurres1,
  purDT   : '2022-03-10 09:10:00',
  delDT   : 'null',
  deliver : 'onRest',
  total   : '25.30'
});

// Fourth purchase.

oidPur4 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur4,
  idpurcus: oidPurcus4,
  employee: 'null',
  idpurres: oidPurres2,
  purDT   : '2022-03-10 09:20:00',
  delDT   : 'null',
  deliver : 'onRest',
  total   : '10.20' });

// Fifth purchase.

oidOrhham2 = ObjectId ();
oidOrhham3 = ObjectId ();

oidPur5 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur5,
  idpurcus: oidPurcus1,
  idpuremp: oidPuremp4,
  idpurres: oidPurres2,
  purDT   : '2022-04-11 10:10:00',
  delDT   : '2022-04-11 10:15:00',
  deliver : 'atHome',
  total   : '30.75'
});

// Sixth purchase.

oidPur6 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur6,
  idpurcus: oidPurcus2,
  idpuremp: oidPuremp2,
  idpurres: oidPurres1,
  purDT   : '2022-05-12 11:20:00',
  delDT   : '2022-05-12 11:30:00',
  deliver : 'atHome',
  total   : '10.20' });

// Seventh purchase.

oidPur7 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur7,
  idpurcus: oidPurcus4,
  idpuremp: oidPuremp2,
  idpurres: oidPurres1,
  purDT   : '2022-06-22 16:50:00',
  delDT   : '2022-06-22 17:01:00',
  deliver : 'atHome',
  total   : '2.75'
});

// Eigth purchase.

oidPur8 = ObjectId ();
db.purchase.insertOne ({
  _id     : oidPur8,
  idpurcus: oidPurcus4,
  idpuremp: oidPuremp4,
  idpurres: oidPurres2,
  purDT   : '2022-07-23 17:20:00',
  delDT   : '2022-07-23 17:28:00',
  deliver : 'atHome',
  total   : '45.20'
});

// orderP

db.orderP.insertOne ({
  idorppur: oidPur2,
  idorppiz: oidOrppiz1,
  n       : 2
});

db.orderP.insertOne ({
  idorppur: oidPur3,
  idorppiz: oidOrppiz2,
  n       : 1
});

db.orderP.insertOne ({
  idorppur: oidPur3,
  idorppiz: oidOrppiz3,
  n    : 1
});

db.orderP.insertOne ({
  idorppur: oidPur5,
  idorppiz: oidOrppiz1,
  n         : 2
});

db.orderP.insertOne ({
  idorppur: oidPur6,
  idorppiz: oidOrppiz1,
  n       : 1
});

db.orderP.insertOne ({
  idorppur: oidPur7,
  idorppiz: oidOrppiz1,
  n       : 1
});

db.orderP.insertOne ({
  idorppur: oidPur8,
  idorppiz: oidOrppiz1,
  n    : 1
});

db.orderP.insertOne ({
  idorppur: oidPur8,
  idorppiz: oidOrppiz2,
  n    : 1
});

db.orderP.insertOne ({
  idorppur: oidPur8,
  idorppiz: oidOrppiz3,
  n       : 2
});

// orderD

db.orderD.insertOne ({
  idordpur: oidPur1,
  idorddri: oidOrddri1,
  n       : 2
});

db.orderD.insertOne ({
  idordpur: oidPur2,
  idorddri: oidOrddri3,
  n       : 2
});

db.orderD.insertOne ({
   idordpur: oidPur3,
   idorddri: oidOrddri1,
   n       : 1
});

db.orderD.insertOne ({
  idordpur: oidPur3,
  idorddri: oidOrddri2,
  n       : 1
});

db.orderD.insertOne ({
  idordpur: oidPur4,
  idorddri: oidOrddri3,
  n       : 1
});

db.orderD.insertOne ({
  idordpur: oidPur4,
  idorddri: oidOrddri2,
  n       : 1
});

db.orderD.insertOne ({
  idorppur: oidPur5,
  idorddri: oidOrddri3,
  n       : 4
});

db.orderD.insertOne ({
  idordpur: oidPur6,
  idorddri: oidOrddri1,
  n       : 2
});

db.orderD.insertOne ({
  idorppur: oidPur8,
  idorddri: oidOrddri1,
  n       : 2 
});

db.orderD.insertOne ({
  idordpur: oidPur8,
  idorddri: oidOrddri2,
  n       : 2 
});

db.orderD.insertOne ({
  idordpur: oidPur8,
  idorddri: oidOrddri3,
  n       : 1 
});

// orderH

db.orderH.insertOne ({
  idorhpur: oidPur1,
  idorhham: oidOrhham1,
  n       : 1
});

db.orderH.insertOne ({
  idorhpur: oidPur3,
  idorhham: oidOrhham1,
  n       : 1
});

db.orderH.insertOne ({
  idorhpur: oidPur4,
  idorhham: oidOrhham1,
  n       : 2
});

db.orderH.insertOne ({
  idorhpur: oidPur5,
  idorhham: oidOrhham2,
  n       : 2
});

db.orderH.insertOne ({
  idorhpur: oidPur5,
  idorhham: oidOrhham3,
  n         : 2
});

db.orderH.insertOne ({
  idorhpur: oidPur6,
  idorhham: oidOrhham1,
  n       : 1
});

db.orderH.insertOne ({
  idorhpur: oidPur8,
  idorhham: oidOrhham2,
  n       : 2
});

db.orderH.insertOne ({
  idorhpur: oidPur8,
  idorhham: oidOrhham1,
  n       : 2
});

// Pizzas

oidPizcat1 = ObjectId ();
db.pizza.insertOne ({
  _id     : oidOrppiz1,
  idpizcat: oidPizcat1,
  name    : 'Olive and carrots',
  descript: 'null',
  look    : 'null',
  pricing : 5.25
});

oidPizcat2 = ObjectId ();
db.pizza.insertOne ({
  _id     : oidOrppiz2,
  idpizcat: oidPizcat2,
  name    : 'Four cheese',
  descript: 'null',
  look    : 'null',
  pricing : 7.75
});

oidPizcat3 = ObjectId ();
db.pizza.insertOne ({
  _id     : oidOrppiz3,
  idpizcat: oidPizcat3,
  name    : 'Classic',
  descript: 'null',
  look    : 'null',
  pricing : 4.10
});

// Category

db.category.insertOne ({
  _id : oidPizcat1,
  name: 'Vegetable',
  catD: '2021-7-12'
});

db.category.insertOne ({
  _id : oidPizcat2,
  name: 'Cheese',
  catD: '2022-2-25'
});

db.category.insertOne ({
  _id : oidPizcat3,
  name: 'Ham',
  catD: '2020-1-10'
});

// Hamburguers

db.hamburguer.insertOne ({
  _id     : oidOrhham1,
  name    : 'Cheese',
  descript: 'null',
  look    : 'null',
  pricing : 2.50
});

db.hamburguer.insertOne ({
  _id     : oidOrhham2,
  name    : 'Double',
  descript: 'null',
  look    : 'null',
  pricing : 3.25
});

db.hamburguer.insertOne ({
  _id     : oidOrhham3,
  name    : 'Max',
  descript: 'null',
  look    : 'null',
  pricing : 4.50
});

// Drinks

db.drink.insertOne ({
  _id     : oidOrddri1,
  name    : 'CocaCola',
  descript: 'null',
  look    : 'null',
  pricing : 0.75
});

db.drink.insertOne ({
  _id     : oidOrddri2,
  name    : 'Orange juice',
  descript: 'null',
  look    : 'null',
  pricing : 1.25
});

db.drink.insertOne ({
  _id     : oidOrddri3,
  name    : 'Beer',
  descript: 'null',
  look    : 'null',
  pricing : 1.05
});

// Customers

oidCusloc1 = ObjectId ();
oidResloc1 = oidCusloc1; 
db.customer.insertOne ({
  _id     : oidPurcus1,
  idcusloc: oidCusloc1,
  fName   : 'John',
  lName   : 'Smith',
  mName   : 'Rogers',
  address : 'El Prat St. 21',
  zipC    : '08100',
  phone   : '699333555'
});

oidCusloc2 = ObjectId ();
oidResloc2 = oidCusloc2; 
db.customer.insertOne ({
  _id     : oidPurcus2,
  idcusloc: oidCusloc2,
  fName   : 'Mike',
  lName   : 'Stanton',
  mName   : 'Smith',
  address : 'Mountain St. 100',
  zipC    : '09001',
  phone   : '699444555'
});

db.customer.insertOne ({
  _id     : oidPurcus3,
  idcusloc: oidCusloc1,
  fName   : 'Ann',
  lName   : 'OReilly',
  mName   : 'Stark',
  address : 'River St. 1101',
  zipC    : '20203',
  phone   : '699555555'
});

db.customer.insertOne ({
  _id     : oidPurcus4,
  idcusloc: oidCusloc2,
  fName   : 'Sarah',
  lName   : 'Connor',
  mName   : 'Michaels',
  address : 'Lake St. 12',
  zipC    : '50602',
  phone   : '699666555'
});

// Locality

oidLocdep1 = ObjectId ();
db.locality.insertOne ({
  _id       : oidCusloc1,
  idlocdep  : oidLocdep1,
  name      : 'Barcelona'
});

oidLocdep2 = ObjectId ();
db.locality.insertOne ({
  _id       : oidCusloc2,
  idlocdep  : oidLocdep2,
  name      : 'La Coruña'
});

// Department

db.department.insertOne ({
  _id : oidLocdep1,
  name: 'Barcelona'
});

db.department.insertOne ({
  _id : oidLocdep2,
  name: 'La coruña'
});

// Employees

db.employee.insertOne ({
  _id    : oidPuremp2,
  fName  : 'Ana',
  lName  : 'Miró',
  mName  : 'Adrian',
  NIF    : '33111444G',
  phone  : '661999333',
  task   : 'delivery'
});

db.employee.insertOne ({
  _id    : oidPuremp4,
  fName  : 'Pilar',
  lName  : 'Domínguez',
  mName  : 'Lobo',
  NIF    : '11888111Z',
  phone  : '663222111',
  task   : 'delivery'
});

// Restaurants

db.restaurant.insertOne ({
  _id     : oidPurres1,
  idresloc: oidResloc1,
  address : 'Valley St. 300',
  zipC    : '33200'
});

db.restaurant.insertOne ({
  _id     : oidPurres2,
  idresloc: oidResloc2,
  address : 'Sea Av. 501',
  zipC    : '99301'
});

