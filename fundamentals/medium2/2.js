var person = { name: 'Victor' };
var otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true

// the strict equality operator checks to see  if two objects occupy the same space in memory
// here we have two separate objects that hold the same names and values. To log the expected
// result, point the var otherPerson to the object referenced by person

var person = { name: 'Victor' };
var otherPerson = person;

console.log(person === otherPerson);