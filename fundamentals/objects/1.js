var a; // if you add this line, line 11 logs undefined

var myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]);
console.log(myObject[a]); // needs to be ['a'] to disambiguate from a variable named a
console.log(myObject.a);