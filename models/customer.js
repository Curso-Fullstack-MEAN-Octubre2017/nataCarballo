const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const customerSchema = new Schema({
	dni:{type: String, required: true},
	firstName:{type: String, required: true},
	lastName:{type: String, required: true},
	phone:{type: String, required: true},
	email:{type: String},
	note:{type: String},
});

																	//customerSchema.pre('save',(next)=>{next();});

module.exports= mongoose.model('Customer', customerSchema); 
