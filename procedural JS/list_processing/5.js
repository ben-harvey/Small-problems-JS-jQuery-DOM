const substringsAtStart = function (string) {
  const indices = Array.from(Array(string.length).keys());
  return indices.map((index) => string.slice(0, index + 1));
}


console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]