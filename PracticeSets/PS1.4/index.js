//SORTING
//Return the numbers sorted in ascending order.
let numbers = [2, 5, 10, 6, 4];
function sortAscending(numbers) {
	return numbers.sort((a, b) => a - b);
}
console.log(sortAscending(numbers));

//Return the ages sorted in descending order.
const ages = [32, 21, 45, 29, 39];
function sortDescending(ages) {
	return ages.sort((a, b) => b - a);
}
console.log(sortDescending(ages));

//Return the prices sorted from most expensive to least expensive.
const prices = [99, 150, 75, 120, 200];
function sortPrices(prices) {
	return prices.sort((a, b) => b - a);
}
console.log(sortPrices(prices));

//Return all ongoing projects sorted by duration in ascending order.
const projects = [
	{ name: "Project A", duration: 12, status: "completed" },
	{ name: "Project B", duration: 8, status: "ongoing" },
	{ name: "Project C", duration: 10, status: "ongoing" },
	{ name: "Project D", duration: 6, status: "completed" },
];
function sortProjectsAsc(projects) {
	let ongoingProjects = projects.filter((p) => p.status === "ongoing");
	return ongoingProjects.sort((a, b) => a.duration - b.duration);
}
console.log(sortProjectsAsc(projects));

//Return all completed projects sorted by duration in ascending order.
function sortDurationAsc(projects) {
	let completedProjects = projects.filter(
		(project) => project.status === "completed"
	);
	return completedProjects.sort((a, b) => a.duration - b.duration);
}
console.log(sortDurationAsc(projects));

//Return all completed projects sorted by duration in ascending order.
function sortAllProjectsAsc(projects) {
	return projects.sort((a, b) => a.duration - b.duration);
}
console.log(sortAllProjectsAsc(projects));

//Return the all gadgets made by 'Apple' with quantity ascending order.
const gadgets = [
	{ name: "iPhone", brand: "Apple", quantity: 2 },
	{ name: "Galaxy S21", brand: "Samsung", quantity: 5 },
	{ name: "iPad", brand: "Apple", quantity: 3 },
	{ name: "Pixel 5", brand: "Google", quantity: 1 },
];
function sortAppleGadgets(gadgets) {
	let appleGadgets = gadgets.filter((gad) => gad.brand === "Apple");
	return appleGadgets.sort((a, b) => a.quantity - b.quantity);
}
console.log(sortAppleGadgets(gadgets));

//Return the all products sorted by price in ascending order.
const products = [
	{ name: "Laptop", price: 1000 },
	{ name: "Smartphone", price: 800 },
	{ name: "Tablet", price: 600 },
	{ name: "Monitor", price: 300 },
	{ name: "Keyboard", price: 100 },
];
function sortProductsAsc(products) {
	return products.sort((a, b) => a.price - b.price);
}
console.log(sortProductsAsc(products));

//Return the all the cars on manufacturing years in ascending order.
const cars = [
	{ make: "Toyota", model: "Camry", year: 2015 },
	{ make: "Honda", model: "Accord", year: 2008 },
	{ make: "Tesla", model: "Model 3", year: 2020 },
	{ make: "Ford", model: "Fusion", year: 2009 },
];
function sortCarsManufacturingYear(cars) {
	return cars.sort((a, b) => a.year - b.year);
}
console.log(sortCarsManufacturingYear(cars));
//Return the all the athletes who scored above 90 in ascending.
const athletes = [
	{ name: "John", score: 85 },
	{ name: "Mike", score: 92 },
	{ name: "Sara", score: 88 },
	{ name: "Linda", score: 95 },
];

function sortScore(athletes) {
	return athletes
		.filter((athletes) => athletes.score > 90)
		.sort((a, b) => a.score - b.score);
}
console.log(sortScore(athletes));

//Return the all the students whose Grade is A with descending order of marks.

const students = [
	{ name: "Alex", grade: "B", marks: 75 },
	{ name: "Bella", grade: "A", marks: 90 },
	{ name: "Chris", grade: "C", marks: 58 },
	{ name: "Diana", grade: "A", marks: 80 },
];
function sortGradeAdesc(students) {
	return students
		.filter((stud) => stud.grade === "A")
		.sort((a, b) => b.marks - a.marks);
}
console.log(sortGradeAdesc(students));

//Return the all employees in the 'Engineering' department in salary descending order.
const employees = [
	{ name: "Raman", department: "Engineering", salary: 70000 },
	{ name: "Samiksha", department: "Marketing", salary: 55000 },
	{ name: "Ronak", department: "Engineering", salary: 80000 },
	{ name: "Kevin", department: "Marketing", salary: 50000 },
	{ name: "Siddharth", department: "Sales", salary: 60000 },
	{ name: "Sam", department: "Marketing", salary: 55000 },
];
function sortEngEmpSalaryDes(employees) {
	return employees
		.filter((emp) => emp.department === "Engineering")
		.sort((a, b) => b.salary - a.salary);
}
console.log(sortEngEmpSalaryDes(employees));

//Return the all employees in the 'Marketing' department in salary ascending order.
function sortMarketingEmpSalaryAsc(employees) {
	return employees
		.filter((emp) => emp.department === "Marketing")
		.sort((a, b) => a.salary - b.salary);
}
console.log(sortMarketingEmpSalaryAsc(employees));

//Return the all employees in the salary greater than 60000 in descending order.
function sortEmpSalaryDes(employees) {
	return employees
		.filter((emp) => emp.salary > 60000)
		.sort((a, b) => b.salary - a.salary);
}

console.log(sortEmpSalaryDes(employees));

//Return the all employees in the salary less than 70000 in ascending order.
function sortEmployeesSalaryAsc(employees) {
	return employees
		.filter((emp) => emp.salary < 70000)
		.sort((a, b) => a.salary - b.salary);
}
console.log(sortEmployeesSalaryAsc(employees));
