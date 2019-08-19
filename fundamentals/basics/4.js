// var name = 'Bob';
// var saveName = name;
// name.toUpperCase();
// console.log(name, saveName);

// on line 1, variable name is initialized and set to String 'Bob'
// on line 2, variable saveName is initialized and set to String 'Bob'
// on line 3, toUpperCase method is called on String 'Bob'. The return value of the method
// call is not captured
// on line 4 the values 'Bob' 'Bob ' are logged to the console

//FE  JS coerces primitives to their Object equivalent when you try to call a method on them

String.prototype.returnMe = function() {
  return this;
}

var a = 'abc'
var b = a.returnMe()

console.log(a) // abc
console.log(typeof a) // string
console.log(b) // [String: 'abc']
console.log(typeof b) // object
