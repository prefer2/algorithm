function solution(info, query) {
    let answer = [];
    let map = {};
    
    function combination(infos, score, map, start){
        let key = infos.join(""); 
        let value = map[key];  
    
        if(value){
            map[key].push(score);
        } else {
            map[key] = [score];
        }
        
        // -를 이용해 모든 조합 만들기
        for(let i=start; i<infos.length; i++){
            let combiArr = [...infos];
            combiArr[i] = '-';
            
            combination(combiArr, score, map, i+1);
        }
    }
    
    
    function binarySearch(searchMap, searchKey, cmp){
        let scoreArr = searchMap[searchKey];
       
        if(scoreArr){
       
            let start = 0;
            let end = scoreArr.length;
            
            while(start < end){
                let mid = Math.floor((start+end)/2);
                
                if(scoreArr[mid] >= cmp){
                    end = mid;
                } else if(scoreArr[mid] < cmp){
                    start = mid + 1;
                }
            }
            
            return scoreArr.length - start;
        }
        else return 0
        
    }
    
    
    
    // 1. 모든 조합 만들기
    for(let i=0; i<info.length; i++){
        let infos = info[i].split(" ");
        let score = infos.pop();
        
        combination(infos, score, map, 0);
    }
    
    // 2. 정렬
    for(let key in map){
        map[key].sort((o1, o2) => o1 - o2);
    }
    
    // 3. 이분탐색
    for(let i=0; i<query.length; i++){
        let querys = query[i].replace(/ and /g, "").split(" ");
        let score = Number(querys.pop());
      
        answer.push(binarySearch(map, querys.join(""), score));
    }
    
    return answer;
}
