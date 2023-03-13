const fs = require("fs");
const [h, w, n, m] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

const solution = () => {
  const a = Math.ceil(h / (n + 1));
  const b = Math.ceil(w / (m + 1));

  console.log(a * b);
};

solution();
