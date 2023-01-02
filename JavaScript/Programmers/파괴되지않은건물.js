// 부분합
const solution = (board, skill) => {
    const n = board.length;
    const m = board[0].length;
    const check = Array.from(Array(n+1), () => Array(m+1).fill(0));
    
    skill.forEach(s => {
        let [type, r1, c1, r2, c2, degree] = s;
        if(type === 1) degree *= -1;
        check[r1][c1] += degree;
        check[r2+1][c2+1] += degree;
        check[r1][c2+1] -= degree;
        check[r2+1][c1] -= degree;
    })
    
    // 누적 합 구하기
    for(let i = 0; i<n; i++){
        for(let j = 1; j<m; j++){
            check[i][j] += check[i][j-1];
        }
    }
    
    
    for(let i = 0; i<m; i++){
        for(let j = 1; j<n; j++){
            check[j][i] += check[j-1][i];
        }
    }
    
    let result = 0;
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            board[i][j] += check[i][j];
            if(board[i][j] > 0) result++;
        }
    }
    
    return result;
}
