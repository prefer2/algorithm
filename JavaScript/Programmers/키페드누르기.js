function solution(numbers, hand) {
    var answer = '';
    
    var keypad = [[1,3], [0,0], [1,0], [2,0], [0,1], [1,1], [2,1], [0,2], [1,2], [2,2]]
    var left = [0,3];
    var right = [2,3];
    
    answer = numbers.map((x)=> {
        if(x===1||x===4||x===7){
            left = keypad[x];
            return 'L';
        }
        else if(x===3||x===6||x===9){
            right = keypad[x];
            return 'R';
        }
        else{
            const ml = Math.abs(keypad[x][0] - left[0]) + Math.abs(keypad[x][1] - left[1]);
            const mr = Math.abs(keypad[x][0] - right[0]) + Math.abs(keypad[x][1] - right[1]);
            
            if(ml<mr) {
                left = keypad[x];
                return 'L';
            }
            else if(ml>mr){
                right = keypad[x];
                return 'R';
            }
            else{
                if(hand==='left'){
                    left = keypad[x];
                    return 'L';
                }
                else{
                    right = keypad[x];
                    return 'R';
                }
            }
        }
    }).join('');
 
    return answer;
}