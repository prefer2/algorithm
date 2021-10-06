#include <iostream>
#include <algorithm>
#include <vector>
#include <stack>
using namespace std;

int N, M;

bool visited[1001];
bool finish[1001];
bool cycle = false;
vector <int> graph[1001];
stack <int> st;

void dfs(int here) {
	visited[here] = true;
	for (int i = 0; i < graph[here].size(); i++) {
		if (!visited[graph[here][i]]) {
			dfs(graph[here][i]);
		}
		else if (!finish[graph[here][i]]) cycle = true;
	}

	finish[here] = true;
	st.push(here);
}

int main() {
	cin >> N >> M;
	for (int i = 0; i < M; i++) {
		int k; cin >> k;
		int prev; cin >> prev;
		for (int j = 1; j < k; j++) {
			int next; cin >> next;
			graph[prev].push_back(next);
			prev = next;
		}
	}

	for (int i = 1; i <= N; i++) {
		if (!visited[i]) dfs(i);
	}

	if (cycle) { cout << 0; return 0; }
	for (int i = st.size(); i > 0; i--) {
		cout << st.top() << "\n";
		st.pop();
	}
}