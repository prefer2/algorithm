const fs = require("fs");
const [t, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const answer = [];

  for (let i = 0; i < +t; i++) {
    const teams = Array.from({ length: 201 }, () => []);
    const n = +input[i * 2];
    const t = input[i * 2 + 1].split(" ").map((x) => +x);

    for (let j = 0; j < n; j++) {
      teams[t[j]].push(j + 1);
    }

    const ok = [];
    for (let i = 1; i < 201; i++) {
      if (teams[i].length === 6) {
        ok.push(i);
      }
    }

    const result = {};
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (ok.includes(t[j])) {
        if (!result[t[j]]) {
          result[t[j]] = [cnt];
        } else {
          result[t[j]].push(cnt);
        }
        cnt++;
      }
    }

    let minT = Infinity;
    let ansArr = [];
    let ans = 0;
    Object.keys(result).forEach((k) => {
      let s = 0;
      for (let i = 0; i < 4; i++) {
        s += result[k][i];
      }

      if (s < minT) {
        minT = s;
        ansArr = result[k];
        ans = k;
      } else if (s === minT) {
        if (ansArr[4] > result[k][4]) {
          ansArr = result[k];
          ans = k;
        }
      }
    });

    answer.push(ans);
  }
  console.log(answer.join("\n"));
};

solution();
