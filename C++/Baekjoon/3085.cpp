#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int n;
char board[51][51];
int ans = 0;

int rowCheck(int y) {
	int cnt = 1;
	int maxCnt = 1;
	for (int i = 0; i < n-1; i++) {
		if (board[i][y] == board[i + 1][y]) {
			cnt++;
		}
		else {
			if (cnt > maxCnt) maxCnt = cnt;
			cnt = 1;
		}
	}

	if (cnt > maxCnt) return cnt;
	return maxCnt;
}

int colCheck(int x) {
	int cnt = 1;
	int maxCnt = 1;
	for (int i = 0; i < n-1; i++) {
		if (board[x][i] == board[x][i+1]) {
			cnt++;
		}
		else {
			if (cnt > maxCnt) maxCnt = cnt;
			cnt = 1;
		}
	}

	if (cnt > maxCnt) return cnt;
	return maxCnt;
}

// 가로로 사탕 바꾸기
void row(int x, int y) {
	char c1 = board[x][y];
	char c2 = board[x][y + 1];

	board[x][y] = c2;
	board[x][y + 1] = c1;

	// 사라지는 사탕 개수 확인 (y 열과 y+1 열만 확인)
	if (rowCheck(y) > ans) ans = rowCheck(y);
	if (rowCheck(y+1) > ans) ans = rowCheck(y+1);
	if (colCheck(x) > ans) ans = colCheck(x);

	// 제자리
	board[x][y] = c1;
	board[x][y + 1] = c2;
}

// 세로로 사탕 바꾸기
void col(int x, int y) {
	char c1 = board[x][y];
	char c2 = board[x + 1][y];

	board[x][y] = c2;
	board[x + 1][y] = c1;

	// 사라지는 사탕 개수 확인 (y 열과 y+1 열만 확인)
	if (colCheck(x) > ans) ans = colCheck(x);
	if (colCheck(x + 1) > ans) ans = colCheck(x + 1);
	if (rowCheck(y) > ans) ans = rowCheck(y);

	// 제자리
	board[x][y] = c1;
	board[x + 1][y] = c2;
}


int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			cin >> board[i][j];
		}
	}

	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (j < n - 1) {
				if (board[i][j] != board[i][j + 1]) row(i, j);
			}
			if (i < n - 1) {
				if (board[i][j] != board[i + 1][j]) col(i, j);
			}
		}
	}

	for (int i = 0; i < n; i++) {
		if (colCheck(i) > ans) ans = colCheck(i);
		if (rowCheck(i) > ans) ans = rowCheck(i);
	}

	cout << ans;
}