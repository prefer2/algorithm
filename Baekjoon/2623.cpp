#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
using namespace std;

int N, M;
int cnt[1001];
vector <int> graph[1001];
vector <int> result;
queue <int> q;

void topology() {
	for (int i = 1; i <= N; i++) {
		if (cnt[i] == 0) q.push(i);
	}

	while (!q.empty()) {
		int cur = q.front();
		q.pop();
		result.push_back(cur);
		for (int i = 0; i < graph[cur].size(); i++) {
			cnt[graph[cur][i]]--;
			if (cnt[graph[cur][i]] == 0) q.push(graph[cur][i]);
		}
	}
}

int main() {
	cin >> N >> M;
	for (int i = 0; i < M; i++) {
		int k; cin >> k;
		int prev; cin >> prev;
		for (int j = 1; j < k; j++) {
			int next; cin >> next;
			graph[prev].push_back(next);
			cnt[next] = cnt[next] + 1;
			prev = next;
		}
	}

	topology();
	if (result.size() != N) cout << 0;
	else {
		for (int i = 0; i < N; i++) cout << result[i] <<"\n";
	}
}