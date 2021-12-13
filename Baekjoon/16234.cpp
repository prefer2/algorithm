#include <iostream>
#include <algorithm>
#include <vector>
#include <iostream>
using namespace std;

int n, l, r;
int A[51][51];
int dx[4] = { 0,0,1,-1};
int dy[4] = { 1,-1,0,0 };
bool visited[51][51];
vector<pair<int, int>> position;
int people, country;

void dfs(int x, int y) {
	for (int i = 0; i < 4; i++) {
		int nx = x + dx[i];
		int ny = y + dy[i];

		if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
		int submit = abs(A[x][y] - A[nx][ny]);
		if (submit >= l && submit <= r && !visited[nx][ny]) {
			visited[nx][ny] = true;
			people += A[nx][ny];
			country++;
			position.push_back({ nx,ny });
			dfs(nx, ny);
		}
	}
}

void clearVisit() {
	for (int i = 0; i < 51; i++) {
		for (int j = 0; j < 51; j++) {
			visited[i][j] = false;
		}
	}
}

int main() {
	cin >> n >> l >> r;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> A[i][j];
		}
	}

	int days = 0;
	while (1) {
		bool open = false;
		clearVisit();
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				if (visited[i][j]) continue;
				visited[i][j] = true;
				people = A[i][j];
				country = 1;
				position.clear();
				position.push_back({ i,j });
				dfs(i, j);
				if (country >= 2) {
					open = true;
					for (int k = 0; k < position.size(); k++) {
						A[position[k].first][position[k].second] = people / country;
					}
				}
			}
		}
		if (open) days++;
		else {
			cout << days;
			return 0;
		}
	}
}