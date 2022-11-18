const isPrime = (num) => {
  if(num < 2) return false;
    
  if(num === 2) {
    return true;
  }
  
  for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i === 0){
      return false; 
    }
  }
    
  return true; 
}

const solution = (n, k) => {
    let answer = 0;
    const a = n.toString(k)
    const list = a.split('0');
    for(let i = 0; i<list.length; i++) {
        if(isPrime(+list[i])) answer++;
    }
    return answer;
}
