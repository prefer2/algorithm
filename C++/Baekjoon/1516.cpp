#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>

using namespace std;
int n, m;
queue <int> q;
queue <int> saveQ;
vector <int> building[501];
int time[501];
int indegree[32001];
int final[501];

void solve(int cur) {
	for (int i = 0; i < building[cur].size(); i++) {
		int node = building[cur][i];
		final[node] = max(final[node], final[cur] + time[cur]);
		indegree[node]--;
		if (indegree[node] == 0)q.push(node);
	}
}

int main() {
	ios::sync_with_stdio(0);
	cin.tie(0);
	cout.tie(0);

	cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> time[i];
		while (1) {
			int a;
			cin >> a;
			if (a == -1) break;
			building[a].push_back(i);
			indegree[i]++;
		}
	}

	for (int i = 1; i <= n; i++) {
		if (indegree[i] == 0) q.push(i);
	}

	while (!q.empty()) {
		int cur = q.front();
		q.pop();
		solve(cur);
	}
	
	for (int i = 1; i <= n; i++) {
		cout << final[i] + time[i] << "\n";
	}
}