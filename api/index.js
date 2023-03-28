const express = require("express");
const cors = require("cors");
const app = express();

app.use(
	cors({
		credentials: true,
		origin: "http://127.0.0.1:5173",
	})
);

app.get("/", (req, res) => {
	res.json("SERVER WORKS!");
});

app.listen(3000);
