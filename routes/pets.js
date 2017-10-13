const Pet = require('../models/pets');

module.exports = (router) => {
	
	// listar todos las mascotas
	
	router.get('/pets', (req, res, next)=> {
		Pet.find({}, (err, pets)=> {
			if (err){
				console.error(err);
				return next();
			}else{
			return res.json(pets);
			}
	    }).sort({'_id' : -1});
		
	});
	
	//buscar por id
	
	router.get('/pets/:id',(req, res, next)=>{
		
		Pet.findById(req.params.id, (err, pets)=>{
			if (err){
				console.error(err);
				return next(err);
			}else{
				return res.json(pets);
			}

		});
	});
	
	//nueva mascota

	router.post('/pets',(req, res, next)=>{

		var pet = new Pet(req.body);
			
		pet.save((err)=>{
			if (err){
				console.error(err);
				return next(err);
			}else res.json(pet);
		});
	});
	
	// modificar
	
	router.put('/pets/:id',(req, res, next)=>{
		
		Pet.findByIdAndUpdate(req.params.id, req.body, (err, response, pet)=>{
				if (err) return res.send(err);
				/*
				for(prop in req.body){
					pet[prop] = req.body[prop];
				}
				
				console.log("Actualizando pet", pet);*/
				
				pet.save((err)=> {
				if (err) console.error(err);
				else res.json(pet);
				
			});
		});
	});
	
	//////////////eliminar
	
	router.delete('/pets/:id', (req, res)=>{
		console.log("/pets/" + req.params.id);
		Pet.findByIdAndRemove(req.params.id, (err, response)=>{
	        if(err) res.json({message: "Error in deleting record id " + req.params.id});
	        else res.json({message: "la mascota con id  " + req.params.id + " ha sido borrado."});
	    });
	});
	
	
	return router;
}










