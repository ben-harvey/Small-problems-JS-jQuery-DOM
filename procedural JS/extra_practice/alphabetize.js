
// const alphabetized = function (sentence) {
//   const characters = sentence.replace(/[^a-z]/gi, '').split('');
//   const charsAndIndexes = characters.map((character, index) => [character, index]);
//   charsAndIndexes.sort(([charA, indexA], [charB, indexB]) => {
//     const lowerA = charA.toLowerCase();
//     const lowerB = charB.toLowerCase();
//     if (lowerA === lowerB) { return indexA - indexB };
//     if (lowerA < lowerB) { return - 1};
//     if (lowerA > lowerB) { return  1};
//   });
//   return charsAndIndexes.map(([char, _]) => char).join('');
// }

// console.log(alphabetized("The Holy Bible")); //"BbeehHilloTy"
// console.log(alphabetized("ABCD")); // ABCD
// console.log(alphabetized("AaBBbDAAC"));  //AaAABBbCD
// console.log(alphabetized("DBCA")); // ABCD
// console.log(alphabetized(""))//

