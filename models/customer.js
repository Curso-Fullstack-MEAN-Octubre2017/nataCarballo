var mongoose = require('mongoose');

	//mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;


var customerSchema = new Schema({
	dni:{type: String, required: true},
	firstName:{type: String, required: true},
	lastName:{type: String, required: true},
	phone:{type: String, required: true},
	email:{type: String},
	note:{type: String},
	

});
customerSchema.pre('save',(next)=>{	
	next();
});
module.exports= mongoose.model('Customer', customerSchema); //cambio el nombre a Customer


