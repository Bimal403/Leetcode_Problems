function addBinary(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += num1[i] === "1" ? 1 : 0;
      i--;
    }

    if (j >= 0) {
      sum += num2[j] === "1" ? 1 : 0;
      j--;
    }
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
}

const output = addBinary("1011", "1111");
console.log(output); // Outputs: "11010"
