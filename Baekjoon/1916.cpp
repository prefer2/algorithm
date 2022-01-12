#include <iostream>
#include <queue>
#include <vector>

#define INF 987654321
using namespace std;
vector<pair<int, int>> v[1001];
int dist[1001]; 
int n, m, s, d;

void dijk() {
	for (int i = 1; i <= n; i++) {
		dist[i] = INF;
	}

	bool visited[1001] = { false, };
	priority_queue<pair<int, int>> pq;
	
	dist[s] = 0;
	pq.push({ 0, s });

	while (!pq.empty()) {
		int len = -pq.top().first;
		int node = pq.top().second;
		pq.pop();
		if (visited[node])continue;
		visited[node] = true;

		for (int i = 0; i < v[node].size(); i++) {
			int nextNode = v[node][i].first;
			int nextWeight = v[node][i].second;
			if (len + nextWeight < dist[nextNode]) {
				dist[nextNode] = len + nextWeight;
				pq.push({ -(len + nextWeight), nextNode });
			}
		}
	}
}

int main() {
	cin >> n >> m;
	for (int i = 0; i < m; i++) {
		int a, b, c;
		cin >> a >> b >> c;
		v[a].push_back({ b,c });
	}

	cin >> s >> d;
	dijk();
	cout << dist[d];
}