#include <iostream>
#include <vector>
using namespace std;

int n, m, k;
long long tree[1000000 * 4 + 1];

void update(int index, long long value) {
	while (index > 0) {
		tree[index] += value;
		index /= 2;
	}
}

long long getSum(int start, int end) {
	long long ans = 0;
	while (start <= end) {
		if (start % 2 == 1) {
			ans += tree[start];
		}
		if (end % 2 == 0) {
			ans += tree[end];
		}

		start = (start + 1) / 2;
		end = (end - 1) / 2;
	}

	return ans;
}


int main() {
	cin >> n >> m >> k;

	int startIndex = 1;
	while (startIndex < n) startIndex *= 2;

	for (int i = 0; i < n; i++) {
		cin >> tree[startIndex + i];
	}

	for (int i = startIndex - 1; i > 0; i--) {
		tree[i] = tree[2 * i] + tree[2 * i + 1];
	}

	for (int i = 0; i < m + k; i++) {
		int a;
		long long b,c;
		cin >> a >> b >> c;
		if (a == 1) {
			update(b + startIndex - 1, c-tree[b + startIndex - 1]);
		}
		else {
			cout << getSum(b + startIndex - 1, c + startIndex - 1) << "\n";
		}
	}

	return 0;
}