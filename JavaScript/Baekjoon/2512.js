const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const n = +input[0];
  const arr = input[1]
    .split(" ")
    .map((x) => +x)
    .sort((a, b) => a - b);
  let m = +input[2];

  for (let i = 0; i < n; i++) {
    if (m / (n - i) >= arr[i]) {
      m -= arr[i];
    } else {
      console.log(parseInt(m / (n - i)));
      return;
    }
  }

  console.log(arr[arr.length - 1]);
};

solution();
