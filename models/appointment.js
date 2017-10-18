const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AppointmentSchema = new Schema({
	dateStart:String,
	dateEnd:String,
	petId:String, 
	vetId:String,
	status:String
		
		//{type: Number, enum [-1,0,1,2]}
});

AppointmentSchema.pre('save',(next)=>{next();});

module.exports= mongoose.model('Appointment', AppointmentSchema); 