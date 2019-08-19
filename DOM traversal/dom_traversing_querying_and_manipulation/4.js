/*
get the start and end elements by their id
if the start or end elements are not in the DOM, return undefined
set a result array
inside a loop:
  set the current element equal to the end element
  unshift the tag name of the current element on to the result
  set the end element equal to its parent node

break if
  the current element's id equals start
  or
  the parent of the current element is body

  if
    the parent element of the last added element is body
    and
    the current element's id doesn't equal start
      return undefined
  else
    return result
*/

const sliceTree = function (start, end) {
  let startElement = document.getElementById(start);
  let endElement = document.getElementById(end);

  if (!startElement || !endElement) { return undefined };

  let slicedTree = [];
  let currentElement;

  do {
    currentElement = endElement;
    slicedTree.unshift(currentElement.tagName);
    endElement = endElement.parentNode;
  } while (currentElement.id !== String(start) && endElement.tagName !== 'BODY');

  return (endElement.tagName === 'BODY' && currentElement.id !== String(start) ? undefined : slicedTree);
}

console.log(sliceTree(1, 4));
// = ["ARTICLE", "HEADER", "SPAN", "A"]

console.log(sliceTree(1, 76));
// = undefined

console.log(sliceTree(2, 5));
// = undefined

console.log(sliceTree(5, 4));
// = undefined

console.log(sliceTree(1, 23));
// = ["ARTICLE", "FOOTER"]

console.log(sliceTree(1, 22));
// = ["ARTICLE", "MAIN", "SECTION", "P", "SPAN", "STRONG", "A"]

console.log(sliceTree(11, 19));
// = ["SECTION", "P", "SPAN", "STRONG", "A"]
