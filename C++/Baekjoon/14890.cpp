#include <iostream>
#include <algorithm>
#include <string>
#include <vector>
#include <math.h>

using namespace std;
int N, L;
int board[101][101];
int answer = 0;

void checkRow(int row) {
	vector<bool> check(N, 0);
	for (int i = 0; i < N-1; i++) {
		if (abs(board[row][i] - board[row][i + 1]) > 1) return;

		// 현재 숫자가 뒷 숫자보다 클 경우
		if (board[row][i] > board[row][i+1]) {
			// 범위를 벗어나는 경우
			if (i + L >= N)return;
			if (L == 1) {
				if (check[i + 1] == 1)return;
			}
			for (int j = 1; j < L; j++) {
				if (board[row][i + 1] != board[row][i + 1 + j]) return;
				if (check[i + 1 + j] == 1) return;
			}
			for (int j = 0; j < L; j++) {
				check[i + 1 + j] = 1;
			}
		}

		// 현재 숫자가 뒷 숫자보다 작을 경우
		else if (board[row][i] < board[row][i + 1]) {
			// 범위를 벗어나는 경우
			if (i + 1 - L < 0) return;
			if (L == 1) {
				if (check[i] == 1)return;
			}
			for (int j = 1; j < L; j++) {
				if (board[row][i] != board[row][i - j]) return;
				if (check[i - j] == 1) return;
			}
			for (int j = 0; j < L; j++) {
				check[i - j] = 1;
			}
		}
	}

	answer++;
}

void checkCol(int col) {
	vector<bool> check(N, 0);
	for (int i = 0; i < N-1; i++) {
		if (abs(board[i][col] - board[i+1][col]) > 1) return;
	
		// 현재 숫자가 뒷 숫자보다 클 경우
		if (board[i][col] > board[i+1][col]) {
			// 범위를 벗어나는 경우
			if (i + L >= N) return;
			if (L == 1) {
				if (check[i + 1] == 1)return;
			}
			for (int j = 1; j < L; j++) {
				if (board[i+1][col] != board[i+1+j][col]) return;
				if (check[i + 1 + j] == 1) return;
			}
			for (int j = 0; j < L; j++) {
				check[i + 1 + j] = 1;
			}
		}

		// 현재 숫자가 뒷 숫자보다 작을 경우
		else if (board[i][col] < board[i+1][col]) {
			// 범위를 벗어나는 경우
			if (i + 1 - L < 0) return;
			if (L == 1) {
				if (check[i] == 1)return;
			}
			for (int j = 1; j < L; j++) {
				if (board[i][col] != board[i-j][col]) return;
				if (check[i - j] == 1) return;
			}
			for (int j = 0; j < L; j++) {
				check[i - j] = 1;
			}
		}
	}

	answer++;
}

int main() {
	cin >> N >> L;
	for (int i = 0; i < N; i++) {
		for (int j = 0; j < N; j++) {
			cin >> board[i][j];
		}
	}

	for (int i = 0; i < N; i++) {
		checkRow(i);
		checkCol(i);
	}

	cout << answer;
}