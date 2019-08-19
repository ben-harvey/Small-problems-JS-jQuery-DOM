/*
input: number
output: number
rules:
  output represents first fib with length of input
  input greater than 2

  console.log(fib = fib(n - 1)) + fib(n - 2)
  return n if n < 2
algorithm:
  starting at 1, find fib for index
  when fib length equals input
    return index
*/

// My solution ********

// function fibonacci(number) {
//   if (number < 2) {
//     return number;
//   } else {
//     return fibonacci(number - 1) + fibonacci(number - 2);
//   }
// }

// function findFibonacciIndexByLength(length) {
//   var i = 1;
//   var fib;

//   while (true) {
//     fibLength = String(fibonacci(i)).length
//     if (fibLength === length) { return i; }
//     i += 1;
//   }
// }

//  LS solution  **********

function findFibonacciIndexByLength(length) {
  var first = 1;
  var second = 1;
  var index = 2;
  var fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(3));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
// console.log(findFibonacciIndexByLength(16));      // 74

