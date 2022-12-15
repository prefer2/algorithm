let wordList = [];

const changable = (a, b) => {
    let count = 0;
    [...a].forEach((c, i) => {
        if(c!==b[i]) count++;
        if(count>1) return false;
    })
    
    return count===1;
}

const bfs = (word, end) => {
    const st = [];
    const visited = Array.from({length: wordList.length -1}, () => false);
    let c = 0;
    
    st.push({node: word, count: c});
    
    while(st.length > 0){
        const {node, count} = st[st.length - 1];
        st.splice(-1, 1);
        
        for(let i = 0; i<wordList.length; i++){
            if(changable(wordList[i], node) && !visited[i]){
                if(wordList[i]===end) return count+1;
                st.push({node: wordList[i], count: count+1});
                visited[i] = true;
            }
        }
    }
    
    return 0;
}

const solution = (begin, target, words) => {
    wordList = words;
    return bfs(begin, target);
}
