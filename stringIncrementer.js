// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
	let charString = "";
	let numberString = "";
	const arr = string.split("").forEach((character) => {
		if (+character || character == 0) {
			numberString += character;
		} else {
			charString += character;
		}
	});
	const leadingZeros =
		numberString.length - parseInt(numberString).toString().length;
	console.log("leading zeros: ", leadingZeros);
	const numberLength = parseInt(numberString).toString().length;
	const incrementedNumber = +numberString + 1;
	return (
		charString + incrementedNumber.toString().padStart(numberString.length, "0")
	);
}

console.log(incrementString("foobar12"));
console.log(incrementString("foo0043"));
console.log(incrementString("foo099"));
console.log(incrementString("foo"));
console.log(incrementString("foobar00999"));
