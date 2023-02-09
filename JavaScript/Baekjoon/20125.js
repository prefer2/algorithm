const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let heart = { x: 0, y: 0 };
  let answer = [];

  for (let i = 1; i < input.length; i++) {
    const idx = input[i].indexOf("*");
    if (idx !== -1) {
      heart.x = i + 1;
      heart.y = idx;
      answer.push(`${heart.x} ${heart.y + 1}`);
      break;
    }
  }

  let cookie = [];

  // left arm
  for (let i = 0; i < heart.y; i++) {
    if (input[heart.x][i] === "*") {
      cookie.push(heart.y - i);
      break;
    }
  }

  // right arm
  for (let i = input[1].length; i > heart.y; i--) {
    if (input[heart.x][i] === "*") {
      cookie.push(i - heart.y);
      break;
    }
  }

  // body
  let bodyx = 0;
  for (let i = heart.x + 1; i < input.length; i++) {
    if (input[i][heart.y] !== "*") {
      cookie.push(i - heart.x - 1);
      bodyx = i - 1;
      break;
    }
  }

  // left leg
  let leftLeg = 0;
  let flag = false;
  for (let i = bodyx + 1; i < input.length; i++) {
    if (input[i][heart.y - 1] === "*") {
      leftLeg++;
    } else {
      cookie.push(leftLeg);
      flag = true;
      break;
    }
  }

  if (!flag) cookie.push(leftLeg);

  // right leg
  let rightLeg = 0;
  flag = false;
  for (let i = bodyx + 1; i < input.length; i++) {
    if (input[i][heart.y + 1] === "*") {
      rightLeg++;
    } else {
      cookie.push(rightLeg);
      flag = true;
      break;
    }
  }

  if (!flag) cookie.push(rightLeg);

  answer.push(cookie.join(" "));

  console.log(answer.join("\n"));
};

solution();
