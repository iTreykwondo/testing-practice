const capitalize = (word) => {
  let firstLetter = word.charAt(0).toUpperCase();
  let restOfWord = word.slice(1);
  word = firstLetter + restOfWord;
  return word;
};

module.exports = capitalize;
