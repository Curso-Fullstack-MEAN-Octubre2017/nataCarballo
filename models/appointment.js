const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const AppointmentSchema = new Schema({
	dateStart:{type:Date, require:true},
	dateEnd:{type:Date, require:true},
	petId:{type: Schema.ObjectId, ref:'Pet',required:true},
	vetId:String,
	status:String
		
		
});

AppointmentSchema.pre('save',(next)=>{next();});

module.exports= mongoose.model('Appointment', AppointmentSchema); 