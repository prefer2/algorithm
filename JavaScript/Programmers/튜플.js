function solution(s) {
    const answer = []
    let strList = s.replace("{{", "").replace("}}", "").split("},{").map(x=> x.split(",").map(y=>+y))
 
    strList.sort((a, b) => a.length - b.length);
    strList.forEach(x => {
        const a = x.find(el => !answer.includes(el))
        answer.push(a)
    })
    
    return answer;
}
