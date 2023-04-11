function solution(n, stations, w) {
    let answer = 0;
    const coverage = 2 * w + 1;
    let index = 1;
    
    stations.forEach((st, i) => {
        if(st - w > index){
            answer += Math.ceil((st - w - index)/coverage);
        }
        index = st + w + 1;
    })
    
    return answer + Math.ceil((n - index + 1)/coverage)
}
