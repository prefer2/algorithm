const fs = require("fs");
const [nn, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const n = +nn;
  let answer = 0;
  let st = [];

  for (let i = 0; i < n; i++) {
    const [x, y] = input[i].split(" ").map((x) => +x);

    while (st.length > 0 && st[st.length - 1] >= y) {
      if (st[st.length - 1] !== y) answer++;
      st.pop();
    }
    if (y !== 0) st.push(y);
  }

  console.log(answer + st.length);
};

solution();
