function solution(book_time) {
    const rooms = [];
    
    book_time.sort();
    
    const calcNext = (h, m) => {
        let nm = m + 10;
        let nh = h;
        if(nm >= 60) {
            nm -= 60;
            nh += 1;
        }
        return [nh, nm];
    }
    
    book_time.forEach(bt => {
        const [start, end] = bt;
        const [sh, sm] = start.split(':').map(x => +x);
        const [eh, em] = end.split(':').map(x => +x);
        
        let flag = false;
            
        for(let i = 0; i<rooms.length; i++){
            const [nh, nm] = rooms[i];
            if(nh < sh || (nh === sh && nm <= sm)){
                const [neh, nem] = calcNext(eh, em);
                rooms[i] = [neh, nem];
                flag = true;
                break;
            }
        }
        
        if(!flag){
            const [neh, nem] = calcNext(eh, em);
            rooms.push([neh, nem]);
        }
        rooms.sort((a, b) => {
            if(a[0]!==b[0]) return a[0] - b[0];
            return a[1] - b[1];
        });
    })
    
    return rooms.length;
}
