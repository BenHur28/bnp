const mongoose = require("mongoose");
const { Schema } = mongoose;

const playerSchema = new Schema({
	name: String,
	offense: [String],
	defense: [String],
	neutral: [String],
	grd: [String],
	vodlinks: [String],
	events: [String],
});

const PlayerModel = mongoose.model("Player", playerSchema);

module.exports = PlayerModel;
