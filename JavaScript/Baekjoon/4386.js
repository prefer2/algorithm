const fs = require("fs");
const [nn, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +nn;

const solution = () => {
  const nodes = input.map((x) => x.split(" ").map((y) => +y));
  const lines = [];
  const parent = Array.from({ length: n + 1 }, () => -1);
  let answer = 0;

  const unionParent = (a, b) => {
    const aP = findParent(a);
    const bP = findParent(b);

    if (aP === bP) return false;

    parent[bP] = aP;
    return true;
  };

  const findParent = (child) => {
    if (parent[child] < 0) return child;
    return (parent[child] = findParent(parent[child]));
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const [ax, ay] = nodes[i];
      const [bx, by] = nodes[j];

      const length = Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
      lines.push([length, i, j]);
    }
  }

  lines.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < lines.length; i++) {
    const [len, a, b] = lines[i];
    if (unionParent(a, b)) {
      answer += len;
    }
  }

  console.log(answer.toFixed(2));
};

solution();
