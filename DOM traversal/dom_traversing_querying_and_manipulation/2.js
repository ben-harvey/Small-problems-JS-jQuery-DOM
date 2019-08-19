// <div id="1">
//   <h1 id="2">Hello, <em id="3">World</em></h1>
//   <p id="4">
//     Welcome to wonderland. This is an
//     <span id="5">awesome</spanconsole.log(place).
//   // </p>
//   <a href="#" id="6"><strong id="7">Enter</strong></a>
//   <div id="8"><p id="9"><a href="#" id="10">Go back</a></p></div>
// </div>



// get the node by id
// for that node
//   walk the tree to get all child nodes
      // get direct child nodes length
     // subtract direct child nodes length from total child nodes
     // sub

const walk = function (node, callback) {
  callback(node);
  for (var i = 0; i < node.childNodes.length ; i++) {
    walk(node.childNodes[i], callback);
  }
}

const childNodes = function (nodeId) {
  const currentNode = document.querySelector(`[id="${nodeId}"`);
  const currentNodeLength = currentNode.childNodes.length
  let allNodes = 0

  walk(currentNode, function(node) {
    if (node.id !== String(nodeId)) { allNodes += 1 }
  })

  return [currentNodeLength, allNodes - currentNodeLength]
}


console.log(childNodes(1));
// = [9, 12]
console.log(childNodes(4));
// = [3, 1]
console.log(childNodes(9));
// = [1, 1]