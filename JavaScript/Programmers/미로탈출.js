const solution = (maps) => {
    const board = maps.map(x => x.split(''));
    let answer = 0;
    
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    
    let sx = 0;
    let sy = 0;
    
    let ex = 0;
    let ey = 0;
    
    let lx = 0;
    let ly = 0;
    
    const bfs = (startX, startY, endX, endY) => {
        const q = [];
        const visited = Array.from(Array(board.length), () => Array(board[0].length).fill(false));
        q.push([startX, startY, 0]);
        visited[startX][startY] = true;
        
        while(q.length > 0){
            const [x, y, cnt] = q.shift();
            for(let i = 0; i<4; i++){
                const nx = x+dx[i];
                const ny = y+dy[i];
                if(nx === endX && ny === endY) return cnt + 1;
                if(nx < 0 || nx >= board.length || ny <0 || ny >= board[0].length || board[nx][ny]==='X') continue;
                if(!visited[nx][ny]){
                    q.push([nx, ny, cnt+1]);
                    visited[nx][ny] = true;
                }
            }
        }
        
        return -1;
    }
    
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[0].length; j++){
            if(board[i][j]==='S'){
                sx = i;
                sy = j;
            }
            if(board[i][j] ==='L'){
                lx = i;
                ly = j;
            }
            if(board[i][j] ==='E'){
                ex = i;
                ey = j;
            }
        }
    }
    
    const sToL = bfs(sx, sy, lx, ly);
    if(sToL===-1) return -1;
    else answer += sToL;
    
    const lToE = bfs(lx, ly, ex, ey);
    if(lToE===-1) return -1;
    else answer += lToE;
    
    return answer;
}
