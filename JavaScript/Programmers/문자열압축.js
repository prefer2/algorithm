function solution(s) {
    var answer = s.length;
    
    for(var i = 1; i<s.length; i++){
        var prev = s.slice(0, i);
        var cnt = 1;
        var ans = '';
        
        var last = '';
        for(var j = i; j<s.length; j=j+i){
            var curr = s.slice(j, j+i);
            
            if(j+i>=s.length-1) last = curr;
            
            if(prev === curr){
                cnt++;
            }
            else{
                if(cnt>1) ans +=`${cnt}${prev}`;
                else ans += prev;
                prev = curr;
                cnt = 1;
            }
        }
        
        if(last!=='') {
             if(cnt>1) ans +=`${cnt}${prev}`;
            else ans += prev;
        }
        
        if(ans.length < answer) answer = ans.length;
    }
    return answer;
}