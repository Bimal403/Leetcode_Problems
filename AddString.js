//Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
// You must solve the problem without using any built-in library for handling large integers (such as
//    BigInteger). You must also not convert the inputs to integers directly.

var addStrings = function (num1, num2) {
  num1 = num1.split("");
  num2 = num2.split("");
  let carry = "0";
  let arr = [];

  while (num1.length || num2.length) {
    let element1 = num1.pop() ?? 0;
    let element2 = num2.pop() ?? 0;
    let sum = String(+element1 + +element2 + +carry);
    carry = "0";
    if (+sum >= 10) {
      let [carry1, carry2] = sum.split("");
      carry = carry1;
      sum = carry2;
    }
    arr.unshift(sum);
  }
  if (+carry > 0) {
    arr.unshift(carry);
  }
  return arr.join("");
};

const num1 = "123";
const num2 = "90";
const sum = addStrings(num1, num2);
console.log(sum);
