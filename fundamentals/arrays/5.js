function pop(array) {

  var newLength = array.length - 1
  newLength = newLength < 0 ? 0 : newLength;
  var popped = array[newLength];
  array.length = newLength;
  return popped;
}


// function pop(array) {
//   var poppedElement = array[array.length]; // always equals undefined
//   array.splice[array.length]; // index exceeds array length, reset to array length

//   return poppedElement;  // always returns undefined
// }


var array = [1, 2, 3];
console.log(pop(array));                        // 3
console.log(array);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]




function push(arr) {

  for(var i = 1; i < arguments.length; i += 1) {
    var currentArg = arguments[i];
    arr[arr.length] = currentArg;
  }

  return arr.length;
}


// function push(array) {
//   var length = arguments.length;
//   var i;

//   for (i = 1; i < length; i += 1) {
//     array[i] = arguments[i];  // we want to start at index 1 of arguments, but at index
//                               // array.length to start inserting arguments to the input array
//   }

//   return array.length;
// }

var array = [1, 2, 3];
console.log(push(array, 4, 5, 6));              // 6
console.log(array);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                         // 0