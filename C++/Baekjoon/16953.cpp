#include <iostream>
#include <algorithm>
#include <queue>
#include <vector>

using namespace std;
long long a, b;
int ans = 10000;


void find(long long a, long long cnt) {
	if (a >= b) {
		if (a == b) {
			if (cnt < ans) ans = cnt;
		}
		return;
	}

	find(2*a, cnt + 1);
	find(a*10+1, cnt + 1);
	
}

int main() {
	cin >> a >> b;

	find(a, 1);
	if (ans != 10000) cout << ans;
	else cout << -1;
}