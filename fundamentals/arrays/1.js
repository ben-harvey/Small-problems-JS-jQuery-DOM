var myArray = [1, 2, 3, 4];
var myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);

// line 5 logs [1, 2, 3,]
// since objects are mutable and the variables myArray and myOtherArray point to the same
// object, the destructive method call pop on line 4, although called on the variable
// myArray is mutating the object that myOtherArray points to.

// line 8 also logs [1, 2, 3]
// reassignment is not destructive, the = operator points the variable myArray away from the
// object that yOtherArray points to, but doesn't alter that object