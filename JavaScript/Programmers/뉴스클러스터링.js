function solution(str1, str2) {
    var answer = 65536;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    var arr1 = [];
    var arr2 = [];
    
    for(var i = 0; i<str1.length - 1; i++){
        if(str1[i].match(/[a-z]/) && str1[i+1].match(/[a-z]/)){
            const str = str1[i] + str1[i+1];
            arr1.push(str);
        }
    }
    
     for(var i = 0; i<str2.length - 1; i++){
        if(str2[i].match(/[a-z]/) && str2[i+1].match(/[a-z]/)){
            const str = str2[i] + str2[i+1];
            arr2.push(str);
        }
    }
    
    if(arr1.length === 0 && arr2.length ===0) return answer;
    
    var inter = [];
    var arr3 = [...arr2];
    arr1.forEach(x => {
        const i = arr3.indexOf(x);
        if(i>-1){
            arr3.splice(i, 1);
            inter.push(x);
        }
    });

    answer *= inter.length/(arr1.length+arr2.length-inter.length)
    return Math.floor(answer);
}