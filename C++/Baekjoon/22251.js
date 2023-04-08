const fs = require("fs");
const [n, k, p, x] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

const solution = () => {
  const num = {
    0: [1, 1, 1, 1, 1, 1, 0],
    1: [0, 1, 1, 0, 0, 0, 0],
    2: [1, 1, 0, 1, 1, 0, 1],
    3: [1, 1, 1, 1, 0, 0, 1],
    4: [0, 1, 1, 0, 0, 1, 1],
    5: [1, 0, 1, 1, 0, 1, 1],
    6: [1, 0, 1, 1, 1, 1, 1],
    7: [1, 1, 1, 0, 0, 0, 0],
    8: [1, 1, 1, 1, 1, 1, 1],
    9: [1, 1, 1, 1, 0, 1, 1],
  };

  let answer = 0;

  let cmp = x.toString();
  const z = k - cmp.length;
  for (let j = 0; j < z; j++) {
    cmp = `0${cmp}`;
  }

  const change = (a, b) => {
    let c = 0;
    for (let i = 0; i < 8; i++) {
      if (num[a][i] !== num[b][i]) c++;
    }

    return c;
  };

  for (let i = 1; i <= n; i++) {
    if (i === x) continue;
    let num = i.toString();
    const zeros = k - num.length;
    for (let j = 0; j < zeros; j++) {
      num = `0${num}`;
    }

    let cnt = 0;
    for (let j = 0; j < k; j++) {
      if (cnt > p) break;
      if (cmp[j] === num[j]) continue;
      cnt += change(cmp[j], num[j]);
    }

    if (cnt <= p) {
      answer++;
    }
  }

  console.log(answer);
};

solution();
