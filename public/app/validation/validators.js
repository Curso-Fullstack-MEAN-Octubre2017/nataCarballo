
	
	if (typeof validate !== "function") { // estamos en el servidor
		validate = require("validate.js");
	}

	
	
	const Validators = {
		validateCustomer : (customer)=> {
			return validate(customer, {
				firstName : {
					presence : true,
					exclusion : {
						within : [ "nopermitido" ],
						message : "'%{value}' is not allowed"
					},
					length : {
						minimum : 3,
						maximum: 20,
						message : "debe tener entre 4 y 20 caracteres"
					}
				}
			});
		},

		validatePet : (pet)=> {
			return validate(pet, {
				name : {
					presence : true,
					length : {
						minimum : 3,
						maximum : 20,
						message : "debe tener entre 4 y 20 caracteres"
					}
				}
			});
		},
	}

	if (typeof module !== "undefined" && module.exports) { 
		module.exports = Validators;
	}