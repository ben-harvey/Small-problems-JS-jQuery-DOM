
/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.


input: an array of digits rep non negative integer
output: the same array, with the ones place incremented by one
rules:
  very large numbers mean that you can't just convert to integer, add, then convert back to digits

data structure:
  numbers
  array
algorithm:

  if last number is 9,
    last number is 0
    check if previous digit
        if yes, increment
        if no, unshift 1 onto array
  else
    increment last number by 1 and return

*/

// const plusOne = function (digits) {

//     for(let i = digits.length - 1; i >= 0; i -= 1) {
//         console.log((digits[i] + 1) > 9);
//         console.log((++digits[i]) > 9);
//         if ((digits[i] + 1) > 9){
//             digits[i] = 0;
//         } else {
//             return digits;
//         }
//         digits.unshift(1);
//         return digits;
//     }
// }

// var plusOne = function(digits) {
//   for(var i = digits.length - 1; i >= 0; i--){
//     if(++digits[i] > 9) digits[i] = 0;
//     else return digits;
//   }
//   digits.unshift(1);
//   return digits;
// };




// console.log(plusOne([0])); // [1]
// console.log(plusOne([9])); // [1, 0]
// console.log(plusOne([1, 0])); // [1, 1]
// // console.log(plusOne([1, 9])); // [2, 0]
// // console.log(plusOne([9, 9])); // [1, 0, 0]
// // console.log(plusOne([1, 9, 9])); // [2, 0, 0]
// // console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]
// console.log(plusOne([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 6]



// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

// Example:
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

// All numbers in the list are positive numbers and the list can be empty.

// Notes
// it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
// Don't modify the input
// For C: The result is freed.











/*

 algorithm:
    split input to array of strings on spaces ['56', '65']
  create object with key of 'weight' and value of array with string element []
  { 11: ['56', '65'],


  set result string
  iterate over keys from min to max

  if one value, add that value to result string
  if more than one, sort the value array and add each element to result
  return result

  min = [...min(array)];
*/

// split string to array of digits, inject to sum and return number
// const stringNumToWeight = function (stringNum) {
//   return stringNum.split('')
//                                 .map((char) => +char)
//                                 .reduce((first, second) => first + second)
// }

// console.log(stringNumToWeight('64'));


// const fatToFit = function (numbers) {
//   const eachNumber = numbers.split(' ');
//   const weightAndNumbers = {};

//   eachNumber.forEach((number) => {
//     const weight = stringNumToWeight(number);
//     if (!(weightAndNumbers[weight])) { weightAndNumbers[weight] = [] };
//     weightAndNumbers[weight].push(number);
//     });

//     const weights = Object.keys(weightAndNumbers);
//     let result = [];

//     weights.forEach((subweight) => {
//         weightAndNumbers[subweight].sort().forEach((number) => result.push(number) );
//     });

//     return result.join(' ');
// }

// console.log(fatToFit("56 65 74 100 99 68 86 180 90")); // "100 180 90 56 65 74 68 86 99"








































