#include <iostream>
#include <algorithm>
#include <vector>
#include <queue>
using namespace std;

int n, k;
int bag[300001];
vector <pair <int, int>> jewel;
priority_queue<int> candidate;

bool cmp(int a, int b) {
	return b < a;
}

int main() {
	cin >> n >> k;
	for (int i = 0; i < n; i++) {
		int m,v;
		cin >> m >> v;
		jewel.push_back({ m,v });
	}

	for (int i = 0; i < k; i++) {
		cin >> bag[i];
	}

	sort(jewel.begin(), jewel.end());
	sort(bag, bag + k);

	int idx = 0;
	long long ans = 0;
	for (int i = 0; i < k; i++) {
		while (idx < n && jewel[idx].first <= bag[i] ) {
			candidate.push(jewel[idx].second);
			idx++;
		}

		if (!candidate.empty()) {
			ans += candidate.top();
			candidate.pop();
		}
		
	}

	cout << ans;
}
