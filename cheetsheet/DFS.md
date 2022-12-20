# DFS
루트 노드(혹은 다른 임의의 노드)에서 시작해서 다음 분기(branch)로 넘어가기 전에 해당 분기를 완벽하게 탐색하는 방법

모든 노드를 방문하고자 하는 경우에 사용. 경로를 찾고자 할 때 주로 사용.

어떤 노드를 방문했었는지 여부를 확인해야 한다.

Stack을 사용하여 구현한다. 또는 순환 호출을 사용하여 구현할 수 있다.

<br />

<img width="600px" src="https://user-images.githubusercontent.com/67692759/208578082-fa148b64-9a58-4260-a026-d83e06297a57.png" />

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

const DFS = (graph, startNode) => {
  const visited = []; 
  const stack = [];

  queue.push(startNode);

  while (queue.length !== 0) {
    const node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node); 
      stack.push(graph[node]);
    }
  }
  return visited;
};

```
