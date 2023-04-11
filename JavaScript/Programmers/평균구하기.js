function solution(arr) {
    const answer = arr.reduce((prev, cur) => prev+cur, 0)
    return answer/arr.length;
}
