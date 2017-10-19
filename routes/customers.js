const Customer = require('../models/customer');
const Pets = require('../models/pets');

module.exports = (router) => {
	// listar todos los clientes
	
	router.get('/', (req, res, next)=> {
		Customer.find({}, (err, customer)=> {
			if (err){
				console.error(err);
				return next();
			}
			return res.json(customer);
	    });
		
	});
	
	//buscar por id
	
	router.get('/customers/:id',(req, res)=> {
		Customer.findById({_id:req.params.id}, (err, customer)=> {
			res.json(customer);
		});
	});

	router.get('/customers/:id/pets',(req, res)=> {
		Pets.find({customerId: req.params.id},(err, pets)=> {
			if (err) {
				console.error(err);
			} else {
				res.json(pets);
			}
		});
	});
	//nuevo cliente
	
	router.post('/customers', (req, res) => {
		   var customer = new Customer(req.body);

		   customer.save((err) => {
				if (err) {
					console.error(err);
					res.status(500).send(err);//KO
				} else {
					res.json(customer);
				}
			}) ;   
	});
	
	// modificar
	router.put('/customers/:id', (req, res, next) => {
		Customer.findOne({_id : req.params.id }, (err, customer)=> {
			if (err) {
				return res.send(err);
			}

			for(prop in req.body){
				customer[prop] = req.body[prop];
			}
			
			console.log("Actualizando cliente", customer);
			

			customer.save(function(err) {
				if (err) {
					console.error(err);
				} else {
					res.json(customer);
				}
			});
		});
	});
	

	
	return router;
}










