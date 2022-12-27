const solution = (n, t, m, timetable) => {
    timetable.sort();
    
    // 콘은 가장 마지막 셔틀의 가장 마지막 사람으로 타야 한다.
    
    // 운행하는 모든 셔틀 정보 구하기
    let shuttle = ["09:00"];
    for(let i = 1; i < n; i++){
        const [prevT, prevM] = shuttle[i-1].split(':');
        let min = +prevM + t;
        let time = +prevT;
        if(min >= 60) {
            min -= 60;
            time += 1;
        }
        if(min < 10) min = `0${min}`
        if(time < 10)  time = `0${time}`
        shuttle.push(`${time}:${min}`)
    }
    
    for(let i = 0; i < n - 1; i++){
        const time = shuttle[i];
        let cnt = 0;
        while(cnt < m && timetable[0] <= time){
            timetable.shift();
            cnt++;
        }
    }
    
    // 콘의 자리 찾기
    const lastTime = shuttle[n - 1];
    let cnt = 0;
    while(cnt < m - 1 && timetable[0] <= lastTime){
        timetable.shift();
        cnt++;
    }
    
    let answer = lastTime;
    if(timetable[0] <= lastTime) {
        const [time, min] = timetable[0].split(':');
        let conM = +min - 1;
        let conT = +time;
        if(conM < 0){
            conM += 60;
            conT -= 1;
        }
        if(conM < 10) conM = `0${conM}`
        if(conT < 10)  conT = `0${conT}`
        answer = `${conT}:${conM}`
    }
    
    return answer;
}
