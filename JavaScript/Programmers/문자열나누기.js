const solution = (s) => {
    let result = 1;
    let x = s[0];
    const st = []; // x가 나오면 넣기, 아니면 빼기
    st.push(x);
    
    for(let i = 1; i < s.length; i++){
        if(st.length === 0) {
            result++;
            x = s[i];
            st.push(x);
        }
        else if(s[i] === x) st.push(x);
        else st.pop();
    }
    
    return result;
}
