const solution = (n, words) => {
    const prev = [words[0]];
    
    for(let i = 1; i<words.length; i++){
        const prevWord = words[i-1];
        
        let num = (i+1) % n;
        if(num===0) num = n;
        
        if(prev.includes(words[i])) {
            return [num, Math.ceil((i+1)/n)];
        }
        if(prevWord[prevWord.length -1] !== words[i][0]){
            return [num, Math.ceil((i+1)/n)];
        }
        prev.push(words[i]);
    }
    
    return [0, 0];
}
