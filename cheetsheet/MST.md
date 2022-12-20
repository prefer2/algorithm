# MST

최소 신장 트리(Minimum Spanning Tree)
가중치가 있는 무방향 그래프에서 모든 노드를 최소의 비용으로 연결하는 방법
사이클이 포함되지 않아야 하고, 간선의 수는 `노드의 수 - 1`과 같다.

## Kruskal(Union-Find)
greedy한 방법. 간선 선택을 기준으로 진행

- 가중치의 오름차순으로 정렬한다.
- 사이클을 형성하지 않는 간선을 선택한다 (union-find를 사용)
- 해당 간선을 추가한다.

<img width="600px" src="https://user-images.githubusercontent.com/67692759/208572939-dabf7b5f-2933-403f-9550-77f4b5b302d7.png" />


### code

```js
const getParent = (parent, x) => {
  if (parent[x] === x) return x;
  return (parent[x] = getParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if (n1 < n2) return (parent[n2] = n1);
  else return (parent[n1] = n2);
};

const findParent = (parent, a, b) => {
  const n1 = getParent(parent, a);
  const n2 = getParent(parent, b);
  if (n1 === n2) return true;
  else return false;
};

function solution(n, costs) {
  let answer = 0;
  const parent = [];
  for (let i = 0; i < n; i++) parent.push(i);

  costs.sort((a, b) => a[2] - b[2]);

  costs.forEach((cost) => {
    if (!findParent(parent, cost[0], cost[1])) {
      answer += cost[2];
      unionParent(parent, cost[0], cost[1]);
    }
  });

  return answer;
}
```

## Prim
정점 선택을 기준으로 진행. 이전 단계에서 만들어진 트리를 확장하는 방식

<img width="600px" src="https://user-images.githubusercontent.com/67692759/208573123-490c1b1e-faa0-4e5b-9702-e6ffa3822ecc.png" />

## Kruskal VS Prim
Kruskal의 시간 복잡도는 `O(elog₂e)` Prim의 시간 복잡도는 ` O(n^2)`이다.
간선이 적은 희소 그래프인 경우에는 Kruskal이, 간선이 빽빽한 밀집 그래프에서는 Prim이 유리하다.

