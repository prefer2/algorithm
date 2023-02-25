const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const lines = input
  .map((x) => x.split(" ").map((y) => +y))
  .sort((a, b) => a[0] - b[0]);

const solution = () => {
  let answer = 0;
  let maxH = 0;
  let maxI = 0;

  const arr = Array.from({ length: 1001 }, () => 0);
  lines.forEach((l) => {
    arr[l[0]] = l[1];
    if (l[1] > maxH) {
      maxH = l[1];
      maxI = l[0];
    }
  });

  let lh = 0;
  for (let i = 1; i < maxI; i++) {
    lh = Math.max(lh, arr[i]);
    answer += lh;
  }

  let rh = 0;
  for (let i = 1000; i > maxI; i--) {
    rh = Math.max(rh, arr[i]);
    answer += rh;
  }

  console.log(answer + maxH);
};

solution();
