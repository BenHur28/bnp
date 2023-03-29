const mongoose = require("mongoose");
const { Schema } = mongoose;

const charSchema = new Schema({
	name: String,
	video: [
		{
			title: String,
			link: String,
			description: String,
		},
	],
});

const CharModel = mongoose.model("Char", charSchema);

module.exports = CharModel;
