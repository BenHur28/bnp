require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const PlayerModel = require("./models/Player");
const CharModel = require("./models/Character");

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: process.env.ORIGIN,
	})
);

mongoose.connect(process.env.MONGO_URL);

app.get("/api/player/:name", async (req, res) => {
	const { name } = req.params;
	res.json(await PlayerModel.findOne({ name: name }));
});

app.get("/api/event/:event", async (req, res) => {
	const { event } = req.params;
	res.json(await PlayerModel.find({ events: event }));
});

app.get("/api/characters", async (req, res) => {
	res.json(await CharModel.find());
});

app.get("/api/characters/:name", async (req, res) => {
	const { name } = req.params;
	res.json(await CharModel.findOne({ name: name }));
});

app.listen(3000);
