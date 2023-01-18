#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;
int INF = 987654321;

int main() {
	int n, m, a, b, c;
	int dis[101][101];

	cin >> n >> m;
	
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			if(i==j) dis[i][i] = 0;
			else dis[i][j] = INF;
		}
	}


	for (int i = 0; i < m; i++) {
		cin >> a >> b >> c;
		if (dis[a][b] > c) dis[a][b] = c;
	}


	for (int k = 1; k <= n; k++) {
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				dis[i][j] = min(dis[i][j], dis[i][k] + dis[k][j]);
			}
		}
	}

	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			if (dis[i][j] != INF)cout << dis[i][j] << " ";
			else cout << 0 << " ";
		}
		cout << "\n";
	}
}