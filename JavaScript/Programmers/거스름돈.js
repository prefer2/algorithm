const solution = (n, money) =>{
   const dp = Array.from({length: n+1}, () => 0)
    
    dp[0] = 1;
    
    for(let i = 0; i<money.length; i++){
        const m = money[i];
    	for(let i = m; i <= n; i++){
        	dp[i] = (dp[i] + dp[i - m]) % 1000000007;
        }
    }
    
    return dp[n];
}
