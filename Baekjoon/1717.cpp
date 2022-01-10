#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;
int n, m;
int parent[1000001];

int find(int x) {
	if (parent[x] == x) return x;
	else {
		return parent[x]=find(parent[x]);
	}
}

void merge(int x, int y) {
	int px = find(x);
	int py = find(y);

	if (px != py) {
		parent[px] = py;
	}
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);

	cin >> n >> m;

	for (int i = 0; i <= n; i++) {
		parent[i] = i;
	}

	for (int i = 0; i < m; i++) {
		int c, a, b;
		cin >> c >> a >> b;
		if (c == 0) {
			merge(a, b);
		}
		else {
			int ap = find(a);
			int bp = find(b);
			if (ap == bp) cout << "YES\n";
			else cout << "NO\n";
		}
	}
}