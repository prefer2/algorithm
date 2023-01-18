#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int n, m, r, c, d;
int robotPlace[51][51];
int ans = 0;

// 0: 북, 1: 동, 2: 남, 3: 서
int dx[4] = { -1,0,1,0 };
int dy[4] = { 0,1,0,-1 };

void robotStart(int r, int c, int dir) {
	if (robotPlace[r][c] == 0) {
		robotPlace[r][c] = 2;
		ans++;
	}

	// b
	for (int i = 0; i < 4; i++) {
		int nd = (dir + 3 - i) % 4;
		int nx = r + dx[nd];
		int ny = c + dy[nd];
		if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
		// a
		if (robotPlace[nx][ny] == 0) {
			robotStart(nx, ny, nd);
		}
	}

	// c, d
	int nd = (dir+2)%4;
	int nx = r + dx[nd];
	int ny = c + dy[nd];
	if (robotPlace[nx][ny] == 2) {
		robotStart(nx, ny, dir);
	}
	else {
		cout << ans;
		exit(0);
	}
}

int main() {
	cin >> n >> m;
	cin >> r >> c >> d;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> robotPlace[i][j];
		}
	}

	robotStart(r, c, d);
}