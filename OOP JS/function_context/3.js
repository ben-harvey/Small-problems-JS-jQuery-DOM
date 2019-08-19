[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
]
// Explain why this method will not return the desired object? Try fixing this problem by taking advantage of JavaScript lexical scoping rules.

const myBind = function (func, context) {
  return function () {
    return func.apply(context);
  }
}

const franchiser = function(number) {
  return this.name + ' ' + number;
}


var franchise = {
  name: 'How to Train Your Dragon',
  franchiser: function(number) {
    return this.name + ' ' + number;
  },
  boundfranchiser: myBind(franchiser, this),
  allMovies: function() {
    return [1, 2, 3].map(this.boundfranchiser);
  },
};

console.log(franchise.allMovies())

// var franchise = {
//   name: 'How to Train Your Dragon',
//   allMovies: function() {
//     return [1, 2, 3].map(function(number) {
//       return this.name + ' ' + number;
//     }, this);
//   },
// };

// console.log(franchise.allMovies())