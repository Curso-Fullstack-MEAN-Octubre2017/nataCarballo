const Appointment= require('../models/appointment');
var moment = require('moment');
const Customer= require('../models/customer');
const Pet= require('../models/pets');

module.exports = (router) => {
	
	
	router.get('/appointments', (req, res, next)=> {
		Appointment.find({}, (err, appointment)=> {
			if (err) return next();
			res.send(200,appointment);
	    });
	});
	router.get('/appointments/:id',(req, res,next)=> {
		Appointment.findById({_id:req.params.id}, (err, appointments)=> {
			if (err) return next();
			res.json(appointments);
			
		});
	});
	
	router.get('/appointments/:fromdate/:todate',(req, res)=>{
		var from = moment(req.params.fromdate,'YYYYMM');
		var to = moment(req.params.todate,'YYYYMM');
		
		Appointment.find({dateStart : {"$gte": from, "$lt": to}},(err, appointment)=>{
			if (err) return next();
			res.json(appointment);
		});/*.populate(
			{
	            path: 'pet',
	            model: 'pets',
	            select: 'name',
	            populate: {
	                path: 'customer',
	                model: 'customer',
	                select: 'firstName lastName'
	            }
			}
		
		).sort({'dateTime': 1})*/
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
