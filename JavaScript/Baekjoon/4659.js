const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  const ok = "is acceptable.";
  const notOk = "is not acceptable.";

  const answer = [];

  const checkFirst = (word) => {
    return /[aeiou]/.test(word);
  };

  const checkSecond = (word) => {
    if (word.length < 3) return true;
    for (let i = 0; i <= word.length - 3; i++) {
      const splited = word.slice(i, i + 3);
      if (splited.match(/[aeiou]/g)?.length === 3) return false;
      if (splited.match(/[^aeiou]/g)?.length === 3) return false;
    }

    return true;
  };

  const checkThird = (word) => {
    if (word.length < 2) return true;
    for (let i = 0; i <= word.length - 2; i++) {
      const splited = word.slice(i, i + 2);
      if (splited[0] === splited[1] && splited[0] !== "e" && splited[0] !== "o")
        return false;
    }

    return true;
  };

  for (let i = 0; i < input.length - 1; i++) {
    const word = input[i];
    if (checkFirst(word) && checkSecond(word) && checkThird(word)) {
      answer.push(`<${word}> ${ok}`);
    } else {
      answer.push(`<${word}> ${notOk}`);
    }
  }

  console.log(answer.join("\n"));
};

solution();
