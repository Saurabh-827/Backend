let request = require("supertest");
let { app } = require("../index.js");
let {
	getAllCustomers,
	getCustomerById,
	addNewCustomer,
} = require("../controllers.js");
let http = require("http");

jest.mock("../controllers.js", () => ({
	...jest.requireActual("../controllers.js"),
	getAllCustomers: jest.fn(),
	getCustomerById: jest.fn(),
	addNewCustomer: jest.fn(),
}));

let server;

beforeAll((done) => {
	server = http.createServer(app);
	server.listen(done);
});

afterAll((done) => {
	server.close(done);
});

//Exercise 4: Test Get All Customers (Mock Function)

describe("API endpoints testing", () => {
	it("should return all customers", async () => {
		const mockCustomers = [
			{ customerId: 1, name: "Alice Smith", email: "alice@example.com" },
			{ customerId: 2, name: "Bob Johnson", email: "bob@example.com" },
		];

		getAllCustomers.mockResolvedValue(mockCustomers);

		const response = await request(app).get("/customers");

		expect(response.status).toBe(200);
		expect(response.body).toEqual(mockCustomers);
		expect(response.body.length).toBe(mockCustomers.length);
	});

	//Exercise 6: Test Add New Customer (Mock Function)
	it("should add a new customer", async () => {
		const newCustomer = { name: "Charlie Brown", email: "charlie@example.com" };
		const mockCustomers = [
			{ customerId: 1, name: "Alice Smith", email: "alice@example.com" },
			{ customerId: 2, name: "Bob Johnson", email: "bob@example.com" },
		];
		const addedCustomer = { customerId: 3, ...newCustomer };

		addNewCustomer.mockResolvedValue(addedCustomer);
		getAllCustomers.mockResolvedValue([...mockCustomers, addedCustomer]);

		const postResponse = await request(app)
			.post("/customers/new")
			.send(newCustomer);

		expect(postResponse.status).toBe(201);
		expect(postResponse.body).toEqual(addedCustomer);

		const getResponse = await request(app).get("/customers");

		expect(getResponse.status).toBe(200);
		expect(getResponse.body.length).toBe(mockCustomers.length + 1);
		expect(getResponse.body).toContainEqual(addedCustomer);
	});
});
