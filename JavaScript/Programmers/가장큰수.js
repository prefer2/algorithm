function cmp(a, b){
    return (b+a)*1-(a+b)*1
}

function solution(numbers) {
    var answer = numbers.map(x => `${x}`).sort(cmp).join('');
    if(answer[0] === '0') answer = '0';
    return answer;
}