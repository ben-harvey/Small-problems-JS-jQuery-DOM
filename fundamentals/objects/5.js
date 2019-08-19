var myArray = ['a', 'b', 'c'];

console.log(myArray[0]); // 'a'
console.log(myArray[-1]); // undefined

myArray[-1] = 'd';
myArray['e'] = 5;
myArray[3] = 'f';
// ['a', 'b', 'c', 'f', -1': 'd', 'e': 5]

console.log(myArray[-1]); //'d'
console.log(myArray['e']); // 5
console.log(myArray); // ['a', 'b', 'c', 'f', -1': 'd', 'e': 5]

// Array are Objects!!! Any keys that are not non-negative integers are not included
// in length, and the key-value pair is logged by console.log
myArray = [1, 2, 3]
console.log(Object.keys(myArray)); // [ '0', '1', '2' ]
myArray[-1] = 'foo'
console.log(Object.keys(myArray)); // [ '0', '1', '2' ]