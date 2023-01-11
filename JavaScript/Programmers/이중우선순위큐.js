const solution = (operations) => {
    const pq = [];
    
    operations.forEach(op => {
        const [o, n] = op.split(' ');
        
        if(o === 'I'){
            pq.push(+n);
            pq.sort((a,b) => a-b);
        }
        else {
            if(n==='1'){
                pq.pop();
            }
            else {
                pq.shift();
            }
        }
    })
    
  
    if(pq.length===0) return [0,0];
    else return [pq[pq.length-1], pq[0]];
}
