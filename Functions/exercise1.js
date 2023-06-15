// Write a function that takes a string as input and returns the reversed 
// version of the string.
function reverseString(inputString) {
	return inputString.split("").reverse().join("");
}

console.log(reverseString("hello world"));

function explodeStringreverse(inputString, delimiter) {
	return inputString.split(delimiter).reverse();
}

console.log(explodeStringreverse("apple,banana,orange", ","));

// Write a function that takes a number as input and returns its factorial. 
// The factorial of a number is the product of all positive integers less 
// than or equal to that number.

Math.factorial = function (number) {
	if (number === 0) {
		return 1;
	} else {
		return number * Math.factorial(number - 1);
	}
};

console.log(Math.factorial(5));

// Write a function that takes a number as input and returns an array 
// containing the Fibonacci sequence up to that number of elements. 
// The Fibonacci sequence starts with 0 and 1, and each subsequent 
// number is the sum of the two preceding numbers.

function fibonacciSequence(number) {
	if (number === 0) {
		return [];
	} else if (number === 1) {
		return [0];
	} else {
		var sequence = [0, 1];
		for (var i = 2; i < number; i++) {
			sequence.push(sequence[i - 1] + sequence[i - 2]);
		}
		return sequence;
	}
}

console.log(fibonacciSequence(10));

// Write a function that takes a string as input and returns true if 
// it is a palindrome, and false otherwise. A palindrome is a word, 
// phrase, number, or other sequence of characters that reads the same 
// backward as forward.

function isPalindrome(inputString) {
	var reversedString = inputString.split("").reverse().join("");
	return inputString === reversedString;
}

console.log(isPalindrome("racecar"));

// Write a function that takes an array of numbers as input and returns 
// the sum of all the numbers in the array.

function sumArray(numbers) {
	return numbers.reduce(function (total, number) {
		return total + number;
	}, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));

// Write a function that takes an array of numbers as input and returns 
// a new array containing only the even numbers from the original array.

function filterArrayEven(numbers) {
	return numbers.filter(function (number) {
		return number % 2 == 0;
	});
}

console.log(filterArrayEven([1, 2, 3, 4, 5]));

// Write a function that takes an array as input and returns a new array 
// with the elements in reverse order.

console.log([1, 2, 3, 4, 5].reverse());

// Write a function that takes a number as input and returns true if it 
// is a prime number, and false otherwise. 
// A prime number is a natural number 
// greater than 1 that is not a product of two smaller natural numbers.

function isPrime(number, divisor = 2) {
	if (number <= 1) {
		return false;
	}
	if (divisor > Math.sqrt(number)) {
		return true;
	}
	if (number % divisor === 0) {
		return false;
	}
	return isPrime(number, divisor + 1);
}

console.log(isPrime(7));

// Write a function that takes an object as input and returns an array 
// containing the keys of the object.

function objectKeys(object) {
	return Object.keys(object);
}

var myObject = { a: 1, b: 2, c: 3 };
console.log(objectKeys(myObject));

// Write a function that takes an object as input and returns an array 
// containing the values of the object.

function objectValues(object) {
	return Object.values(object);
}

var myObject = { a: 1, b: 2, c: 3 };
console.log(objectValues(myObject));