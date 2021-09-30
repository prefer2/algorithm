#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int N, M;
int memory[101];
int cost[101];
int dp[10001];

int main() {
	cin >> N >> M;

	for (int i = 0; i < N; i++) {
		cin >> memory[i];
	}

	int costSum = 0;
	for (int i = 0; i < N; i++) {
		cin >> cost[i];
		costSum += cost[i];
	}

	for (int i = 0; i < N; i++) {
		for (int j = costSum; j >= cost[i]; j--) {
			dp[j] = max(dp[j], dp[j - cost[i]] + memory[i]);
		}
	}

	for (int i = 0; i <= costSum; i++) {
		if (dp[i] >= M) {
			cout << i;
			return 0;
		}
	}
}