function solution(s)
{
    if(s.length%2===1) return 0;
    
    let save = [];
    for(let i = 0; i<s.length; i++){
        if(save[save.length-1]!==s[i]||save.length===0) save.push(s[i]);
        else save.pop();
    }
  
    if(save.length===0) return 1;
    else return 0;
}