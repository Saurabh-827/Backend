const { where } = require("sequelize");
const { user } = require("../models"); //Correct Initialization: The models/index.js file ensures that all models are correctly initialized with the sequelize instance and that all associations are set up. Got error due to direct import of user like const user = require("../models/user");
const {
	isRequestBodyValid,
	isEmailValid,
} = require("../validations/userValidation");

const { doesUserExist } = require("../services/userService");

//step 3: Create a controller function named createNewUser
const createNewUser = async (req, res) => {
	//step 2: This endpoint will accept username & email in request body
	const { username, email } = req.body;

	//step 5: Validate the request body before creating a new record in the users table
	if (!isRequestBodyValid(req.body)) {
		return res.status(400).json({ message: "Username and Email is required." });
	}

	// step 4: Create service functions named doesUserExist(email) which will be responsible for querying the db to check if a user already exists and returns boolean value
	if (await doesUserExist(email)) {
		return res.status(400).json({
			message: "User already exists",
		});
	}
	//Validate if the email is a valid email address that includes both @ and .
	if (!isEmailValid(email)) {
		return res.status(400).json({ message: "Please give valid email." });
	}

	//creating new user
	try {
		const newUser = await user.create({ username, email });
		return res
			.status(201)
			.json({ message: "user created successfully.", newUser });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Internal server error", error: error.message });
	}
};

module.exports = { createNewUser };
