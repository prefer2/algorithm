#include <iostream> 
#include <vector> 
#include <queue> 
#include <functional> 

using namespace std; 
const int MAX = 32000 + 1; 
int n, m; int inDegree[MAX]; 
vector<int> graph[MAX]; 
priority_queue<int, vector<int>, greater<int>> pq; 

int main(void) { 
	ios_base::sync_with_stdio(0); cin.tie(0); 
	cin >> n >> m; 
	for (int i = 0; i < m; i++) { 
		int a, b; 
		cin >> a >> b; 
		inDegree[b]++; 
		graph[a].push_back(b); 
	} 
	
	for (int i = 1; i <= n; i++) { 
		if (inDegree[i] == 0) { 
			pq.push(i); 
		} 
	} 
	
	while (!pq.empty()) { 
		int node = pq.top(); 
		pq.pop(); 
		cout << node << " "; 
		for (int i = 0; i < graph[node].size(); i++) { 
			int nextNode = graph[node][i]; 
			if (--inDegree[nextNode] == 0) { 
				pq.push(nextNode); 
			} 
		} 
	} 
	
	cout << "\n"; 
	return 0; 
}
