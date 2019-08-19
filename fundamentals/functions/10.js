// logValue();

// function logValue() {
//   console.log('Hello, world!');
// }

// hoisted version
// function logValue() {
//   console.log('Hello, world!');
// }

// logValue();

// JS also hoists function declarations, so functionally it is as if logValue is declared at the top of the
// scope. A program can call a function before it is declared. Therefore logValue logs 'Hello, world!'

// FE

// var logValue = 'foo';

// function logValue() {
//   console.log('Hello, world!');
// }

// console.log(typeof logValue);

// hoisted version


// function logValue() {
//   console.log('Hello, world!');
// }

// var logValue;
// logValue  = 'foo';

// console.log(typeof logValue); // String

// Here, since function declarations are hoisted first, and thus 'above', variable declarations, what looks
// like variable declaration and assignment on line 19 actually becomes reassignment.   var logValue becomes
// redundant because the global variable logValue has already been created and assigned to the function
// logValue.  Therefore line 19 actually works to reassign the logValue variable to a String primitive.
// So, typeof logValue returns 'string', which is logged to the console.



function foo() {
  console.log('Waiting for bar!');
}

function foo() {
  console.log(foo);
  function bar() {
    console.log('bar again');
  }


  function bar() {
    console.log('bar again and again');
  }
}

console.log(foo());
bar();