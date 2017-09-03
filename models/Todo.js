var mongoose = require('mongoose');

//Creating the schema
var TodoSchema = new mongoose.Schema({
	name : String,
	completed : Boolean,
	note : String,
	updated_at : {
		type : Date,
		default : Date.now
	}
});

//Creating the model
module.exports = mongoose.model('Todo',TodoSchema);