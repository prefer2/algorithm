#include <iostream>
#include <algorithm>
using namespace std;

int n;
int num[100001][3];
int maxDp[3];
int minDp[3];

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < 3; j++) {
			cin >> num[i][j];
		}
	}

	for (int i = 0; i < 3; i++) {
		maxDp[i] = num[0][i];
		minDp[i] = num[0][i];
	}

	for (int i = 1; i < n; i++) {
		int num0 = maxDp[0];
		int num2 = maxDp[2];
		maxDp[0] = max(maxDp[0], maxDp[1]) + num[i][0];
		maxDp[2] = max(maxDp[1], maxDp[2]) + num[i][2];
		maxDp[1] = max(max(num0, num2), maxDp[1]) + num[i][1];
	}

	for (int i = 1; i < n; i++) {
		int num0 = minDp[0];
		int num2 = minDp[2];
		minDp[0] = min(minDp[0], minDp[1]) + num[i][0];
		minDp[2] = min(minDp[1], minDp[2]) + num[i][2];
		minDp[1] = min(min(num0, num2), minDp[1]) + num[i][1];
	}
	cout << max(max(maxDp[0],maxDp[1]),maxDp[2]) << " " << min(min(minDp[0], minDp[1]), minDp[2]);
}