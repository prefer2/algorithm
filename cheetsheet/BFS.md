# BFS
너비 우선 탐색(Breadth-First Search)

루트 노드(혹은 다른 임의의 노드)에서 시작해서 인접한 노드를 먼저 탐색하는 방법

깊이가 1인 노드들 -> 2인 노드들 -> ... -> 가장 먼 노드들 순으로 탐색하는 방식이다.

Queue를 사용하여 구현한다. 방문한 노드를 표시하며 찾아나간다.

`최단 거리`를 구할 때 주로 사용한다.
 
 <br/>

<img width="600px" src="https://user-images.githubusercontent.com/67692759/208575264-f28bcef8-5f6b-484d-ad49-af55623ceb0b.png"/>

## code
```js
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"]
};

const BFS = (graph, startNode) => {
  const visited = []; 
  let queue = []; 

  queue.push(startNode); 

  while (queue.length !== 0) { 
    const node = queue.shift(); 
    if (!visited.includes(node)) {
      visited.push(node); 
      queue.push(graph[node]);
    }
  }
  return visited;
};
```
