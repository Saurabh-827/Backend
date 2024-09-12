//Returns an array of the names of students who are older than 18.
const students = [
	{ name: "Alice", age: 19, grade: "A" },
	{ name: "Bob", age: 17, grade: "B" },
	{ name: "Charlie", age: 20, grade: "C" },
	{ name: "David", age: 18, grade: "B" },
];
function adultStudents() {
	let adultStudents = students.filter((stud) => stud.age > 18);
	let adultStudentsName = [];
	for (let i = 0; i < adultStudents.length - 1; i++) {
		adultStudentsName.push(adultStudents[i].name);
	}
	return adultStudentsName;
}
console.log(adultStudents());

const products = [
	{ name: "Laptop", price: 1000, category: "Electronics" },
	{ name: "Phone", price: 500, category: "Electronics" },
	{ name: "Pen", price: 3, category: "Stationery" },
	{ name: "Book", price: 20, category: "Books" },
	{ name: "Pencils", price: 2, category: "Stationery" },
];

//Sort the array of products by price in ascending order.
// for (let i = 0; i < products.length - 1; i++) {
// 	for (let j = 0; j < products.length - 1 - i; j++) {
// 		if (products[j].price > products[j + 1].price) {
// 			let a = products[j];
// 			products[j] = products[j + 1];
// 			products[j + 1] = a;
// 		}
// 	}
// }
function sortByPrice() {
	let copyProducts = products.slice();
	copyProducts.sort((product1, product2) => product1.price - product2.price);
	return copyProducts;
}

console.log(sortByPrice());

//Return all the employees who are not from HR department
const employees = [
	{ name: "John", department: "IT", salary: 60000 },
	{ name: "Jane", department: "HR", salary: 50000 },
	{ name: "Doe", department: "Finance", salary: 70000 },
	{ name: "Smith", department: "HR", salary: 55000 },
];
function otherEmployees() {
	let othersEmp = employees.filter((emp) => emp.department !== "HR");
	return othersEmp;
}
console.log(otherEmployees());

//Return the first book published before the year 2000.
const books = [
	{ title: "Book One", author: "Author A", year: 2005 },
	{ title: "Book Two", author: "Author B", year: 1995 },
	{ title: "Book Three", author: "Author C", year: 2010 },
	{ title: "Book Four", author: "Author D", year: 1980 },
];

let book = books.find((book) => book.year < 2000);
console.log("Book: ", book.title);
console.log("Author: ", book.author);
console.log("Year: ", book.year);

//updating mileage of  cars

const cars = [
	{ make: "Toyota", model: "Corolla", mileage: 50000 },
	{ make: "Honda", model: "Civic", mileage: 30000 },
	{ make: "Ford", model: "Mustang", mileage: 40000 },
	{ make: "Tesla", model: "Model 3", mileage: 10000 },
];
function updateCarMileage(make, updateMileage) {
	let car = cars.find((car) => car.make === make);
	car.mileage = updateMileage;
	cars.push(car);
	console.log(cars);
	return `The mileage of ${make} has been updated to ${updateMileage}`;
}
console.log(updateCarMileage("Honda", 35000));

//Calculate the total revenue generated from the sales by for loop.
const sales = [
	{ item: "Laptop", quantity: 2, price: 1000 },
	{ item: "Phone", quantity: 5, price: 500 },
	{ item: "Book", quantity: 10, price: 20 },
	{ item: "Pen", quantity: 100, price: 2 },
];
function totalSales() {
	let totalSale = 0;
	for (let i = 0; i < sales.length; i++) {
		let sale = sales[i].quantity * sales[i].price;
		totalSale = totalSale + sale;
	}
	return `The total revenue generated from the sales is ${totalSale}`;
}
console.log(totalSales());

//Return movies containing only the titles of movies directed by Director A in the expected format
const movies = [
	{ title: "Movie One", director: "Director A", rating: 8 },
	{ title: "Movie Two", director: "Director B", rating: 7 },
	{ title: "Movie Three", director: "Director A", rating: 9 },
	{ title: "Movie Four", director: "Director C", rating: 6 },
];

let moviesByDirector = movies.filter((movie) => movie.director == "Director A");

for (let i = 0; i < moviesByDirector.length; i++) {
	console.log("");
	console.log(moviesByDirector[i].title);
	console.log(moviesByDirector[i].director);
	console.log(" ");
}

//
let cricketers = [
	{
		name: "Virat",
		eden_gardens: 72,
		wankhede_stadium: 88,
		feroz_shah_kotla: 45,
		chepauk: 74,
	},
	{
		name: "Rohit",
		eden_gardens: 64,
		wankhede_stadium: 41,
		feroz_shah_kotla: 68,
		chepauk: 34,
	},
	{
		name: "Shikhar",
		eden_gardens: 54,
		wankhede_stadium: 38,
		feroz_shah_kotla: 72,
		chepauk: 44,
	},
	{
		name: "Rishabh",
		eden_gardens: 22,
		wankhede_stadium: 27,
		feroz_shah_kotla: 34,
		chepauk: 51,
	},
];
for (let i = 0; i < cricketers.length; i++) {
	console.log(`Cricketer: ${cricketers[i].name}`);
	console.log(`Eden Gardens: ${cricketers[i].eden_gardens}`);
	console.log(`Wankhede Stadium: ${cricketers[i].wankhede_stadium}`);
	console.log(`Feroz Shah Kotla: ${cricketers[i].feroz_shah_kotla}`);
	console.log(`Chepauk: ${cricketers[i].chepauk}`);
	console.log(" ");
}
