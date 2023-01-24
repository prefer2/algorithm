const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map((x) => +x);

const tags = new Set(input.slice(1, 1 + n));
const answer = [];

const solution = () => {
  for (let i = 0; i < m; i++) {
    const t = input[i + +n + 1].split(",");
    for (let j = 0; j < t.length; j++) {
      tags.delete(t[j]);
    }
    answer.push(tags.size);
  }

  console.log(answer.join("\n"));
};

solution();
