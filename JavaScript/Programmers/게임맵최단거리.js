const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let m = 0;
let n = 0;

const bfs = (maps) => {
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    const q = [];
    
    q.push([0,0,1]);
    visited[0][0] = true;
    
    while(q.length > 0) {
        const [x, y, c] = q[0];
        q.shift();

        if(x === n - 1 && y === m - 1 ) return c;
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i];
            const ny = y + dy[i];
            if(nx >= 0 && nx < n && ny >=0 && ny < m && maps[nx][ny] > 0 && !visited[nx][ny]){
                q.push([nx, ny, c+1]);
                visited[nx][ny] = true;
            }
        }
    }
    
    return -1;
}

const solution = (maps) => {
    m = maps[0].length;
    n = maps.length;
    
    return bfs(maps);
}
