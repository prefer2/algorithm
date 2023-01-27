const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, D] = input[0].split(" ").map((x) => +x);

const solution = () => {
  const ways = [];
  for (let i = 1; i <= N; i++) {
    ways.push(input[i].split(" ").map((x) => +x));
  }
  ways.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  const dp = Array.from({ length: D + 1 }, (v, i) => i);

  ways.forEach((way) => {
    const [from, to, dis] = way;
    if (dp[from] + dis < dp[to]) {
      dp[to] = dp[from] + dis;
      for (let i = to + 1; i <= D; i++) {
        dp[i] = dp[to] + (i - to);
      }
    }
  });

  console.log(dp[D]);
};

solution();
