#include <iostream>
#define MAX 100000

using namespace std;
long long tree[4 * MAX + 2];
int temp = 1;

void update(int idx, long long c) {
	while (idx > 0) {
		tree[idx] += c;
		idx /= 2;
	}
}

long long getSum(int l, int r) {
	long long sum = 0;
	while (l <= r) {
		if (l % 2 == 1) {
			sum += tree[l];
		}
		if (r % 2 == 0) {
			sum += tree[r];
		}

		l = (l + 1) / 2;
		r = (r - 1) / 2;
	}

	return sum;
}

int main() {
	ios::sync_with_stdio;
	cin.tie(0);

	int n, q;
	cin >> n >> q;

	while (temp <= n) {
		temp *= 2;
	}

	for (int i = 0; i < n; i++) {
		cin >> tree[temp + i];
	}

	for (int i = temp-1; i > 0; i--) {
		tree[i] = tree[i * 2] + tree[i * 2 + 1];
	}

	for (int i = 0; i < q; i++) {
		int x, y, a, b;
		cin >> x >> y >> a >> b;
		
		if (x > y) swap(x, y);
		cout<<getSum(x + temp - 1, y + temp - 1)<<"\n";
		update(a + temp - 1, b - tree[a + temp - 1]);

	}
}