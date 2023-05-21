const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const friend = input.map((i) => i.split(" ").map((y) => +y));
const m = +n;

const solution = () => {
  const arr = Array.from(Array(m + 1), () => Array(m + 1).fill(Infinity));

  for (let i = 0; i < friend.length - 1; i++) {
    const [a, b] = friend[i];
    arr[a][b] = 1;
    arr[b][a] = 1;
  }

  for (let i = 1; i <= m; i++) {
    arr[i][i] = 0;
  }

  for (let k = 1; k <= m; k++) {
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= m; j++) {
        arr[i][j] = Math.min(arr[i][j], arr[i][k] + arr[k][j]);
      }
    }
  }

  for (let i = 0; i <= m; i++) {
    arr[i][0] = -1;
    arr[0][i] = -1;
  }

  const answer = [];

  for (let i = 1; i <= m; i++) {
    const myScore = Math.max(...arr[i]);
    answer.push(myScore);
  }

  const minScore = Math.min(...answer);

  const result = [];
  for (let i = 1; i <= m; i++) {
    if (answer[i - 1] === minScore) {
      result.push(i);
    }
  }

  console.log(
    `${minScore} ${result.length}\n${result.sort((a, b) => a - b).join(" ")}`
  );
};

solution();
