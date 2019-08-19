/*
input: any number of arrays or values
output: a new array containing all elements/values from input
rules:

algorithm:
  for each argument in arguments
  if arg is an array
    iterate over array and push to result
  else
    push to result
  return result
*/

function concat() {
  var result = [];

  for(var i = 0; i < arguments.length; i += 1) {
    currentArgument = arguments[i];

    if (Array.isArray(currentArgument)) {
    currentArgument.forEach((el) => result.push(el));
    } else {
      result.push(currentArgument);
    }
  }

  return result;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]
