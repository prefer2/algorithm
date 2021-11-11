function calculate(op, a, b){
    if(op==='+') return a+b;
    else if(op==='-') return a-b;
    else return a*b;
}

function solution(expression) {
    var answer = 0;
    const cases = [['+', '-', '*'],['+', '*', '-'],['-', '+', '*'],['-', '*', '+'],['*', '+', '-'],['*', '-', '+']]
    const numArr = expression.split(/[^0-9]/).map(num => +num);
    const opArr = expression.match(/[\+\-\*]/g);
    
    cases.map(op=>{
        let nArr = [...numArr];
        let oArr = [...opArr];
        
        for(let j = 0; j<3; j++){
            let i = 0;
            while(i<oArr.length){
                if(oArr[i]===op[j]){
                    const num = calculate(op[j], nArr[i], nArr[i+1]);
                    nArr.splice(i, 2, num);
                    oArr.splice(i, 1);
                    i = 0;
                }
                else i++;
            }
        }
        
        while(oArr.length>0){
           const num = calculate(oArr[0], nArr[0], nArr[1]);
            nArr.splice(0, 2, num);
            oArr.splice(0, 1);
        }
        if(Math.abs(nArr[0])>answer) answer = Math.abs(nArr[0]);
        
    })
    return answer;
}