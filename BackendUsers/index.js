const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./lib/sequelize");
const userModel = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

sequelize
	.sync()
	.then(() => {
		console.log("Database is connected.");
	})
	.catch((error) => {
		console.error("Unable to connect to the database:", error);
	});

app.get("/users", async (req, res) => {
	try {
		const users = await userModel.findAll();
		res.json({ users });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Failed to get users." });
	}
});

app.get("/users/:id", async (req, res) => {
	let userId = parseInt(req.params.id);
	try {
		let user = await userModel.findByPk(userId);
		if (user) {
			res.json(user);
		} else {
			res.status(404).json(`user is not found.`);
		}
	} catch (error) {
		console.log(error);
		res.status(500).json("Failed to get user.");
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
