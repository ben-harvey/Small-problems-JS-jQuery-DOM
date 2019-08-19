/*
input: 1) an array 2) an array
output: an array
rules:
  output is union of input
  no duplication in output
  inputs are always arrays
algorithm:
  concatenate arrays
  for each element
    if indexOf element doesn't equal index of element
    delete element
    [1, 2, 3, 2]
*/

function union(array1, array2) {
  var combined = array1.concat(array2);
  var i = 0;

  while (i < combined.length) {
    var currentElement = combined[i];
    if (combined.indexOf(currentElement) !== i) {
      combined.splice(i, 1);
    }
    i += 1;
  }
  return combined;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]

