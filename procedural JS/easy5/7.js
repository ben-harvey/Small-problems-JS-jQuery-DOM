function swapName(name) {
  return name.split(' ').reverse().join(', ');
}

function swapName(name) {
  const nameWords = name.split(' ');
  const lastName = nameWords.splice(-1)[0];

  return [lastName + ',', ...nameWords].join(' ');
}

console.log(swapName('Joe Bob Slob Knob Roberts'));    // "Roberts, Joe"

// FE algorithm
// store last name, add comma and move to index 0
// Ben Rider Harvey => Harvey, Ben Rider