// ## **Exercise 1**

// Given an array of objects where each object represents a person with properties for name, age, and profession. Return an array of names of people whose profession is `Engineer`.

const people = [
	{ name: "Amit", age: 32, profession: "Doctor" },
	{ name: "Ravi", age: 27, profession: "Engineer" },
	{ name: "Sneha", age: 29, profession: "Teacher" },
	{ name: "Vikram", age: 25, profession: "Engineer" },
];

function engineerPeople() {
	return people
		.filter((person) => person.profession === "Engineer")
		.map((person) => person.name);
}

console.log(engineerPeople());

//## **Exercise 2**

// Given an array of objects where each object represents a city with properties for name, population, and area. Sort the array of cities by population in descending order.

const cities = [
	{ name: "Mumbai", population: 20411000, area: 603 },
	{ name: "Delhi", population: 16787941, area: 1484 },
	{ name: "Bengaluru", population: 8443675, area: 709 },
	{ name: "Chennai", population: 7090000, area: 426 },
];

function sortCities() {
	return cities.sort((a, b) => b.population - a.population);
}
console.log(sortCities());

//## **Exercise 3**

// Given an array of objects where each object represents a gadget with properties for brand, model, and price. Filter out gadgets that cost more than `5000`.

const gadgets = [
	{ brand: "Xiaomi", model: "Redmi Note", price: 10000 },
	{ brand: "Realme", model: "C Series", price: 8000 },
	{ brand: "Lava", model: "Z Series", price: 4500 },
	{ brand: "Micromax", model: "In 1", price: 3000 },
];
function costlyGadgets() {
	return gadgets.filter((gadget) => gadget.price > 5000);
}

console.log(costlyGadgets());

//## **Exercise 4**

// Given an array of objects where each object represents a song with properties for title, artist, and releaseYear. Find the song released in the year 1988 and display it in the expected format.

const songs = [
	{
		title: "Mile Sur Mera Tumhara",
		artist: "Various Artists",
		releaseYear: 1988,
	},
	{
		title: "Jumma Chumma De De",
		artist: "Kavita Krishnamurthy",
		releaseYear: 1991,
	},
	{ title: "Roop Tera Mastana", artist: "Kishore Kumar", releaseYear: 1972 },
	{ title: "Ek Ladki Ko Dekha", artist: "Kumar Sanu", releaseYear: 1994 },
];

function songFilterByYear(year) {
	let filteredSongs = songs.filter((song) => song.releaseYear === year);
	if (filteredSongs.length > 0) {
		console.log(
			`Title: ${filteredSongs[0].title}\nArtist: ${filteredSongs[0].artist}\nYear: ${filteredSongs[0].releaseYear}`
		);
	} else {
		console.log("No song found for the given year.");
	}
}
songFilterByYear(1988);

//## **Exercise 5**

// Provided an array of objects where each object represents a device with properties for brand, model, and stock. Write a function `updateDeviceStock` to update the stock of a device given its model and the new stock value.

const devices = [
	{ brand: "Apple", model: "MacBook", stock: 50 },
	{ brand: "Dell", model: "XPS", stock: 30 },
	{ brand: "HP", model: "Pavilion", stock: 40 },
	{ brand: "Lenovo", model: "ThinkPad", stock: 20 },
];

function updateDeviceStock(model, newStock) {
	let device = devices.find((device) => device.model === model);

	if (device) {
		device.stock = newStock;
		console.log(`The updated stock for ${device.model} is ${device.stock}.`);
	} else {
		console.log(`Device with model ${model} not found.`);
	}
}

updateDeviceStock("XPS", 60);

//## **Exercise 6**

// Given an array of objects where each object represents a meal with properties for name, calories, and servings. Calculate the total calories consumed across all servings using `for` loop.

const meals = [
	{ name: "Burger", calories: 300, servings: 2 },
	{ name: "Pizza", calories: 400, servings: 3 },
	{ name: "Salad", calories: 100, servings: 1 },
	{ name: "Pasta", calories: 200, servings: 4 },
];

function totalCalories() {
	let sumCalories = 0;
	for (i = 0; i < meals.length; i++) {
		sumCalories += meals[i].servings * meals[i].calories;
	}
	return `Total calories consumed: ${sumCalories}`;
}

console.log(totalCalories());

//## **Exercise 7**

// Given an array of objects where each object represents a book with properties for title, author, and rating. Return an array of titles of books with a rating of 4 or higher.

const books = [
	{ title: "The White Tiger", author: "Aravind Adiga", rating: 4.2 },
	{ title: "God of Small Things", author: "Arundhati Roy", rating: 3.9 },
	{ title: "Train to Pakistan", author: "Khushwant Singh", rating: 4.3 },
	{ title: "Five Point Someone", author: "Chetan Bhagat", rating: 3.6 },
];
function highRatedBooks() {
	return books.filter((book) => book.rating >= 4).map((book) => book.title);
}

