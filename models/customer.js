var mongoose = require('mongoose');

	mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;


var customerSchema = new Schema({
	dni:{type: String},
	firstName:{type: String},
	lastName:{type: String},
	phone:{type: String},
	email:{type: String},
	note:{type: String},
	//customer: {type: Schema.ObjectId, ref: "pets"}

});

module.exports= mongoose.model('Customer', customerSchema); //cambio el nombre a Customer


