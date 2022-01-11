#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

#define MAX_LEN 987654321

using namespace std;
int v, e, k;
vector <pair <int, int>> vec[20001];
priority_queue <pair<int, int>> pq;
int minDis[20001];
bool visited[20001];

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);
	cin >> v >> e >> k;

	for (int i = 0; i < e; i++) {
		int a, b, c;
		cin >> a >> b >> c;
		vec[a].push_back({ b,c });
	}

	for (int i = 1; i <= v; i++) {
		minDis[i] = MAX_LEN;
	}

	minDis[k] = 0;
	pq.push({ -minDis[k], k });

	while (!pq.empty()) {
		int node = pq.top().second;
		int len = -pq.top().first;
		pq.pop();
		visited[node] = true;

		for (int i = 0; i < vec[node].size(); i++) {
			int nextNode = vec[node][i].first;
			int nextEdge = vec[node][i].second;
			if (!visited[nextNode]) {
				if (len + nextEdge < minDis[nextNode]) {
					minDis[nextNode] = len + nextEdge;
					pq.push({ -(len + nextEdge), nextNode });
				}
			}
		}
	}

	for (int i = 1; i <= v; i++) {
		if (minDis[i] == MAX_LEN) {
			cout << "INF\n";
		}
		else cout << minDis[i] << "\n";
	}
}
