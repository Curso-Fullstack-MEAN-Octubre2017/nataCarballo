const mongoose = require('mongoose'),
	Schema = mongoose.Schema;
	mongoose.Promise = global.Promise;

var Customer= mongoose.model('Customer');


var petSchema = new Schema({
	    name: {type: String, required: true},
	    birthdate: {type: Date, required: true},
	    chipNumber: {type: String, required: true},
	    specie: {type: String, required: true},
	    race: {type: String, required: true},
	    description: {type: String},
	    photoUrl: {type: String, required: true},
	    ownerId: {type: Schema.ObjectId, ref: "Customer", required: true}
	
});

module.exports = mongoose.model("Pet", petSchema);

