const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, d, k, c] = input[0].split(" ");

const solution = (k, d, c, sushi) => {
  const check = Array.from({ length: d + 1 }, () => 0);
  let cnt = 1;
  check[c] = 1;

  for (let i = 0; i < k; i++) {
    if (check[sushi[i]] === 0) cnt++;
    check[sushi[i]]++;
  }

  answer = cnt;

  for (let i = k; i < k + sushi.length; i++) {
    const first = sushi[i - k];
    check[first]--;
    if (check[first] === 0) cnt--;

    const end = sushi[i % sushi.length];
    if (check[end] === 0 && check[end] !== c) cnt++;
    check[end]++;

    if (cnt > answer) answer = cnt;
  }

  console.log(answer);
};

const arr = [];
for (let i = 0; i < +N; i++) {
  arr[i] = input[i + 1];
}

solution(+k, +d, c, arr);
