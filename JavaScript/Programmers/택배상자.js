const solution = (order) => {
  let answer = 0;
  const temp = [];
  for (let i = 1; i <= order.length; i++) {
    temp.push(i);
    while (temp.length > 0 && temp[temp.length - 1] === order[answer]) {
      temp.pop();
      answer++;
    }
  }
  return answer;
}
