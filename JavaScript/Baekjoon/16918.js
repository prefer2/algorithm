const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [R, C, N] = input[0].split(" ");
let board = Array.from(Array(+R), () => Array(+C).fill("O"));

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    board[i][j] = input[i + 1][j];
  }
}

const solution = (r, c, n) => {
  const all = Array.from(Array(r), () => Array(c).fill("O"));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const printAnswer = (array) => {
    const answer = [];
    for (let i = 0; i < r; i++) {
      let line = array[i].join("");
      answer.push(line);
    }
    console.log(answer.join("\n"));
  };

  const bomb = () => {
    const newBoard = Array.from(Array(r), () => Array(c).fill("O"));
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (board[i][j] === "O") {
          newBoard[i][j] = ".";
          for (let k = 0; k < 4; k++) {
            const nx = i + dx[k];
            const ny = j + dy[k];
            if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
            newBoard[nx][ny] = ".";
          }
        }
      }
    }

    board = newBoard.map((b) => [...b]);
  };

  if (n % 2 === 0) {
    printAnswer(all);
    return;
  }

  for (let i = 0; i < parseInt(n / 2); i++) {
    bomb();
  }

  printAnswer(board);
};

solution(+R, +C, +N);
