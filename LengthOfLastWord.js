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

//next way(more optimized)
var lengthOfLastWord = function (s) {
  let count = 0;
  let store = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count = 0;
    } else {
      count++;
      store = count;
    }
  }
  return store;
};
const ans = lengthOfLastWord("hgjka agakgk agklak lg  ");
console.log(ans);
