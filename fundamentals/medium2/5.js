var array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges'; // creates key/value pair '3.4': 'Oranges'
console.log(array.length); // counts elements with valid indices, logs 3
console.log(Object.keys(array).length); // counts all keys, logs 4

array[-2] = 'Watermelon';  // creates key/value pair '-2': 'Watermelon'
console.log(array.length); // counts elements with keys of valid indices, logs 3
console.log(Object.keys(array).length); // counts all keys, logs 5

//  valid indices are non-negative integers