const fs = require("fs");
let [T, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const answer = [];
  for (let t = 0; t < +T; t++) {
    const obj = {};
    const cnt = +input[t * 2 + 1];
    const string = input[t * 2];

    for (let i = 0; i < string.length; i++) {
      if (!obj[string[i]]) {
        obj[string[i]] = [i];
      } else {
        obj[string[i]].push(i);
      }
    }

    let minLen = 10001;
    let maxLen = 0;
    Object.keys(obj).forEach((k) => {
      if (obj[k].length >= cnt) {
        for (let i = 0; i <= obj[k].length - cnt; i++) {
          const len = obj[k][i + cnt - 1] - obj[k][i] + 1;
          if (len < minLen) minLen = len;
          if (len > maxLen) maxLen = len;
        }
      }
    });

    if (minLen === 10001 && maxLen === 0) {
      answer.push("-1");
    } else answer.push(`${minLen} ${maxLen}`);
  }

  console.log(answer.join("\n"));
};

solution();
