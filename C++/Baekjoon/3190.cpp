#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int n,k,l;
int board[101][101]; // 0: 빈곳, 1: 뱀, 2: 사과
vector <pair<int, char>> direction;

// 0: 왼쪽, 1: 위, 2: 오른쪽, 3: 아래
int dx[4] = { 0, -1, 0, 1 };
int dy[4] = { -1, 0, 1, 0 };

int turnLeft(int d)
{
	d -= 1;
	if (d < 0) d = d + 4;
	return d;
}

int turnRight(int d)
{
	d += 1;
	if(d >= 4) d = d - 4;
	return d;
}

void move() {
	int t = 0;
	int dir = 2; int tdir = 2;
	board[1][1] = 1;

	int headX = 1; int headY = 1;
	int tailX = 1; int tailY = 1;
	vector <int> tailDir;
	vector <pair<int, int>> tailPos;

	while (1) {
		t++; // 시간 증가
		int nextX = headX + dx[dir];
		int nextY = headY + dy[dir];

		// 벽과 부딪힌 경우
		if (nextX<1 || nextX>n || nextY<1 || nextY>n) {
			break;
		}

		// 몸과 부딪힌 경우
		if (board[nextX][nextY] == 1) {
			break;
		}

		// 사과 유무 확인
		if (board[nextX][nextY] == 0) {
			// 사과가 없다면 꼬리를 하나 줄여야
			board[tailX][tailY] = 0;
			tailX = tailX + dx[tdir];
			tailY = tailY + dy[tdir];
		}
		board[nextX][nextY] = 1; //이동
		headX = nextX; headY = nextY;

		// 방향 전환 확인
		if (!direction.empty() && direction[0].first == t) {
			if (direction[0].second == 'L') {
				dir = turnLeft(dir);
			}
			else {
				dir = turnRight(dir);
			}

			tailPos.push_back({ nextX, nextY });
			tailDir.push_back(dir);
			direction.erase(direction.begin());
		}

		// 꼬리의 방향 전환 확인
		if (!tailDir.empty() && tailX == tailPos[0].first && tailY == tailPos[0].second) {
			tdir = tailDir[0];
			tailDir.erase(tailDir.begin());
			tailPos.erase(tailPos.begin());
		}
	}

	cout << t;
}

int main() {
	cin >> n >> k;
	for (int i = 0; i < k; i++) {
		int x, y;
		cin >> x >> y;
		board[x][y] = 2;
	}
	cin >> l;
	for (int i = 0; i < l; i++) {
		int x; char c;
		cin >> x >> c;
		direction.push_back({ x,c });
	}

	move();
}