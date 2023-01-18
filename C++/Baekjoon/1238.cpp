#include <iostream>
#include <queue>
#include <vector>

#define INF 987654321
using namespace std;
vector<pair<int, int>> vec[1001];
int dist[1001]; 
int n, m, x;

int dijk(int s, int d) {
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

		for (int i = 0; i < vec[node].size(); i++) {
			int nextNode = vec[node][i].first;
			int nextWeight = vec[node][i].second;
			if (len + nextWeight < dist[nextNode]) {
				dist[nextNode] = len + nextWeight;
				pq.push({ -(len + nextWeight), nextNode });
			}
		}
	}

	return dist[d];
}

int main() {
	cin >> n >> m >> x;
	for (int i = 0; i < m; i++) {
		int a, b, c;
		cin >> a >> b >> c;
		vec[a].push_back({ b,c });
	}

	int ans = 0;
	for (int i = 1; i <= n; i++) {
		int len = dijk(x, i) + dijk(i, x);
		if (len > ans)ans = len;
	}

	cout << ans;
}