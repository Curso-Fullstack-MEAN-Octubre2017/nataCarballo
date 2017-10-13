const Customer = require('../models/customer');

module.exports = (router) => {
	// listar todos los clientes
	
	router.get('/customers', (req, res, next)=> {
		Customer.find({}, (err, Customer)=> {
			if (err){
				console.log(err);
				return next();
			}
			return res.json(Customer);
	    });
		
	});
	
	//buscar por id
	
	router.get('/customers/:id',(req, res, next)=>{
		
		Customer.findById({_id: req.params.id}, (err, customer)=>{
			if (err){
				console.log(err);
				return next(err);
			}
			
			return res.json({name: customer.firstName, apellido:customer.lastName});
		});
	});
	
	//nuevo cliente
	
	router.post('/customers',(req, res, next)=>{
	
		var dni=req.body.dni || '';
		var firstName= req.body.firstName || '';
		var lastName= req.body.lastName || '';
		var phone= req.body.phone || '';
		var email= req.body.email || '';
		var note= req.body.note || '';
		
	
		var customerNew = new Customer({
					dni: dni,
					firstName: firstName,
					lastName: lastName,
					phone: phone,
					email: email,
					note: note
				});
			
		customerNew.save((err)=>{
			if (err){
				console.log(err);
				return next(err);
			}else{
				return res.redirect('/customer');
				console.log('guardado');
			}
		});
	});
	
	// modificar
	
	router.put('/customers/:id',(req, res, next)=>{
		Customer.findByIdAndUpdate(req.params.id, req.body, (err, response)=>{
				if (err){
					console.log(response);
				return next(err);
			}
		});
	});
	
	//////////////eliminar
	
	router.delete('/customers/:id', (req, res)=>{
	    Customer.findByIdAndRemove(req.params.id, (err, response)=>{
	        if(err) res.json({message: "Error in deleting record id " + req.params.id});
	        else res.json({message: "El cliente con id  " + req.params.id + " ha sido borrado."});
	    });
	});
	
	
	return router;
}










