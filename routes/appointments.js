var moment = require('moment');

const Appointment= require('../models/appointment');
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
	
	router.get('/appointments/:fromdate/:todate',(req, res,next)=>{
		
		var from = moment(req.params.fromdate,'YYYYMM');
		var to = moment(req.params.todate,'YYYYMM');
		
		console.log("buscando appointments por fechas", from, to);
		
		Appointment.find({dateStart : {"$gte": from, "$lt": to}},(err, appointments)=>{
			if (err) console.error(err);
			else{
				var total= appointments.reduce(()=>);
				res.send(total);
			}	
			
		}).populate({path: 'pet',populate: {path: 'customer'}}).sort({'dateTime': 1})
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
/*
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
	

 	
 	
 	(obj, item) {

                var date = moment(item.dateTimeStart).format('YYYY-MM-DD');
                var starthour = moment(item.dateTimeStart).utc().format('HH:mm');

                if (obj[date] == null) obj[date] = {};
                if (obj[date][starthour] == null) obj[date][starthour] = item;
                return obj;
            }, {});*/
  
