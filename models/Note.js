var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({
	_headlineId: {
		type: Schma.Types.ObjectId,
		ref: "Headline"
	},
	date: String,
	noteText: String
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;