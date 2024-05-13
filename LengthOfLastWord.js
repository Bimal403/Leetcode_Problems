var lengthOfLastWord = function (s) {
  let lastIndex = s.length - 1;
  let length = 0;
  while (lastIndex > 0 && s[lastIndex] === " ") {
    lastIndex--;
  }
  while (lastIndex > 0 && s[lastIndex] != " ") {
    length++;
    lastIndex--;
  }
  return length;
};

const output = lengthOfLastWord("My name is Bimal     ");
console.log(output);
