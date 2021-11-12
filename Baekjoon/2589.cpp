#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <queue>

using namespace std;
int h, w;
char treasureMap[51][51];
bool visited[51][51];
int len[51][51];
int ans = 0;
int dx[4] = { 1,-1,0,0 };
int dy[4] = { 0,0,1,-1 };

void init() {
	for (int i = 0; i < 51; i++) {
		for (int j = 0; j < 51; j++) {
			visited[i][j] = false;
			len[i][j] = 0;
		}
	}
}

void bfs(int x, int y) {
	queue <pair<int, int>> q;
	visited[x][y] = true;
	q.push({ x,y });

	while (!q.empty()) {
		int fx = q.front().first;
		int fy = q.front().second;
		q.pop();

		for (int i = 0; i < 4; i++) {
			int nx = fx + dx[i];
			int ny = fy + dy[i];
			if (nx<0 || nx>h || ny<0 || ny>w) continue;
			if (treasureMap[nx][ny] == 'L' && !visited[nx][ny]) {
				visited[nx][ny] = true;
				q.push({ nx,ny });
				len[nx][ny] = len[fx][fy] + 1;
				ans = max(ans, len[nx][ny]);
			}
		}
	}
}
int main() {
	cin >> h >> w;
	for (int i = 0; i < h; i++) {
		for (int j = 0; j < w; j++) {
			cin >> treasureMap[i][j];
		}
	}

	for (int i = 0; i < h; i++) {
		for (int j = 0; j < w; j++) {
			if (treasureMap[i][j] == 'L') {
				bfs(i, j);
				init();
			}
		}
	}

	cout << ans;
}
