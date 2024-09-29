const projects = [
	{ name: "Project A", duration: 12, status: "completed" },
	{ name: "Project B", duration: 8, status: "ongoing" },
	{ name: "Project C", duration: 10, status: "ongoing" },
	{ name: "Project D", duration: 6, status: "completed" },
];

function ongoingProjectsName() {
	let filterOngoingProjects = projects.filter(
		(project) => project.status === "ongoing"
	);
	let ongoingProjectsName = [];
	filterOngoingProjects.forEach((project) => {
		ongoingProjectsName.push(project.name);
	});
	return ongoingProjectsName;
}
console.log(ongoingProjectsName());

const cities = [
	{ name: "New York", population: 8000000, country: "USA" },
	{ name: "Toronto", population: 2800000, country: "Canada" },
	{ name: "Los Angeles", population: 4000000, country: "USA" },
	{ name: "London", population: 9000000, country: "UK" },
];
function allUsaCities() {
	let usaCities = cities.filter((city) => city.country === "USA");
	return usaCities;
}
console.log(allUsaCities());

//Return the first song that has a duration of more than 5 minutes.
const songs = [
	{ title: "Song A", artist: "Artist 1", duration: 4.5 },
	{ title: "Song B", artist: "Artist 2", duration: 5.2 },
	{ title: "Song C", artist: "Artist 3", duration: 3.8 },
	{ title: "Song D", artist: "Artist 4", duration: 6.0 },
];
function songMoreThanFiveMinutes() {
	let song = songs.find((s) => s.duration > 5);
	return song;
}
let gaana = songMoreThanFiveMinutes();
console.log(`Title: ${gaana.title}`);
console.log(`Artist: ${gaana.artist}`);
console.log(`Duration: ${gaana.duration}`);

//updates the population of an animal given its species & newPopulation
const animals = [
	{ species: "Tiger", habitat: "Forest", population: 3000 },
	{ species: "Elephant", habitat: "Savannah", population: 5000 },
	{ species: "Panda", habitat: "Bamboo Forest", population: 2000 },
	{ species: "Kangaroo", habitat: "Grassland", population: 10000 },
];
function updatedPopulation(species, newPopulation) {
	let animal = animals.find((a) => a.species === species);
	animal.population = newPopulation;
	return (
		"The updated population of " + animal.species + " is " + animal.population
	);
}
console.log(updatedPopulation("Elephant", 5500));

//Return the names of all players who have scored more than 20 goals.
const players = [
	{ name: "Player A", team: "Team 1", goals_scored: 22 },
	{ name: "Player B", team: "Team 2", goals_scored: 18 },
	{ name: "Player C", team: "Team 1", goals_scored: 25 },
	{ name: "Player D", team: "Team 3", goals_scored: 15 },
];

function playersHaveMoreGoals() {
	let allPlayers = players.filter((player) => player.goals_scored > 20);
	let playersName = [];
	allPlayers.forEach((player) => playersName.push(player.name));
	return playersName;
}
console.log(playersHaveMoreGoals());

//Return all the companies in the 'Tech' industry.
const companies = [
	{ name: "Company A", industry: "Tech", employees: 500 },
	{ name: "Company B", industry: "Finance", employees: 300 },
	{ name: "Company C", industry: "Tech", employees: 700 },
	{ name: "Company D", industry: "Healthcare", employees: 400 },
];

function techCompanies() {
	let allCompanies = companies.filter((com) => com.industry === "Tech");
	return allCompanies;
}
console.log(techCompanies());

//Sort the array of books by pages in descending order.

const books = [
	{ title: "Book A", author: "Author 1", pages: 150 },
	{ title: "Book B", author: "Author 2", pages: 320 },
	{ title: "Book C", author: "Author 3", pages: 290 },
	{ title: "Book D", author: "Author 4", pages: 400 },
];

function sortBooks() {
	let sortedBooks = books.sort((a, b) => b.pages - a.pages);
	return sortedBooks;
}
console.log(sortBooks());

//Return the names of all people who are older than 30 and live in 'India'.
const people = [
	{ name: "Person A", country: "India", age: 35 },
	{ name: "Person B", country: "USA", age: 28 },
	{ name: "Person C", country: "India", age: 32 },
	{ name: "Person D", country: "India", age: 24 },
];
function allIndianPeople() {
	let allPeople = people.filter(
		(person) => person.age > 30 && person.country === "India"
	);
	let peolpeName = [];
	allPeople.forEach((person) => peolpeName.push(person.name));
	return peolpeName;
}
console.log(allIndianPeople());
