const fs = require("fs");
const [nwl, t] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const [n, w, l] = nwl.split(" ").map((x) => +x);
  const trucks = t.split(" ").map((x) => +x);
  let answer = 1;
  let tNum = 0;
  let bridge = 0;
  const line = [];

  while (true) {
    if (line.length > 0) {
      if (line[0].time + w <= answer) {
        const { time, truckNum } = line.shift();
        bridge -= trucks[truckNum];

        if (tNum >= n && line.length === 0) break;
      }
    }

    if (bridge + trucks[tNum] <= l) {
      bridge += trucks[tNum];
      line.push({ time: answer, truckNum: tNum });
      tNum++;
    }

    answer++;
  }

  console.log(answer);
};

solution();
