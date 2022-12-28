const solution = (n, vertex) => {
    const visited = Array.from({length: n}, () => false);
    const howFar = Array.from({length: n}, () => 0);
    
    const connected = {};
    vertex.forEach((v) => {
        const [a, b] = v;
        
        if(!connected[a]){
            connected[a] = [b];
        } else {
            connected[a].push(b);
        }
        
        if(!connected[b]){
            connected[b] = [a];
        } else {
            connected[b].push(a);
        }
    })
    
    const q = [];
    q.push([1, 0]);
    visited[1] = true;
    let max = 0;
    
    const bfs = () => {
        while(q.length){
            const [node, cnt] = q.shift();
            
            for(let i = 0; i<connected[node].length; i++){
                const next = connected[node][i];
                if(!visited[next]){
                    q.push([next, cnt+1]);
                    visited[next] = true;
                    howFar[next] = cnt + 1;
                    if(cnt+1 > max) max = cnt+1;
                }
            }
        }
    }
    
    bfs();
    
    let answer = 0;
    howFar.forEach(a => {if(a===max) answer++});
    return answer;
}
