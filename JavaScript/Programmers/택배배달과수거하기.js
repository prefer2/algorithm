const solution = (cap, n, deliveries, pickups) => {
    let answer = 0;
    let to = n - 1;
    let flag = false;
    
    while(true){
        // 배달이 더 먼지, 수거가 더 먼지 판단해야 함
        for(let i = to; i>=0; i--){
            if(deliveries[i] > 0 || pickups[i] >0) {
                to = i;
                break;
            }

            if(i === 0 && deliveries[i] === 0 && pickups[i] === 0) flag = true;
        }
        
        if(flag) break;

        let goTruck = 0;

        // 배달 최대치 트럭에 담기
        for(let i = to; i >= 0; i--){
            if(deliveries[i] > 0){
                if(goTruck + deliveries[i] <= cap){
                    goTruck += deliveries[i];
                    deliveries[i] = 0;
                    if(goTruck === cap) break;
                } else {
                    deliveries[i] -= (cap - goTruck);
                    goTruck = cap;
                    break;
                }
            }
        }

        let backTruck = 0;
        // 수거 최대치 담아오기
        for(let i = to; i >= 0; i--){
            if(pickups[i] > 0){
                if(backTruck + pickups[i] <= cap){
                    backTruck += pickups[i];
                    pickups[i] = 0;
                    if(backTruck === cap) break;
                } else {
                    pickups[i] -= (cap - backTruck);
                    backTruck = cap;
                    break;
                }
            }
        }
        
        answer += (to + 1) * 2;
    }
    
    return answer;
}
