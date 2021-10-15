#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>

using namespace std;
long long arr[5001];
long long ans = 3e9 + 1;
int one, two, three;

int main() {
	int n;
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> arr[i];
	}

	sort(arr, arr + n);

	// 1개 고정 2개는 투포인터로 찾기
	for (int i = 0; i < n - 2; i++) {
		int j = i + 1;
		int k = n - 1;
		while (j < k) {
			long long liqSum = arr[i] + arr[j] + arr[k];
			if (llabs(liqSum) < ans) {
				one = i; two = j; three = k;
				ans = llabs(liqSum);
			}

			if (liqSum < 0) j++;
			else k--;
		}
	}

	cout << arr[one] << " " << arr[two] << " " << arr[three];
}