const Appointment= require('../models/appointment');
var moment = require('moment');

module.exports = (router) => {
	
	
	router.get('/appointments', (req, res, next)=> {
		Appointment.find({}, (err, appointment)=> {
			if (err){
				console.error(err);
				return next();
			}
			res.send(200,appointment);
	    });
	});
	router.get('/appointments/:id',(req, res,next)=> {
		Appointment.findById({_id:req.params.id}, (err, Appointment)=> {
			if (err) return next();
			res.json(Appointment);
			
		});
	});
	
	router.get('/appointments/:from/:to',(req, res)=>{
		var from=req.params.from;
		var to=req.params.to;
		
		from= moment();
		to= moment();
		//falta por completar, investigar moment.
	});
	
	router.put('/appointments/:id', (req, res, next) => {
		Appointment.findByIdAndUpdate({_id : req.params.id },req.body, (err, appointment)=> {
			if (err) return res.send(err);
		

			for(prop in req.body){
				appointment[prop] = req.body[prop];
			}
			
			console.log("Actualizando cita", appointment);

			appointment.save((err)=> {
				if (err) {
					console.error(err);
				} else {
					res.json(appointment);
				}
			});
		});
	});
	
	router.post('/appointments', (req, res) => {
		   var appointment = new Appointment(req.body);

		   appointment.save((err) => {
				if (err) {
					console.error(err);
					res.status(500).send(err);//KO
				} else {
					res.json(appointment);
				}
			}) ;   
	});
	


	return router;
}
