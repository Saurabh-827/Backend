//  sample data
const people = [
	{ name: "Amit", age: 32, profession: "Doctor" },
	{ name: "Ravi", age: 27, profession: "Engineer" },
	{ name: "Sneha", age: 29, profession: "Teacher" },
	{ name: "Vikram", age: 25, profession: "Engineer" },
];

const cities = [
	{ name: "Mumbai", population: 20411000, area: 603 },
	{ name: "Delhi", population: 16787941, area: 1484 },
	{ name: "Bengaluru", population: 8443675, area: 709 },
	{ name: "Chennai", population: 7090000, area: 426 },
];

const gadgets = [
	{ brand: "Xiaomi", model: "Redmi Note", price: 10000 },
	{ brand: "Realme", model: "C Series", price: 8000 },
	{ brand: "Lava", model: "Z Series", price: 4500 },
	{ brand: "Micromax", model: "In 1", price: 3000 },
];

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

const devices = [
	{ brand: "Apple", model: "MacBook", stock: 50 },
	{ brand: "Dell", model: "XPS", stock: 30 },
	{ brand: "HP", model: "Pavilion", stock: 40 },
	{ brand: "Lenovo", model: "ThinkPad", stock: 20 },
];

const meals = [
	{ name: "Burger", calories: 300, servings: 2 },
	{ name: "Pizza", calories: 400, servings: 3 },
	{ name: "Salad", calories: 100, servings: 1 },
	{ name: "Pasta", calories: 200, servings: 4 },
];

const books = [
	{ title: "The White Tiger", author: "Aravind Adiga", rating: 4.2 },
	{ title: "God of Small Things", author: "Arundhati Roy", rating: 3.9 },
	{ title: "Train to Pakistan", author: "Khushwant Singh", rating: 4.3 },
	{ title: "Five Point Someone", author: "Chetan Bhagat", rating: 3.6 },
];

const players = [
	{ name: "Virat Kohli", score: 100, team: "RCB" },
	{ name: "MS Dhoni", score: 75, team: "CSK" },
	{ name: "Rohit Sharma", score: 90, team: "MI" },
	{ name: "KL Rahul", score: 80, team: "LSG" },
];

const stores = [
	{ name: "Big Bazaar", location: "Mumbai", revenue: 500000 },
	{ name: "Reliance Fresh", location: "Pune", revenue: 300000 },
	{ name: "D-Mart", location: "Mumbai", revenue: 700000 },
	{ name: "More Supermarket", location: "Bengaluru", revenue: 800000 },
];

const pets = [
	{ name: "Buddy", type: "Dog", age: 3 },
	{ name: "Mittens", type: "Cat", age: 6 },
	{ name: "Charlie", type: "Parrot", age: 2 },
	{ name: "Max", type: "Rabbit", age: 8 },
];

let employees = [
	{ name: "Rajesh", department: "IT", salary: 60000 },
	{ name: "Pooja", department: "HR", salary: 50000 },
	{ name: "Alok", department: "Finance", salary: 70000 },
	{ name: "Divya", department: "Marketing", salary: 65000 },
];

let events = [
	{ name: "Bollywood Night", ticketsSold: 500, ticketPrice: 1000 },
	{ name: "Stand-Up Comedy", ticketsSold: 200, ticketPrice: 800 },
	{ name: "Music Festival", ticketsSold: 1000, ticketPrice: 1500 },
	{ name: "Food Fest", ticketsSold: 700, ticketPrice: 500 },
];

let allPeople = [
	{ firstName: "Ramesh", lastName: "Gupta" },
	{ firstName: "Sonia", lastName: "Sharma" },
	{ firstName: "Karan", lastName: "Kapoor" },
	{ firstName: "Anjali", lastName: "Verma" },
];

let thesePeople = [
	{ name: "Neha", age: 22 },
	{ name: "Rahul", age: 28 },
	{ name: "Ankita", age: 25 },
	{ name: "Varun", age: 30 },
];

let items = [
	{ name: "Notebook", quantity: 5, price: 30 },
	{ name: "Pen", quantity: 10, price: 10 },
	{ name: "Eraser", quantity: 15, price: 5 },
	{ name: "Ruler", quantity: 3, price: 20 },
];

//  Exercise 1
let filteredPeople = people.filter((each) => each.profession === "Engineer");

let names = filteredPeople.map((engineer) => engineer.name);

console.log(names);

//  Exercise 2
let sortedCity = cities.sort((a, b) => b.population - a.population);

console.log(sortedCity);

//  Exercise 3
let filteredGadgets = gadgets.filter((gadget) => gadget.price < 5000);

console.log(filteredGadgets);

//  Exercise 4
let findSong = songs.find((song) => song.releaseYear === 1988);

console.log("Title:", findSong.title);
console.log("Artist:", findSong.artist);
console.log("Year:", findSong.releaseYear);

//  Exercise 5
function updateDeviceStock(model, stock) {
	for (let i = 0; i < devices.length; i++) {
		if (devices[i].model === model) {
			devices[i].stock = stock;
		}
	}

	return `The updated stock for ${model} is ${stock}.`;
}

console.log(updateDeviceStock("XPS", 60));

//  Exercise 6
let someCalories = 0;
for (let i = 0; i < meals.length; i++) {
	someCalories += meals[i].calories * meals[i].servings;
}
console.log(`Total calories consumed:`, someCalories);

// Exercise 7
let filteredBooks = books.filter((book) => book.rating >= 4);

let bookTitles = filteredBooks.map((book) => book.title);

console.log(bookTitles);

// Exercise 8
let sortedPlayers = players.sort((a, b) => b.score - a.score);

console.log(sortedPlayers);

// Exercise 9
let filteredStores = stores.filter((store) => store.location !== "Mumbai");

console.log(filteredStores);

//  Exercise 10
let firstPet = pets.find((pet) => pet.age > 5);

console.log(`Name:`, firstPet.name);
console.log(`type:`, firstPet.type);
console.log(`age:`, firstPet.age);

//  Exercise 11: Extract Employee Salaries
let employeesSalary = employees.map((employee) => employee.salary);

console.log(employeesSalary);

// Exercise 12: Total Revenue from Events
let totalEventRevenue = events.reduce((acc, curr) => {
	return acc + curr.ticketPrice * curr.ticketsSold;
}, 0);

console.log(`Total Revenue:`, totalEventRevenue);

//  Exercise 13: Generate Full Names
let fullNames = allPeople.map(
	(people) => people.firstName + " " + people.lastName
);

console.log(fullNames);

//  Exercise 14: Total Age of People
let totalAge = thesePeople.reduce((acc, curr) => {
	return acc + curr.age;
}, 0);

console.log(`Total Age:`, totalAge);

//  Exercise 15: Total Cost of Items
let totalCost = items.reduce((acc, curr) => {
	return acc + curr.price * curr.quantity;
}, 0);

console.log(`Total Cost:`, totalCost);
