// Your job is to encrypt a message using a simple method: Take every 2nd character from the message, then the other characters,
// that are not every 2nd character, and join them together. Repeat n times.

// "This is a test!", 1 -> "hsi  etTi sats!"
// "This is a test!", 2) -> "s eT ashi tist!"

/*
input: 1. a string to encrypt 2. an integer rep number of passes of encryption
output: a new string rep encrypted version of input string
rules:
  first take every other character starting with the second character
  then take every other character starting with the first character
  join them
  repeat n times where in is the number of passes
data structure:
  array
  number
algorithm:
  for one pass of encryption:
    split input string into an array of characters

    create a array of every 2nd character
      start at index 1
      increment index by 2
      stop condition == length of input string - 1

      1, 3, 5,

    create an array of the other characters
      start at index 0
      increment index by 2
      stop condition == length of input string - 1

      0, 2, 4
    concatenate those two arrays
    join that array into an encrypted string
    return that string

    in main function:
      call the encryption function n number of times
        n === 0  return sentence
        n === 1 return encrypt(sentence)
        n === 2 return encrypt(encrypt(sentence))
    ("This is a test!", 1) // "hsi  etTi sats!"


 ["T", "h", "i", "s", " ", "i", "s", " ", "a", " ", "t", "e", "s", "t", "!"]
[h s  ...]
[Ti ....]
[h, s, ...T, i ...]
"hs ...Ti"
*/

const encrypt = function (sentence) {
  const characters = sentence.split('');
  const everySecond = [];
  const others = [];

  characters.forEach((character, index) => {
    if (!(index % 2 === 0)) { everySecond.push(character) };
  });

  characters.forEach((character, index) => {
    if (index % 2 === 0) { others.push(character) };
  });

  const allCharacters = everySecond.concat(others);
  return allCharacters.join('');
}

// console.log(encrypt("This is a test!")); // "hsi  etTi sats!"
// console.log(encrypt("", 1)); // ""
// console.log(encrypt("a", 1)); // "a" identity case

const encryptNTimes = function (sentence, n) {
  let encrypted = sentence;

  for(let i = 0; i < n; i += 1) {
    encrypted = encrypt(encrypted)
  }

  return encrypted;
}



console.log(encryptNTimes("This is a test!", 1)); // "hsi  etTi sats!"
console.log(encryptNTimes("This is a test!", 2)); // "s eT ashi tist!"
console.log(encryptNTimes("This is a test!", 0)); // "This is a test!"
console.log(encryptNTimes("testcase", 2)); // "tesseatc"
console.log(encryptNTimes("", 1)); // ""
console.log(encryptNTimes("a", 1)); // "a" identity case
console.log(encryptNTimes("a", 3)); // "a" identity case
console.log(encryptNTimes("ab", 4)); // "ab"

// // every second = 'hsi  et'
// // not = 'Ti sats!''