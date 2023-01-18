#include <iostream>

using namespace std;
int number[101];
long long dp[101][21];
int n;

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> number[i];
	}

	dp[0][number[0]] = 1;

	for (int i = 1; i < n; i++) {
		for (int j = 0; j <= 20; j++) {
			if (j - number[i] >= 0) {
				dp[i][j] += dp[i - 1][j - number[i]];
			}
			if (j + number[i] <= 20) {
				dp[i][j] += dp[i - 1][j + number[i]];
			}
		}
	}

	cout << dp[n-2][number[n-1]];
}