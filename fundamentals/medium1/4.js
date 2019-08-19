function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, colLength = cols.length; j < colLength; j += 1) {
      debugger;
      if (!result[j]) {
        debugger;
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
      debugger;
    }
  }

  return result;
}

// given the following arrays of number arrays
var array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

// array2 in row/column format
// [1, 2, 3]
// [1, 2, 3]
// [1, 2, 3]

console.log(getSelectedColumns(array1, [0]));     // [[1]];            expected: [[1, 4, 7]]
console.log(getSelectedColumns(array1, [0, 2]));  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
console.log(getSelectedColumns(array2, [1, 2]));  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

//  In the original code, the outer loop length variable was reassigned in the inner loop.
// To avoid this, rename the inner loop variable, or use one of the new block-scoped variables
// (let and const) made available in ES6
