let express = require("express");
let app = express();

app.use(express.json());

let {
	getAllCustomers,
	getCustomerById,
	addNewCustomer,
} = require("./controllers.js");
//Exercise 1: Get All Customers

app.get("/customers", async (req, res) => {
	let result = await getAllCustomers();
	res.status(200).json(result);
});

//Exercise 2: Get Customer By ID
app.get("/customers/details/:id", async (req, res) => {
	let result = await getCustomerById(parseInt(req.params.id));
	if (result) {
		res.status(200).json(result);
	} else {
		res.status(404).send("Customer not found");
	}
});

//Exercise 3: Add New Customer

app.post("/customers/new", async (req, res) => {
	let newCustomer = req.body;
	let result = await addNewCustomer(newCustomer);
	if (result.error) {
		res.status(400).json({ message: result.error });
	}

	res.status(201).json(result);
});

module.exports = { app };
