function solution(new_id) {
    var answer = '';
    
    new_id = new_id.toLowerCase().replace(/[^a-z0-9\.\-\_]/g, '').replace(/\.+/g, '.').replace(/^\.|\.$/g, '');
    
    if(new_id.length===0) new_id = 'aaa';
    else if(new_id.length===2) new_id=new_id[0] + new_id[1] +new_id[1];
    else if(new_id.length===1) new_id = new_id[0] + new_id[0] + new_id[0];
    
    if(new_id.length>= 16){
        new_id = new_id.slice(0, 15);
        if(new_id[14]==='.') new_id = new_id.slice(0,14);
    }
    
    answer = new_id;
    return answer;
}