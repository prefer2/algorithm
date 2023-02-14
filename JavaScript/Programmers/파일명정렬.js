const solution = (files) => {
    const getHead = (file) => {
        for(let i = 0; i<file.length; i++){
            if(file[i] >= '0' && file[i] <='9' ) return i;
        }
    }
    
    const getNumber = (file, idx) => {
        for(let i = idx; i<file.length; i++){
            if(file[i] >= '0' && file[i] <='9' ) continue;
            else {return i;}
        }
    }
    
   slicedFiles = files.map(file => {
       const headIndex = getHead(file);
       const numberIndex = getNumber(file, headIndex);
       
       return [file.slice(0, headIndex), file.slice(headIndex, numberIndex), numberIndex<file.length && file.slice(numberIndex)]
   });

    slicedFiles.sort((a, b) => {
        if(a[0].toLowerCase() !== b[0].toLowerCase()) {
            return a[0].toLowerCase() > b[0].toLowerCase() ? 1 : -1}
        if(+a[1] !== +b[1]) return +a[1] - +b[1];
        return a;
    })
    
    const answer = slicedFiles.map(a => {
        if(a[2]) return `${a[0]}${a[1]}${a[2]}`
        return `${a[0]}${a[1]}`
    })
    return answer;
}
