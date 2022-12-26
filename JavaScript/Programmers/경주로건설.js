// bfs + dp

const solution = (board) => {
    const n = board.length;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    const q = [];
    const visited = Array(n).fill().map(() => Array(n).fill().map(() => Array(4).fill(9999999)));

    q.push([0, 0, 0, 0], [0, 0, 0, 2]) // [x, y, cost, direction]
    
    while(q.length){
        const [x, y, cost, direction] = q.shift();
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];

            if( nx < 0 || nx >= n || ny < 0 || ny >= n || board[nx][ny] === 1 ) continue;
            
            let newCost = cost + 100;
            if(direction !== i) newCost += 500;
            
            if(visited[nx][ny][i] > newCost){
                visited[nx][ny][i] = newCost;
                q.push([nx, ny, newCost, i]);
            }
        }
    }
    
    return Math.min(...visited[n-1][n-1])
}
