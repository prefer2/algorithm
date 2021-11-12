#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int t, k;
vector<pair<int, int>> coins;
int dp[101][10001]; // [동전 종류 개수][합계]

int main() {
	cin >> t >> k;
	for (int i = 0; i < k; i++) {
		int c, cnt;
		cin >> c >> cnt;
		coins.push_back({ c,cnt });
	}

	sort(coins.begin(), coins.end());
	
	int init = 0;
	for (int i = 0; i <= coins[0].second; i++) {
		dp[0][init] = 1;
		init += coins[0].first;
	}

	for (int i = 1; i < k; i++) {
		for (int j = 0; j <= coins[i].second; j++) {
			for (int x = 0; x <= t; x++) {
				int sum = x + coins[i].first * j;
				if (sum > t) break;
				dp[i][sum] += dp[i - 1][x];
			}
		}
	}

	cout << dp[k-1][t];
}
