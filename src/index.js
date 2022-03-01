function abc(word, characters) {
  const letters = [...word.toUpperCase()];
  const blocks = new Set(characters.split(" ").map(pair => pair.split("")));
  let length = letters.length;

  for (let letter of letters) {
    for (let block of blocks) {
      let index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        blocks.delete(block);
        break;
      }
    }

  }
  return !length;
}

module.exports = abc
