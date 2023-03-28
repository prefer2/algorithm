const fs = require("fs");
const [nm, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [n, m] = nm.split(" ").map((x) => +x);
  const em = input.map((i) => i.split(" ").map((x) => +x));
  const short = Array.from(Array(n), () => Array(m).fill(Infinity));

  const move = [
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const solve = (x, y, dir) => {
    if (x === n) return 0;

    let minLen = Infinity;
    for (let i = 0; i < 3; i++) {
      if (dir === i) continue;
      const nx = x + move[i][0];
      const ny = y + move[i][1];
      if (ny < 0 || ny >= m) continue;

      minLen = Math.min(minLen, solve(nx, ny, i) + em[x][y]);
    }

    return minLen;
  };

  let ans = Infinity;
  for (let i = 0; i < m; i++) {
    ans = Math.min(ans, solve(0, i, -1));
  }

  console.log(ans);
};

solution();
