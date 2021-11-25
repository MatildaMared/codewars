// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
	let newString = "";
	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === string.charAt(i).toUpperCase()) {
			newString += ` ${string.charAt(i)}`;
		} else {
			newString += string.charAt(i);
		}
	}
	return newString;
}

console.log(solution("camelCasing"));
console.log(solution("nocamelcase"));
console.log(solution("veryMuchCamelCase"));
