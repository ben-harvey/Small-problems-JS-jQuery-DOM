/*
input: 1. a list of numbers to multiply 2. a limit
output a number rep sum of all multiples of input 1
rules:
  find all multiples of each number in input 1, up to limit, exclusive
  eg multiple = 3, limit = 10 -> 3, 6, 9
  sum the list of numbers generated by the above process
  no bad input

data structure:
  an array of numbers
    for reduce
algorithm:
  set a result array = [];
  for each number in the multiples array
    start at the number, increase by the number until greater than the limit
    push each number to result array
  return that reusult
*/



const sumOfMultiples = function (multiples, limit) {
  const allMultiples = [];
  multiples.forEach(multiple => {
    for(let i = multiple; i < limit; i += multiple) {
      // if(!allMultiples.includes(i)) { allMultiples.push(i) }
      allMultiples.push(i);
    }
  });

  uniqueMultiples = allMultiples.filter((number, index, array) => array.indexOf(number) === index);
  return uniqueMultiples.reduce((total, current) => {
    return total + current
  }, 0);
}

console.log(sumOfMultiples([3, 5], 1)); // 0
console.log(sumOfMultiples([3, 5], 4)); // 3 [3]
console.log(sumOfMultiples([3, 5], 10)); // 23 [3, 6, 9, 5]
console.log(sumOfMultiples([3, 5], 100)); // 2_318
console.log(sumOfMultiples([3, 5], 1000)); // 233_168
console.log(sumOfMultiples([7, 13, 17], 20)); // 51
console.log(sumOfMultiples([4, 6],15)); // 30  [4, 8, ]
console.log(sumOfMultiples([5, 6, 8], 150)); // 4419
console.log(sumOfMultiples([43, 47], 10000)); // 2_203_160