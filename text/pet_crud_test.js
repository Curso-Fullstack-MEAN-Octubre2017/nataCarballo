const Pet = require('../models/pets');
const Customer = require('../models/customer');


var unCustomer = {
		"dni": "fgdsgfds",
		"firstName": "fdsgfd",
		"lastName": "gfds",
		"phone": "hgfdshgd",
		"email": "utreyt",
		"note": "gfdsgfdsgfdsgf"
	};

var pet1 = 	{
		"name" : "fdsafdsaf",
		"birthdate" : "fgdsgfd",
		"specie" : "fgdsgf",
		"race" : "Snowshoe",
		"chipNumber" : "gfdsgf",
		"photoUrl" : "asdf",
		"description" : "gfdsgfdsgfd.",
		"ownerId" : "59e05e129fce8e185cde97f6 "
	};

function testInsertUN() {
	const customer = new Customer(unCustomer);
	customer.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsert", customer);
		}
	})
}

function testInsertPet() {
	const pet = new Pet(pet1);
	pet.save((err) => {
		if (err) {
			console.error(err);
		} else {
			console.log("testInsertPet", pet);
		}
	})
}

function testSearchCustomers() {
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
}

//testInsertMiki();
testInsertPet();
//testSearchCustomers();