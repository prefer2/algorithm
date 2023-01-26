const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = (ch) => {
  const n = +input[0];
  const str = input[1];

  let lred = 0;
  let rred = 0;
  let lblue = 0;
  let rblue = 0;

  let isPrevBlue = false;
  for (let i = 0; i < n; i++) {
    if (str[i] !== "R") isPrevBlue = true;
    else if (str[i] === "R" && isPrevBlue) {
      lred++;
    }
  }

  isPrevBlue = false;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] !== "R") isPrevBlue = true;
    else if (str[i] === "R" && isPrevBlue) {
      rred++;
    }
  }

  let isPrevRed = false;
  for (let i = 0; i < n; i++) {
    if (str[i] !== "B") isPrevRed = true;
    else if (str[i] === "B" && isPrevRed) {
      lblue++;
    }
  }

  isPrevRed = false;
  for (let i = n - 1; i >= 0; i--) {
    if (str[i] !== "B") isPrevRed = true;
    else if (str[i] === "B" && isPrevRed) {
      rblue++;
    }
  }

  console.log(Math.min(lred, rred, lblue, rblue));
};

solution();
