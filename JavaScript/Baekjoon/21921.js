const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, X] = input[0].split(" ").map((x) => +x);
const visits = input[1].split(" ").map((x) => +x);

const solution = () => {
  // 슬라이딩 윈도우
  let s = 0;
  let cnt = 0;

  for (let i = s; i < X; i++) {
    cnt += visits[i];
  }

  let maxVisit = cnt;
  let answer = 1;

  for (let i = s + 1; i + X <= N; i++) {
    cnt = cnt - visits[i - 1] + visits[i + X - 1];
    if (cnt > maxVisit) {
      maxVisit = cnt;
      answer = 1;
    } else if (cnt === maxVisit) answer++;
  }

  if (maxVisit === 0) {
    console.log("SAD");
  } else {
    console.log(maxVisit);
    console.log(answer);
  }
};

solution();
