#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int n, m;
int coins[21];
int dp[10001];

void clear() {
	for (int i = 0; i < 10001; i++)dp[i] = 0;
}

void find() {

	dp[0] = 1;
	for (int i = 0; i < n; i++) {
		for (int j = coins[i]; j <= m; j++) {
			dp[j] += dp[j - coins[i]];
		}
	}
}


int main() {
	int t;
	cin >> t;
	for (int i = 0; i < t; i++) {
		cin >> n;
		for (int j = 0; j < n; j++) {
			cin >> coins[j];
		}
		cin >> m;
		clear();
		find();
		cout << dp[m]<<"\n";
	}
}