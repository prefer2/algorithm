const fs = require("fs");
const [nm, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map((x) => +x);
const board = input.map((x) => x.split("").map((y) => +y));

const solution = () => {
  let answer = "";
  const zeros = [];

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const bfs = (x, y) => {
    let cnt = 1;
    const idx = zeros.length + 2;

    const q = [[x, y]];
    board[x][y] = idx;

    while (q.length > 0) {
      const [xx, yy] = q.shift();

      for (let i = 0; i < 4; i++) {
        const nx = xx + dx[i];
        const ny = yy + dy[i];
        const key = `${nx}${ny}`;

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (board[nx][ny] === 0) {
          board[nx][ny] = idx;
          q.push([nx, ny]);
          cnt++;
        }
      }
    }

    zeros.push(cnt);
  };

  const move = (x, y) => {
    let cnt = 1;
    const s = new Set();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (board[nx][ny] > 1) {
        const id = board[nx][ny] - 2;
        if (!s.has(id)) {
          s.add(id);
          cnt += zeros[id];
        }
      }
    }

    return cnt;
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) {
        bfs(i, j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 1) {
        const m = move(i, j);
        str += `${m % 10}`;
      } else str += "0";
    }
    answer += `${str}\n`;
  }

  console.log(answer);
};

solution();
