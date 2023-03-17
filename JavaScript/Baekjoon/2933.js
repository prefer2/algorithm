const fs = require("fs");
const [rc, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [r, c] = rc.split(" ").map((x) => +x);

const solution = () => {
  const cave = [];
  for (let i = 0; i < r; i++) {
    cave.push(input[i].split(""));
  }

  const n = input[r];
  const throwing = input[r + 1].split(" ").map((x) => +x);
  let airCluster = [];

  const throwStick = (t, i) => {
    if (i % 2 === 0) {
      // 왼쪽에서 던지는 경우
      for (let i = 0; i < c; i++) {
        if (cave[r - t][i] === "x") {
          cave[r - t][i] = ".";
          return;
        }
      }
    } else {
      // 오른쪽에서 던지는 경우
      for (let i = c - 1; i >= 0; i--) {
        if (cave[r - t][i] === "x") {
          cave[r - t][i] = ".";
          return;
        }
      }
    }
  };

  const checkCluster = () => {
    const visited = Array.from(Array(r), () => Array(c).fill(false));

    const bfs = (x, y) => {
      // 해당 미네랄에 연결되어 있는 모든 미네랄을 방문표시함(연결되어있다)
      const dx = [1, -1, 0, 0];
      const dy = [0, 0, 1, -1];

      const q = [];
      q.push([x, y]);

      while (q.length > 0) {
        const [x, y] = q.shift();
        for (let i = 0; i < 4; i++) {
          const nx = x + dx[i];
          const ny = y + dy[i];
          if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
          if (!visited[nx][ny] && cave[nx][ny] === "x") {
            visited[nx][ny] = true;
            q.push([nx, ny]);
          }
        }
      }
    };

    // 땅바닥에 있는 미네랄들은 무조건 연결되어 있음
    for (let i = 0; i < c; i++) {
      if (cave[r - 1][i] === "x" && !visited[r - 1][i]) {
        bfs(r - 1, i);
      }
    }

    let flag = false;
    // 동굴을 돌면서 방문하지 않은 부분(클러스터)가 있는지 확인
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (cave[i][j] === "x" && !visited[i][j]) {
          flag = true;
          airCluster.push([i, j]);
        }
      }
    }

    return flag;
  };

  const isCluster = (x, y) => {
    for (let i = 0; i < airCluster.length; i++) {
      const [xx, yy] = airCluster[i];
      if (xx === x && yy === y) return true;
    }

    return false;
  };

  const gravity = () => {
    airCluster.sort((a, b) => b[0] - a[0]);

    let h = r + 1;
    for (let i = 0; i < airCluster.length; i++) {
      const [x, y] = airCluster[i];
      let cnt = 0;
      for (let j = x + 1; j < r; j++) {
        if (isCluster(j, y)) {
          cnt = Infinity;
          break;
        }
        if (cave[j][y] === ".") {
          cnt++;
        } else break;
      }

      h = Math.min(h, cnt);
    }

    for (let i = 0; i < airCluster.length; i++) {
      const [x, y] = airCluster[i];
      cave[x][y] = ".";
      cave[x + h][y] = "x";
    }

    airCluster = [];
  };

  for (let i = 0; i < throwing.length; i++) {
    const t = throwing[i];
    throwStick(t, i);
    // 클러스터의 생성 유무
    if (!checkCluster()) continue;
    gravity();
  }

  console.log(cave.map((x) => x.join("")).join("\n"));
};

solution();
