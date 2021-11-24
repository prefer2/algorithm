function solution(progresses, speeds) {
    var answer = [];
    const days = progresses.map((x,i)=>{
        return Math.ceil((100-x)/speeds[i])
    })
    
    let duration = days[0];
    let time = 1;
    for(let i = 1; i<days.length; i++){
        if(days[i]>duration){
            duration = days[i];
            answer.push(time);
            time = 1;
        }
        else time++;
    }
    answer.push(time);
    return answer;
}