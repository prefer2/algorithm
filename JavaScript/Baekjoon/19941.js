const fs = require("fs");
const [nk, input] = fs
  .readFileSync("/dev/stdin")
  .toString()

  .trim()
  .split("\n");

const solution = () => {
  const [n, k] = nk.split(" ").map((x) => +x);
  const visited = Array.from({ length: n }, () => false);
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    if (input[i] === "P") {
      let s = i - k;
      if (s < 0) s = 0;
      let e = i + k;
      if (e >= n) e = n - 1;
      for (let j = s; j <= e; j++) {
        if (input[j] === "H" && !visited[j]) {
          cnt++;
          visited[j] = true;
          break;
        }
      }
      visited[i] = true;
    }
  }

  console.log(cnt);
};

solution();
