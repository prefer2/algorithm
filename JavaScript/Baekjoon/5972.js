const fs = require("fs");
const [nm, ...input] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [n, m] = nm.split(" ").map((x) => +x);

const solution = () => {
  const graph = Array.from(Array(n + 1), () => []);

  for (let i = 0; i < m; i++) {
    const [a, b, c] = input[i].split(" ").map((y) => +y);
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  const dist = Array.from({ length: n + 1 }, () => Infinity);

  const dijkstra = () => {
    const q = [];
    q.push(1);
    dist[1] = 0;

    while (q.length > 0) {
      const cur = q.shift();

      for (let i = 0; i < graph[cur].length; i++) {
        const [to, cow] = graph[cur][i];
        if (dist[to] > dist[cur] + cow) {
          dist[to] = dist[cur] + cow;
          q.push(to);
        }
      }
    }
  };

  dijkstra();
  console.log(dist[n]);
};

solution();
