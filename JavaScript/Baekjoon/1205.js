const fs = require("fs");
const [ntp, input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, t, p] = ntp.split(" ").map((x) => +x);
const list = input ? input.split(" ").map((x) => +x) : [];

const solution = () => {
  let idx = n - 1;
  while (idx >= 0 && list[idx] < t) {
    list.pop();
    idx--;
  }

  list.push(t);
  if (list.length <= p) {
    let answer = list.length;
    let idx = list.length - 2;
    while (list[idx] === t) {
      answer--;
      idx--;
    }
    console.log(answer);
  } else console.log(-1);
};

solution();
