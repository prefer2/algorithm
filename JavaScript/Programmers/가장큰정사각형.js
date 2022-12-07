const solution = (board) => {
    let answer = 0;
    
    
    const row = board.length;
    const col = board[0].length;
    
    if (row < 2 || col < 2) {
        if(board[0][0] === 0) return answer;
        return 1;
    }
    
    for (let i = 1; i < row; i++) {
        for (let j = 1; j < col; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i][j - 1], board[i - 1][j], board[i - 1][j - 1]) + 1;
                if(board[i][j] > answer) answer = board[i][j];
            }
        }
    }
    
    return answer * answer;
}
