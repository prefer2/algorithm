function solution(n, t, m, p) {
    var answer = '';
    
    var number = '';
    var j = 0;
    while(j<=t*m+p){
        number+=j.toString(n).toUpperCase();
        j++;
    }
    
    for(var i=0; i<t; i++){
        answer+=number[i*m+p-1];
    }
    
    return answer;
}