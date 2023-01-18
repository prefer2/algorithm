#include<iostream>
using namespace std;
int n, m;
int arr[2001];
bool dp[2001][2001];

int main() {
	cin.tie(NULL); cout.tie(NULL); ios_base::sync_with_stdio(false);

	cin >> n;
	for (int i = 1; i <= n; i++) {
		cin >> arr[i];
		dp[i][i] = true;
	}

	for (int s = n-1; s > 0; s--) {
		for (int e = s + 1; e <= n; e++) {
			if (s + 1 == e && arr[s]==arr[e]) {
				dp[s][e] = true;
			}
			else if (dp[s+1][e-1] && arr[s] == arr[e]) {
				dp[s][e] = true;
			}
		}
	}

	cin >> m;
	for (int i = 0; i < m; i++) {
		int s, e;
		cin >> s >> e;
		cout << dp[s][e] << "\n";
	}
}