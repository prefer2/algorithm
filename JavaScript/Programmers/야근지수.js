const solution = (n, works) => {
    if(works.reduce((acc,cur) => acc+cur, 0) <= n) return 0;
    let sorted = works.sort((a,b) => a-b);
    const len = works.length;

    while(n) {
        const max = sorted[len-1];

        for(let i = len-1; i >= 0; i--) {
          if(sorted[i] >= max) {
            sorted[i]--;
            n--;
          }
          if(!n) break;
        }
    }

    return sorted.reduce((a,b) => a + Math.pow(b, 2), 0);
}
