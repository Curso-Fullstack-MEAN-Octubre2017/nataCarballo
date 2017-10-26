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
		
		var from = moment(req.params.fromdate,'YYYYMMDD');
		var to = moment(req.params.todate,'YYYYMMDD');
		
		console.log("buscando appointments por fechas", from, to);
		
		Appointment.find({dateStart : {"$gte": from, "$lt": to}},(err, appointments)=>{
			if (err) console.error(err);
			else{
				var total={};
				for(var i= 0; i<appointments.length ;i++){
					
					var item=appointments[i];
					var date = moment(item.dateStart).format('YYYYMMDD');
	             	var time = moment(item.dateStart).format('HH:mm');

	                if (total[date] == null) total[date] = {};
	                if (total[date][time] == null) total[date][time] = item;
	                
				}
				res.send(total);
				return total;
			}	
			
		}).populate({path: 'Pet',populate: {path: 'Customer'}}).sort({'dateTime': 1})
	});
	
	router.get('/appointmentsByDate/:from/:to',(req, res, next)=>{
		var from = moment(req.params.from,'YYYYMMDD');
		var to = moment(req.params.to,'YYYYMMDD');
		
		var searchParams = {};
	    searchParams['dateStart'] = {$gte: from, $lt: to};
	    searchParams['status'] = {$gte: 0}
	    
	    Appointment.find(searchParams, (err, appointments) => {
			if (err) {
				console.error(err);
			}
			
	        var appointmentsByDate = appointments.reduce((appointmentsByDate, item)=>{
	            var date = moment(item.dateStart).format('YYYYMMDD');
	            var time = moment(item.dateStart).format('HH:mm');
	            if(appointmentsByDate[date] == undefined) {
	            	appointmentsByDate[date] = {};
	            }
	            if(appointmentsByDate[date][time] == undefined) {
	            	appointmentsByDate[date][time] = item;
	            }
	            
	            return appointmentsByDate;
	        }, {});
			
			
	        res.send(appointmentsByDate);
	    
	}).populate({
		path: "petId",
		model: "Pet",
		populate: {
			path: "customerId",
			model: "Customer"
		}
	});
		
});
	

	router.put('/appointments/:id', (req, res, next) => {
		Appointment.findByIdAndUpdate({_id : req.params.id },req.body, (err, appointments)=> {
			if (err) return res.send(err);
		

			for(prop in req.body){
				appointments[prop] = req.body[prop];
			}
			
			console.log("Actualizando cita", appointments);

			appointment.save((err)=> {
				if (err) {
					console.error(err);
				} else {
					res.json(appointments);
				}
			});
		});
	});
	
	router.post('/appointments', (req, res) => {
		   var appointment = new Appointment(req.body);

		   appointment.save((err) => {
				if (err) {
					console.error(err);
					res.status(500).send(err);
				} else {
					res.json(appointment);
				}
			}) ;   
	});
	


	return router;
}


 
 
 