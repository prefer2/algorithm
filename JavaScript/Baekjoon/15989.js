const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const answer = [];

const solution = () => {
  for (let i = 0; i < n; i++) {
    const dp = Array.from({ length: 10001 }, () => 0);
    dp[0] = 1;
    const num = +input[i + 1];

    for (let i = 1; i <= 3; i++) {
      for (let j = i; j <= num; j++) {
        dp[j] += dp[j - i];
      }
    }
    answer.push(dp[+input[i + 1]]);
  }
};

solution();
console.log(answer.join("\n"));
