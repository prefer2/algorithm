const solution = (A,B) => {
   // 제일 작은거 * 제일 큰거
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    
    let answer = 0;
    A.forEach((a, i) => {
        answer += a * B[i];
    })
    
    return answer;
}
