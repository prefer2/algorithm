const fs = require("fs");
const [test, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  let tt = 0;
  let mm = 0;
  const answer = [];
  while (true) {
    if (tt === +test) break;
    // teamI === t
    const [n, k, t, m] = input[tt + mm].split(" ").map((x) => +x);
    const teams = Array.from(Array(n + 1), () => Array(k + 1).fill(0));
    const tries = Array.from({ length: n + 1 }, () => 0);
    const last = Array.from({ length: n + 1 }, () => 0);

    for (let x = 1; x <= m; x++) {
      const [i, j, s] = input[tt + mm + x].split(" ").map((y) => +y);
      if (teams[i][j] < s) teams[i][j] = s;
      tries[i]++;
      last[i] = x;
    }

    const scores = Array.from({ length: n + 1 }, () => 0);

    for (let x = 1; x <= n; x++) {
      for (let y = 1; y <= k; y++) {
        scores[x] += teams[x][y];
      }
    }

    let my = scores[t];
    let cnt = 1;
    for (let x = 1; x <= n; x++) {
      if (scores[x] > my) {
        cnt++;
      }
      if (scores[x] === my) {
        if (tries[t] > tries[x]) {
          cnt++;
          continue;
        }
        if (tries[t] === tries[x] && last[t] > last[x]) {
          cnt++;
        }
      }
    }

    answer.push(cnt);

    mm += m;
    tt++;
  }

  console.log(answer.join("\n"));
};

solution();
