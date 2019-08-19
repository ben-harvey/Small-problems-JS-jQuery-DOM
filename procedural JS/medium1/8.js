/*
input:
output:
rules:

data structure:
  object with key n and value result
  n: result
algorithm:
  first check if fibonacci(n) has been calculated before
  if so
    use that value
  else
    calculate, use that value
    store that key/value pair in the object
*/



// const fibs = {};

// const fibonacci = function (n) {
//   if (n < 3) { return 1; }
//   let minusOne;
//   let minusTwo;

//   if (fibs[n - 1]) {
//     minusOne = fibs[n -1]
//   } else {
//     minusOne = fibonacci(n - 1);
//     fibs[n - 1] = minusOne;
//   }

//   if (fibs[n - 2]) {
//     minusTwo = fibs[n -2]
//   } else {
//     minusTwo = fibonacci(n - 2);
//     fibs[n - 2] = minusTwo;
//   }

//   return minusOne + minusTwo;
// }


const fibs = {};

const fibonacci = function (n) {
  if (n < 3) { return 1; }
  let minusOne;
  let minusTwo;

  if (fibs[n]) {
    return fibs[n]
  } else {
    fibs[n] = fibonacci(n - 1) + fibonacci(n - 2)
    return fibs[n]
  }
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(100));      // 6765