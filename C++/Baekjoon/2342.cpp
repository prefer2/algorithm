#include <iostream>
#include <string>
using namespace std;
int arr[100001];
int dp[5][5][100001];
int n = 0;

int cal(int a, int b) {
	if (a == 0 || b == 0) return 2;
	int dif = abs(a - b);
	if (dif == 0) return 1;
	else if (dif == 1 || dif == 3) return 3;
	else if (dif == 2) return 4;
}

int dfs(int left, int right, int idx) {
	if (idx == n) return 0;
	if (dp[left][right][idx] != -1) return dp[left][right][idx];
	int tmpLeft = dfs(arr[idx], right, idx + 1) + cal(arr[idx], left);
	int tmpRight = dfs(left, arr[idx], idx + 1) + cal(arr[idx], right);
	return dp[left][right][idx] = min(tmpLeft, tmpRight);
}


int main() {
	while (1) {
		int a;
		cin >> a;
		if (a == 0) break;
		arr[n] = a;
		n++;
	}

	for (int i = 0; i < 5; i++) {
		for (int j = 0; j < 5; j++) {
			for (int k = 0; k < 100000; k++) {
				dp[i][j][k] = -1;
			}
		}
	}
	cout<<dfs(0, 0, 0);
}