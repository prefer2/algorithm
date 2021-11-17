#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int paper[501][501];
int n, m;
int ans = 0;
int dx[4] = { 0,0,1,-1 };
int dy[4] = { 1,-1,0,0 };
bool visited[501][501];

void ohShape(int x, int y) {
	// ㅗ
	if (x + 1 < n && y + 2 < m)
		ans = max(ans, paper[x][y] + paper[x][y + 1] + paper[x][y + 2] + paper[x + 1][y + 1]);
	// ㅏ
	if (x + 2 < n && y + 1 < m)
		ans = max(ans, paper[x][y] + paper[x + 1][y] + paper[x + 1][y + 1] + paper[x + 2][y]);
	// ㅜ
	if (x - 1 >= 0 && y + 2 < m)
		ans = max(ans, paper[x][y] + paper[x][y + 1] + paper[x][y + 2] + paper[x - 1][y + 1]);
	// ㅓ
	if (x + 2 < n && y - 1 >= 0)
		ans = max(ans, paper[x][y] + paper[x + 1][y] + paper[x + 1][y - 1] + paper[x + 2][y]);
}

void tetri(int cnt, int x, int y, int sum) {
	if (cnt == 3) {
		if (sum > ans) ans = sum;
		return;
	}

	for (int i = 0; i < 4; i++) {
		int nx = x + dx[i];
		int ny = y + dy[i];
		if (nx<0 || nx>=n || ny<0 || ny>=m) continue;
		if (!visited[nx][ny]) {
			visited[nx][ny] = true;
			tetri(cnt + 1, nx, ny, sum+paper[nx][ny]);
			visited[nx][ny] = false;
		}
	}

}


int main() {
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> paper[i][j];
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			ohShape(i, j);
			visited[i][j] = true;
			tetri(0, i, j, paper[i][j]);
			visited[i][j] = false;
		}
	}

	cout << ans;
}