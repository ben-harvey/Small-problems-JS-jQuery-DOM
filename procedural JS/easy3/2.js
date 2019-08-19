// const ORDINALS = ['1st', '2nd', '3rd', '4th', '5th'];
// var numbers = [];
// for (var i = 0; i < ORDINALS.length; i += 1) {
//   numbers.push(prompt(`Enter the ${ORDINALS[i]} number: `))
// }

// var lastNumber = prompt(`Enter the last number: `)

// var appears = numbers.includes(lastNumber) ? 'appears in' : 'does not appear in';

// console.log(`The number ${lastNumber} ${appears} ${numbers}.`);

// FE --------


const ORDINALS = ['1st', '2nd', '3rd', '4th', '5th'];
var numbers = [];

for (var i = 0; i < ORDINALS.length; i += 1) {
  numbers.push(prompt(`Enter the ${ORDINALS[i]} number: `))
}
var lastNumber = prompt(`Enter the last number: `)

function greaterThan(array, value) {
  return array.some(function(element) {
    return element > value;
  });
}

var appears = greaterThan(numbers, lastNumber) ? 'contains' : "doesn't contain";

console.log(`[${numbers}] ${appears} a number greater than ${lastNumber}.`);

