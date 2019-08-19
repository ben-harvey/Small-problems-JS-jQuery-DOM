/*
input: an integer rep non-zero indexed index of fib number
output: the fib number at that index
rules:
  ** index starts at 1!!**
  to compute a fib, add the previous two numbers
  start with [0, 1]
data structure:
  array for index access
algorithm:
  set fibs to [0, 1]
  for 1, 2
    return index access (n - 1)
  else n - 2 times
    push the result of adding the last two elements of fib onto fib
    return last element of fib
*/

// const fibonacci = function (n) {
//   const fibs = [1, 1];
//   if (n < 3) return 1;

//   for (let i = n; i > 2; i -= 1) {
//     // debugger;
//     let length = fibs.length;
//     fibs.push(fibs[length -1] + fibs[length - 2]);
//   }

//   return fibs[fibs.length - 1];
// }

// Refactor to LS solution ------------

const fibonacci = function (n) {
  let fibs = [1, 1];


  for (let i = n; i > 2; i -= 1) {
    fibs = [fibs[1], fibs[0] + fibs[1]]
  }

  return fibs[1]
}
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(100));      // 354224848179261915075