#include <iostream>
#include <algorithm>
#include <string>
#include <math.h>
#include <vector>

using namespace std;
int n;
long long liq[100001];
long long ans = 1000000000 * 2 + 1;
long long one = 0;
long long two = 0;

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> liq[i];
	}

	sort(liq, liq + n);
	int start = 0;
	int end = n - 1;
	while (start < end) {
		long long mix = liq[start] + liq[end];
		if (llabs(mix) < ans) { 
			ans = llabs(mix);
			one = liq[start]; 
			two = liq[end]; 
		}
		if (mix < 0) start ++;
		else end--;
	}

	cout << one << " " <<two;
}