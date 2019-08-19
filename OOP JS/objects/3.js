/*
input:
output:
rules:

data structure:

algorithm:
  for object1, iterate through the keys and see if obj2 has the same key
*/




const objectsEqual = function (object1, object2) {
  return Object.keys(object1).every(key => {
    debugger;
    return object2[key] && object1[key] === object2[key];
  })
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo', a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b:'bar', c: 'qux'}, {a: 'foo', c: 'qux', b: 'bar'}));