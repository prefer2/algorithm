#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int n, m, x, y;
int sMap[21][21];
vector <int> dice(6);

int dx[4] = { 0,0,-1,1 };
int dy[4] = { 1,-1,0,0 };

// 위, 북, 동, 서, 남, 아래
void rollEast() {
	dice = { dice[3], dice[1], dice[0], dice[5], dice[4], dice[2] };
}

void rollWest() {
	dice = { dice[2], dice[1], dice[5], dice[0], dice[4], dice[3] };
}

void rollNorth() {
	dice = { dice[4], dice[0], dice[2], dice[3], dice[5], dice[1] };
}

void rollSouth() {
	dice = { dice[1], dice[5], dice[2], dice[3], dice[0], dice[4] };
}

void roll(int dir) {
	switch (dir)
	{
	case 0:
		rollEast();
		break;
	case 1:
		rollWest();
		break;
	case 2:
		rollNorth();
		break;
	case 3:
		rollSouth();
		break;
	default:
		break;
	}
}

void move(int dir) {
	int nx = x + dx[dir];
	int ny = y + dy[dir];

	// 맵 바깥으로 이동
	if (nx < 0 || nx >= n || ny < 0 || ny >= m) return;

	roll(dir);
	cout << dice[0] << "\n";

	if (sMap[nx][ny] == 0) {
		sMap[nx][ny] = dice[5];
	}
	else {
		dice[5] = sMap[nx][ny];
		sMap[nx][ny] = 0;
	}

	x = nx; y = ny;
}


int main() {
	cin >> n >> m;
	int k;
	cin >> x >> y >> k;

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < m; j++) {
			cin >> sMap[i][j];
		}
	}

	for (int i = 0; i < k; i++) {
		int dir;
		cin >> dir;
		move(dir-1);
	}
}