#include <iostream>
#include <string>
#include <map>
#include <queue>
#include <cmath>

using namespace std;

int classRoom[21][21];
int students[401];
map<int, vector<int>> favStudent;
int n;
int dx[4] = { 1,-1,0,0 };
int dy[4] = { 0,0,1,-1 };

bool isFavStudent(int student, int nextStudent) {
	for (int i = 0; i < 4; i++) {
		if (favStudent[student][i] == nextStudent) return true;
	}

	return false;
}

void placeStudent(int student) {
	int maxLikeFriend = 0;
	int maxEmptySpace = 0;
	int tx = 21; int ty = 21;
	for (int x = 0; x < n; x++) {
		for (int y = 0; y < n; y++) {
			if (classRoom[x][y] != 0) continue;

			// 빈자리라면 조건을 검사해 본다
			int likeFreind = 0;
			int emptySpace = 0;
			for (int i = 0; i < 4; i++) {
				int nx = x + dx[i];
				int ny = y + dy[i];
				if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

				// 옆자리가 비어있는지 확인
				if (classRoom[nx][ny] == 0) emptySpace++;

				// 옆자리가 좋아하는 학생인지 확인
				else if (isFavStudent(student, classRoom[nx][ny])) likeFreind++;
			}

			// 조건 1
			if (likeFreind > maxLikeFriend) {
				tx = x;
				ty = y;
				maxLikeFriend = likeFreind;
				maxEmptySpace = emptySpace;
				continue;
			}

			if (likeFreind == maxLikeFriend) {
				// 조건 2
				if (emptySpace > maxEmptySpace) {
					tx = x;
					ty = y;
					maxEmptySpace = emptySpace;
					continue;
				}

				// 조건 3
				if (emptySpace == maxEmptySpace) {
					if (x < tx || (x == tx && y < ty)) {
						tx = x;
						ty = y;
					}
				}
			}
		}
	}

	classRoom[tx][ty] = student;
}

int satisfactScore() {
	int score = 0;
	for (int x = 0; x < n; x++) {
		for (int y = 0; y < n; y++) {
			int cnt = 0;
			for (int i = 0; i < 4; i++) {
				int nx = x + dx[i];
				int ny = y + dy[i];
				if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
				if (isFavStudent(classRoom[x][y], classRoom[nx][ny])) cnt++;
			}
			if (cnt == 4) score += 1000;
			else if (cnt == 3) score += 100;
			else if (cnt == 2) score += 10;
			else if (cnt == 1) score += 1;
		}
	}

	return score;
}

int main() {
	cin >> n;
	for (int i = 0; i < n * n; i++) {
		cin >> students[i];
		vector<int> favStudentGroup;
		for (int j = 1; j <= 4; j++) {
			int s;
			cin >> s;
			favStudentGroup.push_back(s);
		}
		favStudent[students[i]] = favStudentGroup;
	}

	for (int i = 0; i < n * n; i++) {
		placeStudent(students[i]);
	}

	cout << satisfactScore();
}
