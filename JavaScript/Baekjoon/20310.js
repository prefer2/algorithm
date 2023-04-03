const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map((x) => +x);

const solution = () => {
  let one = 0;
  let zero = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) one++;
    else zero++;
  }

  let cz = 0;
  let co = 0;

  let answer = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 0 && cz < zero / 2) {
      answer.push(0);
      cz++;
    } else if (input[i] === 1 && co < one / 2) {
      co++;
    } else if (input[i] === 1 && co >= one / 2) {
      answer.push(1);
    }
  }

  console.log(answer.join(""));
};

solution();
