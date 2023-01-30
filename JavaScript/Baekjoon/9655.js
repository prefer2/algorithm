const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = () => {
  const n = +input;
  if (n % 2 === 1) console.log("SK");
  else console.log("CY");
};

solution();
