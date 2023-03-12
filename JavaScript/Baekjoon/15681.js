const fs = require("fs");
const [input1, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [n, r, q] = input1.split(" ").map((x) => +x);
  const tree = {};
  const visited = Array.from({ length: n + 1 }, () => false);
  const dp = Array.from({ length: n + 1 }, () => 1);
  const answer = [];

  for (let i = 0; i < n - 1; i++) {
    const [a, b] = input[i].split(" ").map((x) => +x);
    if (!tree[a]) {
      tree[a] = [b];
    } else {
      tree[a].push(b);
    }
    if (!tree[b]) {
      tree[b] = [a];
    } else {
      tree[b].push(a);
    }
  }

  const dfs = (node, parent) => {
    visited[node] = true;
    for (let i = 0; i < tree[node].length; i++) {
      const child = tree[node][i];
      if (visited[child]) continue;
      dfs(child, node);
    }
    if (parent !== -1) {
      dp[parent] += dp[node];
    }
  };

  dfs(r, -1);

  for (let i = 0; i < q; i++) {
    const query = +input[n + i - 1];
    answer.push(dp[query]);
  }

  console.log(answer.join("\n"));
};

solution();
