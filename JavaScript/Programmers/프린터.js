function solution(priorities, location) {
    var answer = 0;
    let paper = priorities.map((x,pos)=>{ return {x, pos}});
    
    while(true && paper.length>0){
        const front = paper.shift();
        if(paper.some(x=>x.x>front.x)){
            paper.push(front);
        }
        else{
            answer++;
            if(front.pos===location) break;
        }
    }
    return answer;
}