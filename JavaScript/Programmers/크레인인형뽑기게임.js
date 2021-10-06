function findTop(board, col){
    for(var i=0; i<board.length; i++){
        if(board[i][col]>0) return i;
    }
    return -1;
}

function solution(board, moves) {
    var answer = 0;
    var basket = [];
    
    moves.forEach(x => {
        var top = findTop(board, x-1);
        if(top!==-1){
            var item = board[top][x-1];
            if(basket[basket.length-1]===item){
                    answer = answer + 2;
                    basket.pop();
            }
            else basket.push(item);
            board[top][x-1] = 0;
        }
    })
    return answer;
}