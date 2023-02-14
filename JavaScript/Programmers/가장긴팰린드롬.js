const solution = (s) => {
    // dp
    const n = s.length
    const dp = Array.from(Array(n), () => Array(n).fill(false));
    
    let answer = 1;
    
    for(let i = 0; i<n; i++){
        dp[i][i] = true;
    }
    
    for(let i = 0; i<n-1; i++){
        if(s[i] === s[i+1]) {
            dp[i][i+1] = true;
            answer = 2;
        }
    }
    
    for(let len = 3; len <= n; len++){
        for(let start = 0; start <= n-len; start++){
            const end = start + len - 1;
            if(s[start] === s[end] && dp[start+1][end-1]){
                dp[start][end] = true;
                if(answer<len) answer = len;
            }
        }
    }
    
    return answer;
}
