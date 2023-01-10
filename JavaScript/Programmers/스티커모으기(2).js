const solution = (sticker) => {
    // ex) [100, 1, 2, 300, 1] => 100, 300
    // dp[i] = max(dp[i-1], dp[i-2]+sticker[i])
    const n = sticker.length;
    
    // 첫번째 스티커를 뜯는 경우
    const dp = Array.from({length: n}, () => 0);
    
    // 첫번째 스티커를 뜯지 않는 경우
    const dp2 = Array.from({length: n}, () => 0);
    
    dp[0] = sticker[0];
    dp[1] = sticker[0];
    dp2[1] = sticker[1];
    
    for(let i = 2; i < n; i++){
        if(i !== n - 1){
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + sticker[i]);
        } 
        else{
            dp[i] = dp[i - 1];
        }
        dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
    }
    
    return Math.max(dp[n-1], dp2[n-1]);
}
