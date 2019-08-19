/*
input:
output:
rules:

data structure:

algorithm:

*/

// const groupRepeatedElems = function (elements) {
//   if(elements.length === 0) { return [] };

//   const groupedElements = [ [ elements[0] ] ];

//   elements.slice(1).forEach(element => {  // 1

//     groupedElements.forEach((subarray, index) => { // [[1, 1 ,1]]  [1] 0

//       if(subarray[0] === element) {
//         groupedElements[index].push(element)
//       } else {
//         if(index === (groupedElements.length - 1)) { groupedElements.push([element]) };
//       };
//     });
//   });

//   return groupedElements;
// };
 // get an array of unique elements.  map over that array and filter input based on current element;

const groupRepeatedElems = function (elements) {
  const uniqueElements = elements.reduce((elements, current) => {
    if(elements.indexOf(current) === - 1) { elements.push(current) };
    return elements;
  }, []);
  return uniqueElements.map(uniqueElement => {
    return elements.filter(element => element === uniqueElement);
  });
};





console.log(groupRepeatedElems([1,1, 2, 2, 3, 3])); // -> [[1, 1], [2, 2], [3, 3]]
// [[1, 1], [2, 2], [3, 3] ]

console.log(groupRepeatedElems([])); // -> []
console.log(groupRepeatedElems([1, 3])); // -> [[1], [3]]
console.log(groupRepeatedElems(['the', 'the']))// -> [['the', 'the']]
console.log(groupRepeatedElems([false, false, undefined, undefined])) // -> [[false, false], [undefined, undefined]]

console.log(groupRepeatedElems(['the', 'the', 1, 1])) // -> [['the', 'the'], [1, 1]]
console.log(groupRepeatedElems([1.2, 1.2, 1.3, 1.3, 3, 3])); // -> [[1.2, 1.2], [1.3, 1.3], [3, 3]]
console.log(groupRepeatedElems(['', '']))// -> [['', '']

