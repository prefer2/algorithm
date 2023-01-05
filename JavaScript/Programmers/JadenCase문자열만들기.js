const solution = (s) => {
    const pattern = /[a-z]/;
    
    const splited = s.split(' ');
    const words = splited.map(word => {
        if(word){
            let front = word[0];
            let rest = '';
            if(word.length > 1) rest = word.slice(1).toLowerCase();

            if(pattern.test(front)) front = front.toUpperCase();
            return [front, ...rest].join('')
        }
        return word;
    })
    
    return words.join(' ');
}
