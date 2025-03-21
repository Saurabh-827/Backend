const express = require("express");
const app = express();

app.get("/cart-total", (req, res) => {
	const newItemPrice = parseInt(req.query.newItemPrice);
	const cartTotal = parseInt(req.query.cartTotal);
	const cartTotalPrice = newItemPrice + cartTotal;
	cartTotalPrice.toString();
	res.json({ cartTotalPrice });
});

app.get("/membership-discount", (req, res) => {
	try {
		const cartTotal = parseFloat(req.query.cartTotal);
		const isMember = req.query.isMember;
		let result;
		if (isMember === "true") {
			discount = (cartTotal * 15) / 100;
			result = (cartTotal - discount).toString();
		} else {
			result = cartTotal.toString();
		}
		res.send(result);
	} catch (error) {
		console.log("here is error ", error);
	}
});

app.get("/estimate-delivery", (req, res) => {
	const distance = parseFloat(req.query.distance);
	const shippingMethod = req.query.shippingMethod;
	let deliveryTime;
	if (shippingMethod === "standard") {
		deliveryTime = distance / 40;
	} else if (shippingMethod === "express") {
		deliveryTime = distance / 80;
	}
	res.send(deliveryTime.toString());
});
app.get("/shipping-cost", (req, res) => {
	const weight = parseFloat(req.query.weight);
	const distance = parseFloat(req.query.distance);
	const result = weight * distance * 0.15;
	res.send(result.toString());
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
//
//
//
//
//
//
//
//
//BD1,2,3
const stocks = [
	{ id: 1, name: "Stock A", price: 50, availableQuantity: 10 },
	{ id: 2, name: "Stock B", price: 80, availableQuantity: 5 },
	{ id: 3, name: "Stock C", price: 30, availableQuantity: 0 }, // Out of stock
	{ id: 4, name: "Stock D", price: 100, availableQuantity: 7 },
];

const cart = [
	{ id: 1, name: "Stock A", price: 50, quantity: 2 },
	{ id: 2, name: "Stock B", price: 80, quantity: 1 },
];

app.get("/stocks/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const response = stocks.find((stock) => stock.id === id);
	if (response) {
		res.send(response);
	} else {
		res.status(404).json({ error: "Stock not found" });
	}
});
app.get("/stocks", (req, res) => {
	const sort = req.query.sort;

	let response = stocks.filter((stock) => stock.availableQuantity > 0);
	if (sort === "price") {
		response.sort((a, b) => a.price - b.price);
	}
	res.send(response);
});

app.get("/cart", (req, res) => {
	let totalPrice = 0;
	cart.forEach((items) => {
		totalPrice = totalPrice + items.price * items.quantity;
		return totalPrice;
	});
	res.json({ items: cart, totalPrice });
});
app.get("/cart/check", (req, res) => {
	let stockId = parseInt(req.query.stockId);
	let response = cart.find((item) => item.id === stockId);
	res.json({ exists: !!response });
});

//
//

//728

//
const { open } = require("sqlite");
const sqlite3 = require("sqlite3").verbose();
let db;
(async () => {
	db = await open({ filename: "database.sqlite", driver: sqlite3.Database });
})();

async function fetchProductsByBrand(brand) {
	const query = "Select * From products Where brand = ? ";
	const response = await db.all(query, [brand]);
	return response;
}

app.get("/products/brand/:brand", async (req, res) => {
	try {
		const brand = req.params.brand;

		const result = await fetchProductsByBrand(brand);
		if (result.length === 0)
			return res.status(404).json({ message: "No Data Found." });

		return res.status(200).json({ products: result });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Error while fetching.", error: error.message });
	}
});

async function fetchProductsByCategory(category) {
	const query = "Select * From products Where category = ?";
	const response = await db.all(query, [category]);
	return response;
}
app.get("/products/category/:category", async (req, res) => {
	try {
		const category = req.params.category;
		const result = await fetchProductsByCategory(category);
		if (result.length === 0)
			return res.status(404).json({ message: "No Data Found." });
		return res.status(200).json({ products: result });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Error while fetching.", error: error.message });
	}
});

async function fetchProductsByStock(stock) {
	const query = "Select * From products Where stock = ?";
	const response = await db.all(query, [stock]);
	return response;
}
app.get("/products/stock/:stock", async (req, res) => {
	try {
		const stock = req.params.stock;
		const result = await fetchProductsByStock(stock);
		if (result.length === 0)
			return res.status(404).json({ message: "No Data Found." });

		return res.status(200).json({ products: result });
	} catch (error) {
		return res
			.status(500)
			.json({ message: "Error while fetching.", error: error.message });
	}
});
