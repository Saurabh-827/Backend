let customers = [
	{ customerId: 1, name: "Alice Smith", email: "alice@example.com" },
	{ customerId: 2, name: "Bob Johnson", email: "bob@example.com" },
];

//Exercise 1: Get All Customers
async function getAllCustomers() {
	return customers;
}

//Exercise 2: Get Customer By ID
async function getCustomerById(id) {
	return customers.find((customer) => customer.customerId === id);
}

//Exercise 3: Add New Customer
async function addNewCustomer(newCustomer) {
	if (!newCustomer.name || typeof newCustomer.name !== "string") {
		return { error: "Name is required and must be a string" };
	}
	if (!newCustomer.email || typeof newCustomer.email !== "string") {
		return { error: "Email is required and must be a string" };
	}

	let customer = { customerId: customers.length + 1, ...newCustomer };
	customers.push(customer);
	return customer;
}
module.exports = { getAllCustomers, getCustomerById, addNewCustomer };
