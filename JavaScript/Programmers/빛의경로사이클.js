const solution = (grid) => {
    const answer = [];
    
    const n = grid.length;
    const m = grid[0].length;
    
    // 3차원 배열
    const visited = Array.from(Array(n), () => Array.from(Array(m), () => Array(4).fill(false)));
    
    // 상, 하, 좌, 우
    const moveDir = {
        'S': [0, 1, 2, 3],
        'L': [3, 2, 0, 1],
        'R': [2, 3, 1, 0],
    }
    
    const moveNode = {
        'S': [[-1, 0], [1, 0], [0, 1], [0, -1]],
        'L': [[0, -1], [0, 1], [-1, 0], [1, 0]],
        'R': [[0, 1], [0, -1], [1, 0], [-1, 0]],
    }
    
    const move = (x, y, dir) => {
        const gridNode = grid[x][y];
        const nd = moveDir[gridNode][dir];
        
        let nx = x + moveNode[gridNode][dir][0];
        let ny = y + moveNode[gridNode][dir][1];
        
        if(nx<0) nx = n - 1;
        if(nx>=n) nx = 0;
        if(ny<0) ny = m - 1;
        if(ny>=m) ny = 0;
        
        return [nx, ny, nd];
    }
    
    const bfs = (x, y, dir) => {
        const q = [];
        q.push([x, y, dir, 0]);
        
        while(q.length){
            const [curX, curY, curDir, cnt] = q.shift();
            const [nx, ny, nd] = move(curX, curY, curDir);
            
            if(visited[curX][curY][curDir]){
                answer.push(cnt);
                return;
            }
            
            visited[curX][curY][curDir] = true;
            q.push([nx, ny, nd, cnt + 1]);
        }
    }
    
    for(let i = 0; i<n; i++){
        for(let j = 0; j<m; j++){
            for(let k = 0; k<4; k++){
                if(!visited[i][j][k]){
                    bfs(i, j, k);
                }
            }
        }
    }
    
    return answer.sort((a, b) => a-b);
}
