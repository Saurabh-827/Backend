//Find the student with the given roll number.
//Print the report card in the specified format.
const studentData = [
	{ studentName: "John", rollNo: 201, science: 88, history: 75, geography: 90 },
	{
		studentName: "Alice",
		rollNo: 202,
		science: 92,
		history: 85,
		geography: 88,
	},
	{ studentName: "Bob", rollNo: 203, science: 78, history: 89, geography: 91 },
];
function getStudentReportCard(rollno) {
	const student = studentData.find((student) => student.rollNo === rollno);
	if (student) {
		console.log(`===== Report Card for ${student.studentName} =====`);
		console.log(`Roll Number: ${rollno}`);
		console.log("------");
		console.log("Marks:");
		console.log("------");
		console.log(`Science: ${student.science}`);
		console.log(`History: ${student.history}`);
		console.log(`Geography: ${student.geography}`);
		console.log("------ ------ ------");
	} else {
		console.log("Student not found");
	}
}

getStudentReportCard(201);

//Filter the students who have marks greater than or equal to the cutoff in the specified subject.
//Return the filtered array of students.
function marksStudentCutoff(cutoff) {
	let student = studentData.filter((student) => student.science >= cutoff);
	return student;
}
console.log(marksStudentCutoff(80));

//
function studentCutoff(cutoff) {
	let student = studentData.filter((stud) => {
		stud.average = (stud.science + stud.geography + stud.history) / 3;
		return stud.average >= cutoff;
	});
	return student;
}
let students = studentCutoff(85);
students.forEach((stud) => {
	console.log(
		`${stud.studentName} has average marks ${stud.average.toFixed(2)}`
	);
});

//Find Student with Highest Average Marks
function getStudentWithHighestAverage() {
	let highestAverage = 0;
	let topStudent = null;
	for (let i = 0; i < studentData.length; i++) {
		let average =
			(studentData[i].science +
				studentData[i].geography +
				studentData[i].history) /
			3;

		if (average > highestAverage) {
			highestAverage = average;
			topStudent = studentData[i];
		}
	}
	return topStudent;
}
let topStudent = getStudentWithHighestAverage();
console.log(
	`${
		topStudent.studentName
	} has the highest average marks of ${topStudent.average.toFixed(2)}`
);

//Convert Hours to Minutes
hoursToMinutes = (hours) => hours * 60;
let hours = 2;
let minutes = hoursToMinutes(hours);
console.log(`${hours} hours = ${minutes} minutes`);

//Count Occurrences of Character in String

function countOccurrences(str, char) {
	let count = 0;
	for (i = 0; i < str.length; i++) {
		if (str[i] === char) {
			count++;
		}
	}
	return count;
}
const str = "hello world";
const char = "o";
let occurrences = countOccurrences(str, char);
console.log(`Character ${char} repeats ${occurrences} times`);

//Find the Sum of All Even Numbers in an Array

function sumOfEvenNumbers(numbers) {
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] % 2 === 0) {
			sum = sum + numbers[i];
		}
	}
	return sum;
}
let numbers = [1, 2, 3, 4, 5, 6];
let sum = sumOfEvenNumbers(numbers);
console.log(`Sum of even numbers: ${sum}`);
