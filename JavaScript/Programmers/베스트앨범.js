const solution = (genres, plays) => {
    const count = {};
    const song = [];
    
    genres.forEach((g, i) => {
        song.push({genre: g, play: plays[i], index: i});
        count[g] = count[g] ? count[g]+plays[i] : plays[i]
    })
    
    const gCount = {};
    const answer = [];
    song.sort((a,b) => {
        if(a.genre !== b.genre) return count[b.genre] - count[a.genre];
        if(a.play !== b.play) return b.play - a.play;
        return a.index - b.index;
    })
    
    song.forEach(s => {
        const {genre, play, index} = s;
        if(!gCount[genre]) {
            gCount[genre] = 1;
            answer.push(index);
        }
        else if(gCount[genre] === 1){
            gCount[genre] += 1;
            answer.push(index);
        }
    })
    
    return answer;
}
