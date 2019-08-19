/*
input: 1. a string rep a sentence, 2. a string rep a keyword
output: a new, encrypted string
rules:

  each letter in keyword represents a shift value
    based on that letters index in alphabet
    eg a = 0
    eg b = 1
    ...
    eg z = 25

  keyword is case-insensitive
    eg B = 1
    eg b = 1

  only shift alpha chars
  keyword does not advance for non-alpha chars
   eg text a!a
      keyword = bc (12)
      --> b!c

  plaintext: Pineapples don't go on pizzas!
  keyword: meat

    Applying the Vigenere Cipher for each alphabetic character:
    plaintext : Pine appl esdo ntgo onpi zzas
    shift     : meat meat meat meat meat meat
    ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

    result: Bmnxmtpeqw dhz'x gh ar pbldal!
data structure:
  array for iteration and transformation

algorithm:
  convert the keyword into an array of integers rep shift value
    eg 'meat'
    create an object of alpha chars and their index to simplify lookup
    map over chars of keyword and return index

  m   e  a  t    m   e  a  t y
 [12, 5, 0, 19] [12, 5, 0, 19]
  p   i  !   n   e   a   p  p  l
  0   1  2   3   4   5  6  7
 [0,  1, 2,  3] [0,  1, 2, 3s
  split input sentence to array of characters
  create a loop that only advances for alpha chars
    get length of keyword array eg [1, 2, 3, 4] --> limit
    set index = 0
    if alpha char
      index = index % limit
        1 % limit
        1
        2 % limit
        2
        3 % limit
        3
        4 % limit
        0
        5 % limit
        1
      shift letter using index
      increment index
    else
      don't increment
      don't shift

  split input sentence to array of chars
  map over char
    if alpha
      get current key from keyword
      shift with cipher function
      advance index
    else
      return char
      don't advance index
    join and return
*/

const LOWER_LIMIT = 122;
const UPPER_LIMIT = 90

const shiftCharacter = function (character, key, limit) {
  const charcode = character.charCodeAt(0);
  const shiftedCode = charcode + key;
  const newCharcode = shiftedCode > limit ? shiftedCode - 26 : shiftedCode;
  return String.fromCharCode(newCharcode)
}

const caesarEncrypt = function (sentence, key) {
  const characters = sentence.split('');

  const shiftedCharacters = characters.map(character => {
    if (character.match(/[a-z]/)) { return shiftCharacter(character, key, LOWER_LIMIT); };
    if (character.match(/[A-Z]/)) { return shiftCharacter(character, key, UPPER_LIMIT); };
    return character;
  });

  return shiftedCharacters.join('');
}


const ALPHA_INDICES = {
'a': 0,
'b': 1,
'c': 2,
'd': 3,
'e': 4,
'f': 5,
'g': 6,
'h': 7,
'i': 8,
'j': 9,
'k': 10,
'l': 11,
'm': 12,
'n': 13,
'o': 14,
'p': 15,
'q': 16,
'r': 17,
's': 18,
't': 19,
'u': 20,
'v': 21,
'w': 22,
'x': 23,
'y': 24,
'z': 25,
}

const convertKeyword = function (keyword) {
  return keyword.toLowerCase()
                .split('')
                .map(character => ALPHA_INDICES[character])
}


const vigenere = function (sentence, keyword) {
  const keywordIndices = convertKeyword(keyword); //[12, 5, 0, 19][0]
  const indexLimit = keywordIndices.length; // 4
  let currentIndex = 0;
  const characters = sentence.split(''); // ['p', 'i', ...]

  const shiftedCharacters = characters.map(character => {
    if (character.match(/[a-z]/i)) {
      const currentKey = keywordIndices[currentIndex % indexLimit];
      currentIndex += 1;
      return caesarEncrypt(character, currentKey);
    }
    return character;
  });
    return shiftedCharacters.join('');
}

let text = "Pineapples don't go on pizzas!"

console.log(vigenere(text, 'A')); //

// // Applying the Vigenere Cipher for each alphabetic character:
// // plaintext: P i n e a p p l e s d o n t g o o n p i z z a s
// // shift:     A A A A A A A A A A A A A A A A A A A A A A A A
// // ciphertext: P i n e a p p l e s d o n t g o o n p i z z a s

// // result: Pineapples don't go on pizzas!

console.log(vigenere(text, 'Aa'));

// // Applying the Vigenere Cipher for each alphabetic character:
// // plaintext: Pi ne ap pl es do nt go on pi zz as
// // shift:     Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa Aa
// // ciphertext: Pi ne ap pl es do nt go on pi zz as

// // result: Pineapples don't go on pizzas!

console.log(vigenere(text, 'cab'));

// // Applying the Vigenere Cipher for each alphabetic character:
// // plaintext: Pin eap ple sdo ntg oon piz zas
// // shift:     cab cab cab cab cab cab cab cab
// // ciphertext: Rio gaq rlf udp pth qoo ria bat

// // result: Riogaqrlfu dpp't hq oo riabat!

console.log(vigenere(text, 'meat'));

// // Applying the Vigenere Cipher for each alphabetic character:
// // plaintext : Pine appl esdo ntgo onpi zzas
// // shift     : meat meat meat meat meat meat
// // ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

// // result: Bmnxmtpeqw dhz'x gh ar pbldal!

text = 'Dog';
console.log(vigenere(text, 'Rabbit'));

// // Applying the Vigenere Cipher for each alphabetic character:
// // plaintext: Dog
// // shift:     Rab
// // ciphertext: Uoh

// // result: Uoh

