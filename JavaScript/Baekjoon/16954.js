const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.split(""));

const solution = () => {
  const findWall = (bb) => {
    const wall = [];
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (bb[i][j] === "#") wall.push([i, j]);
      }
    }
    return wall;
  };

  const moveWalls = (w) => {
    const newWall = [];
    const newBoard = Array.from(Array(8), () => Array(8).fill("."));

    for (let i = 0; i < w.length; i++) {
      const [x, y] = w[i];
      if (x + 1 >= 8) continue;
      newWall.push([x + 1, y]);
    }

    for (let i = 0; i < newWall.length; i++) {
      const [x, y] = newWall[i];
      newBoard[x][y] = "#";
    }

    return newBoard;
  };

  const move = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [0, 0],
  ];

  const q = [];
  q.push([7, 0, input]);

  while (q.length > 0) {
    const [x, y, board] = q.shift();
    const walls = findWall(board);

    let flag = true;
    for (let i = 0; i < walls.length; i++) {
      const [wx, wy] = walls[i];
      if (wx < x) flag = false;
    }

    if (walls.length === 0 || flag || x === 0) {
      console.log(1);
      return;
    }

    for (let i = 0; i < move.length; i++) {
      const nx = x + move[i][0];
      const ny = y + move[i][1];

      if (nx < 0 || nx >= 8 || ny < 0 || ny >= 8 || board[nx][ny] === "#")
        continue;

      const b = moveWalls(walls);

      if (b[nx][ny] === "#") continue;

      q.push([nx, ny, b]);
    }
  }

  console.log(0);
};

solution();
