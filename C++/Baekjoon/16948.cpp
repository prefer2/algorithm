#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

using namespace std;
int n;
int r1, c1, r2, c2;
queue <pair<int, int>> q;

int dr[6] = { -2,-2,0,0,2,2 };
int dc[6] = { -1,1,-2,2,-1,1 };
bool visited[201][201];
int path[201][201];

void move(int r, int c) {
    visited[r][c] = true;
    q.push({ r,c });

    while (!q.empty()) {
        r = q.front().first;
        c = q.front().second;
        q.pop();

        for (int i = 0; i < 6; i++) {
            int nr = r + dr[i];
            int nc = c + dc[i];

            if (nr < 0 || nc < 0 || nr > n || nc > n)
                continue;
            if (!visited[nr][nc]) {
                visited[nr][nc] = true;
                path[nr][nc] = path[r][c] + 1;
                q.push({ nr,nc });
            }
        }
    }
}


int main() {
	cin >> n;
	cin >> r1 >> c1 >> r2 >> c2;

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            path[i][j] = 0;
        }
    }
	move(r1, c1);

    if (path[r2][c2] == 0) cout << -1;
    else cout << path[r2][c2];
}