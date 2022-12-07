const tree = [];

const connected = (x, y) => {
    let count = 0;
    
    const s = [];
    const visited = [];
    
    s.push(x);
    visited[x] = true;
    
    while(s.length > 0){
        const a = s[s.length - 1];
        s.pop();
        count++;
        
        for(let i =0; i<tree[a].length; i++){
            const next = tree[a][i];
            if(!visited[next] && next !== y){
                s.push(next);
                visited[next] = true;
            }
        }
    }
    
    return count;
}

const solution = (n, wires) => {
    let answer = 100;
    
    wires.forEach(node => {
        const [x, y] = node;
        if(!tree[x]) tree[x] = [];
        if(!tree[y]) tree[y] = [];
        tree[x].push(y);
        tree[y].push(x);
    })
    
    wires.forEach(node => {
        const [x, y] = node;
        const diff = Math.abs(n - 2 * connected(x, y));
        if(diff < answer) answer = diff;
    })
    
    return answer;
}
