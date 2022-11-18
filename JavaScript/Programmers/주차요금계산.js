const solution = (fees, records) => {
    const answer = [];
    const carNumber = [];
    const inTime = [];
    const totalTime = [];
    
    const splited = records.map(x => {
        return x.split(' ');
    })
    
    splited.forEach(x => {
        const [time, car, inOut] = x;
        const splitTime = time.split(':');
        const minTime = +splitTime[0] * 60 + +splitTime[1];

        if(!carNumber.includes(car)) {
            carNumber.push(car);   
            inTime[carNumber.length - 1] = minTime;
        }
        else {
            const idx = carNumber.indexOf(car);
            if(inOut === 'IN') {
               inTime[idx] = minTime; 
            } else {
                const inT = inTime[idx];
                inTime[idx] = -1;
                const tt = minTime - inT;
                if(!totalTime[idx]) totalTime[idx] = 0;
                totalTime[idx] += tt;
            }
        }
    })
    
    inTime.forEach((x, idx) => {
        const maxTime = 23*60 + 59;
        if(x !== -1){
            if(!totalTime[idx]){
                totalTime[idx] = (maxTime-x);
            }
            else totalTime[idx] += (maxTime-x);
        }
    })
    
    const totalPrice = totalTime.map((x) => {
        const [t, p, mt, mp] = fees;
        if(x <= t) return p;
        else {
            const leftTime = x - t;
            return p + (Math.ceil(leftTime/mt)) * mp;
        }
    })
    
    const sortedCar = [...carNumber].sort();
    
    sortedCar.forEach((x) => {
        const idx = carNumber.indexOf(x);
        answer.push(totalPrice[idx])
    })
    return answer;
}
