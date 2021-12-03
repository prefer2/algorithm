function solution(numbers, target) {
    let answer = 0;
    
    addSub(0, 0);
    function addSub(i, sum){
        if(i===numbers.length){
            if(sum===target)answer++;
            return;
        }
    
    addSub(i+1, sum+numbers[i])
    addSub(i+1, sum-numbers[i])
    }
    return answer;
}