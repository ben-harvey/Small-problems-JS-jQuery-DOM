/*
input: 1. an integer, count  2. an integer, starting number
output: an array of integers
rules:
  output starts at starting number
  output is count length
  each number in output is a multiple of starting number
  count is >= 0
  0 count returns empty array
  starting number can be + or -
algorithm:
  create array of starting numbers of length count
    eg [1, 1, 1, 1, 1]
  map array with incrementing counter, returning product
*/

const sequence = (count, start) => {
  const startArray = Array.from(Array(count), n => start);
  return startArray.map( (value, index) => value * (index + 1) );
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

