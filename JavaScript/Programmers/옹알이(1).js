const solution = (babbling) => {
    let result = 0;
    
    const checkCan = (word) => {
        if(word[0] ==='a' && word[1] ==='y' && word[2] === 'a') return word.slice(3);
        else if(word[0] ==='y' && word[1] ==='e') return word.slice(2);
        else if(word[0] ==='w' && word[1] ==='o' && word[2] === 'o') return word.slice(3);
        else if(word[0] ==='m' && word[1] ==='a') return word.slice(2);
        else return 'no'
    }
    
    
    babbling.forEach(ba => {
        while(ba.length){
            ba = checkCan(ba);
            if(ba === 'no') break;
            if(ba === '') result++;
        }
    })
    
    return result;
}
