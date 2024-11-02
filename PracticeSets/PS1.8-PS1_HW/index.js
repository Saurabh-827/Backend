//Question 1: Double the numbers
let numbers = [2, 1, 5, 7];
let doubleNumbers = numbers.map((number) => number * 2);
console.log(doubleNumbers);

//Question 2: Print each fruit
let fruits = ["apple", "banana", "cherry"];
fruits.forEach((fru) => console.log(fru));

//Question 3: Find the Length of Each String
let words = ["apple", "banana", "kiwi", "watermelon"];

words.forEach((word) => {
	console.log(word.length);
});

//Question 4: Find Even Numbers
let nums = [1, 2, 3, 4, 5, 6];
nums.forEach((num) => {
	if (num % 2 === 0) {
		console.log(num);
	}
});

//Question 5: Sum of Numbers
let sumNums = 0;
for (let i = 0; i < nums.length; i++) {
	sumNums += nums[i];
}
console.log(sumNums);

//Question 6: Print Odd Numbers in an Array

nums.forEach((element) => {
	if (element % 2 !== 0) {
		console.log(element);
	}
});

// Question 7: Find the Average of Numbers
let givenNumbers = [4, 8, 12, 16];
let sumgiv = 0;
givenNumbers.forEach((n) => (sumgiv += n));
let avgNum = sumgiv / givenNumbers.length;
console.log(avgNum);

// Question 8: Find the Maximum Element
let number = [3, 8, 1, 9, 4];
let maxNum = 0;
for (let i = 0; i < number.length; i++) {
	if (number[i] > maxNum) {
		maxNum = number[i];
	}
}
console.log(maxNum);
// Question 9: Reverse an array
let arrayOfNumbers = [1, 2, 3, 4];
let reverseNum = [];
for (let i = arrayOfNumbers.length - 1; i >= 0; i--) {
	reverseNum.push(arrayOfNumbers[i]);
}
console.log(reverseNum);

// Question 10: Count Occurrences of an Item
let names = [
	"Riya",
	"Prashant",
	"Sneha",
	"Riya",
	"Jyoti",
	"Riya",
	"Arghya",
	"Bobby",
];
let count = 0;
let item = "Riya";
names.forEach((name) => {
	if (name == item) {
		count += 1;
	}
});
console.log(count);
