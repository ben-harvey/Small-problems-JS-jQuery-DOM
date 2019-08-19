/*
input:
output:
rules:

data structure:

algorithm:

first = document.getElementbyID(String(firstId))
second = document.getElementbyID(String(secondId))

if (!first || !second) ||  {
  return undefined
}

get previous sibling of second swapped element
if previous sibling = first, previous sibling = second

1
2

replace first with second:  first.parentElement.replaceChild(second, first)
2
3

insert first after second's previous sibling:  previous.insertAdjacentElement('afterEnd', first)

2
1
3
*/

// const secondIsChildOfFirst = function(firstId, secondElement) {
//   return [...document.querySelectorAll(`[id="${firstId}"`)].includes(secondElement);
// }

// const nodeSwap = function(firstId, secondId) {
//   firstElement = document.getElementById(String(firstId))
//   secondElement = document.getElementById(String(secondId))

//   if ( (!firstElement || !secondElement) || secondIsChildOfFirst(firstId, secondElement) ) {
//     return undefined;
//   };

//   let previous = secondElement.previousElementSibling;
//   debugger;
//   if (previous === firstElement) { previous = secondElement };

//   firstElement.parentElement.replaceChild(secondElement, firstElement);
//   previous.insertAdjacentElement('afterEnd', firstElement);
// };

const badNodes = function (node1, node2) {
  return (node1.contains(node2) || node2.contains(node1)) ||
         (!node1 || !node2)
}

const nodeSwap = function(firstId, secondId) {
  let firstElement = document.getElementById(String(firstId))
  let secondElement = document.getElementById(String(secondId))

  if (badNodes(firstElement, secondElement) ) { return undefined };

  let firstCopy = firstElement.cloneNode(true);
  let secondCopy = secondElement.cloneNode(true);

  let firstParent = firstElement.parentNode;
  let secondParent = secondElement.parentNode;

  firstParent.replaceChild(secondCopy, firstElement);
  secondParent.replaceChild(firstCopy, secondElement);
};



nodeSwap(3, 1);
// nodeSwap(7, 9);
// // one swap
// nodeSwap(1, 2);


// <!doctype html>
// <html>
//   <head>
//     <title>Node Swap</title>
//   </head>
//   <body>
//     <div id="2"></div>
//     <div id="1">
//       <div id="4"></div>
//       <div id="5">
//         <div id="6"></div>
//       </div>
//     </div>
//     <div id="3">
//       <div id="7"></div>
//       <div id="8"></div>
//       <div id="9"></div>
//     </div>
//   </body>
// </html>


// // multiple swaps


// <!doctype html>
// <html>
//   <head>
//     <title>Node Swap</title>
//   </head>
//   <body>
//     <div id="3">
//       <div id="9"></div>
//       <div id="8"></div>
//       <div id="7"></div>
//     </div>
//     <div id="2"></div>
//     <div id="1">
//       <div id="4"></div>
//       <div id="5">
//         <div id="6"></div>
//       </div>
//     </div>
//   </body>
// </html>