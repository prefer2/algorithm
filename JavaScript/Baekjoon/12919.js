const fs = require("fs");
let [s, t] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let can = false;

const solution = (temp) => {
  if (s === temp) {
    can = true;
    return;
  }

  if (temp[temp.length - 1] === "A") {
    solution(temp.slice(0, temp.length - 1));
  }

  if (temp[0] === "B") {
    solution(temp.slice(1).split("").reverse().join(""));
  }

  return;
};

solution(t);
can ? console.log(1) : console.log(0);
