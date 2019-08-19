

// find index of string that contains char
// splice it out

const isBlockWord = function (word) {
  let blocks = ['BO',   'XK',   'DQ',   'CP',   'NA',
              'GT',   'RE',   'FS',   'JW',   'HU',
              'VI',   'LY',   'ZM']
  const chars = word.toUpperCase().split('');
  // let blockWord = true;

  // chars.forEach(char => { // refactor with some/every!!

  //   if (blocks.some(targetBlock => targetBlock.includes(char))) {
  //     blocks = blocks.filter(block =>  !block.includes(char));
  //     debugger;
  //   } else {
  //      blockWord = false;
  //   }
  // });
  // return blockWord;

    for (const char of chars) {
      if (blocks.some(targetBlock => targetBlock.includes(char))) {
        blocks = blocks.filter(block =>  !block.includes(char));
      } else {
         return false;
      }
    };
    return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false