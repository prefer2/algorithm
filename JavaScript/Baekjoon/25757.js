const fs = require("fs");
const [ng, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, g] = ng.split(" ");

const solution = () => {
  const name = [...new Set(input)];

  if (g === "Y") {
    console.log(name.length);
  } else if (g === "F") {
    console.log(parseInt(name.length / 2));
  } else {
    console.log(parseInt(name.length / 3));
  }
};

solution();
