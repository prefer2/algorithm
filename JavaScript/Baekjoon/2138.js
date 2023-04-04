const fs = require("fs");
const [n, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const change = (i) => {
    if (i === "0") return "1";
    else return "0";
  };

  const lightOn = (i, temp) => {
    if (i > 0) temp[i - 1] = change(temp[i - 1]);
    temp[i] = change(temp[i]);
    if (i < +n - 1) temp[i + 1] = change(temp[i + 1]);

    return temp;
  };

  const maxCnt = 987654321;
  let answer = maxCnt;

  const switchClick = (f) => {
    let temp = [...input[0]];
    let cnt = 0;

    if (f === 0) {
      temp[0] = change(temp[0]);
      temp[1] = change(temp[1]);
      cnt++;
    }

    for (let i = 1; i < +n; i++) {
      if (temp[i - 1] !== input[1][i - 1]) {
        temp = lightOn(i, temp);
        cnt++;
      }
    }

    if (temp.join("") === input[1]) answer = Math.min(answer, cnt);
  };

  switchClick(0);
  switchClick(1);

  if (answer !== maxCnt) console.log(answer);
  else console.log(-1);
};

solution();
