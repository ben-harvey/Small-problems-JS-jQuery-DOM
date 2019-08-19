// name property added to make objects easier to identify
var foo = {name: 'foo'};
var bar = Object.create(foo);
bar.name = 'bar';
var baz = Object.create(bar);
baz.name = 'baz';
var qux = Object.create(baz);
qux.name = 'qux';


// Object.prototype.ancestors = function () {
//   const prototypes = [];
//   let ancestor = Object.getPrototypeOf(this);

//   while (ancestor.hasOwnProperty('name')) {
//     prototypes.push(ancestor.name);
//     ancestor = Object.getPrototypeOf(ancestor);
//   }

//   prototypes.push('Object.prototype');
//   return prototypes;
// }
Object.prototype.ancestors = function ancestors() {
  var ancestor = Object.getPrototypeOf(this);

  if (ancestor.hasOwnProperty('name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }

  return ['Object.prototype'];
};

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']
