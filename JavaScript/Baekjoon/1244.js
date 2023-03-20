const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const n = +input[0];
  const swit = input[1].split(" ").map((x) => +x);
  const t = +input[2];

  const answer = [...swit];
  for (let i = 0; i < t; i++) {
    const [a, b] = input[3 + i].split(" ").map((x) => +x);

    if (a === 1) {
      //남학생
      for (let j = 1; j * b <= n; j++) {
        answer[j * b - 1] = (answer[j * b - 1] + 1) % 2;
      }
    } else {
      //여학생
      let p = 1;
      while (true) {
        if (b - p - 1 < 0 || b + p - 1 >= n) {
          answer[b - 1] = (answer[b - 1] + 1) % 2;
          break;
        }
        if (answer[b - p - 1] !== answer[b + p - 1]) {
          answer[b - 1] = (answer[b - 1] + 1) % 2;
          break;
        }
        answer[b - p - 1] = (answer[b - p - 1] + 1) % 2;
        answer[b + p - 1] = (answer[b + p - 1] + 1) % 2;
        p++;
      }
    }
  }

  const result = [];

  for (let i = 0; i < answer.length / 20 + 1; i++) {
    const line = answer.slice(i * 20, i * 20 + 20);
    result.push(line.join(" "));
  }

  console.log(result.join("\n"));
};

solution();
