function solution(n, s) {
    const divied = Math.floor(s/n);
    
    if(!divied)  return [-1];
    
    const rest = s % n;
    const answer = Array.from({ length: n }, () => divied);
    
    for(let i = 0; i < rest; i ++) {
        answer[answer.length - 1 - i]++;
    }
    
    return answer;
}
