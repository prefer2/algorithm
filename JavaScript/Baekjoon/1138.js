const fs = require("fs");
const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const left = input.split(" ").map((x) => +x);
  const line = Array.from({ length: +n }, () => 0);

  for (let i = 0; i < +n; i++) {
    let cnt = left[i];
    for (let j = 0; j < +n; j++) {
      if (cnt === 0 && line[j] === 0) {
        line[j] = i + 1;
        break;
      } else if (line[j] === 0) {
        cnt--;
      }
    }
  }

  console.log(line.join(" "));
};

solution();
