let maxDiff = 0;
const arr = [];
let answer = [-1];

const cmp = (ryan, apeach) => {
    let rScore = 0;
    let aScore = 0;
    
    for(let i = 0; i<11; i++){
        const score = 10 - i
        if(ryan[i] > apeach[i]) {
            rScore += score;
        } else {
            if(apeach[i] != 0){
                aScore += score;
            }
        }
    }
    
    return rScore - aScore;
}

const shooting = (count, num, draw, apeach) => {
    if(count === draw) {
        const tmp = Array(11).fill(0);
        for(let i = 0; i<draw; i++) {
            tmp[10 - arr[i]] = tmp[10 - arr[i]] + 1;
        }
        const diff = cmp(tmp, apeach);
        if(diff > maxDiff) {
            maxDiff = diff;
            answer = tmp;
        }
        
        return;
    }
    
    for(let i = num; i<11; i++){
        arr[count] = i;
        shooting(count+1, i, draw, apeach);
    }
}


const solution = (n, info) => {
    let score = 0;
        
    shooting(0, 0, n, info);
    
    return answer;
}
