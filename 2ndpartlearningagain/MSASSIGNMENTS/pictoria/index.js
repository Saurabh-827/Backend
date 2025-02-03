const express = require("express");
const cors = require("cors");
const db = require("./models/index");
const app = express();
app.use(express.json());
app.use(cors());
const { createNewUser } = require("./controllers/userController");

db.sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch((err) => {
		console.error("Unable to connect to the database:", err);
	});

//step 1: Define a new POST endpoint which will be responsible for creating new users in the DB
app.post("/api/users", createNewUser);

app.listen(3000, () => {
	console.log(`Server is started at port 3000.`);
});
