#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
vector <string> realIp;

void makeFour(string s) {
	while (s.size() < 4) {
		s = '0' + s;
	}
	realIp.push_back(s);
}

int main() {
	string ip;
	cin >> ip;

	string four = "";
	string ans = "";
	int idx = 0;

	for (int i = 0; i < ip.size(); i++) {
		if (ip[i] == ':') {
			if (four.size() == 0) {
				idx = realIp.size();
			}
			else makeFour(four);
			four = "";
		}

		else {
			four += ip[i];
		}
	}

	if (four.size() == 0) {
		idx = realIp.size();
	}
	else makeFour(four);

	if (realIp.size() < 8) {
		int s = realIp.size();
		for (int i = 0; i < 8 - s; i++) {
			realIp.insert(realIp.begin() + idx, "0000");
		}
	}
	for (int i = 0; i < 8; i++) {
		ans += realIp[i];
		if (i != 7) ans += ':';
	}
	cout << ans;
}