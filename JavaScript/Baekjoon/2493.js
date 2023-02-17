const fs = require("fs");
let [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const raser = input.split(" ").map((x) => +x);

const solution = () => {
  const answer = [];
  const st = [];
  raser.forEach((r, i) => {
    if (st.length === 0 || st[st.length - 1].r > r) {
      if (st.length === 0) answer.push(0);
      else answer.push(st[st.length - 1].i + 1);
      st.push({ r, i });
    } else {
      while (st.length !== 0 && st[st.length - 1].r < r) {
        st.pop();
      }
      if (st.length === 0) answer.push(0);
      else answer.push(st[st.length - 1].i + 1);
      st.push({ r, i });
    }
  });

  console.log(answer.join(" "));
};

solution();
