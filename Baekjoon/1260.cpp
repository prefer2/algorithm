#include <iostream>
#include <algorithm>
#include <vector>
#include <stack>
#include <queue>

using namespace std;
int n, m, v;
vector<int> graph[5001];
bool visited[5001];
bool visited2[5001];

bool cmp(int a, int b) {
	if (a > b) return true;
	else return false;
}

void dfs(int a) {
	stack<int> st;
	st.push(a);

	while (!st.empty())
	{
		int t = st.top();
		st.pop();
	
		if (!visited[t]) { 
			visited[t] = true; 
			cout << t << " ";
		}

		sort(graph[t].begin(), graph[t].end(), cmp);
		for (int i = 0; i < graph[t].size(); i++) {
			if (!visited[graph[t][i]]) {
				st.push(graph[t][i]);
			}
		}
	}
}

void bfs(int a) {
	queue<int> q;
	q.push(a);
	visited2[a] = true;

	while (!q.empty()) {
		int t = q.front();
		q.pop();
		cout << t << " ";

		sort(graph[t].begin(), graph[t].end());
		for (int i = 0; i < graph[t].size(); i++) {
			if (!visited2[graph[t][i]]) {
				q.push(graph[t][i]);
				visited2[graph[t][i]] = true;
			}
		}
	}
}


int main() {
	cin >> n >> m >> v;
	for (int i = 0; i < m; i++) {
		int a, b;
		cin >> a >> b;
		graph[a].push_back(b);
		graph[b].push_back(a);
	}

	dfs(v);
	cout << "\n";
	bfs(v);
}