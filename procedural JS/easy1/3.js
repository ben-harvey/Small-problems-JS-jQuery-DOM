// length = parseInt(prompt('Enter the length of the room in meters: '), 10);

// width = parseInt(prompt('Enter the width of the room in meters: '), 10);
// area = length * width;
// squareFeet = area * 10.7639;

// console.log(`The area of the room is ${area.toFixed(2)} square meters (${squareFeet.toFixed(2)} square feet).`)

// FE

var unit = prompt('Choose a unit (meters or feet): ')
var length = parseInt(prompt('Enter the length of the room: '), 10);

var width = parseInt(prompt('Enter the width of the room: '), 10);
var area = length * width;
var otherArea = area / 10.7639
var otherUnit = 'meters'

if (unit === 'meters') {
  otherArea = area * 10.7639;
  otherUnit = 'feet';
}


