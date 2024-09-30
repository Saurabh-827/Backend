//Use a for loop , Return the numbers in doubled value.
let numbers = [2, 4, 6, 10, 5];
function doubleNumbers(numbers) {
	let doubleNumbers = [];
	for (i = 0; i < numbers.length; i++) {
		doubleNumbers.push(numbers[i] * 2);
	}
	return doubleNumbers;
}
console.log(doubleNumbers(numbers));

//Use a for loop to create a new array, push only the names of students who have a grade of 'A'.
const students = [
	{ name: "Alice", grade: "A" },
	{ name: "Bob", grade: "B" },
	{ name: "Charlie", grade: "A" },
	{ name: "David", grade: "C" },
];
function gradeAStudents(students) {
	let gradeAStud = students.filter((student) => student.grade === "A");
	let gradeAStudNames = [];
	for (i = 0; i < gradeAStud.length; i++) {
		gradeAStudNames.push(gradeAStud[i].name);
	}
	return gradeAStudNames;
}
console.log(gradeAStudents(students));

//Use a for loop, Create new array push the prices having greater than 100 .

const prices = [99, 150, 75, 120, 200];

function pushPrices(prices) {
	let greaterPrices = [];
	for (i = 0; i < prices.length; i++) {
		if (prices[i] > 100) {
			greaterPrices.push(prices[i]);
		}
	}
	return greaterPrices;
}
console.log(pushPrices(prices));

//Use a for loop return a new array, push all even ages.
const ages = [12, 15, 22, 29, 34];
function evenAges(ages) {
	let evenAges = [];
	for (i = 0; i < ages.length; i++) {
		if (ages[i] % 2 === 0) {
			evenAges.push(ages[i]);
		}
	}
	return evenAges;
}
console.log(evenAges(ages));

//Use a for loop , Return a single string that combines all sports, each sport followed by a question mark.

const sports = ["Soccer", "Basketball", "Tennis"];
//{ *****using .JOIN METHOD ******}
// function sportsMark(sports) {
// 	let result = sports.join("?");
// 	return result;
// }
// output: Soccer?Basketball?Tennis
function sportsMark(sports) {
	let sportsMarked = [];
	for (i = 0; i < sports.length; i++) {
		sportsMarked.push(sports[i] + "?");
	}
	return sportsMarked;
}
console.log(sportsMark(sports));

//Use a for loop , return a new array, push all even numbers.
const newNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function allEvenNumbers(numbers) {
	let allEven = [];
	for (i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			allEven.push(numbers[i]);
		}
	}
	return allEven;
}
console.log(allEvenNumbers(newNumbers));

//Use a for loop, return a new array, push all odd numbers.
function allOddNumbers(newNumbers) {
	let allOdd = [];
	for (i = 0; i < newNumbers.length; i++) {
		if (newNumbers[i] % 2 !== 0) {
			allOdd.push(newNumbers[i]);
		}
	}
	return allOdd;
}
console.log(allOddNumbers(newNumbers));

//Use a for loop and join, Return a single string that concatenates all the names, separated by a -
const names = ["John", "Doe", "Jane", "Smith"];
function namesString(names) {
	let arrayString = "";
	for (i = 0; i < names.length; i++) {
		arrayString = arrayString + names[i];
		if (i < names.length - 1) {
			arrayString = arrayString + "-";
		}
	}
	return arrayString;
}
console.log(namesString(names));

//Use a for loop , join all the strings into a single string, separated by a space.
const strings = ["Hello", "world", "from", "practice", "set"];
function spacedStrings(strings) {
	let spacedStrings = "";
	for (i = 0; i < strings.length; i++) {
		spacedStrings = spacedStrings + strings[i];
		if (i < strings.length - 1) {
			spacedStrings = spacedStrings + " ";
		}
	}
	return spacedStrings;
}
console.log(spacedStrings(strings));

//Use a for loop , join all the strings into a single string, separated by a comma.
const fruitStrings = ["apple", "banana", "cherry"];
function fruitStringsMarked(fruitStrings) {
	let fruitString = "";
	for (i = 0; i < fruitStrings.length; i++) {
		fruitString = fruitString + fruitStrings[i];
		if (i < fruitStrings.length - 1) {
			fruitString = fruitString + ",";
		}
	}
	return fruitString;
}
console.log(fruitStringsMarked(fruitStrings));

//Use a for loop, return a new array containing the models of cars manufactured after 2010 (push all the array having years Greater than 2010).
const cars = [
	{ make: "Toyota", model: "Camry", year: 2015 },
	{ make: "Honda", model: "Accord", year: 2008 },
	{ make: "Tesla", model: "Model 3", year: 2020 },
	{ make: "Ford", model: "Fusion", year: 2009 },
];
function carsAfter2010(cars) {
	let after2010 = [];
	for (i = 0; i < cars.length; i++) {
		if (cars[i].year > 2010) {
			after2010.push(cars[i].model);
		}
	}
	return after2010;
}
console.log(carsAfter2010(cars));

//Use a for loop create a new array containing the temperatures in Fahrenheit.
const temperatures = [0, 20, 37, 100];
function temperaturesF(temperatures) {
	let fTemperatures = [];
	for (i = 0; i < temperatures.length; i++) {
		fTemperatures.push((temperatures[i] * 9) / 5 + 32);
	}
	return fTemperatures;
}
console.log(temperaturesF(temperatures));

//Use a for loop create a new array and push the scores that are multiples of 5.
const scores = [10, 22, 25, 33, 40, 55];
function multiScores(scores) {
	let multipleScores = [];
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] % 5 === 0) {
			multipleScores.push(scores[i]);
		}
	}
	return multipleScores;
}
console.log(multiScores(scores));

//Use a for loop to create a new array containing the titles of events taking place in 'New York'.
const events = [
	{ title: "Concert", date: "2022-08-10", location: "New York" },
	{ title: "Art Exhibition", date: "2022-09-12", location: "Los Angeles" },
	{ title: "Tech Conference", date: "2022-10-05", location: "New York" },
];
function newyorkEvents(events) {
	let eventsNY = [];
	for (let i = 0; i < events.length; i++) {
		if (events[i].location === "New York") {
			eventsNY.push(events[i].title);
		}
	}
	return eventsNY;
}
console.log(newyorkEvents(events));

//Use a for loop to create a new array that adds 10 to each age.
const Newages = [20, 25, 30, 35];
function addAges(Newages) {
	let newAges = [];
	for (let i = 0; i < Newages.length; i++) {
		newAges.push(Newages[i] + 10);
	}
	return newAges;
}
console.log(addAges(Newages));
