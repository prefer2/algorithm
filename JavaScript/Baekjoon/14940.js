const fs = require("fs");
const [nm, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map((x) => +x);
const board = input.map((i) => i.split(" ").map((x) => +x));

const solution = () => {
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const answer = Array.from(Array(n), () => Array(m).fill(-1));
  const visited = Array.from(Array(n), () => Array(m).fill(false));

  const bfs = (x, y) => {
    answer[x][y] = 0;
    visited[x][y] = true;
    const st = [];
    st.push([x, y]);

    while (st.length > 0) {
      const [tx, ty] = st.shift();
      const dis = answer[tx][ty];
      for (let i = 0; i < 4; i++) {
        const nx = tx + dx[i];
        const ny = ty + dy[i];
        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (!visited[nx][ny]) {
          visited[nx][ny] = true;
          if (board[nx][ny] === 0) {
            answer[nx][ny] = 0;
          } else {
            answer[nx][ny] = dis + 1;
            st.push([nx, ny]);
          }
        }
      }
    }
  };

  let desx = 0;
  let desy = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 2) {
        desx = i;
        desy = j;
      }
    }
  }

  bfs(desx, desy);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 0) {
        answer[i][j] = 0;
      }
    }
  }

  console.log(answer.map((x) => x.join(" ")).join("\n"));
};

solution();
