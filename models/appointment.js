const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const appointmentSchema = new Schema({
	inicio:{type: date, required: true},
	fin:{type: date, required: true},
	vet:{type: Schema.ObjectId, ref: "vet", required: true},
	pet:{{type: Schema.ObjectId, ref: "vet", required: true}},
	State:{type: Number, default:0},
	nota:{type: String}
});

appointmentSchema.pre('save',(next)=>{next();});

module.exports= mongoose.model('Appointment', appointmentSchema); 