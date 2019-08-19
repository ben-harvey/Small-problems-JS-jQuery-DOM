const isEven = function (number) {
  return number % 2 === 0;
}

function centerOf(string) {
  const length = string.length;
  const centerIndex = string.length / 2;
  const oddCenter = Math.floor(centerIndex)

  if (isEven(length)) {
    return string.substr(centerIndex - 1, 2)
  }

  return string[oddCenter]
}

console.log(centerOf('I Love Ruby'));      // "e"
console.log(centerOf('Launch School'));    // " "
console.log(centerOf('Launch'));           // "un" length 6,
// slice
console.log(centerOf('Launchschool'));     // "hs"
console.log(centerOf('x'));