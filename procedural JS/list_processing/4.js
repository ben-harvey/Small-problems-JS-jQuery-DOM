//algortithm  first map, multiply times length - index
// then reduce

const sumOfSums = function (numbers) {
  const length = numbers.length;
  const incremented = numbers.map((number, index) => number * (length - index));
  return incremented.reduce((sum, number) => sum + number);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35