#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int n, k, x, y, s;
struct Virus {
	int x;
	int y;
	int v;
};
vector <Virus> board;
int lab[201][201]; //비어있는지 확인하기 위해

int dx[4] = { -1, 1, 0, 0 };
int dy[4] = { 0, 0, -1, 1 };

bool cmp(Virus a, Virus b) {
	return a.v < b.v;
}

void spread() {
	int vLen = board.size();
	for (int i = 0; i < vLen; i++) {
		for (int j = 0; j < 4; j++) {
			int nx = board[i].x + dx[j];
			int ny = board[i].y + dy[j];
			if (nx >= 0 && nx < n && ny >= 0 && ny < n && lab[nx][ny] == 0) {
				lab[nx][ny] = board[i].v;
				board.push_back({ nx, ny, board[i].v });
			}
		}
	}
	board.erase(board.begin(), board.begin() + vLen); //이미 다 확인한 것은 다시 확인하지 않아도 됨
}

int main() {
	cin >> n >> k;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			int virus;
			cin >> virus;
			if(virus>0) board.push_back({ i, j, virus });
			lab[i][j] = virus;
		}
	}
	cin >> s >> x >> y;
	sort(board.begin(), board.end(), cmp);
	for (int i = 0; i < s; i++) spread();
	
	
	cout << lab[x - 1][y - 1];
}