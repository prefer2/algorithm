const fs = require("fs");
const [ve, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [v, e] = ve.split(" ").map((x) => +x);

const solution = () => {
  const nodes = Array.from(Array(v + 1), () => Array(v + 1).fill(Infinity));
  let answer = Infinity;

  input.forEach((i) => {
    const [f, t, d] = i.split(" ").map((x) => +x);
    nodes[f][t] = d;
  });

  // 최단 경로 찾기
  for (let mid = 1; mid <= v; mid++) {
    for (let f = 1; f <= v; f++) {
      for (let t = 1; t <= v; t++) {
        nodes[f][t] = Math.min(nodes[f][mid] + nodes[mid][t], nodes[f][t]);
      }
    }
  }

  for (let f = 1; f <= v; f++) {
    for (let t = 1; t <= v; t++) {
      if (f === t) continue;
      if (nodes[f][t] !== Infinity && nodes[t][f] !== Infinity) {
        answer = Math.min(answer, nodes[f][t] + nodes[t][f]);
      }
    }
  }

  if (answer === Infinity) console.log(-1);
  else console.log(answer);
};

solution();
