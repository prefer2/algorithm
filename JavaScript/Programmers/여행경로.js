const solution = (tickets) => {
    tickets.sort();
    const len = tickets.length;
    const visited = Array.from({length: len}, () => false);
    const st = [];
    let answer = [];
    
    const dfs = (from, cnt) => {
        st.push(from);
        
        if(cnt === len){
            answer = [...st];
            return true;
        }
        
        for(let i = 0; i<len; i++){
            const [tFrom, tTo] = tickets[i];
            
            // 아직 방문하지 않은 간선이고, 출발지가 같다면
            if(!visited[i] && tFrom === from){
                visited[i] = true;
                if(dfs(tTo, cnt+1)) return;
                visited[i] = false;
            }
        }
        
        st.pop();
    }
    
    dfs('ICN', 0);
    return answer;
}
