function reverse(str) {
  return str.slice(1, str.length - 1).split("").map((x) => (x === '(' ? ')' : '(')).join('');
}

function solution(p) {
  if (p.length === 0) return "";

  let balance = 0;
  let i = 0;
  for(i =0; i<p.length; i++){
      if(p[i] === '(') balance += 1;
      else balance -= 1;
      
      if(balance===0) break;
  }


  const u = p.slice(0, i+1);
  const v = solution(p.slice(i+1));

  if (u[0] === "(" && u[u.length - 1] == ")") return u + v;
  else return "(" + v + ")" + reverse(u);
}