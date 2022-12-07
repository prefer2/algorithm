let getGCD = (a, b) => {

    while(b > 0){
        const r = a % b;
        a = b;
        b = r;
    } 

    return a;
}

const solution = (arrayA, arrayB) => {
    const arrLen = arrayA.length;
    let a = arrayA[0];
    let b = arrayB[0];
    
    for(let i = 1; i<arrLen; i++){
        a = getGCD(a, arrayA[i]);
        b = getGCD(b, arrayB[i]);
    }
    
    let aTry = a;
    let bTry = b;
    
    for(let i = 0; i<arrLen; i++){
        if(arrayB[i] % a === 0) {
            aTry = 0;
            break;
        }
    }
    
    for(let i = 0; i<arrLen; i++){
        if(arrayA[i] % b === 0) {
            bTry = 0;
            break;
        }
    }
    
    return Math.max(aTry, bTry);
}
