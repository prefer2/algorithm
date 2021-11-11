function cmp(a, b){
    return b-a;
}

function solution(arr) {
    arr.sort(cmp);
    let lcm = arr[0];
    while(1){
        if(arr.every(x=>lcm%x===0)) return lcm;
        lcm += arr[0];
    }
}