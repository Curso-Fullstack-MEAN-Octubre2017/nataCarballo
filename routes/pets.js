const Pet = require('../models/pets');
const Customer= require('../models/customer');

module.exports = (router) => {
	
	// listar todos las mascotas
	
	router.get('/pets',(req, res)=> {
		Pet.find({}, (err, pet)=> {
		res.json(pet);
	   }).sort({'_id' : -1});
	});
	
	router.get('/pets',(req, res)=> {
		Pet.find({'ownerId': req.params.id}, 'name', (err, pets)=> {
			if (err) return res.status(500).send({message: `Error al realizar la peticion: ${err}`});
		res.json(pets);
		res.send(200, pets);
	   });
	});
	
	//buscar por id
	router.get('/pets/:id',(req, res)=> {
		Pet.findById({_id:req.params.id}, (err, pets)=> {
			res.json(pets);
		});
	});
	//nueva mascota
	

	router.post('/pets',(req, res, next)=>{

		var pet = new Pet(req.body);
			
		pet.save((err)=>{
			if (err)return next(err);
			res.json(pet);
		});
	});
	
	//modificar
	router.put('/pets/:id', (req, res, next) => {
		Pet.findOne({_id : req.params.id },(err, pet)=> {
			if (err) return res.send(err);
	
			for(prop in req.body){
				pet[prop] = req.body[prop];
			}
			
			console.log("Actualizando mascota", pet);

			pet.save((err)=> {
				if (err) console.error(err);
					res.json(pet);
			});
		});
	});	
	
	//borrar
	router.delete('/pets/:id',(req, res)=> {
		console.log("/pets/" + req.params.id);
		Pet.findByIdAndRemove(req.params.id,(err, pet)=> {
			if (err) console.error(err);
				res.sendStatus(200);
		});
	});
	return router;
}




