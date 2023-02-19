const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const tp = input.map((x) => x.split(" ").map((y) => +y));
  let answer = 0;

  const find = (day, sum) => {
    if (day === +n + 1) {
      if (sum > answer) answer = sum;
      return;
    }
    if (day > +n + 1) {
      // 불가능한 경우
      return;
    }

    find(day + 1, sum);
    find(day + tp[day - 1][0], sum + tp[day - 1][1]);
  };

  find(1, 0);

  console.log(answer);
};

solution();
