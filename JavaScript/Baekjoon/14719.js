const fs = require("fs");
let [hw, row] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [h, w] = hw.split(" ").map((x) => +x);
const rows = row.split(" ").map((x) => +x);

const solution = () => {
  let answer = 0;
  for (let i = 1; i < w - 1; i++) {
    const leftMax = Math.max(...rows.slice(0, i));
    const rightMax = Math.max(...rows.slice(i + 1));

    const min = Math.min(leftMax, rightMax);
    if (rows[i] < min) {
      answer += min - rows[i];
    }
  }
  console.log(answer);
};

solution();
