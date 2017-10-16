
const Pet = require('../models/pets');

module.exports = (router) => {
	
	// listar todos las mascotas
	
	router.get('/pets',(req, res)=> {
		Pet.find({}, (err, pet)=> {
		res.json(pet);
	   });
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
			if (err){
				console.error(err);
				return next(err);
			}else res.json(pet);
		});
	});
		//falta modificar y eliminar
	return router;
}