console.log(highRatedBooks());

//## **Exercise 8**

// Given an array of objects where each object represents a player with properties for name, score, and team. Sort the players by their score in descending order.

const players = [
	{ name: "Virat Kohli", score: 100, team: "RCB" },
	{ name: "MS Dhoni", score: 75, team: "CSK" },
	{ name: "Rohit Sharma", score: 90, team: "MI" },
	{ name: "KL Rahul", score: 80, team: "LSG" },
];
function sortedPlayer() {
	return players.sort((a, b) => b.score - a.score);
}

console.log(sortedPlayer());

//## **Exercise 9**

// Given an array of objects where each object represents a store with properties for name, location, and revenue. Filter out stores located in `Mumbai`.

const stores = [
	{ name: "Big Bazaar", location: "Mumbai", revenue: 500000 },
	{ name: "Reliance Fresh", location: "Pune", revenue: 300000 },
	{ name: "D-Mart", location: "Mumbai", revenue: 700000 },
	{ name: "More Supermarket", location: "Bengaluru", revenue: 800000 },
];

function storesOutMumbai() {
	return stores.filter((store) => store.location !== "Mumbai");
}
console.log(storesOutMumbai());

//## **Exercise 10**

// Given an array of objects where each object represents a pet with properties for name, type, and age. Find the first pet older than 5 years.

const pets = [
	{ name: "Buddy", type: "Dog", age: 3 },
	{ name: "Mittens", type: "Cat", age: 6 },
	{ name: "Charlie", type: "Parrot", age: 2 },
	{ name: "Max", type: "Rabbit", age: 8 },
];

let firstPet = pets.find((pet) => pet.age > 5);

console.log(
	`Name: ${firstPet.name}\nType: ${firstPet.type}\nAge: ${firstPet.age}`
);

//## **Exercise 11: Extract Employee Salaries**

// You are given an array of employee objects where each object contains the name, department, and salary of an employee. Use the `map()` method to extract an array of only the salaries from the employee data.

let employees = [
	{ name: "Rajesh", department: "IT", salary: 60000 },
	{ name: "Pooja", department: "HR", salary: 50000 },
	{ name: "Alok", department: "Finance", salary: 70000 },
	{ name: "Divya", department: "Marketing", salary: 65000 },
];

console.log(employees.map((emp) => emp.salary));

//## **Exercise 12: Total Revenue from Events**

// You are given an array of event objects where each object contains the event name, tickets sold, and ticket price. Use the `reduce()` method to calculate the total revenue generated from all the events.

let events = [
	{ name: "Bollywood Night", ticketsSold: 500, ticketPrice: 1000 },
	{ name: "Stand-Up Comedy", ticketsSold: 200, ticketPrice: 800 },
	{ name: "Music Festival", ticketsSold: 1000, ticketPrice: 1500 },
	{ name: "Food Fest", ticketsSold: 700, ticketPrice: 500 },
];

let totalRevenue = events.reduce((acc, event) => {
	return acc + event.ticketsSold * event.ticketPrice;
}, 0);

console.log(`Total Revenue: ${totalRevenue}`);

//## **Exercise 13: Generate Full Names**

// You are given an array of objects where each object contains the first name and last name of a person. Use the `map()` method to generate an array of full names in the format "FirstName LastName."

let allPeople = [
	{ firstName: "Ramesh", lastName: "Gupta" },
	{ firstName: "Sonia", lastName: "Sharma" },
	{ firstName: "Karan", lastName: "Kapoor" },
	{ firstName: "Anjali", lastName: "Verma" },
];

console.log(
	allPeople.map((people) => people.firstName + " " + people.lastName)
);

//## **Exercise 14: Total Age of People**

// You are given an array of objects where each object contains the name and age of a person. Your task is to calculate the total age of all people in the array using the `reduce()` method.

let agePeople = [
	{ name: "Neha", age: 22 },
	{ name: "Rahul", age: 28 },
	{ name: "Ankita", age: 25 },
	{ name: "Varun", age: 30 },
];

console.log(
	"Total Age: ",
	agePeople.reduce((acc, people) => {
		return acc + people.age;
	}, 0)
);

//## **Exercise 15: Total Cost of Items**

// You are given an array of objects where each object contains the name of an item, its quantity, and its price. Your task is to calculate the total cost of all the items using the `reduce()` method.

let items = [
	{ name: "Notebook", quantity: 5, price: 30 },
	{ name: "Pen", quantity: 10, price: 10 },
	{ name: "Eraser", quantity: 15, price: 5 },
	{ name: "Ruler", quantity: 3, price: 20 },
];

console.log(
	"Total Cost: ",
	items.reduce((acc, item) => {
		return acc + item.quantity * item.price;
	}, 0)
);
