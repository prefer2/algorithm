const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((x) => +x);

const solution = () => {
  const words = {};

  for (let i = 1; i < input.length; i++) {
    const word = input[i];
    if (word.length < M) continue;

    if (!words[word]) {
      words[word] = 1;
    } else {
      words[word] += 1;
    }
  }

  const sorted = Object.keys(words)
    .sort()
    .sort((a, b) => b.length - a.length)
    .sort((a, b) => words[b] - words[a]);
  console.log(sorted.join("\n"));
};

solution();
