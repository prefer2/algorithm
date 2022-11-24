const stoneCount = (stones, mid, k) => {
    let count = 0;
    
    for(let i = 0; i < stones.length; i++){
        if(stones[i] - mid <= 0){
            count++;
            if(count >= k) return true;
        } else {
            count = 0;
        }
    }
    
    return false;
}

const solution = (stones, k) => {
    let left = 0;
    let right = 200000000;
    
    while(left <= right){
        const mid = Math.floor((left + right) / 2);
        
        if(stoneCount(stones, mid, k)){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}
