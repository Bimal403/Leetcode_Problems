// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(ans) !== 0) {
      ans = ans.substring(0, ans.length - 1);
      if (ans === "") {
        return "";
      }
    }
  }
  return ans;
};
const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings));
