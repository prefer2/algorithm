const fs = require("fs");
const [nk, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, k] = nk.split(" ").map((x) => +x);

const solution = () => {
  const dp = Array.from({ length: 101 }, () => Array(100001).fill(0));
  const weight = [];
  const value = [];

  for (let i = 0; i < n; i++) {
    const [w, v] = input[i].split(" ").map((x) => +x);
    weight.push(w);
    value.push(v);
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j - weight[i - 1] >= 0) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i - 1][j - weight[i - 1]] + value[i - 1]
        );
      }
    }
  }

  console.log(dp[n][k]);
};

solution();
