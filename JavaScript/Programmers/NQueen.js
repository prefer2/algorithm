const solution = (n) => {
    let answer = 0;
    
    const dfs = (row, board) => {
        if(row === n){answer++;} 
        else {
            for(let i = 1; i<=n; i++){
                board[row+1] = i;
                if(isValid(row+1, board)) dfs(row+1, board);
            }
        }
    }
    
    const isValid = (row, board) => {
        for(let i = 1; i < row; i++) {
          if(board[i] === board[row]) return false;
          if(Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
        }
        return true;
    }
    
    for(let i = 1; i <= n; i++){
        const board = new Array(n+1).fill(0);
        board[1] = i; 
        dfs(1, board)
    }
    
    return answer;
}
