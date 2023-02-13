const fs = require("fs");
const [f, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [n, k] = f.split(" ").map((x) => +x);

const solution = () => {
  const obj = {};
  const aList = input.split(" ");

  let s = 0;
  let e = 0;
  let answer = 0;

  let cnt = 0;
  while (s <= e && e < n) {
    const x = aList[e];
    if (!obj[x]) {
      obj[x] = 1;
      cnt++;
      e++;
    } else {
      if (obj[x] >= k) {
        if (cnt > answer) answer = cnt;
        obj[aList[s]] -= 1;
        s++;
        cnt--;
      } else {
        obj[x] += 1;
        cnt++;
        e++;
      }
    }
  }

  if (cnt > answer) answer = cnt;

  console.log(answer);
};

solution();
