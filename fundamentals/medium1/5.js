var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate)); // logs 15

function counter(count) {
  // ...
}




function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // logs 15
var counter = 5;
var rate = 3;





var counter = 5;
var rate = 3;



function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate)); // logs 15

// in each case, the function is hoisted to the top of the scope and a local variable
// with the function name is created. Then the variable declarations are hoisted above
// the call to console.log but below the function declaration. Therefore `var counter = 5`
// is actually reassignment, not initial assignment, and the variable counter now points
// to 5, so each time the logged value is 15`

// after hoisting:

function counter(count) {
  // ...
}

var rate;

counter = 5; // reassignment of counter variable
rate = 3;

console.log('The total value is ' + String(counter * rate)); // logs 15
