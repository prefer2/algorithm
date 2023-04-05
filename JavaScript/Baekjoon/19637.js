const fs = require("fs");
const [nm, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [n, m] = nm.split(" ").map((x) => +x);

  const range = Array.from({ length: n }, () => 0);
  const name = Array.from({ length: n }, () => 0);

  for (let i = 0; i < n; i++) {
    const [na, r] = input[i].split(" ");
    range[i] = +r;
    name[i] = na;
  }

  const answer = [];

  for (let i = n; i < input.length; i++) {
    const num = +input[i];

    let s = 0;
    let e = n - 1;

    while (s <= e) {
      const mid = Math.floor((s + e) / 2);
      if (num <= range[mid]) {
        e = mid - 1;
      } else {
        s = mid + 1;
      }
    }

    answer.push(name[e + 1]);
  }

  console.log(answer.join("\n"));
};

solution();
