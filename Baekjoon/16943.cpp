#include <iostream>
#include <algorithm>
#include <string>
#include <vector>

using namespace std;
int a, b;
int ans = 0;
string A;
bool visited[9];

void find(string s) {
	if (s.size() == A.size() && s[0]!='0') {
		int newNum = stoi(s);
		if (newNum <= b && newNum > ans) {
			ans = newNum;
		}
		return;
	}

	for (int i = 0; i < A.size(); i++) {
		if (!visited[i]) {
			visited[i] = true;
			string old = s;
			s += A[i];
			find(s);
			visited[i] = false;
			s = old;
		}
	}
}

int main() {
	cin >> a >> b;
	A = to_string(a);
	find("");

	if (ans == 0) cout<<-1;
	else cout<<ans;
}