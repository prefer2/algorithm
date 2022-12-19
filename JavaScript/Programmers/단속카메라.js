const solution = (routes) => {
    let answer = 1;
    const sortedRoutes = routes.sort((a,b) => a[0] - b[0]);
    
    let out = sortedRoutes[0][1];
    
    sortedRoutes.forEach(x => {
        const [newIn, newOut] = x;
        if(newIn > out) {
            answer++;
            out = newOut;
        }
        if(newOut < out){
            out = newOut;
        }
    })
    
    return answer;
}
