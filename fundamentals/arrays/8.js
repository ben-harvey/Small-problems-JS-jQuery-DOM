/*
input: 1. array 2. begin index 3. end index
output: new array
rules:
  output is extracted elements:
    starting at begin
    ending before end
  does not mutate input array
  begin and end always > 0
  if begin or end is > array length, set equal to array length
algorithm:
  loop from begin until less than end
  push el at each index to result
  return result
*/

function slice(array, begin, end) {
  var result = [];
  var end = end > array.length ? array.length : end;

  for(var i = begin; i < end; i += 1) {
    result.push(array[i]);
  }

  return result;
}

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// var arr = [1, 2, 3];
// console.log(slice(arr, 1, 3));                     // [2, 3]
// console.log(arr);                                  // [1, 2, 3]

// input: 1. array 2. start index 3. delete count 4. 0 or more elements to add
// output: new array of deleted elements *or* empty array
// rules:
//   remove deleteCount elements from array
//     begin at start index
//   if elements are added
//     insert at start index
//   return empty array if none are deleted

//   start and deleteCount always >= 0
//   if start > length of input array
//     set equal to length
//   if deleteCount is > number of elements left in input array
//     deleteCount equals array.length minus start
//   element1 is first optional arg, elementN is last optional arg

// algorithm:
//   eg [1, 2, 3, 4], 1, 2, 'two', 'three'  ==> [1, 'two', 'three', 4]

//   three arrays
//   [1]
//     from 0 up to start index
//   [two, three]  the arguments
//   [4] (start + deleteCount) to end

//   use slice to build sandwich arrays
//   populate argument array from arguments
//   empty input array
//   starting with first sandwich, then arguments, then sandwich, push to array

function splice(array, start, deleteCount) {
  var length = array.length;
  var start = start > length ? length : start;
  var deleteCount = (deleteCount + start) > length ? length - start : deleteCount;
  var left = array.slice(0, start);
  var right = array.slice(start + deleteCount);
  var deleted = array.slice(start, start + deleteCount)
  var args = Array.from(arguments).slice(3)
  array.length = 0;

  pushToArray(left, array);
  pushToArray(args, array);
  pushToArray(right, array);

  return deleted;
}

function pushToArray(source, target) {
  source.forEach((el) => target.push(el));
}

arr = [1, 2, 3];
console.log(splice(arr, 1, 2));              // [2, 3]
console.log(arr); // [1]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

var arr = [1, 2, 3];
console.log(splice(arr, 1, 1, 'two'));             // [2]
console.log(arr);                                  // [1, "two", 3]

var arr = [1, 2, 3, 4];
console.log(splice(arr, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr);                                  // [1, "two", "three", 4]

var arr = [1, 2, 3];
console.log(splice(arr, 1, 0));                    // []
console.log(splice(arr, 1, 0, 'a'));               // []
console.log(arr);                                  // [1, "a", 2, 3]

var arr = [1, 2, 3];
console.log(splice(arr, 0, 0, 'a'));               // []
console.log(arr);                                  // ["a", 1, 2, 3]

// *** buggy solution *********


// function spliceResult(array, start, deleteCount) {
//   var result = [];
//   for(var i = 0; i < deleteCount; i += 1) {
//     currentElement = array[start + i];
//     result[i] = currentElement;
//   }

//   return result;
// }

// function spliceDelete(array, start, deleteCount) {
//   for(var outer = 0; outer < deleteCount; outer += 1) {
//     for(var i = start; i < array.length - 1; i++) {
//       array[i] = array[i + i]
//     }

//     array.length -= 1;
//   }
// }

// // outer tracks number of iterations
// // outer + 3 skips to the optional value arguments
// // outer advances index so values are inserted in correct order
// function spliceInsert(array, start, deleteCount) {
//   for(var outer = 0; outer + 3 < arguments.length; outer += 1) {
//     var currentArgument = arguments[outer + 3];
//     debugger;
//     for(i = array.length; i > 0; i -= 1) {
//       debugger;
//       array[i] = array[i - 1]
//     }

//     array[start + outer] = currentArgument;
//   }
// }

// function splice(array, start, deleteCount) {
//   var length = array.length;
//   var start = start > length ? length : start;
//   var deleteCount = (deleteCount + start) > length ? length - start : deleteCount;
//   var result = spliceResult(array, start, deleteCount);

//   spliceDelete(array, start, deleteCount);

//   spliceInsert(...arguments);

//   return result;
// }
