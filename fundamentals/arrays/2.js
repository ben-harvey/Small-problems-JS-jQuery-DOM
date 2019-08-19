// method 1 -- use slice() to make a shallow copy`

var myArray = [1, 2, 3, 4];
var myOtherArray = myArray.slice();

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// method 2 -- make a manual copy

var myArray = [1, 2, 3, 4];
var myOtherArray = [];
var i;

for (var i = 0; i < myArray.length; i++) {
  myOtherArray.push(myArray[i]);
}

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);