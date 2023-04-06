const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  let cnt = 0;
  const answer = [];

  const visited = Array.from({ length: +n + 1 }, () => false);

  const dfs = (current, start) => {
    if (visited[current]) {
      if (current == start) answer.push(start);
    } else {
      visited[current] = true;
      dfs(+input[current - 1], start);
    }
  };

  for (let i = 0; i < input.length; i++) {
    dfs(i + 1, i + 1);
    for (let j = 0; j <= n; j++) visited[j] = false;
  }

  console.log(answer.length);
  console.log(answer.sort((a, b) => a - b).join("\n"));
};

solution();
