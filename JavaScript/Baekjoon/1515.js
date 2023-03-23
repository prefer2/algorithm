const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = () => {
  let idx = 0;
  let i = 1;
  while (true) {
    if (idx === input.length) {
      console.log(i - 1);
      return;
    }
    const num = i.toString();
    for (let j = 0; j < num.length; j++) {
      if (num[j] == input[idx]) {
        idx++;
      }
    }
    i++;
  }
};

solution();
