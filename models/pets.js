const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Customer= mongoose.model('Customer');
//const Customer= require('../models/customer');


const petSchema = new Schema({
	    name: {type: String, required: true},
	    birthdate: {type: String, required: true},//{type:Date, require:true}
	    chipNumber: {type: String, required: true},
	    specie: {type: String, required: true},
	    race: {type: String, required: true},
	    description: {type: String},
	    photoUrl: {type: String, required: true},
	    customerId: {type: Schema.ObjectId, ref: "Customer", required: true}	
});

module.exports = mongoose.model("Pet", petSchema);