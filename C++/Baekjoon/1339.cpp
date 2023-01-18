#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int n;
string s[11];
int alphabet[27];

int solve() {
	for (int i = 0; i < n; i++) {
		int pow = 1;
		for (int j = s[i].length() - 1; j >= 0; j--) {
			int index = s[i][j] - 'A';
			alphabet[index] += pow;
			pow *= 10;
		}
	}

	sort(alphabet, alphabet + 27);
	int answer = 0;
	int num = 9;
	for (int i = 26; i >= 0; i--) {
		if (alphabet[i] == 0) break;
		answer += (alphabet[i] * num);
		num--;
	}

	return answer;
}

int main() {
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> s[i];
	}

	cout << solve();
	return 0;
}