var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	mongoose.Promise = global.Promise;

var customer= mongoose.model('customer');


var petsSchema = new Schema({
	name:{type: String, required: true},
	chip:{type: String, required: true},
	//photo:{},
	//birthDate:{type: String, required: true},
	race:{type: String},
	species:{type: String},
	descripcion:{type: String, required: true},
	sex:{type: String, required: true},
	vet:{type: String, required: true},
	//customer: {type: Schema.ObjectId, ref: "customer"}
	
});

module.exports = mongoose.model("Pets", petsSchema);