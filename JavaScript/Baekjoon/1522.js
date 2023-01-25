const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const solution = () => {
  // a의 길이만큼에서 b의 개수를 세어주면 됨.
  let acnt = 0;
  let answer = 987654321;

  const countA = (start) => {
    let result = 0;
    for (let i = start; i < start + acnt; i++) {
      if (input[i % input.length] === "b") result++;
    }

    return result;
  };

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "a") acnt++;
  }
  for (let i = 0; i < input.length; i++) {
    answer = Math.min(countA(i), answer);
  }

  console.log(answer);
};

solution();
