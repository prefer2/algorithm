#include <iostream>
#define MAX 1000000

using namespace std;
int tree[4 * MAX + 2];
int temp = 1;

void update(int idx, int c) {
	while (idx > 0) {
		tree[idx] += c;
		idx /= 2;
	}
}

int getCandy(int b) {
	int idx = 1;
	while (1) {
		if (tree[idx] >= b) {
			// leaf라면
			if (idx >= temp) {
				update(idx, -1);
				return idx - temp + 1;
			}
			idx *= 2;
			continue;
		}
		else {
			// 오른쪽 트리
			b = b - tree[idx];
			idx++;
			continue;
		}
	}
}

int main() {
	ios::sync_with_stdio;
	cin.tie(0);

	int n;
	cin >> n;

	while (temp < MAX) {
		temp *= 2;
	}

	for (int i = 0; i < n; i++) {
		int a, b, c;
		cin >> a >> b;
		if (a == 2) {
			cin >> c;
			update(b+temp-1, c);
		}
		else {
			cout << getCandy(b) << "\n";
		}
	}
}