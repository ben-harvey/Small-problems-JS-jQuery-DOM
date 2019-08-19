/*
input: array
output: array
rules:
  output is same length as input
  output is running total of original array
  empty input give empty output
  single el input gives identical output
algorithm:
  [2, 5, 13]
  [2, 7, 20]
  push index 0 to result
  starting at index 1, push index of input plus index -1 of output to output
  return output
*/

function runningTotal(array) {
  var result = [];
  if (array.length === 0) { return result; }
  result.push(array[0]);

  for(var i = 1; i < array.length; i += 1) {
    result.push(array[i] + result[i - 1]);
  }

  return result;
}

// FE ----------

function runningTotal(array) {
  var sum = 0;
  return array.map((element) => sum += element);
}



console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []