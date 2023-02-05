const fs = require("fs");
const [n, ...test] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  let answer = [];
  for (let t = 0; t < +n; t++) {
    const [T, ...children] = test[t].split(" ").map((x) => +x);

    let cnt = 0;
    const line = [children[0]];
    for (let i = 1; i < 20; i++) {
      let front = 0;
      for (let j = 0; j < line.length; j++) {
        if (line[j] > children[i]) front++;
      }
      cnt += front;
      line.push(children[i]);
      line.sort((a, b) => a - b);
    }
    answer.push(`${T} ${cnt}`);
  }

  console.log(answer.join("\n"));
};

solution();
