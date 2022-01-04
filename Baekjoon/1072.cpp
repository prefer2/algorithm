#include <iostream>
#include <algorithm>

#define maxN 1000000000

using namespace std;

long long x, y;

int main() {
	cin >> x >> y;
	int z = y * 100 / x;

	if (z >= 99) {
		cout << -1;
		return 0;
	}
		
	int left = 0;
	int right = maxN;
	int result = 0;

	while (left<=right) {
		int mid = (right + left) / 2;
		int temp = (y + mid) * 100 / (x + mid);
		if (z >= temp) {
			left = mid + 1;
			result = mid + 1;
		}
		else {
			right = mid - 1;
		}
	}

	cout << result;
	return 0;
}