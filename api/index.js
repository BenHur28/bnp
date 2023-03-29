require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const mongoose = require("mongoose");
const PlayerModel = require("./models/Player");

app.use(express.json());
app.use(
	cors({
		credentials: true,
		origin: "http://127.0.0.1:5173",
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

app.listen(3000);
