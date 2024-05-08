// You are given an integer array score of size n, where score[i] is the score of the ith
// athlete in a competition. All the scores are guaranteed to be unique.
// The athletes are placed based on their scores, where the 1st place athlete has the highest
//  score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
// The 1st place athlete's rank is "Gold Medal".
// The 2nd place athlete's rank is "Silver Medal".
// The 3rd place athlete's rank is "Bronze Medal".
// For the 4th place to the nth place athlete, their rank is their placement
//  number (i.e., the xth place athlete's rank is "x").
// Return an array answer of size n where answer[i] is the rank of the ith athlete.

var findRelativeRanks = function (score) {
  const lenScore = score.length;
  const answer = new Array(lenScore);
  const scoreWithIndex = score.map((score, index) => [score, index]);

  // Sort the score in descending order
  scoreWithIndex.sort((a, b) => b[0] - a[0]);

  const rank = ["Gold Medal", "Silver Medal", "Bronze Medal"];

  // Assign ranks based on sorted score
  for (let i = 0; i < lenScore; i++) {
    const index = scoreWithIndex[i][1];
    if (i < 3) {
      answer[index] = rank[i];
    } else {
      answer[index] = String(i + 1);
    }
  }

  return answer;
};

const output = findRelativeRanks([1, 2, 3, 4, 5]);
console.log(output);
