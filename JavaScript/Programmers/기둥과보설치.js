const solution = (n, build_frame) => {
    const gi = Array.from(Array(n+1), () => Array(n+1).fill(0));
    const bo = Array.from(Array(n+1), () => Array(n+1).fill(0));
    
    const checkAdd = (x, y, a) => {
        // 기둥
        if(a===0){
            // 바닥
            if(y===0) return true;
            // 기둥 위
            if(gi[x][y - 1]) return true;
            // 보 위
            if(bo[x][y] || (x>0 && bo[x-1][y])) return true;
        }
        // 보
        else{
            // 한쪽 끝 부분이 기둥 위
            if(y>0 && gi[x][y-1] || (x<n && gi[x+1][y-1])) return true;
            // 양쪽 끝 부분이 동시에 다른 보
            if(x>0 && x<n && bo[x-1][y] && bo[x+1][y]) return true;
        }
        return false;
    }
    
    const checkDelete = () => {    
        for(let i=0;i<=n;i++){
                for(let j=0;j<=n;j++){
                    if(!gi[i][j]) continue;
                    if(!checkAdd(i,j,0)) return false;
                }
            }
        
        
            for(let i=0;i<=n;i++){
                for(let j=0;j<=n;j++){
                    if(!bo[i][j]) continue;
                    if(!checkAdd(i,j,1)) return false;
                }
            }
        return true;
    }
    
    build_frame.forEach(build => {
        let [x, y, a, b] = build;
        // 설치
        if(b === 1){
            if(checkAdd(x, y, a)) {
                if(a === 0) gi[x][y] = 1;
                else bo[x][y] = 1;
            }
        }
        // 삭제
        else {
            if(a === 0) {
                gi[x][y] = 0;
                if(!checkDelete()) gi[x][y] = 1;
            }
            else {
                bo[x][y] = 0;
                if(!checkDelete()) bo[x][y] = 1;
            }
        }
    })

    let answer = [];
    for(let i=0;i<=n;i++){
        for(let j=0;j<=n;j++){
            if(gi[i][j]) answer.push([i, j, 0]);
            if(bo[i][j]) answer.push([i, j, 1]);
        }
    }
    
    return answer;
}
