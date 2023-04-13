const solution = (sequence) => {
    const one = sequence.map((s, i) => {
        if(i%2===0) return s;
        else return s * -1;
    })
    
     const two = sequence.map((s, i) => {
        if(i%2===0) return s * -1;
        else return s;
    })
       
    let answer = 0;
    const arr = Array.from({length: sequence.length}, () => 0)
    const arr2 = Array.from({length: sequence.length}, () => 0)
    
    arr[0] = one[0]
    answer = Math.max(arr[0], answer)
    for(let i = 1; i<one.length; i++){
        arr[i] = Math.max(arr[i-1] + one[i], one[i]);
        answer = Math.max(arr[i], answer)
    }
    
    arr2[0] = two[0];
    answer = Math.max(arr2[0], answer)
    for(let i = 1; i<two.length; i++){
        arr2[i] = Math.max(arr2[i-1] + two[i], two[i]);
        answer = Math.max(arr2[i], answer)
    }
    
    return answer;
}
