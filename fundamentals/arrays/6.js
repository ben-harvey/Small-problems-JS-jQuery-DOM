/*
input: a string or an array
output: a new string or array
rules:
  reverse the input
algorithm:
  if a string
    split to array
    call reverse method
    join and return
  if an array
    call reverse method
    return

  reverse method
    set result array
    iterate backwards through input and push
    return result

*/

function reverseArray(array) {
  var result = [];
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  return result;
}

function reverse(input) {

  if (Array.isArray(input)) {
    return reverseArray(input);
  } else {
    splitString = input.split('');
    return reverseArray(splitString).join('')
  }
}

// buggy ------------

function reverse(inputForReversal) {
  if (Array.isArray(inputForReversal)) {
    return reverseArray(inputForReversal);
  } else {
    return reverseString(inputForReversal);
  }
}

function reverseArray(inputForReversal) {
  var reversed = [];
  var length = inputForReversal.length;
  var i;

  for (i = 0; i < length; i += 1) {
    reversed[length - i] = inputForReversal[i]; // at i = 0, length - i = length, which sets the
                                                      // result array length at 1 greater than the input
                                                      // length.  The result is one empty element at index 0
                                                      // of the result array
  }

  return reversed;
}

function reverseString(inputForReversal) {
  var stringArray = inputForReversal.split(' '); // splits on spaces, not on chars
  return reverseArray(stringArray).join(' '); //nothing to join since string was not split
}





// console.log(reverse('Hello'));           // "olleH"
// console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

var array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]