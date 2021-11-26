// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(numbers) {
	const obj = {};
	numbers.forEach((element) => {
		if (obj[element]) obj[element] += 1;
		else obj[element] = 1;
	});
	return parseInt(Object.keys(obj).find((key) => obj[key] === 1));
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
