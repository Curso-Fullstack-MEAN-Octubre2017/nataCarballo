const Pet = require('../models/pets');
const Customer = require('../models/customer');
const Appointment = require('../models/appointment');
var moment = require('moment');

var  tresAppointment={
		
		"dateStart":moment("2017-10-21","YYYY-MM-DD"),
		"dateEnd":moment("2017-10-21","YYYY-MM-DD"),
		"petId":"59e5f275e810211f68f8a6fa", 
		"vetId":"prueba tres",
		"status":[0]
};


/*var unCustomer = {
		"dni": "fgdsgfds",
		"firstName": "fdsgfd",
		"lastName": "gfds",
		"phone": "hgfdshgd",
		"email": "utreyt",
		"note": "gfdsgfdsgfdsgf"
	};

var pet4 = 	{
		"name" : "Atomos",
		"birthdate" : "abril 2000",
		"specie" : "gato",
		"race" : "persa",
		"chipNumber" : "55555fdd",
		"photoUrl" : "aaaaaa",
		"description" : "hembra",
		"customerId" : "59e05e129fce8e185cde97f6"
	};*/

/*function testInsertUN() {
	const customer = new Customer(unCustomer);
	customer.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsert", customer);
		}
	})
}*/

/*function testInsertPet() {
	const pet = new Pet(pet4);
	pet.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertPet", pet);
		}
	})
}*/
function testInsertUn() {
	const appointment = new Appointment(tresAppointment);
	appointment.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsert", appointment);
		}
	})
}
testInsertUn();



/*function testSearchCustomers() {
	var search = {};
	var regexp = new RegExp("gonzalez", "i")
	search.firstName = regexp;
	search.lastName = regexp;
	console.log("Search customers:", search);
	
	Customer.find(search, (err, customers) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testSearchCustomers", customers);
		}
	}).sort({'_id' : -1});
}*/


//testInsertPet();

