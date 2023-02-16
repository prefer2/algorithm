/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
    const n = s.length;
    const dp = Array.from(Array(n), () => Array(n).fill(false));

    let cnt = 1;
    let answer = s[0];

    for(let i = 0; i<n; i++){
        dp[i][i] = true;
    }

    for(let i = 0; i<n-1; i++){
        if(s[i]===s[i+1]) {
            dp[i][i+1] = true;
            if(2 > cnt) {
                cnt = 2;
                answer = s.slice(i, i+2);
            }
        }
    }

    for(let len = 3; len <= n; len++){
        for(let i = 0; i <= n - len; i++){
            if(dp[i+1][i+len-2] && s[i] === s[i+len-1]){
                dp[i][i+len-1] = true;
                cnt = len;
                answer = s.slice(i, i+len);
            }
        }
    }

    return answer;
};
