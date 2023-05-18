const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

const solution = () => {
  let answer = 0;

  for (let i = 1; i < input; i++) {
    const a = i;

    for (let j = i; j < input - i; j++) {
      const b = j;
      const c = input - i - j;

      if (c < b) break;

      if (a + b > c) {
        answer++;
      }
    }
  }

  console.log(answer);
};

solution();
