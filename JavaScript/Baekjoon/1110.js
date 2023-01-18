const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = (n) => {
  if (n.length < 2) n = `0${n}`;

  let answer = 1;
  const sum = +n[0] + +n[1];
  const textSum = sum.toString();
  let next = `${n[n.length - 1]}${textSum[textSum.length - 1]}`;

  while (next !== n) {
    const prev = next;
    const sum = +prev[0] + +prev[1];
    const textSum = sum.toString();
    next = `${prev[prev.length - 1]}${textSum[textSum.length - 1]}`;
    answer++;
  }

  console.log(answer);
};

solution(input);
