/*
input: 1. an object 2. a method on the object 3. an argument
output: a method on the current object with supplied argument(s)
rules:

data structure:

algorithm:

*/

var foo = {
  name: 'test',
  bar: function(greeting1, greeting2) {
    console.log(greeting1 + ' ' + greeting2 + ' ' + this.name);
  },
};

const delegate = function (object, method, ...args) {
  return function () {
    object[method](...args);
  };
};

const delegate = function (object, method) {
  const args = Array.prototype.slice.call(arguments, 2);
  return function () {
    object[method].apply(object, args)
  }
}

var baz = {
  qux: delegate(foo, 'bar', 'hello', 'there'),
};

baz.qux();   // logs 'hello test';

foo.bar = function() { console.log('changed'); };
//
baz.qux();          // logs 'changed'