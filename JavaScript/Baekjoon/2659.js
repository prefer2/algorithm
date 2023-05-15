const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  const arr = [];

  const makeFour = (arr) => {
    let num = 9999;
    for (let i = 0; i < 4; i++) {
      let s = "";
      for (let j = i; j < i + 4; j++) {
        s += arr[j % 4];
      }

      if (+s < num) num = +s;
    }

    return num;
  };

  const myNum = makeFour(input);

  for (let i = 1111; i <= 9999; i++) {
    const n = i.toString().split("");
    if (n.includes("0")) continue;
    const k = makeFour(n);
    if (!arr.includes(k)) arr.push(k);
  }

  console.log(arr.indexOf(myNum) + 1);
};

solution();
