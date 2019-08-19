// var myVar = 'This is global';

// function someFunction() {
//   var myVar = 'This is local';
// }

// someFunction();
// console.log(myVar);

// hoisted version
function someFunction() {
  var myVar;
  myVar = 'This is local'; // this myVar has a local function scope
}

var myVar;
myVar = 'This is global';


someFunction();
console.log(myVar); // this myVar resolves to the global myVar, so it logs 'this is global'

// JavaScript uses lexical scope, which means that variable scope is defined by the structure of
// the code (this is in contrast to dynamic scope, where variable scope is independent of code);
// in JS, function declarations create their own inner variable scope, while variables declared
// outside of functions have a global scope and are available inside and outside of functions.
// (Note there is an exception for variables declared without the var keyword -- even inside a function,
//   they have global scope). If line 4 didn't have the keyword var, it would be a reassignment of the global
// variable myVar, and the program would log 'this is local'. See below

// var myVar = 'This is global';

// function someFunction() {
//   myVar = 'This is local';
// }

// someFunction();
// console.log(myVar);