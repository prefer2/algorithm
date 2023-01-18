#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int n,s;
vector <int> cows;
int cnt = 0;

int main() {
	cin >> n >> s;
	for (int i = 1; i <= n; i++) {
		int c; cin >> c;
		cows.push_back(c);
	}
	sort(cows.begin(), cows.end());

	for (int i = 0; i < n; i++) {
		if (cows[i] < s) {
			for (int j = i + 1; j < n; j++) {
				if (cows[i] + cows[j] <= s) cnt++;
			}
		}
	}

	cout << cnt;

}