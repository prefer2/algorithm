#include <iostream>
#include <queue>
#include <vector>

#define INF 987654321
using namespace std;
vector<pair<int, int>> v[1001];
priority_queue<int> pqLen[1001];
int n, m, k;

void dijk() {
	priority_queue<pair<int, int>> pq;
	
	pq.push({ 0, 1 });
	pqLen[1].push(0);

	while (!pq.empty()) {
		int len = -pq.top().first;
		int node = pq.top().second;
		pq.pop();

		for (int i = 0; i < v[node].size(); i++) {
			int nextNode = v[node][i].first;
			int nextWeight = v[node][i].second + len;
			if (pqLen[nextNode].size() < k) {
				pqLen[nextNode].push(nextWeight);
				pq.push({ -nextWeight, nextNode });
			}
			else if(nextWeight<pqLen[nextNode].top()){
				pqLen[nextNode].pop();
				pqLen[nextNode].push(nextWeight);
				pq.push({ -nextWeight, nextNode });
			}
		}
	}
}

int main() {
	cin >> n >> m>> k;
	for (int i = 0; i < m; i++) {
		int a, b, c;
		cin >> a >> b >> c;
		v[a].push_back({ b,c });
	}

	dijk();
	for (int i = 1; i <= n; i++) {
		if (pqLen[i].size() < k) cout << -1 << '\n';
		else cout << pqLen[i].top() << '\n';
	}
}