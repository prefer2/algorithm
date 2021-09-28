#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

#define MAX 100000 + 1

int N, M;
vector <pair <int, pair <int, int>>> edge;
int parent[MAX];
vector <int> v;

int findParent(int x) {
	if (x == parent[x]) return x;
	else return parent[x] = findParent(parent[x]);
}

void un(int x, int y) {
	x = findParent(x);
	y = findParent(y);
	if (x == y) return;
	parent[y] = x;
}

int main() {
	cin >> N >> M;
	for (int i = 0; i < M; i++) {
		int a, b, c;
		cin >> a >> b >> c;
		edge.push_back({ c,{ a,b } });
	}

	sort(edge.begin(), edge.end()); //edge값에 대해서 오름차순으로 정렬

	// root 초기화(자기자신으로)
	for (int i = 1; i <= N; i++) {
		parent[i] = i;
	}

	// 크루스칼 알고리즘
	for (int i = 0; i < edge.size(); i++) {
		int start = edge[i].second.first;
		int end = edge[i].second.second;

		if (findParent(start) != findParent(end)) {
			un(start, end);
			v.push_back(edge[i].first);
		}
	}

	int ans = 0;
	for (int i = 0; i < v.size() - 1; i++) {
		ans += v[i];
	}

	cout << ans;
}
