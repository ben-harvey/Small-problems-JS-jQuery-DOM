// The Greek mathematician Nicomachus devised a classification scheme for natural numbers, identifying each as belonging uniquely to the categories of abundant, perfect, or deficient. A perfect number equals the sum of its positive divisors — the pairs of numbers whose product yields the target number, excluding the number itself. This sum is known as the Aliquot sum.

// Perfect: Sum of factors = number
// Abundant: Sum of factors > number
// Deficient: Sum of factors < number
// Examples:

// 6 is a perfect number because its divisors are 1, 2, 3 and 6 = 1 + 2 + 3.
// 28 is a perfect number because 28 = 1 + 2 + 4 + 7 + 14.
// Prime numbers 7, 13, etc are deficient by the Nicomachus classification.
// Write a program that can tell if a number is perfect, abundant or deficient.

/*
input: a number
output: a string classifying that number
rules:
  to classify a number:
    find its factors
    sum them
    if sum === number, perfect
    if sum > number, abundant
    if sum < number, deficient
  no bad input (numbers <= 1, decimals)

  divisors don't include the number itself

data structure:
  array of numbers
    for reduce to sum
algorithm:
  find divisors of number
    from 1 to number - 1, check if number % divisor === 0
    if so, push to divisors array
  sum those
  return a string based on comparing sum to number
*/

const classify = function (number) {
  const divisors = [];
  for(let i = 1; i < number; i += 1) {
    if(number % i === 0) { divisors.push(i) };
  }
  const sumOfDivisors = divisors.reduce((total, current) => total + current);
  if(number === sumOfDivisors) { return 'perfect'};
  return sumOfDivisors > number ? 'abundant' : 'deficient';
}




console.log(classify(13)); //'deficient'
console.log(classify(6)); //'perfect'
console.log(classify(2)); //'deficient'
console.log(classify(28)); //'perfect'
console.log(classify(12)); //'abundant' 1, 2, 3, 4, 6

