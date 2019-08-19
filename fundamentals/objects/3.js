var array1 = ['Moe', {test: 'yes'}, 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
var array2 = array1;
var i;

// for (i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

for (i = 0; i < array1.length; i += 1) {
  if (typeof array1[i] === 'object') {
    array1[i]['test'] = 'no';
  } else
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}
console.log(array1); // mutated
console.log(array2); // not mutated.  Although the two arrays hold the same values, they
// are two different objects, so when the object referenced by array1 is mutated, the object
// referenced by array2 is not affected
// put another way, the primitive types in array2 are *copies* of the primitive values
// in array1, while the compound types in array2 are *references* to the same object as
// the compound types in array 1


// var array1 = ['Moe', 'Larry', 'Curly', 'Chemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
// var array2 = [];
// var i;

// for (i = 0; i < array1.length; i += 1) {
//   array2.push(array1[i]);
// }

// for (i = 0; i < array1.length; i += 1) {
//   if (array1[i].startsWith('C')) {
//     array1[i] = array1[i].toUpperCase();
//   }
// }

// console.log(array2);