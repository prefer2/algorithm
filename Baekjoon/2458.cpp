#include <iostream>
#include <algorithm>
#include <vector>

#define MAX_LEN 987654321

using namespace std;
int student[501][501];
int path[501];

int main() {
	int n, m;
	cin >> n >> m;

	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			student[i][j] = MAX_LEN;
			if (i == j) student[i][j] = 0;
		}
	}

	for (int i = 0; i < m; i++) {
		int a, b;
		cin >> a >> b;
		student[a][b] = 1;
	}

	for (int k = 1; k <= n; k++) {
		for (int i = 1; i <= n; i++) {
			for (int j = 1; j <= n; j++) {
				student[i][j] = min(student[i][j], student[i][k] + student[k][j]);
			}
		}
	}

	int ans = 0;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			if (student[i][j] < MAX_LEN && student[i][j]>0) {
				path[i]++;
				path[j]++;
				if (path[i] == n - 1) ans++;
				if (path[j] == n - 1)ans++;
			}
		}
	}

	cout << ans;
}
