const solution = (today, terms, privacies) => {
    const answer = [];
    const term = {};
    const [ty, tm, td] = today.split('.');
    terms.forEach( t => {
        const [type, month] = t.split(' ');
        term[type] = +month;
    })
    
    const throwAway = (date, type) => {
        const [year, month, day] = date.split(".");
        let nextMonth = +month + term[type];
        let nextYear = +year;
        
        while(nextMonth > 12) {
            nextMonth -= 12;
            nextYear += 1;
        }
        
        if(nextYear > +ty) return false;
        if(nextYear === +ty && nextMonth > +tm) return false;
        if(nextYear === +ty && nextMonth === +tm && +day > +td ) return false;
        
        return true;
    }
    
    privacies.forEach((p, i) => {
        const [date, type] = p.split(' ');
        
        if(throwAway(date, type)) answer.push(i+1);
    })
    
    return answer;
}
