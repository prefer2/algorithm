const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const end = input.pop();

const solution = () => {
  const answer = [];

  const isEnd = (board, ox) => {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] === ox &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      )
        return true;
      if (
        board[0][i] === ox &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      )
        return true;
    }

    if (
      board[0][0] === ox &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    )
      return true;
    if (
      board[0][2] === ox &&
      board[0][2] === board[1][1] &&
      board[1][1] === board[2][0]
    )
      return true;

    return false;
  };

  const isValid = (board) => {
    let o = 0;
    let x = 0;

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === "X") x++;
        if (board[i][j] === "O") o++;
      }
    }

    if (o > x || x - o >= 2) return false;

    // x의 개수가 1개 많은 경우
    // x의 개수가 더 많은데, o가 게임 종료 조건을 만족한다면
    if (x > o) {
      if (isEnd(board, "O")) return false;
      if (isEnd(board, "X")) return true;
    }

    if (x + o === 9) {
      if (!isEnd(board, "O") && !isEnd(board, "X")) return true;
    }

    // 두 말의 개수가 같은 경우
    if (x === o) {
      if (isEnd(board, "X")) return false;
      if (isEnd(board, "O")) return true;
      return false;
    }
  };

  input.forEach((b) => {
    const borad = [];

    let start = 0;
    while (b.length > start) {
      const line = b.slice(start, start + 3).split("");
      borad.push(line);
      start += 3;
    }

    isValid(borad) ? answer.push("valid") : answer.push("invalid");
  });

  console.log(answer.join("\n"));
};

solution();
