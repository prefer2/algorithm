const solution = (babbling) => {
    
    let result = 0;
    babbling.forEach(b => {
        if (/^(aya|ye|woo|ma)+$/g.test(b)) {
          if (!/(aya|ye|woo|ma)\1+/g.test(b)) result++;
        }
    })
    
    return result;
}
