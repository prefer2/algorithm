const solution = (n, results) => {
    const gameResult = Array.from(Array(n+1), () => Array(n+1).fill(2));
    
    results.forEach(result => {
        const [a, b] = result;
        // 1: 이김, -1: 짐, 2: 알 수 없음
        gameResult[a][b] = 1;
        gameResult[b][a] = -1;
    })
    
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=n; j++){
            // a가 b를 이겼다면, b가 이긴 상대들도 모두 이김
            // a가 b에게 졌다면, b가 이긴 상대들에게도 모두 짐
            if(gameResult[i][j] === 1){
                for(let k = 1; k<=n; k++){
                    if(gameResult[j][k] === 1){
                        gameResult[i][k] = 1;
                        gameResult[k][i] = -1;
                    } 
                }
            }
            else if(gameResult[i][j] === -1){
                for(let k = 1; k<=n; k++){
                    if(gameResult[j][k] === -1){
                        gameResult[i][k] = -1;
                        gameResult[k][i] = 1;
                    } 
                }
            }
        }
    }

    let answer = 0;
    for(let i = 1; i<=n; i++){
        let cnt = 0;
        for(let j = 1; j<=n; j++){
            if(gameResult[i][j] === 2) cnt++;
        }
        
        if(cnt===1) answer++;
    }
    
    return answer;
}
