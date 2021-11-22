function solution(lines) {
    const startEnd = lines.map((line)=>{
        const [year, end, dur] = line.split(' ');
        const [endHour, endMin, endSec] = end.split(':')
        const endTime = (endHour * 3600 + endMin * 60 + +endSec) * 1000;
        
        const duration = dur.slice(0, dur.length-1) * 1000;
        const startTime = endTime - duration + 1;
        return ([startTime, endTime + 1000]);
    })
    
    var answer = 0;
    for(let i = 0; i < lines.length; i++){
        
        let count = 0;
        for(let j = i; j < lines.length; j++)
        {
            if(startEnd[j][0] < startEnd[i][1])
                count++;
        }
        
        if(answer < count)
            answer = count;
    }
    
    return answer;
}