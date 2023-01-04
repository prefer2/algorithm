// 시간을 초로 바꿔서 생각하기
const solution = (play_time, adv_time, logs) => {
    const changeToSecond = (time) => {
        const [h, m, s] = time.split(':');
        return (+h) * 60 * 60 + (+m) * 60 + (+s);
    }
    
    const changeToTime = (time) => {
        let h = parseInt(time / 3600);
        let m = parseInt((time - (h * 3600)) / 60);
        let s = time - (h * 3600) - (m * 60);
        
        if(h < 10) h = `0${h}`;
        if(m < 10) m = `0${m}`;
        if(s < 10) s = `0${s}`;
        
        return `${h}:${m}:${s}`
    }
    
    const playTimeToSecond = changeToSecond(play_time);
    const advTimeToSecond = changeToSecond(adv_time);
    const viewer = Array.from({length: playTimeToSecond+1}, () => 0);
    
    logs.forEach(l => {
        const [s, e] = l.split('-');       
        const StartTimeToSecond = changeToSecond(s);
        const EndTimeToSecond = changeToSecond(e)
        viewer[StartTimeToSecond]++;
        viewer[EndTimeToSecond]--;
        return [StartTimeToSecond, EndTimeToSecond]
    })
    
    // 각 초에 몇명씩 보고 있는지 확인
    for(let i = 1; i<=playTimeToSecond; i++){
        viewer[i] += viewer[i-1];
    }
    
    // 각 초의 조회수 확인
    for(let i = 1; i<=playTimeToSecond; i++){
        viewer[i] += viewer[i-1];
    }
    
    let sum = viewer[advTimeToSecond-1];
    let answer = 0;
  
    // 광고가 동양상 재생 시간 안에는 끝나야 함
    for(let i = advTimeToSecond-1; i < playTimeToSecond; i++) {
        if(sum < viewer[i] - viewer[i-advTimeToSecond]) {
            sum = viewer[i] - viewer[i-advTimeToSecond];
            answer = i - advTimeToSecond + 1;
        }
    }
    
    return changeToTime(answer);
}
