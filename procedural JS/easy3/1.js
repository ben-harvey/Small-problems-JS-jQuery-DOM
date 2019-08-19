// algorithm  ((max + 1 - min ) * random).floor + min
var min = 3;
var max = 6;
var random = Math.round(Math.random() * (max - min)) + min;
console.log(`Teddy is ${random} years old!`);