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
  return originalNum === rev;
}

const answer = PalindromeChecker(1234554321);
console.log(answer);
