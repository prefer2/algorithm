function solution(record) {
    var answer = [];
    
    var idName = [];
    var lines = record.map(x => {
        const [word, id, name] = x.split(' ');
        if(name) idName[id] = name;
        return [word, id, name];
    })
    
    lines.forEach(x => {
        if(x[0]==='Enter'){
            answer.push(`${idName[x[1]]}님이 들어왔습니다.`);
        }
        else if(x[0]==='Leave'){
            answer.push(`${idName[x[1]]}님이 나갔습니다.`);
        }
    })
    
    return answer;
}