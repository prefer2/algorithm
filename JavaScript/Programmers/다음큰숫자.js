const solution = (n) => {
    const countOne = (num) => {
        return num.toString(2).split('').filter(x => x==='1').length;
    }
    
    const nToTwo = countOne(n);
    let answer = n+1;
    while(true){
        if(countOne(answer) === nToTwo) return answer;
        answer++;
    }
}
