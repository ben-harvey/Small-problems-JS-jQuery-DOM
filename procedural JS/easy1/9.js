/*
input: a number
output: a number
rules:
  output is sum of numbers between 1 and input that are divisible by 3 and 5
  output is inclusive of input
  input is greater than 1
algorithm:
  set a result = 0
  iterate through numbers 1 through input
    for each number
    if number is divisible by 3 or 5
    add number to result
  return result
*/

function multisum(limit) {
  var result = 0;

  for (var i = 1; i <= limit; i += 1)
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }

    return result;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168