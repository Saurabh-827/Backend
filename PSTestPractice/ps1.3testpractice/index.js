//Exercise 1

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

function generateReportCard(rollNo) {
	const student = studentData.find((student) => student.rollNo === rollNo);
	if (student) {
		console.log(`===== Report Card for ${student.studentName} ======`);
		console.log(`Roll No. : ${student.rollNo}`);
		console.log("------");
		console.log("Marks:");
		console.log("------");
		console.log(`science: ${student.science}`);
		console.log(`history: ${student.history}`);
		console.log(`geography: ${student.geography}`);
		console.log("------ ------ ------");
	} else {
		console.log("Student not found");
	}
}

generateReportCard(201);

//Exercise 2

function filterStudentsByScienceCutoff(cutoff) {
	return studentData.filter((student) => student.science >= cutoff);
}

console.log(filterStudentsByScienceCutoff(80));

//Exercise 3

function filterStudentsByAverageMarks(cutoff) {
	studentData.forEach((student) => {
		const average = (student.science + student.history + student.geography) / 3;
		if (average >= cutoff) {
			console.log(`Average marks of ${student.studentName} is ${average}`);
		}
	});
}

console.log(filterStudentsByAverageMarks(85));
