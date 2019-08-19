/*
input: 1) an array, 2) an object or a primitive
output: a new array
rules:

  elements in return should be in same order as in args
  result array should copy references to the input array and reflect changes
  should copy primitives
algorithm:
  if arg2 is an array
    iterate over array and push to arg1
  else
    push to arg1

*/

function concat(array1, secondArgument) {
  var result = [];

  array1.forEach((el) => result.push(el));

  if (Array.isArray(secondArgument)) {
    secondArgument.forEach((el) => result.push(el));
  } else {
    result.push(secondArgument);
  }
  return result;
}

console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


var obj = { a: 2, b: 3 };
var newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

var arr1 = [1, 2, 3];
var arr2 = [4, 5, obj];
var arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }