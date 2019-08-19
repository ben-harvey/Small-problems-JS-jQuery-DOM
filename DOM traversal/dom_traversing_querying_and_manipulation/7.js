/*
input:
output:
rules:

data structure:

algorithm:
  start with an array holding document.body
  map that to ["BODY, [header, main, footer]
  we continue because the last generation of children is non-empty

  map that to ["BODY",[["HEADER", []], ["MAIN", []], ["FOOTER", []]]
  now we stop because the last generation of children are all empty
  */


while (hasChildren) {
  currentParents = [document.body;
  currentChildren = currentParents.children
}



// <!-- > nodesToArr();
// = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]]

// // OR

// = ["BODY", [
//     ["HEADER", []],
//     ["MAIN", []],
//     ["FOOTER", []]]] -->