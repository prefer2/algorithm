#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

char board[9][9];
bool check_row[9][10];
bool check_col[9][10];
bool check_square[9][10];

void sudoku(int r, int c) {
	if (r == 9) {
		for (int i = 0; i < 9; i++) {
			for (int j = 0; j < 9; j++) {
				cout << board[i][j];
			}cout << "\n";
		}
		exit(0);
	}

	if (board[r][c] != '0') c == 8 ? sudoku(r + 1, 0) : sudoku(r, c + 1);

	if (board[r][c] == '0') {
		for (int i = 1; i <= 9; i++) {
			//cout << check_row[r][i] << " " << check_col[c][i] << " " << check_square[(r / 3) * 3 + c / 3] << "\n";
			if (!check_row[r][i] && !check_col[c][i] && !check_square[(r / 3) * 3 + c / 3][i]) {
				check_row[r][i] = true;
				check_col[c][i] = true;
				check_square[(r / 3) * 3 + c / 3][i] = true;
				board[r][c] = i + '0';
				c ==8 ? sudoku(r+1, 0) : sudoku(r, c + 1);
				board[r][c] = '0';
				check_row[r][i] = false;
				check_col[c][i] = false;
				check_square[(r / 3) * 3 + c / 3][i] = false;
			}
		}
	}

}

int main() {
	for (int i = 0; i < 9; i++) {
		for (int j = 0; j < 9; j++) {
			char n; cin >> n;
			board[i][j] = n;
			if (n != '0') { 
				check_row[i][n - '0'] = true; //i번째 row에 숫자 n이 있음
				check_col[j][n - '0'] = true; //j번째 col에 숫자 n이 있음
				check_square[(i / 3)*3 + j / 3][n - '0'] = true; // (i / 3)*3 + j / 3  번째 사각형에 n이 있음
			}
		}
	}

	sudoku(0, 0);
}