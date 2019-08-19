/*
input:
output:
rules:

data structure:

algorithm:
  get current element
  set result
  get children of parent element
    map to nodeName
    push to result
  set current element to parent element
*/

const domTreeTracer = function (idArg) {
  current = document.querySelector(`[id="${idArg}"]`)
  const result = [];

  while (current.parentElement.nodeName !== "HTML"){
    const siblings = [...current.parentElement.children]
    const siblingNames = .map(element => element.nodeName);
    result.push(siblingNames);
    current = current.parentElement;
  };

  return result;
}
console.log(domTreeTracer(1));
// = [["ARTICLE"]]
console.log(domTreeTracer(2));
// = [["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]
console.log(domTreeTracer(22));
// = [["A"], ["STRONG"], ["SPAN", "SPAN"], ["P", "P"], ["SECTION", "SECTION"], ["HEADER", "MAIN", "FOOTER"], ["ARTICLE"]]

