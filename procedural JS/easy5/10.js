const reverseWord = (word) => word.split('').reverse().join('');

const reverseWords = function (sentence) {
  const reversedWords = sentence.split(' ').map((word) => {
    return word.length >= 5 ? reverseWord(word) : word
  });
  return reversedWords.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"

