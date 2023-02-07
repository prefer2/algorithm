const fs = require("fs");
const [nk, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, k] = nk.split(" ").map((x) => +x);

const solution = () => {
  const teams = input.map((i) => i.split(" ").map((x) => +x));

  let g;
  let s;
  let b;
  for (let i = 0; i < teams.length; i++) {
    if (teams[i][0] === k) {
      g = teams[i][1];
      s = teams[i][2];
      b = teams[i][3];
      break;
    }
  }

  teams.sort((a, b) => {
    if (a[1] !== b[1]) return b[1] - a[1];
    if (a[2] !== b[2]) return b[2] - a[2];
    return b[3] - a[3];
  });

  for (let i = 0; i < teams.length; i++) {
    if (teams[i][1] === g && teams[i][2] === s && teams[i][3] === b) {
      console.log(i + 1);
      return;
    }
    if (teams[i][0] === k) {
      console.log(i + 1);
      return;
    }
  }
};

solution();
