function penultimate(string) {
  return string.split(' ')[-2];
}

// console.log(penultimate('last word'));                    // expected: "last"
// console.log(penultimate('Launch School is great!'));      // expected: "is"

// -2 is not an index since it's less than 0. string.split returns an array, and that
// array doesn't have a key of -2, so the [] operator returns undefined.
// the intent is to return the next to last word, which can be accessed with
// (array.length - 2)

function penultimate(string) {
  var words = string.split(' ');
  return words[words.length - 2];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
