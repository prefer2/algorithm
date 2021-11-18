#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <queue>

using namespace std;
int vMap[9][9];
int tmp[9][9];
int n, m;
int dx[4] = { 0,0,1,-1 };
int dy[4] = { 1,-1,0,0 };
int ans = 0;


void init() {
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			tmp[i][j] = vMap[i][j];
		}
	}
}

void spread() {
	int spreadMap[9][9];
	queue <pair <int, int>> virus;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			spreadMap[i][j] = tmp[i][j];
			if (spreadMap[i][j] == 2) {
				virus.push({ i,j });
			}
		}
	}

	while (!virus.empty()) {
		int x = virus.front().first;
		int y = virus.front().second;
		virus.pop();
		for (int i = 0; i < 4; i++) {
			int nx = x + dx[i];
			int ny = y + dy[i];
			if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
			if (spreadMap[nx][ny] == 0) { 
				spreadMap[nx][ny] = 2; 
				virus.push({ nx, ny });
			}
		}
	}
	

	// count
	int cnt = 0;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (spreadMap[i][j] == 0) cnt++;
		}
	}

	ans = max(cnt, ans);
}


void wall(int cnt) {
	if (cnt == 3) {
		spread();
		return;
	}
	
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (tmp[i][j] == 0) {
				tmp[i][j] = 1;
				wall(cnt + 1);
				tmp[i][j] = 0;
			}
		}
	}
}


int main() {
	cin >> n >> m;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> vMap[i][j];
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			if (vMap[i][j] == 0) {
				init();
				tmp[i][j] = 1;
				wall(1);
				tmp[i][j] = 0;
			}
		}
	}


	cout << ans;
}