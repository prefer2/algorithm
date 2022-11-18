const getSum = (list) => {
    return list.reduce((prev, acc) => prev+acc, 0);
}

function solution(queue1, queue2) {
    let answer = 0;
    let sum1 = getSum(queue1);
    let sum2 = getSum(queue2);
    const half = (sum1 + sum2) /  2;
    
    let x = 0; let y = queue1.length;
    const totalList = [...queue1, ...queue2];
    
    while(sum1 !== half && x < y && x < 300000 && y < 600001){
        answer++;
        if(sum1 > half) {
            sum1 -= totalList[x];
            x++;
        } else {
            sum1 += totalList[y];
            y++;
        }
    }
    
    if(x===y || x === 300000 || y === 600001) return -1;
    return answer;
}
