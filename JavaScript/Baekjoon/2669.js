const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(" ").map((y) => +y));

const solution = () => {
  let answer = 0;

  const visited = Array.from(Array(101), () => Array(101).fill(false));

  for (let i = 0; i < input.length; i++) {
    const [x1, y1, x2, y2] = input[i];

    for (let j = x1; j < x2; j++) {
      for (let k = y1; k < y2; k++) {
        if (!visited[j][k]) {
          visited[j][k] = true;
          answer++;
        }
      }
    }
  }

  console.log(answer);
};

solution();
