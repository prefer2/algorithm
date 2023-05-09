const fs = require("fs");
const [t, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

const solution = (num) => {
  const ops = [" ", "+", "-"];
  let st = "";

  const cal = (depth, eq) => {
    if (depth === num) {
      if (eval(eq.split(" ").join("")) === 0) st += `${eq}\n`;
      return;
    }

    for (let i = 0; i < 3; i++) {
      cal(depth + 1, `${eq}${ops[i]}${depth + 1}`);
    }
  };

  cal(1, "1");
  return st;
};

const answer = [];

for (let i = 0; i < t; i++) {
  answer.push(solution(input[i]));
}

console.log(answer.join("\n"));
