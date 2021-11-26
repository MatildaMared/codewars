// You are going to be given a word. Your job is to return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
	const middle = (s.length - 1) / 2;
	if (s.length % 2 === 0) {
		return `${s.charAt(middle)}${s.charAt(middle + 1)}`;
	} else {
		const middle = (s.length - 1) / 2;
		return s.charAt(middle);
	}
}

console.log(getMiddle("A"));
console.log(getMiddle("middle"));
console.log(getMiddle("testing"));
console.log(getMiddle("test"));
