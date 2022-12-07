function solution(id_list, report, k) {
    const result = {}
    let answer = [];
    
    id_list.map((id)=>{
        result[id] = []
        answer.push(0)
    })
    
    report.map((re)=>{
        const [from, to] = re.split(" ")
        if(!result[to].includes(from)){
            result[to].push(from)
        }
    })
    
    for(const keyId in result){
        if(result[keyId].length>=k){
            result[keyId].map((id)=>{
                answer[id_list.indexOf(id)]++
            })
        }
    }
    
    return answer;
}
