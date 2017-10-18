const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AppointmentSchema = new Schema({
	dateStart:String,//{type:Date, require:true},
	dateEnd:String,//{type:Date, require:true},
	petId:String, //{type: Schema.ObjectId, ref:'pet',required:true},
	vetId:String,
	status:String//{type: Number, enum [-1,0,1,2]}
		
		
});

AppointmentSchema.pre('save',(next)=>{next();});

module.exports= mongoose.model('Appointment', AppointmentSchema); 