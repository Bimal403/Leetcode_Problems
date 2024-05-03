function PalindromeChecker(num) {
  let originalNum = num;
  let rev = 0;

  //for negative number
  if (num < 0) {
    return false;
  }

  while (num != 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  if (originalNum != rev) {
    return false;
  }
  return true;
}

const answer = PalindromeChecker(101);
console.log(answer);
