const reverseString = (word) => {
  word = word.split("");
  let reversedWord = word.reverse().join("");
  word = reversedWord;
  return word;
};

module.exports = reverseString;
