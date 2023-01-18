#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int n;
vector <int> arr;
int minSum = 2000000001;
int x, y;

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		int a;
		cin >> a;
		arr.push_back(a);
	}

	sort(arr.begin(), arr.end());
	int i = 0; int j = n - 1;
	while (i<j)
	{
		int a = arr[i];
		int b = arr[j];
		if (abs(a + b) < minSum) {
			minSum = abs(a + b);
			x = a; y = b;
		}

		if (a + b < 0) {
			i++;
		}
		else {
			j--;
		}

	}

	cout << x << " " << y;
}