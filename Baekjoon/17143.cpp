#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int R, C, M;
int answer = 0;

struct shark {
	int row;
	int col;
	int speed;
	int direction;
	int sharkSize;
};

vector<shark> board[101][101];

int dx[4] = { 0,0,1,-1 };
int dy[4] = { -1,1,0,0 };

void move() {
	vector<shark> newBoard[101][101];
	for (int i = 1; i <= R; i++) {
		for (int j = 1; j <= C; j++) {
			if (!board[i][j].empty()) {
				int dir = board[i][j][0].direction;
				int speed = board[i][j][0].speed;
				int x = board[i][j][0].col;
				int y = board[i][j][0].row;
				int sharkSize = board[i][j][0].sharkSize;
				board[i][j].pop_back();

				for(int s=0;s<speed;s++) {
					if (dir == 0 || dir == 1) {
						int next = y + dy[dir];
						if (next<1 || next>R) {
							dir = 1 - dir;
						}

						y += dy[dir];
					}
					else {
						int next = x + dx[dir];
						if (next<1 || next>C) {
							dir = 5 - dir;
						}

						x += dx[dir];
					}
				}

				// 이미 상어가 있다면 크기 확인
				if (newBoard[y][x].empty()) {
					newBoard[y][x].push_back({ y,x,speed,dir,sharkSize });
				}
				else {
					int sz = newBoard[y][x][0].sharkSize;
					if (sz < sharkSize) {
						newBoard[y][x].pop_back();
						newBoard[y][x].push_back({ y,x,speed,dir,sharkSize });
					}
				}
				
			}
		}
	}

	for (int i = 1; i <= R; i++) {
		for (int j = 1; j <= C; j++) {
			board[i][j] = newBoard[i][j];
		}
	}
}

void catchShark (int col) {
	// 가장 가까운 row부터 돌며 확인
	for (int i = 1; i <= R; i++) {
		if (!board[i][col].empty()) {
			answer += board[i][col][0].sharkSize;
			board[i][col].pop_back();
			return;
		}
	}
}

int main() {
	cin >> R >> C >> M;
	for (int i = 0; i < M; i++) {
		int r, c, s, d, z;
		cin >> r >> c >> s >> d >> z;
		if (d == 1 || d == 2) s %= ((R - 1) * 2);
		if (d == 3 || d == 4) s %= ((C - 1) * 2);

		board[r][c].push_back({ r,c,s,d-1,z });
	}

	for (int i = 1; i <= C; i++) {
		catchShark (i);
		move();
	}

	cout << answer;
}