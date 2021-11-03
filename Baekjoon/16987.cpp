#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

using namespace std;
int n;
int egg[8][2]; //0: 내구도, 1: 무게
int ans = 0;

void dfs(int idx) {
	if (idx >= n) {
		// 깨진 계란들의 개수를 세어줌(음수인 값)
		int cnt = 0;
		for (int i = 0; i < n; i++) {
			if (egg[i][0] <= 0) cnt++;
		}
		if (cnt > ans) ans = cnt;
		return;
	}

	// 이미 깨져있는 계란이라면
	if (egg[idx][0] <= 0) dfs(idx + 1);

	else {
		bool check = false;
		for (int i = 0; i < n; i++) {
			// 자기자신이거나 이미 깨져 있으면 다음값
			if (idx == i || egg[i][0] <= 0) continue;

			// 깰 수 있는 값
			egg[i][0] -= egg[idx][1];
			egg[idx][0] -= egg[i][1];
			check = true;
			dfs(idx + 1);
			egg[i][0] += egg[idx][1];
			egg[idx][0] += egg[i][1];

		}

		// 다 확인했는데 자기 말고 다 깨져있음
		if (!check) dfs(n);
	}
}
int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> egg[i][0] >> egg[i][1];
	}

	dfs(0);
	cout << ans;
}