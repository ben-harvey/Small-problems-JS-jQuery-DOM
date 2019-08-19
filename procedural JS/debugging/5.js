function range(start, end) {
  var range = [];
  var element;
  for (element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function otherrange(end) {
  return range(0, end);
}


// Examples

console.log(range(10, 20));
console.log(otherrange(5));