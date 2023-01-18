#include <iostream>
#include <algorithm>
using namespace std;

int N;
long long M;
int tree[1000001];

bool possibleLen(int len) {
	long long sum = 0;

	for (int i = 0; i < N; i++) {
		if (tree[i] <= len)continue;
		sum += (tree[i] - len);
		if (sum >= M) return true;
	}

	return false;
}

int main() {
	cin >> N >> M;
	int s = tree[0];
	int e = 0;

	for (int i = 0; i < N; i++) {
		cin >> tree[i];
		e = max(e, tree[i]);
	}

	int result = 0;

	while (s<=e) {
		int mid = (s + e) / 2;

		if (possibleLen(mid)) {
			result = mid;
			s = mid + 1;
		}
		else {
			e = mid - 1;
		}
	}

	cout << result;
	return 0;
}