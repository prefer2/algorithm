const fs = require("fs");
const [a, b, c] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((x) => +x);

const solution = () => {
  // 게임을 진행해도 a+b+c의 총 합은 변하지 않는다
  const sum = a + b + c;
  if (sum % 3 !== 0) {
    console.log(0);
    return;
  }

  const visited = Array.from(Array(1501), () => Array(1501).fill(false));
  const q = [];

  if (a < b) {
    q.push([a, b]);
    visited[a][b] = true;
  } else {
    q.push([b, a]);
    visited[b][a] = true;
  }

  while (q.length > 0) {
    const [x, y] = q.shift();
    const nums = [x, y, sum - x - y];
    if (x === y && y === nums[2]) {
      console.log(1);
      return;
    }
    nums.sort((a, b) => a - b);

    for (let i = 0; i < 3; i++) {
      for (let j = i; j < 3; j++) {
        if (nums[i] < nums[j]) {
          const xx = nums[i] + nums[i];
          const yy = nums[j] - nums[i];
          const zz = sum - xx - yy;

          const nx = Math.min(xx, yy, zz);
          const ny = Math.max(xx, yy, zz);
          if (visited[nx][ny]) continue;
          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }

  if (visited[sum / 3][sum / 3]) console.log(1);
  else console.log(0);
};

solution();
