/*
input: a nested array
output: a new nested array rep 90 degree rotation of input
rules:

  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],

  rotated

  3  4  1
  9  7  5
  6  2  8

 0,2. 0,1, 0,0


3  4  1
9  7  5

rotation

9  3
7  4
5  1

number of rows becomes number of columns
column number becomes row number
column number is abs(row number - (length - 1)
  eg row 0 = 0 -2 => -2 => 2
     row 1 - 1 - 2 => -1 = 1
     row 2 = 2 - 2 -> 0

data structure:
  array for index access and iteration abstractions

algorithm:

  using transpose function:
    transpose array
    map over subarrays and reverse

  without transpose function:

  set result array with
    map over rows with index
      0
      set empty subarray
      forEach column
      0,
      1
      push row, abs(col  - (length - 1) onto subresult


  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],

  2,0, 1,0, 0,0
  2,1, 1,1, 0,1
  12

  3  4  1
  9  7  5
  6  2  8
*/

const rotate90 = function (matrix) {
    const columns = matrix.length - 1;

    return matrix[0].map((_, row) => {
      const newRow = [];

      matrix.forEach((_, column) => {
        column = Math.abs(column - columns);
        newRow.push(matrix[column][row]);
      })

      return newRow;
    })
};


// const transpose = function (matrix) {
//     return matrix[0].map((_, column) => {
//       const newRow = [];

//       matrix.forEach((_, row) => {
//         newRow.push(matrix[row][column]);
//       })

//       return newRow;
//     })
// };

// const rotate90 = function (matrix) {
//   return transpose(matrix).map(row => row.reverse());
// }



var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

var newMatrix1 = rotate90(matrix1);
var newMatrix2 = rotate90(matrix2);
var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]