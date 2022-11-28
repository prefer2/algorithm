function solution(n, s, a, b, fares) {
    // n * n 배열
    const board = Array.from(Array(n), () => Array(n).fill(999999999));
    
    // 자기 자신에게는(i -> i) 비용이 0
    for(let i = 0; i < n; i++) {
        board[i][i] = 0;
    }
    
    // 인근 거리(연결되어 있는 노드)
    fares.forEach(pos => {
        const [x, y, weight] = pos;
        board[x-1][y-1] = weight;
        board[y-1][x-1] = weight;
    });
    
    for(let k = 0; k < n; k++) {
        for(let i = 0; i < n; i++) {
          for(let j = 0; j < n; j++) {
            if(board[i][j] > board[i][k] + board[k][j])
              board[i][j] = board[i][k] + board[k][j];
          }
        }
      }
    
    let answer = board[s-1][a-1] + board[s-1][b-1];
    for(let i = 0; i < n; i++) {
        const shortest = board[s-1][i] + board[i][a-1] + board[i][b-1];
        answer = shortest < answer ? shortest : answer;
    }
    
    return answer;
}
